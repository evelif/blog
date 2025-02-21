import React,{ useEffect,useState } from 'react';
import styles from "./CategoryBlock.module.css"
import FolderIcon from "@/assets/icons/folder.svg"
import { fetchCategories } from "@/api/category";

interface ICategory{
    id:number;
    name:string;
}

export default function CategoryBlock(){
    const [data, setData] = useState<ICategory[]>([])
    useEffect(()=>{
        fetchCategories()
        .then((result)=>{
            setData(result)
        })
    },[])
    
    return(
        <div className={styles.container}>
            <div className={styles.title}>CATEGORY</div>
            <hr color="gray"/>
            <div className={styles.categoryWrap}>
            {
                data.map(e=>
                    <div className={styles.categoryRow}
                         key={e.id}>
                        <a href={`/category/${e.name}`}>
                        <FolderIcon className={styles.folderIcon}/>{e.name}
                        </a>
                    </div>
                )
            }
            </div>
        </div>
        )
}