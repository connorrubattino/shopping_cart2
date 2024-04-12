"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(_id = (0, uuid_1.v4)(), _name, _price, _description) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this._description = _description;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
}
class User {
    constructor(_id = (0, uuid_1.v4)(), _name, _age, _cart) {
        this._id = _id;
        this._name = _name;
        this._age = _age;
        this._cart = _cart;
    }
    get id() {
        return this._id;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    addToCart(item) {
        this.cart.push(item);
        console.log(`${item.name} has been added to cart`);
    }
    removeFromCart(item) {
        this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
        console.log(`All ${item.name}(s) have been removed`);
    }
    removeQuantityFromCart(item, quantity) {
        for (let i = 0; i < quantity; i++) {
            let indexOfItem = this.cart.findIndex(cartItem => cartItem.id == item.id);
            this.cart.splice(indexOfItem, 1);
        }
        console.log(`${quantity} ${item.name}(s) have been removed from cart`);
    }
    cartTotal() {
        let tot = 0;
        for (let item of this.cart) {
            tot += item.price;
        }
        return tot; // RETURNS was in all caps so figured i would include the console log one in print cart
    }
    printCart() {
        console.log(`Items in cart:`);
        for (let item of this.cart) {
            console.log(`${item.name} -- ${item.price}`);
        }
        console.log(`Total: $${this.cartTotal()}`);
    }
}
class Shop {
    constructor(_items = []) {
        this._items = _items;
        this._items.push(new Item((0, uuid_1.v4)(), 'Golf Ball Sleeve', 15, 'ProV-1 or ProV-1X'));
        this._items.push(new Item((0, uuid_1.v4)(), 'TaylorMade Driver', 650, 'The newest driving technology on the planet'));
        this._items.push(new Item((0, uuid_1.v4)(), 'Golf Glove', 25, 'Pro-dry - includes ball marker magnet'));
        this._items.push(new Item((0, uuid_1.v4)(), 'Electric Push Cart', 1500, 'Never carry your bag again(as long as you bring your remote)'));
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
}
let golfShop = new Shop();
let tigerWoods = new User((0, uuid_1.v4)(), 'Tiger', 48, []);
tigerWoods.addToCart(golfShop.items[0]);
tigerWoods.addToCart(golfShop.items[0]);
tigerWoods.addToCart(golfShop.items[1]);
tigerWoods.addToCart(golfShop.items[1]);
tigerWoods.addToCart(golfShop.items[2]);
tigerWoods.addToCart(golfShop.items[2]);
tigerWoods.addToCart(golfShop.items[2]);
tigerWoods.addToCart(golfShop.items[3]);
tigerWoods.addToCart(golfShop.items[3]);
tigerWoods.printCart();
tigerWoods.removeFromCart(golfShop.items[2]);
tigerWoods.printCart();
tigerWoods.removeQuantityFromCart(golfShop.items[3], 1);
tigerWoods.printCart();
