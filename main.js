// Log a prompt to the console asking for user's name
console.log("What's your name?");

// Set up event listener to handle 'data' event from stdin
process.stdin.on('data', function(data) {
    
    // Convert input data to a string and remove any whitespace
    const name = data.toString().trim();
    
    // Log a greeting message to console using input name
    console.log(`Hello, ${name}!`);
});