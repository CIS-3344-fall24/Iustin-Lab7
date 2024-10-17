function RandomDelay(min, max) {
    return Math.random() * (max - min) + min;
}

const randomNumber = RandomDelay(3000, 9000);

function paymentReceived() {
    return new Promise((resolve, reject) => {
        console.log("Promise Created: Pending State");

        let success = true;
        const delay = RandomDelay();

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
        const delay = RandomDelay();

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
        const delay = RandomDelay();

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

async function payments() {
    try {
        let received = await paymentReceived();
        console.log(received);

        let process = await paymentProcessing();
        console.log(process);

        let successful = await paymentSuccessful();
        console.log(successful);
    } catch (error) {
        console.log(error);
    }
}

