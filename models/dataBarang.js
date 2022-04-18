const req = require("express/lib/request")

let dataBarang =[{harga:'Rp.50.000-',stock:'100',create: new Date()},
{harga:'Rp.175.000-',stock:'150',create: new Date()},
{harga:'Rp.499.000-',stock:'130',create: new Date()},
{harga:'Rp.459.000-',stock:'120',create: new Date()},
]

module.exports={
    getdataBarang: dataBarang,

    insert :(req)=>{
        const newItem={
            harga:req.body.harga,
            stock:req.body.stock
        }
        dataBarang.push(newItem)
        return newItem
    }
}

