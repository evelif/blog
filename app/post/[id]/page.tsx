import PostHeader from "@/components/Post/PostHeader";
import PostContent from "@/components/Post/PostContent";
import { fetchPostById } from "@/api/post";
import CommentInput from "@/components/Comment/CommentInput"
import CommentList from "@/components/Comment/CommentList"
import PostMenu from "@/components/Post/PostMenu"

interface IPost{
    id:number;
    title:string;
    content:string;
    category:string;
    createdAt:Date;
}
type Params = Promise<{ id: string }>;
export default async function PostPage({ params }: { params: Params }){
    const { id } = await params;
    const data:IPost = await fetchPostById(Number(id))
    
    return(
        <div className="postContainer">
            <PostHeader title={data.title}
                        category={data.category}
                        createdAt={data.createdAt}/>
            <PostContent content={data.content}/>
            
            <PostMenu/>
            <CommentList/>
            <CommentInput/>
        </div>
        )
}