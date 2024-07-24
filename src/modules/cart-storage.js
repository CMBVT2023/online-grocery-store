export class CartStorage {
    static getShoppingCart() {
        return (JSON.parse(localStorage.getItem('userCart')) || []);
    }

    static setShoppingCart(array) {
        let list = JSON.stringify(array);

        localStorage.setItem('userCart', list);
    }
}