const mongoose = require('mongoose')
require('dotenv').config()
const Tour = require('./models/tourModel')

const DB =process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)

// kết nối database
mongoose
    .connect(DB)
    .then((con)=>{
        console.log('kết nối thành công')
        // console.log(con.connections)
    })

class Api {
    constructor(query,queryString) {
        this.query=query
        this.queryString=queryString
    }

    filter() {
        this.query.find()
        return this
    }

    sort() {
        this.query.select(this.queryString);
        return this
    }
}

const run =async()=>{
    const createApi = new Api(Tour.find(),'name duration');

    createApi.filter()
    createApi.sort()

    const tour = await createApi.query;

    console.log(tour)

}

run()



// try {
//     const queryObj ={...req.query};
//     const excludeFiels = ['page','sort','limit','fields'];
//     excludeFiels.forEach((item)=> delete queryObj[item])

//     let queryStr = JSON.stringify(queryObj);
//     queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match=>`$${match}`);

//     let query = Tour.find(JSON.parse(queryStr));
    

//     if(req.query.sort) {
//         console.log('thực hiện')
//         query = query.sort(req.query.sort)
//     }

    
//     const tour = await query;

//     res.status(200).json({
//         status:'success',
//         length:tour.length,
//         tour,
//     })
// }
// catch (err) {
//     console.log(err)
//     res.status(404).json({
//         status:'fail',
//         message: err
//     })
// }