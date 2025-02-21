import React from "react";
import styles from "./PostContent.module.css";
import Markdown from "react-markdown";
import rehypePrism from 'rehype-prism-plus';
import 'prismjs/themes/prism-tomorrow.css';

export default function PostContent({content}:{content:string}){
    
    return(
        <div className={styles.wrap}>
            <Markdown rehypePlugins={[rehypePrism]}>
                {content}
            </Markdown>
        </div>
        )
}