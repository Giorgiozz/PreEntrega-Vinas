 
  // Condicional
  function calcularConCondicional(monedaOrigen, divisaDestino, cantidad) {
    let tasaCambio;

    // Tasas de cambio según la moneda de origen
    switch (monedaOrigen) {
      case "USD":
        // Dólar estadounidense
        tasaCambio = (divisaDestino === "EUR") ? 0.93 : ((divisaDestino === "JPY") ? 147 : ((divisaDestino === "MXN") ? 17 : 1));
        break;
      case "EUR":
        // Euro
        tasaCambio = (divisaDestino === "USD") ? 1 : ((divisaDestino === "JPY") ? 159 : ((divisaDestino === "MXN") ? 18 : 0.9));
        break;
      case "JPY":
        // Yen japonés
        tasaCambio = (divisaDestino === "USD") ? 0.0068 : ((divisaDestino === "EUR") ? 0.0063 : ((divisaDestino === "MXN") ? 0.12 : 147));
        break;
      case "MXN":
        // Peso mexicano
        tasaCambio = (divisaDestino === "USD") ? 0.058 : ((divisaDestino === "EUR") ? 0.054 : ((divisaDestino === "JPY") ? 8.60 : 17));
        break;
      default:
        console.log("Moneda de origen no válida.");
        return;
    }

    const resultado = cantidad * tasaCambio;
    console.log(`${cantidad} unidades de ${monedaOrigen} equivalen a ${resultado} ${divisaDestino}.`);
  }

  // Ciclo
  function calcularConCiclo(monedaOrigen, divisaDestino, cantidad) {
    let tasaCambio;

    // Tasas de cambio según la moneda de origen
    switch (monedaOrigen) {
      case "USD":
        // Dólar estadounidense
        tasaCambio = (divisaDestino === "EUR") ? 0.93 : ((divisaDestino === "JPY") ? 147 : ((divisaDestino === "MXN") ? 17 : 1));
        break;
      case "EUR":
        // Euro
        tasaCambio = (divisaDestino === "USD") ? 1 : ((divisaDestino === "JPY") ? 159 : ((divisaDestino === "MXN") ? 18 : 0.9));
        break;
      case "JPY":
        // Yen japonés
        tasaCambio = (divisaDestino === "USD") ? 0.0068 : ((divisaDestino === "EUR") ? 0.0063 : ((divisaDestino === "MXN") ? 0.12 : 147));
        break;
      case "MXN":
        // Peso mexicano
        tasaCambio = (divisaDestino === "USD") ? 0.058 : ((divisaDestino === "EUR") ? 0.054 : ((divisaDestino === "JPY") ? 8.60 : 17));
        break;
      default:
        console.log("Moneda de origen no válida.");
        return;
    }

    const resultados = [];
    for (let i = 1; i <= cantidad; i++) {
      resultados.push(i * tasaCambio);
    }

    console.log(`${cantidad} unidades de ${monedaOrigen} equivalen a:`);
    resultados.forEach((resultado, index) => {
      console.log(`- ${index + 1}: ${resultado} ${divisaDestino}`);
    });
  }

  // Moneda de origen 
  const monedaOrigen = prompt("Selecciona la moneda de origen (USD, EUR, JPY, MXN):").toUpperCase(); // Convertir a mayúsculas para evitar errores de entrada

  if (monedaOrigen === "USD" || monedaOrigen === "EUR" || monedaOrigen === "JPY" || monedaOrigen === "MXN") {
    // Divisa de destino prompt
    const divisaDestino = prompt("Selecciona la divisa de destino (USD, EUR, JPY, MXN):").toUpperCase();

    if (divisaDestino === "USD" || divisaDestino === "EUR" || divisaDestino === "JPY" || divisaDestino === "MXN") {
      const cantidad = parseInt(prompt("Ingresa la cantidad a convertir:"));

      // Llamada a la función con condicional
      calcularConCondicional(monedaOrigen, divisaDestino, cantidad);

      // Llamada a la función con ciclo
      calcularConCiclo(monedaOrigen, divisaDestino, cantidad);
    } else {
      console.log("Divisa de destino no válida.");
    }
  } else {
    console.log("Moneda de origen no válida.");
  }