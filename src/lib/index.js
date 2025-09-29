// place files you want to import through the `$lib` alias in this folder.

export function parseMillisToDate(millisString) {
  // Converto la stringa in numero
  const millis = Number(millisString);

  // Creo un oggetto Date
  const date = new Date(millis);

  // Estraggo data e ora formattate
  return {
    data: date.toLocaleDateString("it-IT"), // es: "29/09/2025"
    ora: date.toLocaleTimeString("it-IT")   // es: "14:35:07"
  };
}