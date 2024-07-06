import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@/utils/schema";


mongoose
    .connect("mongodb://127.0.0.1:27017/ecom")
    .then(() => console.log("Connected"))
    .catch((err) => console.log("something Went Wrong", err));

export async function POST(request){
    const payload = await request.json()
        const existedUser = await User.findOne({email: payload.email});
        if(existedUser){
            return NextResponse.json({res: 'User already exist.'})
        } 
        try{
            const hashedPassword = await bcrypt.hash(payload.password, 10);
            const user = {
                name: `${payload.firstName} ${payload.lastName}`,
                email: payload.email,
                password: hashedPassword,
            };
            const newUser = new User(user);
            await newUser.save();
            return NextResponse.json({ok:true});
        }catch (e) {
            return NextResponse.json("something went wrong! Check your input again",e);
        }
    
    }