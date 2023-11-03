import { createUser, deleteUser, getAllUsers, getUserByEmail } from "../services/auth.service.js"

export const create = async(req,res)=>{    
    const user  = req.body
    createUser(user).then((userRecord)=>{
        console.log(userRecord);
        res.status(201).json({message: `Successfully created new user: ${userRecord}`})
    }).catch((error)=>{
        res.status(400).json({message: `Error creating new user: ${error}`, error})
    })
}

export const getByEmail = async(req,res)=>{    
    const {email}  = req.params;
    getUserByEmail(email).then((userRecord)=>{
        console.log(userRecord);
        res.status(200).json(userRecord)
    }).catch((error)=>{
        res.status(400).json({message: `Error get user user: ${error}`, error})
    })
};

export const deleteUsr = async(req,res)=>{
    const {uid} = req.params;
    deleteUser(uid).then((id)=>{
        console.log(id);
        res.status(204).json({message: `Successfully deleted user: ${id}`})
    }).catch((error)=>{
        res.status(400).json({message: `Error to delete user: ${error}`, error})
    })
}

export const getAll = async (req,res)=>{
    getAllUsers().then((list)=>{
        console.log(list);
        res.status(200).json(list)
    }).catch((error)=>{
        res.status(400).json({message: `Error to get all users: ${error}`, error})
    })
}