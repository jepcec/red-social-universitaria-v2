
const userService = require('../services/userService')

exports.create = async(req,res)=>{
    try{
        
        const data = req.body;
        const user = await userService.Create(data);
        res.status(201).json(user);
    } catch(err){
        res.status(400).json({error: 'Error al crear usuario'});
    }
}
exports.update = async(req,res)=>{
    try{
        const {id, ...data} = req.body;
        const user = await userService.Update(id,data);
        if(!user) res.status(404).json({error: 'No encontrado'});
        res.status(200).json(user);
    } catch(err){
        res.status(400).json({error: 'Error al actualizar usuario'});
    }
}
exports.delete = async(req,res)=>{
    try{
        const {id}= req.body;
        const user = await userService.Create(id);
        if(!user) res.status(404).json({error: 'No encontrado'});
        res.status(200).json(user);
    } catch(err){
        res.status(400).json({error: 'Error al eliminar usuario'});
    }
}
exports.get = async(req,res)=>{
    try{
        const {id} = req.body;    
        const user = await userService.Get(id);
        if(!user) res.status(404).json({error: 'No encontrado'});
        res.status(200).json(user);
    } catch(err){
        res.status(400).json({error: 'Error al obtener usuario'});
    }
}
exports.getAll = async(req,res)=>{
    try{    
        const user = await userService.GetAll();
        res.status(200).json(user);
    } catch(err){
        res.status(400).json({error: 'Error al obtener usuarios'});
    }
}

