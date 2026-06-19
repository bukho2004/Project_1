console.log("Hello, World!");
// Example Node.js code with validation and error handling
try {
  function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments must be numbers.");
    }
    return a + b;
  }

  const result = add(5, 7);
  console.log("Sum:", result);
} catch (err) {
  console.error("Runtime error:", err.message);
}
