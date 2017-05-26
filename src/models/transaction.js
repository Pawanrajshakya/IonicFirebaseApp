var Transaction = (function () {
    /**
     *
     */
    function Transaction(date, desc, destination, category, quantity, price, mode, source) {
        this.date = new Date();
        this.desc = null;
        this.destination = null;
        this.category = null;
        this.quantity = 0;
        this.price = 0;
        this.mode = null;
        this.source = null;
        this.date = date;
        this.desc = desc;
        this.destination = destination;
        this.category = category;
        this.quantity = quantity;
        this.price = price;
        this.mode = mode;
        this.source = source;
    }
    return Transaction;
}());
export { Transaction };
//# sourceMappingURL=transaction.js.map