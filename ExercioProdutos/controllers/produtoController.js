const Produto = require("../models/Produto");

module.exports = {
    async index(req, res){
        const posts = await Produto.find().sort({ createdAt: "desc" });
        return res.json(posts)
    },
    async store(req, res){
        const {titulo, desc, preco} = req.body;
        if(!titulo || !desc || !preco){
            return res.json({ msg: "Digita direito" })
        }
        const produto = await Produto.create({titulo, desc, preco})
        return res.json(produto)
    },
    async update(req, res){
        const{ id } = req.params
        const update = await Produto.findByIdAndUpdate(id, req.body, { new:true })
        return res.json(update)
    },
    async destroy(req, res){
        const { id } = req.params
        const destroy = await Produto.findByIdAndDelete(id)
        return res.json({ msg:"Produto deletado" })
    },
}