function getRandomDelay(min, max) {
    return Math.random() * (max - min) + min;
}

const randomNumber = getRandomDelay(3000, 9000);

function paymentReceived() {
    return new Promise((resolve, reject) => {
        console.log("Promise Created: Pending State");

        let success = true;
        const delay = getRandomDelay();

        setTimeout(() => {
            if (success) {
                console.log("Resolving Promise");
                resolve("Payment Received!");
            } else {
                console.log("Rejecting Promise");
                reject("Payment Not Received!");
            }
        }, delay);
    });
}


function paymentProcessing() {
    return new Promise((resolve, reject) => {
        console.log("Promise Created: Pending State");

        let success = false;
        const delay = getRandomDelay();

        setTimeout(() => {
            if (success) {
                console.log("Resolving Promise");
                resolve("Payment Processing!");
            } else {
                console.log("Rejecting Promise");
                reject("Payment Not Processing!");
            }
        }, delay);
    });
}


function paymentSuccessful() {
    return new Promise((resolve, reject) => {
        console.log("Promise Created: Pending State");

        let success = true;
        const delay = getRandomDelay();

        setTimeout(() => {
            if (success) {
                console.log("Resolving Promise");
                resolve("Payment Successful!");
            } else {
                console.log("Rejecting Promise");
                reject("Payment Not Successful!");
            }
        }, delay);
    });
}

paymentReceived()
    .then(() => paymentProcessing())
    .then(() => paymentSuccessful())
    .then(() => {
        console.log("All payment steps completed successfully.");
    })
    .catch((error) => {
        console.error(error); 
    });