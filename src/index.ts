import { v4 as uuidv4 } from "uuid";

class Item{
    constructor(
        private readonly _id: string = uuidv4(),
        private _name: string,
        private _price: number,
        private _description: string,
    ){}

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }
    

}


class User {
    
    constructor(
        private readonly _id: string = uuidv4(),
        private _name: string,
        private _age: number,
        private _cart: Item[],
    ){}
    public get id(): string {
        return this._id;
    }
    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public addToCart(item:Item):void{
        this.cart.push(item)
        console.log(`${item.name} has been added to cart`)
    }

    public removeFromCart(item:Item):void{
        this.cart = this.cart.filter(cartItem => cartItem.id !== item.id)
        console.log(`All ${item.name}(s) have been removed`)
    }

    public removeQuantityFromCart(item:Item, quantity:number):void{
        for (let i=0; i < quantity; i++){
            let indexOfItem = this.cart.findIndex(cartItem => cartItem.id == item.id)
            this.cart.splice(indexOfItem, 1);
        }
        console.log(`${quantity} ${item.name}(s) have been removed from cart`)
    }

    public cartTotal():number{
        let tot = 0;
        for (let item of this.cart){
            tot += item.price
        }
        return tot   // RETURNS was in all caps so figured i would include the console log one in print cart
    }

    public printCart():void{
        console.log(`Items in cart:`);
        for (let item of this.cart) {
            console.log(`${item.name} -- ${item.price}`)
        }
        console.log(`Total: $${this.cartTotal()}`)
    }

}

class Shop {

    constructor(
        private _items: Item[] = [],
    ){
        this._items.push(new Item(uuidv4(), 'Golf Ball Sleeve', 15, 'ProV-1 or ProV-1X'))
        this._items.push(new Item(uuidv4(), 'TaylorMade Driver', 650, 'The newest driving technology on the planet'))
        this._items.push(new Item(uuidv4(), 'Golf Glove', 25, 'Pro-dry - includes ball marker magnet'))
        this._items.push(new Item(uuidv4(), 'Electric Push Cart', 1500, 'Never carry your bag again(as long as you bring your remote)'))
    }

    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }
}

let golfShop = new Shop()
let tigerWoods = new User(uuidv4(), 'Tiger', 48, [])
tigerWoods.addToCart(golfShop.items[0])
tigerWoods.addToCart(golfShop.items[0])
tigerWoods.addToCart(golfShop.items[1])
tigerWoods.addToCart(golfShop.items[1])
tigerWoods.addToCart(golfShop.items[2])
tigerWoods.addToCart(golfShop.items[2])
tigerWoods.addToCart(golfShop.items[2])
tigerWoods.addToCart(golfShop.items[3])
tigerWoods.addToCart(golfShop.items[3])
tigerWoods.printCart()
tigerWoods.removeFromCart(golfShop.items[2])
tigerWoods.printCart()
tigerWoods.removeQuantityFromCart(golfShop.items[3], 1)
tigerWoods.printCart()
