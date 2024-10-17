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
    console.log(obj[0]);
    let total = 0;
    let output;

    for (let i = 0; i < obj.length; i++) {
        for (let j = 0; j < obj[i].items.length; j++) {

            total += obj[i].items[j].price * obj[i].items[j].quantity;

            output += `
            <tr>
                <td>${obj[i].customer.name}</td>
                <td>${obj[i].customer.email}</td>
                <td>${obj[i].items[j].name} (x${obj[i].items[j].quantity}</td>
                <td>${obj[i].items[j].quantity}</td>
                <td>$${total}</td>
            </tr>
        `;
        }
    }

    document.getElementById('orderTable').innerHTML = output;

}

calculateTotal(ordersJSON);
