import ImageKit from "imagekit"
import { NextResponse, NextRequest } from "next/server";


const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export async function GET(request : NextRequest) {

  try{
      return NextResponse.json(imagekit.getAuthenticationParameters());

  }catch(err){
      return NextResponse.json(
        {err : "Imagekit auth failed"}, 
        {status : 500}) 
  }

}