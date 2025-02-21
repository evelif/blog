"use client"
import {useState,useEffect} from "react"
import ListItem from "@/components/Common/ListItem"
import styles from "./ListBlock.module.css"
import { fetchPostsByCategory } from "@/api/post"
import Pagenation from "@/components/Common/Pagenation"

interface IPostList{
    id:number;
    title:string;
    createdAt:Date;
    thumbnail:string;
    category:string;
}

export default function ListBlock({name}:{
    name:string
}){
    const [data, setData] = useState<IPostList[]>([])
    useEffect(()=>{
        fetchPostsByCategory(name)
            .then((result)=>{
                setData(result)
            })
    },[name])
    
    return(
        <div className={styles.container}>
            <div className={styles.listTitle}>{decodeURIComponent(name)}</div>
            {
                data.map(e=>
                <div key={e.id}>
                    <hr/>
                    <a href={`/post/${e.id}`}>
                        <ListItem title={e.title}
                              createdAt={e.createdAt}
                              thumbnail={e.thumbnail}
                              category={e.category}/>
                    </a>
                </div>
                )
            }
            <hr/>
            <Pagenation current={1}
                        max={5}
                        isNext={false}/>
        </div>
        )
}