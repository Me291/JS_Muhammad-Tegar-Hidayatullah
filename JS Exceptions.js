try {
    let result = someUndefinedFunction(); // Will cause an error
} catch (error) {
    console.log("Error: " + error.message); // Output: Error: someUndefinedFunction is not defined
}
