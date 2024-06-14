function getInitials(str: string) {
  if (!str || typeof str !== "string") {
    return "";
  }

  const words = str.split(" "); // Split the string into words
  const initials = words.map((word) => {
    const firstTwoLetters = word.slice(0, 2).toUpperCase(); // Get the first two letters
    return firstTwoLetters.padEnd(2, word[0].toUpperCase()); // Pad with uppercase first letter if needed
  });
  return initials.join(""); // Join initials into a single string
}

export { getInitials };
