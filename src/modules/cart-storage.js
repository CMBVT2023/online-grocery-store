import Inventory from './store-inventory.js';

export class CartStorage {
    static getShoppingCart() {
        return (JSON.parse(localStorage.getItem('userCart')) || []);
    }

    static setShoppingCart(array) {
        let list = JSON.stringify(array);

        localStorage.setItem('userCart', list);
    }

    static addToCart(productID) {
        let i = 0;
        while (productID !== Inventory[i].inventoryNum) {
            i++;
        }
        
        let list = this.getShoppingCart();

        if (list.indexOf(Inventory[i]) === -1) {
            list.push(Inventory[i]);
        }

        this.setShoppingCart(list);
    }

    static removeFromCart(productID) {

    }
}