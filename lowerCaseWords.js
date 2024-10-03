const lowerCaseWords = async (mixedArray) => {
    // Filter out non-string elements and convert the strings to lowercase
    const result = mixedArray
        .filter(item => typeof item === 'string')
        .map(word => word.toLowerCase());

    return result; // Return the result (no need for a promise since async functions return promises)
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

// Using async/await to handle the result
(async () => {
    try {
        const result = await lowerCaseWords(mixedArray);  // Await the result of lowerCaseWords
        console.log(result); // Output: ['pizza', 'wings']
    } catch (error) {
        console.error(error);  // Handle any potential errors
    }
})();
