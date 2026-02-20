function isGoodString(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Helper function to check if a word is "good"
    const isGoodWord = (word) => {
        const charCount = {};
        for (const char of word) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        // Check if the sum of repetitions is less than the word length
        const totalRepetitions = Object.values(charCount).reduce((sum, count) => sum + count, 0);
        return totalRepetitions < word.length;
    };

    // Filter and return the good words
    return words.filter(isGoodWord);
}

// Example usage
const sentence = "hello world apple banana";
const goodWords = isGoodString(sentence);
console.log("Good words:", goodWords);