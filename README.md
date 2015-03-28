# nodecart
A simple node cart service

This is still in early days of development so the API is constantly changing.

# Features
- Add item to cart
- Update item in cart
- Remove item from cart
- Empty cart
- Retrieve cart items/quote
- Calculate totals

# Usage

    var NodeCart = require('nodecart');
    var nodeCart = new NodeCart({
            port: 5678
        });
