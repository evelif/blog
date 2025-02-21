import React from "react";
import styles from "./PostHeader.module.css";
import { dateFormat } from "@/utils";

interface IPost{
    title:string;
    category:string;
    createdAt:Date;
}

export default function PostHeader({
    title,
    category,
    createdAt
}:IPost){
    
    return(
        <div className={styles.wrap}>
            <div className={styles.category}>{category}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.date}>{dateFormat(createdAt)}</div>
        </div>
        )
}