"use client"
import {useState,useEffect} from "react"
import ListItem from "@/components/Common/ListItem"
import styles from "./ListBlock.module.css"
import { fetchPosts } from "@/api/post"
import Pagenation from "@/components/Common/Pagenation"
import { useSearchParams } from "next/navigation";

interface IPost{
    id:number;
    title:string;
    content:string;
    category:string;
    createdAt:Date;
    thumbnail:string;
}

interface IArchiveList{
    month:string,
    year:number,
    posts:IPost[]
}
export default function ListBlock(){
    const searchParams = useSearchParams();
    const pageNum = searchParams.get("page");
    const [page] = useState(!Number(pageNum)?1:Number(pageNum))
    
    const sortByDate = (data:IPost[]) => {
        const groupedData = data.reduce<Record<string, { year: number; month: string; posts: IPost[] }>>(
          (acc, post: IPost) => {
            const date = new Date(post.createdAt);
            const year = date.getFullYear();
            const month = date.toLocaleString('en-US', { month: 'long' });
            const key = `${year}-${month}`;
        
            if (!acc[key]) acc[key] = { year, month, posts: [] };
            acc[key].posts.push(post);
        
            return acc;
          },
          {} // 초기값으로 빈 객체를 지정
        );
        
        const result = Object.values(groupedData);
        return result
    }
    
    const [data, setData] = useState<IArchiveList[]>([])
    const [isNext, setIsNext] = useState(false)

    useEffect(()=>{
        fetchPosts(page)
        .then((result)=>{
            setData(sortByDate(result.posts))
            setIsNext(result.next)
        })
    },[])
    
    return(
        <div className={styles.container}>
            {
                data.map((item)=>
                    <div key={`${item.month}${item.year}`}>
                    <div className={styles.listTitle}>
                        {item.month}, {item.year}
                    </div>
                    {item?.posts.map((e:IPost)=>
                        <div key={e.id}>
                            <hr/>
                            <a href={`/post/${e.id}`}>
                                <ListItem title={e.title}
                                      createdAt={e.createdAt}
                                      thumbnail={e.thumbnail}
                                      category={e.category}/>
                            </a>
                        </div>
                    )}
                    </div>
                )
            }
            <hr/>
            <Pagenation current={page}
                        max={5}
                        isNext={isNext}/>
        </div>
        )
}