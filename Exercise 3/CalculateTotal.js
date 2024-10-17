// JSON file
const ordersJSON = `[
    {
        "customer": {
            "name": "Jane Doe",
            "email": "jane.doe@example.com"
        },
        "items": [
            { "name": "Laptop", "price": 1200, "quantity": 1 },
            { "name": "Mouse", "price": 50, "quantity": 2 }
        ],
        "payment": {
            "method": "Credit Card",
            "status": "Paid"
        }
    },
    {
        "customer": {
            "name": "John Smith",
            "email": "john.smith@example.com"
        },
        "items": [
            { "name": "Monitor", "price": 300, "quantity": 1 },
            { "name": "Keyboard", "price": 100, "quantity": 1 }
        ],
        "payment": {
            "method": "PayPal",
            "status": "Paid"
        }
    }
]`;

function calculateTotal(orderJSON) {
    const obj = JSON.parse(orderJSON);
    let total = 0;
    let output;
    
    for (let i = 0; i < obj.items.length; i++) {
        output +=
            total += obj.items[i].price * obj.items[i].quantity;
    }

    document.getElementById("orderTotal").innerHTML = output;
}
