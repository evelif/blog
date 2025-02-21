"use client"
import React,{ useEffect,useState } from "react";
import styles from "./List.module.css";
import { dateFormat } from "@/utils";
import { fetchPosts } from "@/api/post";
import SkeletonUI from "@/components/Common/SkeletonUI";

interface IPost{
    id:number;
    title:string;
    thumbnail:string;
    category:string;
    createdAt:Date;
}

export default function ListBlock(){
    const [postList, setPostList] = useState<IPost[]>([])
    const [loding, setLoding] = useState(true)
    useEffect(()=>{
        fetchPosts()
        .then((result)=>{
            setLoding(false)
            setPostList(result.posts)
        })
    },[])
    
    return(
        loding?
        <SkeletonUI/>
        :
        <>
        <div className={styles.list_container}>
            {
                postList.map(e=>
                    <div className={styles.postItem} key={e.id}>
                        <a href={`/post/${e.id}`}>
                        <div className={styles.thumbnailWrap}>
                            <img src={e.thumbnail}/>
                        </div>
                        <div className={styles.categoryWrap}>
                            {e.category}
                        </div>
                        <div className={styles.titleWrap}>
                            {e.title}
                        </div>
                        <div className={styles.date}>
                            {dateFormat(e.createdAt)}
                        </div>
                        </a>
                    </div>
                )
            }
        </div>
        <div className={styles.archiveBlock}>
            <button>
                <a href="/archive">View Archive</a>
            </button>
        </div>
        </>
        )
}