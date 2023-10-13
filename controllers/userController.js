const User = require('../models/user');

async function createUser(req,res)
{
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
    }
    catch{
        res.status(500).json({error: err.message});
    }
}


async function getAllUsers(req,res)
{
    try{
        const users = await User.find();
        res.status(201).json(users);
    }
    catch{
        res.status(500).json({error: err.message})
    }
}


async function deleteUser(req,res)
{
    try{
        const { id } = req.params;
        await User.findByIdAndRemove(id);
        res.sendStatus(201);
    }
    catch{
        res.status(500).json({error: err.message});
    }
}


async function updateUser(req, res)
{
    try{
        const { id } = req.params;
        const updatedUser = await Users.FindByIdAndUpdate(id);
        res.status(201).json(updateUser);
    }
    catch{
        res.status(500).json({error: err.message});
    }
}


module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
}