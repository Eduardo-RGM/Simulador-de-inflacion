import { calcularConversion, obtenerTasa } from "./model.js";
import { view } from "./view.js";

view.onConvertir(convertirMoneda);
view.onIntercambiar(intercambiarMonedas);

async function convertirMoneda() {
  const datosFormulario = view.obtenerDatosFormulario();

  if (!Number.isFinite(datosFormulario.cantidad) || datosFormulario.cantidad <= 0) {
    view.mostrarError("Escribe una cantidad mayor que cero.");
    return;
  }

  view.mostrarCarga();

  try {
    const datosTasa = await obtenerTasa(
      datosFormulario.monedaOrigen,
      datosFormulario.monedaDestino
    );

    view.mostrarResultado({
      ...datosFormulario,
      conversion: calcularConversion(datosFormulario.cantidad, datosTasa.rate),
      tasa: datosTasa.rate,
      fecha: datosTasa.date
    });
  } catch (error) {
    console.error("Error al convertir la moneda:", error);
    view.mostrarError("No fue posible obtener la tasa de cambio. Inténtalo de nuevo.");
  }
}

function intercambiarMonedas() {
  view.intercambiarMonedas();
  convertirMoneda();
}
