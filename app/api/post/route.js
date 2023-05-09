
import connectDb from "@/middleware/connextDb";
import { NextResponse } from "next/server";
import Post from "@/models/Post"

export async function GET(req){
        await connectDb();
        const data = await Post.find()
        return NextResponse.json({data})
}

export async function POST(request){
    
try{
//  let data=new Post({
//     "title":"sdf",
//     "reporter":"sdfs",
//     "content":"sdf",
//     "date":"20/05/2021",
//     "category":"dsf"
//  })
const data= await request.json();
 await connectDb();
 await Post.create(data);

return NextResponse.json({data},{status:200})
 
}
catch(e){
    return NextResponse.json({"msg":"Server Error"},{status:500})
}

}