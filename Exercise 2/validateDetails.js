const user = {name: 'Iustin', age: 4, email: 'iustinherciu123@gmail.com'}

/**
 * Function -> validate details such as name, age, email.
 *
 * @param user
 * @returns {string}
 */
function validateDetails(user) {
    // use nested if statements so that each detail is independent
    if (!user.name || user.name.trim() === "") {
        throw new Error("Name cannot be empty.");
    }
    if (user.age < 18) {
        throw new Error("Age is below 18.");
    }
    if (!user.email.includes("@")) {
        throw new Error("Email must include the '@' symbol.");
    }
    return "Valid details";
}

try {
    const result = validateDetails(user);
    console.log(result);
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
