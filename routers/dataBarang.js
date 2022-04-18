const express=require("express");
const routerdataBarang= express.Router()
const controllersdataBarang=require('controllers/dataBarang');
const { get } = require("express/lib/request");

routerdataBarang.route('/barang')
.get(controllersdataBarang.getdataBarang)

.post(controllersdataBarang.insert)

routerdataBarang.route('/barang/:harga')
.put(controllersdataBarang.update)
.delete(controllersdataBarang.delete)
.get(controllersdataBarang.getdataBarangByHarga)

routerdataBarang.get('/barang/:harga/:stock',(req,res)=>{
    const harga= req.params.harga
    const stock= req.params.stock
    res.send('barang dengan harga:' +harga+ 'stock' +stock)
})

export default Router;
