import { Post } from "./models";
import { connectToDB } from "./connectDB";
import {User} from './models'
// const users = [
//     {id : 1, name : 'Akanksha'},
//     {id: 2, name : 'Joshi'}
// ];

// const posts = [
//     {id : 1, title : 'Post 1', body : '.....', userId : 1},
//     {id : 2, title : 'Post 2', body : '.....', userId : 1},
//     {id : 3, title : 'Post 3', body : '.....', userId : 2},
//     {id : 4, title : 'Post 4', body : '.....', userId : 2},
// ]
export const getPosts = async () => {
  // return posts;
  try {
    connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.error(err);
    throw new Error("Custom error message: Failed to fetch posts");
  }
};

export const getUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch posts");
  }
};

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch posts");
  }
};
