function toCase(text) {
  // Check if the input string is empty
  if (!text) {
    return '-';
  }

  // Convert the string to lowercase and uppercase
  const lowercaseText = text.toLowerCase();
  const uppercaseText = text.toUpperCase();

  // Concatenate the strings with '-' as the delimiter
  const result = `${lowercaseText}-${uppercaseText}`;

  return result;
}

// Get user input using prompt
const text = prompt("Enter text:");

// Display the result using alert
alert(toCase(text));
