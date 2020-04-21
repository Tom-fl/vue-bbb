const app = new Vue({
    el: '#app',
    data: {
        books: [{
            id: 1,
            name: '<嗯嗯嗯>',
            date: '2001-1-1',
            price: 30.00,
            count: 1
        }, {
            id: 2,
            name: '<哈哈哈>',
            date: '2002-2-2',
            price: 40.00,
            count: 1
        }, {
            id: 3,
            name: '<嘻嘻嘻>',
            date: '2003-3-3',
            price: 50.00,
            count: 1
        }, {
            id: 4,
            name: '<嘿嘿嘿>',
            date: '2004-4-4',
            price: 50.00,
            count: 1
        }, {
            id: 5,
            name: '<哦哦哦>',
            date: '2005-5-5',
            price: 60.00,
            count: 1
        }, ]
    },
    methods: {
        // getFinalPrice(price) {
        //     return '￥' + price.toFixed(2)
        // }

        increment(index) {
            // console.log('increment', index); 
            this.books[index].count++
        },
        decrement(index) {
            // console.log('decrement', index);
            this.books[index].count--
        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totaPrice() {
            // 1. 普通的for循环
            // let totaPrice = 0;
            // for (let i = 0; i < this.books.length; i++) {
            //     totaPrice += this.books[i].price * this.books[i].count
            // }

            // 2. for(let i in this.books)
            // let totaPrice = 0;
            // for (let i in this.books) {
            //     const book = this.books[i]
            //     totaPrice += book.price * book.count
            // }

            // 3.for(let i of this.books)
            // let totaPrice = 0;
            // for (let i of this.books) {
            //     totaPrice += i.price * i.count
            // }

            // reduce 
            return this.books.reduce(function(preValue, book) {
                return preValue + book.price * book.count
            }, 0)
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }
})