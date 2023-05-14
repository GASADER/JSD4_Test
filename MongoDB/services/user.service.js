import User from "../models/user.schema.js";

export async function postUser(data) {
    const newData = await new User(data)
    console.log(newData);
    return newData.save()
  }