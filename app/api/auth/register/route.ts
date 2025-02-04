import { connectToDB } from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest, response : NextResponse) {
    
    try {
        const {email, password} = await request.json()

        if (!email || !password)
            return NextResponse.json({error : "Email and Password are required"},
        {status : 400})

        await connectToDB()

        const existingUser  = await User.findOne({email})

        if(existingUser)
            return NextResponse.json({error : "Email already in use"}, {status : 400})
        else{
            await User.create({email, password})
        }

        try {
            return NextResponse.json({message : "User registered successfully"},
                {status : 200}
            )
        }catch(error){
            return NextResponse.json({error : "Failed to create User"}, {status : 400})

        }
        

    }catch(err){
        return NextResponse.json(err)
    }

}