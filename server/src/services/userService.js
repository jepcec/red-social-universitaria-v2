const User = require('../models/users')
async function Create(data) {
    const user = new User(data);
    return await user.save();
}
async function Delete(id){
    return await User.findByIdAndDelete(id);
}
async function Update(id, data){
    return await User.findByIdAndUpdate(id,data,{new:true, runValidators:true});
}
async function Get(id){
    return await User.findById(id);
}
async function GetAll() {
    return await User.find();
}

module.exports = {
    Create,
    Delete,
    Update,
    Get,
    GetAll
};
