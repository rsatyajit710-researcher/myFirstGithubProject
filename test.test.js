const assert = require('assert');
const { isGoodString } = require('./test'); // Import the function

describe('isGoodString', () => {
    it('should return good words from a sentence', () => {
        const sentence = "hello world apple banana";
        const result = isGoodString(sentence);
        assert.deepStrictEqual(result, ["world", "banana"]); // Expected good words
    });

    it('should return an empty array if no words are good', () => {
        const sentence = "aaaa bbbb cccc";
        const result = isGoodString(sentence);
        assert.deepStrictEqual(result, []); // No good words
    });

    it('should handle an empty string', () => {
        const sentence = "";
        const result = isGoodString(sentence);
        assert.deepStrictEqual(result, []); // No words in the sentence
    });

    it('should handle a sentence with one word', () => {
        const sentence = "world";
        const result = isGoodString(sentence);
        assert.deepStrictEqual(result, ["world"]); // Single good word
    });

    it('should handle words with mixed case', () => {
        const sentence = "Hello hEllo";
        const result = isGoodString(sentence);
        assert.deepStrictEqual(result, []); // Case-sensitive, no good words
    });

    it('should handle words with special characters', () => {
        const sentence = "he!!o w@rld";
        const result = isGoodString(sentence);
        assert.deepStrictEqual(result, ["w@rld"]); // Special characters are treated as part of the word
    });

    it('should handle words with numbers', () => {
        const sentence = "1234 1122";
        const result = isGoodString(sentence);
        assert.deepStrictEqual(result, ["1234"]); // Numbers are treated as characters
    });
});