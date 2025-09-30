try {
  const { ReadableStream } = require("web-streams-polyfill/ponyfill/es6");
  if (typeof global.ReadableStream === "undefined") {
    global.ReadableStream = ReadableStream;
  }
} catch (e) {
  console.warn("No se pudo cargar el polyfill de ReadableStream:", e.message);
}