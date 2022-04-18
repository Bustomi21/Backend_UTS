const dataBarang = require('../models/dataBarang')
const modeldataBarang= require('../models/dataBarang')
const cari=(arrData,harga)=>{
    find =-1
    indeks =0
    while (find== -1 && indeks < arrData.length) {
        if(arrData[indeks].harga == harga){
            find=indeks
            return indeks
        }
        indeks++
    }
    return -1
}
module.exports={ 
    getdataBarang:(req,res)=>{
        dataBarang= modeldataBarang.getdataBarang(req)
        res.json(dataBarang)
    },
    insert : (req,res)=>{
        newItem= modeldataBarang.insert(req)
        res.status(201).json(newItem)
    },
    getdataBarangByharga: (req,res)=>{
        dataBarang=modeldataBarang.getdataBarang;
        harga= req.params.harga;
        indeks=cari(dataBarang,harga);
        if(indeks!= -1){
            const dataBarang={harga:dataBarang[indeks].harga,
                                stock:dataBarang[indeks].stock        
        }
        res.json(dataBarang)
    }
    else{
        res.send('harga dengan Rp.200.000'+harga+ 'tidak ditemukan')
    }

    res.send('data dengan harga:'+req.params.harga)

},

update:(req,res)=>{
    // update
    dataBarang=modeldataBarang.getdataBarang;
    harga=req.params.harga;
    indeks=cari(dataBarang,harga);
    if(indeks!= -1){
        dataBarang[indeks].harga=harga
        dataBarang[indeks].stock=req.body.stock

        res.json(dataBarang[indeks])
    }
    else{
        res.send('data dengan harga '+ req.params.harga + 'tidak ditemukan')
    }
},
delete : (req,res)=>{
    harga=req.params.harga;
    dataBarang=modeldataBarang.getdataBarang;
    indeks=cari(dataBarang,harga);

    if (indeks !=-1){
        dataBarang.splice(indeks,2)

        res.send('data dengan harga '+ harga+ 'telah dihapus')
    }
    else{
        res.send('data dengan harga '+ req.params.harga+'tidak ditemukan')
    }
}
}