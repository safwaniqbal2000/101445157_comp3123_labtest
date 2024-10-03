// Create a promise that resolves after 500ms with a success message
const resolvedPromise = () => 
    new Promise(resolve => setTimeout(() => resolve({ message: 'delayed success!' }), 500));

// Create a promise that rejects after 500ms with an error message
const rejectedPromise = () => 
    new Promise((_, reject) => setTimeout(() => reject({ error: 'delayed exception!' }), 500));

// Use async/await to handle the promises
async function handlePromises() {
    try {
        const result = await resolvedPromise(); // Wait for the resolved promise
        console.log(result);                    // Log the result if resolved
    } catch (error) {
        console.log(error);                     // Log the error if rejected
    }

    try {
        const result = await rejectedPromise(); // Wait for the rejected promise
        console.log(result);                    // Log the result if resolved
    } catch (error) {
        console.log(error);                     // Log the error if rejected
    }
}

// Call the async function to handle the promises
handlePromises();
