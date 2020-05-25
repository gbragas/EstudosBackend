const mongoose = require("mongoose")

const ProdutoSchema = mongoose.Schema({
    titulo:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    preco:{
        type: Number,
        required: true,
    },
},
{ timestamps: true }
)


module.exports = mongoose.model("Produto", ProdutoSchema);