function firstNonRepeatedChar(str) {
    const charCount = {};

    // Count the occurrences of each character in the string
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);

if (result !== null) {
    alert("First non-repeated character: " + result);
} else {
    alert("null");
}


