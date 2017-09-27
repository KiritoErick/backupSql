var express =  require('express')
var app     =  express()
var port    =  process.env.PORT || 3000
var fs      =  require('fs')
/* const mes = {
    1:  'enero',
    2:  'febrero',
    3:  'marzo',
    4:  'abril',
    5:  'mayo',
    6:  'junio',
    7:  'julio',
    8:  'agosto',
    9:  'septiembre',
    10: 'octubre',
    11: 'noviembre',
    12: 'diciembre',
} */

var path = {path:'backup'}
/* var date =  new Date() */

fs.readdir(path.path,(err, files)=>{
    if(err){
        console.log(err)
    }else{
        console.log() 
        if(files.length > 7){
            /* date.getMonth() */
            /* date.getDate() */
            /* date.getFullYear() */
            var listfile = fs.readdirSync(path.path)
            fs.unlink(path.path+'/'+listfile[0],(err)=>{
                if(err){
                    console.log(err)
                }
                console.log('Archivo borrado')
            } )
            fs.watch( path.path, (evnt, filename)=>{
                if(filename != null){
                    console.log(filename + ' fue ' + evnt)
                    
                }
            })
            console.log('hoal') 
        }
        for(let item of files){
            console.log(item)
        }
        
        console.log()
        
    }
})

app.listen(port,()=>{
    console.log('Server Online')
})


//clave 98