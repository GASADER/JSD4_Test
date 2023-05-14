import { postUser } from "../services/user.service.js";

export const Post = async (req, res) => {
    const data = req.body
    try{
        const users = await postUser(data);
        res.status(200).json(users);
    } catch(err){
        res.status(500).send(err)
    }
  };

export const Put = async (req, res) => {
    const data = req.body
    try{
        const users = await postUser(data);
        res.status(200).json(users);
    } catch(err){
        res.status(500).send(err)
    }
  };

export const Delete = async (req, res) => {
    const data = req.body
    try{
        const users = await postUser(data);
        res.status(200).json(users);
    } catch(err){
        res.status(500).send(err)
    }
  };