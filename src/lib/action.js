"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "./connectDB";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
const bcrypt = require('bcrypt');
export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("saved to Db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
  }
};
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Post.findByIdAndDelete(id);

    console.log("deleted from Db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (formData) => {
  const { username, email, password, img, confirmPassword } =
    Object.fromEntries(formData);
  if (password !== confirmPassword) {
    return "Passwords do no match";
  }
  try {
    connectToDB();
    const user = await User.findOne({ username });
    if (user) {
      return "Username already exists";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      hashedPassword,
      img,
    });
    await newUser.save();
    console.log(newUser, "saved to DB!!!!!!!");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};
