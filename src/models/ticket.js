const mongoose=require ('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/flight-check',{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true})

const ap=new mongoose.Schema({

    From:{
        type:String,
        required:true
    },
    To:{
    type:String,
    required:true
    },
    date:{
        type:Date,
        required:true
    },
    
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }

    
} )

ap.pre('save',async function(op){

    const m=this
console.log('apple')
    op()
})


const ticket= mongoose.model('ticket',ap)

module.exports=ticket