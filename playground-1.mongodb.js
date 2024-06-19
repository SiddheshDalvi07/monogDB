//create database

use("blog");


//create collection


db.createCollection('posts');

use("blog");
db.posts.insertOne({
    title: "My First Post",
    body: "body of post",
    category: "news",
    likes: 1,
    tag: ["news", "events"],
    date: Date()
});

use("blog");
db.posts.findOne();

use("blog");
db.posts.find({ category: "travel" });

use("blog");
db.posts.insertMany([
    {
        title: "My Second Post",
        body: "body of post",
        category: "travel",
        likes: 2,
        tag: ["travel", "adventure"],
        date: Date()
    },
    {
        title: "My Third Post",
        body: "body of post",
        category: "news",
        likes: 3,
        tag: ["news", "events"],
        date: Date()
    },
    {
        title: "My Fourth Post",
        body: "body of post",
        category: "travel",
        likes: 4,
        tag: ["travel", "adventure"],
        date: Date()
    }

])

use("blog");
db.posts.find();

use("blog");
db.posts.findOne();


use("blog");
db.createCollection("products");

// insert query

use("blog");
db.posts.insertOne({
    title: "My First Post",
    body: "body of post",
    category: "news",
    likes: 1,
    tag: ["news", "events"],
    date: Date()
});

use("blog");
db.products.insertMany([
    {
        "_id": 1,
        "name": "Product 1",
        "price": 10.99,
        "description": "this is product 1"
    },
    {
        "_id": 2,
        "name": "Product 2",
        "price": 12.00,
        "description": "this is product 2"
    },
    {
        "_id": 3,
        "name": "Product 3",
        "price": 15.00,
        "description": "this is product 3"
    }

])

use("blog");
db.products.find({ price: 15 });


// projection and query select find

use("blog");
db.products.find({}, {
    name: 1,
    price: 1
})


use("blog");
db.products.find({ _id: 1 }, {
    price: 0
})

use("blog");
db.createCollection("prod");

db.prod.insertMany([

    { "_id": 1, "name": "xPhone", "price": 799, "releaseDate": ISODate("2011-05-14"), "spec": { "ram": 4, "screen": 6.5, "cpu": 2.66 }, "color": ["white", "black"], "storage": [64, 128, 256], "inventory": [{ qty: 1200, "warehouse": "San Jose" }] },

    { "_id": 2, "name": "xTablet", "price": 899, "releaseDate": ISODate("2011-09-01"), "spec": { "ram": 16, "screen": 9.5, "cpu": 3.66 }, "color": ["white", "black", "purple"], "storage": [128, 256, 512], "inventory": [{ qty: 300, "warehouse": "San Francisco" }] },

    { "_id": 3, "name": "SmartTablet", "price": 899, "releaseDate": ISODate("2015-01-14"), "spec": { "ram": 12, "screen": 9.7, "cpu": 3.66 }, "color": ["blue"], "storage": [16, 64, 128], "inventory": [{ qty: 400, "warehouse": "San Jose" }, { qty: 200, "warehouse": "San Francisco" }] },

    { "_id": 4, "name": "SmartPad", "price": 699, "releaseDate": ISODate("2020-05-14"), "spec": { "ram": 8, "screen": 9.7, "cpu": 1.66 }, "color": ["white", "orange", "gold", "gray"], "storage": [128, 256, 1024], "inventory": [{ qty: 1200, "warehouse": "San Mateo" }] },

    { "_id": 5, "name": "SmartPhone", "price": 599, "releaseDate": ISODate("2022-09-14"), "spec": { "ram": 4, "screen": 5.7, "cpu": 1.66 }, "color": ["white", "orange", "gold", "gray"], "storage": [128, 256] }

]);



use("blog");
db.prod.find({}, {
    name: 1,
    price: 1,
    "spec.screen": 1
})


use("blog");
db.prod.find({ _id: 1 }, {
    name: 1,
    price: 1,
    spec: { screen: 1, ram: 1 }

})


use("blog");
db.prod.find({}, {

    name: 1,

    "inventory.qty": 1

});

// update

use("blog");
db.products.updateOne(
    { name: "Product 1" },
    {
        $set: { name: "apple", price: 15000 },
        $currentDate: { lastModified: true }
    }
)


use("blog");
db.products.findOne();


use("blog");
db.products.updateMany(
    { price: { $gte: 10000 } }, //filter whereclause
    {
        $set: { price: 20000 } //update
    }
)


use("blog");
db.products.find();


use("blog");
db.products.updateMany([
    { price: 10, price: 15 }, //filter whereclause
    {
        $set: { price: 20000 } //update
    }
])

use("blog");
db.products.find();

// replace commands

use("blog");
db.products.replaceOne(
    { "name": "Product 2" },
    { "name": "Central Pork Cafe", "Borough": "Manhattan" }

);

use("blog");
db.products.replaceOne(
    { "name": "Product 3" },
    { "name": "Pizza Rat's Pizzaria", "Borough": "Manhattan", "violations": 8 },
    { upsert: true }
);

use("blog");
db.products.find();

// delete and drop commands

use("blog");
db.products.deleteOne({ _id: 2 })

use("blog");
db.products.find();


use("blog");
db.products.insertMany([{ _id: 2, name: "siddhesh", place: "mumbai" }, { _id: 4, name: "selvi", place: "pune" }, { _id: 5, name: "sidi", place: "pune" }, { _id: 6, name: "sarversh", place: "mumbai" }])

use("blog");
db.products.find();

use("blog");
db.products.deleteMany({ place: "pune" });

use("blog");
db.products.find();

use("blog");
db.createCollection("sid");
db.sid.insertOne({ name: "sid", place: "mumbai" });


use("blog");
db.sid.find();


use("blog");
db.products.remove({ place: "mumbai" });

use("blog");
db.sid.drop();

use("sid");
db.createCollection("sid");
db.sid.insertOne({ name: "sid", place: "mumbai" });

use("sid");
db.dropDatabase();



// aggegration operator


use("blog");
db.prod.find().limit(2);

use("blog");
db.prod.find().skip(2);

use("blog");
db.prod.aggregate({
    $limit: 2
})

use("blog");
db.prod.aggregate({
    $skip: 2
})

use("blog");
db.prod.aggregate({
    $group: {
        _id: '$name',
        totalquantity: {
            $sum: '$price'
        }
    }
});


use("blog");
db.prod.aggregate({
    $match: { name: "SmartPad" }
},
    {
        $group: {
            _id: '$name',
            totalquantity: {
                $sum: '$price'
            },
            count: {
                $count: {}
            }
        }
    }
)

use("blog");
db.prod.find().count();


use("blog");
db.prod.find().sort({ price: 1 });  //ascending order

use("blog");
db.prod.find().sort({ price: -1 });  //descending order

use("blog");
db.prod.aggregate(
    {
        $match: {}
    },
    {
        $group: {
            _id: "$spec.ram",
            count: {
                $count: {}
            },
            price: {
                $sum: "$price"
            },
        }
    }
)

use("blog");
db.prod.find();

use("blog");
db.prod.aggregate([
    //stage 1 : filter xTablet
    {
        $match:{
            name:'xTablet'
        }
    },
    //stage 2 : group by totalprice $sum
    {
        $group:{
            _id:"$name",
            totalprice:{
                $sum:"$price"
            }
        }
    }
]);

