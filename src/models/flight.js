const mongoose=require ('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/flight-check',{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true})

const ap=new mongoose.Schema({

    Location:{
        type:String,
        required:true,
        unique:true

    },

    From:[{location:{
        type:String,
        required:true},price:{
            type:Number,
            required:true
        }
    }]
} )

ap.pre('save',async function(op){

    console.log('received here')
    const m=this
    //if(m.isModified(password))
console.log('apple')
    op()
})


const Flight= mongoose.model('Flight',ap)


module.exports=Flight