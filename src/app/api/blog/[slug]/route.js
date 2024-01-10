import { connectToDB } from "../../../../lib/connectDB";
import {Post} from "../../../../lib/models";
import { NextResponse } from 'next/server';
export const GET = async (request, {params}) => {
    const {slug} = params;
    try {
      connectToDB();
  
      const post = await Post.findOne({slug: slug});
      return NextResponse.json(post);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch posts!");
    }
  };
export const DELETE = async (request, {params}) => {
    const {slug} = params;
    try {
      connectToDB();
  
      await Post.deleteOne({slug: slug});
      return NextResponse.json("Post Deleted");
    } catch (err) {
      console.log(err);
      throw new Error("Failed to delete posts!");
    }
  };