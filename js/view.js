const cantidadInput = document.querySelector("#cantidad");
const origenSelect = document.querySelector("#origen");
const destinoSelect = document.querySelector("#destino");
const convertirButton = document.querySelector("#convertir");
const intercambiarButton = document.querySelector("#intercambiar");
const resultadoSection = document.querySelector("#resultado");
const resultadoTexto = document.querySelector("#resultadoTexto");
const detalleTasa = document.querySelector("#detalleTasa");

export const view = {
  obtenerDatosFormulario() {
    return {
      cantidad: Number(cantidadInput.value),
      monedaOrigen: origenSelect.value,
      monedaDestino: destinoSelect.value
    };
  },

  intercambiarMonedas() {
    const monedaOrigen = origenSelect.value;
    origenSelect.value = destinoSelect.value;
    destinoSelect.value = monedaOrigen;
  },

  onConvertir(handler) {
    convertirButton.addEventListener("click", handler);
    cantidadInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handler();
      }
    });
  },

  onIntercambiar(handler) {
    intercambiarButton.addEventListener("click", handler);
  },

  mostrarCarga() {
    convertirButton.disabled = true;
    convertirButton.textContent = "Consultando...";
    resultadoSection.classList.remove("error");
    resultadoTexto.textContent = "Consultando la tasa actual...";
    detalleTasa.textContent = "Esperando respuesta de Frankfurter.";
  },

  mostrarResultado({ cantidad, monedaOrigen, monedaDestino, conversion, tasa, fecha }) {
    resultadoSection.classList.remove("error");
    resultadoTexto.textContent = `${cantidad.toFixed(2)} ${monedaOrigen} = ${conversion.toFixed(2)} ${monedaDestino}`;
    detalleTasa.textContent = `1 ${monedaOrigen} = ${tasa} ${monedaDestino} · ${fecha}`;
    finalizarCarga();
  },

  mostrarError(mensaje) {
    resultadoSection.classList.add("error");
    resultadoTexto.textContent = mensaje;
    detalleTasa.textContent = "Revisa los datos e inténtalo nuevamente.";
    finalizarCarga();
  }
};

function finalizarCarga() {
  convertirButton.disabled = false;
  convertirButton.textContent = "Convertir";
}
