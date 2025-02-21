import React from "react";
import styles from './ProfileBlock.module.css'
import GithubIcon from "@/assets/icons/github.svg"
import EmailIcon from "@/assets/icons/sms.svg"
import HomeIcon from "@/assets/icons/home.svg"
import GuestBookIcon from "@/assets/icons/user-edit.svg"
import Link from "next/link"

interface ProfileBlockProps {
  name: string;
  github: string;
  email: string;
  avatar: string;
}

export default function ProfileBlock({
    name,
    avatar,
}:ProfileBlockProps){
    return( 
        <div className={styles.container}>
        <div className={styles.profileBlock}>
            <div className={styles.profileContent}>
                <div className={styles.name}><Link href="/">{name}</Link></div>
            </div>
            <div className={styles.avatar}>
            <Link href="/">
            <img src={avatar} 
                   alt="아바타" 
                   width={200} 
                   height={200}
                   className={styles.avatarImg}/>
            </Link>
            </div>
        </div>
        <hr/>
        <div className={styles.IntroduceWrap}>
            <div className={styles.introduce}>유사개발자</div>
            <div className={styles.IconsWrap}>
                <Link href="/">
                    <HomeIcon width={25} height={25} className={styles.homeIcon}/>
                </Link>
                <Link href="https://github.com/hayonn" target="_blank">
                    <GithubIcon width={25} height={25} className={styles.icon}/>
                </Link>
                <Link href="mailto:seohayeon.kr@gmail.com">
                    <EmailIcon width={25} height={25} className={styles.smsIcon}/>
                </Link>
                {/*<a href="/tag">
                    <TagIcon width={25} height={25} className={styles.smsIcon}/>
                </a>*/}
                <Link href="/guestbook">
                    <GuestBookIcon width={25} height={25} className={styles.homeIcon}/>
                </Link>
            </div>
        </div>
        <hr/>
        </div>
    )
}