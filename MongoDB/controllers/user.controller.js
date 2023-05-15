import { postUser,getUser,editUser,getUserId, deleteUser } from "../services/user.service.js";

export const Get = async (req, res) => {
    // const data = req.body
    // const UserId = await Number.parseInt(req.params.id, 10);
    try{
        const users = await getUser();
        res.status(200).json(users);
    } catch(err){
        res.status(500).send(err)
    }
  };

export const GetId = async (req, res) => {
    // const data = req.body
    // const UserId = await Number.parseInt(req.params.id, 10);
    try{
        const users = await getUserId();
        res.status(200).json(users);
    } catch(err){
        res.status(500).send(err)
    }
  };

export const Post = async (req, res) => {
    const data = req.body
    const UserId = await Number.parseInt(req.params.id, 10);
    try{
        const users = await postUser(data,UserId);
        res.status(200).json(users);
    } catch(err){
        res.status(500).send(err)
    }
  };

export const Put = async (req, res) => {
    // const id = req.params
    // const id = req.params

    const data = req.body
    const UserId = req.body.UserId
    try{
        const users = await editUser(data,UserId);
        res.status(200).json(users);
    } catch(err){
        res.status(500).send(err)
    }
  };

export const Delete = async (req, res) => {
    const data = req.body
    try{
        const users = await deleteUser(data);
        res.status(200).json(users);
    } catch(err){
        res.status(500).send(err)
    }
  };