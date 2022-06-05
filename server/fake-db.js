const Product = require("./model/product");

class FakeDb {
    constructor(){
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 700,
                description: 'A large phone with one of the best screens',
                heading1: 'Phone XL Heading1',
                heading2: 'Phone XL Heading2',
                heading3: 'Phone XL Heading3',
                headingtext1: 'Phone XL Details1',
                headingtext2: 'Phone XL Details2', 
                headingtext3: 'Phone XL Details3'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 600,
                description: 'A great phone with one of the best cameras',
                heading1: 'Phone Mini Heading1',
                heading2: 'Phone Mini Heading2',
                heading3: 'Phone Mini Heading3',
                headingtext1: 'Phone Mini Details1',
                headingtext2: 'Phone Mini Details2', 
                headingtext3: 'Phone Mini Details3'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 300,
                description: '',
                heading1: 'Phone Standard Heading1',
                heading2: 'Phone Standard Heading2',
                heading3: 'Phone Standard Heading3',
                headingtext1: 'Phone Standard Details1',
                headingtext2: 'Phone Standard Details2', 
                headingtext3: 'Phone Standard Details3'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 900,
                description: '',
                heading1: 'Phone Special Heading1',
                heading2: 'Phone Special Heading2',
                heading3: 'Phone Special Heading3',
                headingtext1: 'Phone Special Details1',
                headingtext2: 'Phone Special Details2', 
                headingtext3: 'Phone Special Details3'
            }            
        ]
    }

    async initDb(){
        await this.cleanDb();
        this.pushProductsToDb();
    }

    async cleanDb() {
        await Product.deleteMany({});
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product);
                newProduct.save();
        });
    }

    seeDb() {
        this.pushProductsToDb();
    }
}

module.exports = FakeDb