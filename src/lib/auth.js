import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";
import { connectToDB } from "./connectDB";
import { User } from "./models";

require('dotenv').config();
export const { handlers:{GET, POST}, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks:{
    async signIn({user, account, profile}){
      console.log(user, account, profile)
      if(account.provider === 'github'){
        connectToDB();
        try{
          const user = await User.findOne({ email: profile.email });
          if(!user){
            const newUser = new User({
              username : profile.login,
              email : profile.email,
              image : profile.avatar_url,
            });
            await newUser.save();
          }
        }
        catch(error){
          console.log(error)
          return false;
        }
      }
      return true;
      
    }
  }
});
