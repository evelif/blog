import React, {useState} from "react";
import styles from "./Pagenation.module.css"

export default function PageNation({current, max, isNext}:{
    current:number,
    max:number,
    isNext:boolean
}){
    const [input, setInput] = useState<number>(current)
    const handlePage = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(Number(e.target.value))
    }
    return (
        <div className={styles.container}>
            <a className={styles.prev}
                style={current==1?{color:"#c2c2c2"}:undefined}
                href={current==1?undefined:`/archive?page=${current-1}`}></a>
            <div className={styles.infoBlock}>
                <input type="number" 
                       onChange={handlePage}
                       value={input}
                       />
                <span>of {max}</span>
            </div>
            <a className={styles.next}
               style={!isNext?{color:"#c2c2c2"}:undefined}
               href={!isNext?undefined:`/archive?page=${current+1}`}></a>
        </div>
        )
}