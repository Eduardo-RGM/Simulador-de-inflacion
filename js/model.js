const API_BASE_URL = "https://api.frankfurter.dev/v2";

export async function obtenerTasa(monedaOrigen, monedaDestino) {
  if (monedaOrigen === monedaDestino) {
    return { rate: 1, date: "sin conversión" };
  }

  const url = `${API_BASE_URL}/rate/${encodeURIComponent(monedaOrigen)}/${encodeURIComponent(monedaDestino)}`;
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(`La API respondió con el estado ${respuesta.status}.`);
  }

  const datos = await respuesta.json();

  if (!Number.isFinite(datos.rate)) {
    throw new Error("La respuesta de la API no contiene una tasa válida.");
  }

  return datos;
}

export function calcularConversion(cantidad, tasa) {
  return cantidad * tasa;
}
