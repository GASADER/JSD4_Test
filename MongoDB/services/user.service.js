import User from "../models/user.schema.js";

export async function getUser(data, UserId) {
  const users = await User.find();
  return users;
}
export async function getUserId(data, UserId) {
  //รับid มาจาก body
  const id = {
    postId: "53ae00e6-0c20-49b0-8043-f5936f1686e3",
  };
  const users = await User.find(id);
  console.log(users);
  return users;
}

export async function postUser(data,id) {

  const newData = await new User(data);
  return newData.save();
}


export async function editUser(data,id) {
  try {
    const updatedUser = await User.findByIdAndUpdate(id._id, data, { new: true });
    console.log(updatedUser)
    return updatedUser.save();
  } catch (err) {
    console.error(`Failed to delete user with ID: ${data.id}`, err);
    throw err;
  }
}

export async function deleteUser(data,id) {
  try {
    const updatedUser = await User.findByIdAndUpdate(id._id, data, { new: true });
    updatedUser.post_status = false;
    console.log(updatedUser)
    return updatedUser.save();
  } catch (err) {
    console.error(`Failed to delete user with ID: ${data.id}`, err);
    throw err;
  }
}
