import ListBlock from "@/components/Archive/ListBlock"
import ProfileBlock from "@/components/Common/ProfileBlock";
import { Suspense } from "react";

export default function TagDetail(){
    
    return(
        <>
            <ProfileBlock name="Seo Hayoen"
                          github="hayonn"
                          email="seohayeon.kr@gmail.com" 
                          avatar="https://avatars.githubusercontent.com/u/190105697?s=400&u=43e6fbe9b66f60c570e0caccba86541486254573&v=4"/>
            <Suspense fallback={<div>Loading...</div>}>
                <ListBlock/>
            </Suspense>
        </>
        )
}