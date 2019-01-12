process.env.NODE_ENV = 'test';
const db = require('../model/connection').getInstance();
let Product = require('../model/product');
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();
chai.use(chaiHttp);

//Our parent block
describe('Products', () => {
    beforeEach((done) => {
        Product.sync({ force: true }).then(() => {
            Product.bulkCreate([
                { product_id: 1, name: 'product 1', price: 25000, description: 'desc of product 1', image_link: '' },
                { product_id: 2, name: 'product 2', price: 25000, description: 'desc of product 2', image_link: '' }
            ]);
            done();
        });
    });

    afterEach((done) => {
        db.drop();
        done();
    });

    /*
      * Test the /GET route
      */
    describe('/GET product', () => {
        it('it should GET all the products', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {                    
                    res.should.have.status(200);
                    res.body.should.be.a('Object');
                    res.body.data.length.should.be.eql(2);
                    done();
                });
        });
    });

});