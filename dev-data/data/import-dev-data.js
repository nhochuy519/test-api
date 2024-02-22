const fs = require('fs');
const mongoose = require('mongoose');
const Tour = require("../../models/tourModel");



require('dotenv').config({path:'./.env'});

const data = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`,'utf-8'));
console.log(tours)


 mongoose
    .connect(data)
    .then(()=>{
        console.log('Ket noi thanh cong')

    });




const importData = async()=>{
    try {
        await Tour.create(tours)
        console.log('them thanh cong')
        
        
    }catch(err) {
        console.log('them that bai')
    }
    process.exit()
    
}
const deleteData =async()=>{
    try {
        await Tour.deleteMany()
        console.log('xoa thanh cong')
       
    }catch(err) {
        console.log('xoa that bai')
    }
    process.exit()
    
} 
if(process.argv[2]==='--import') {
    importData()
}
else if(process.argv[2]==='--delete') {
    deleteData()
}

  

console.log(process.argv)