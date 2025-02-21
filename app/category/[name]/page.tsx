import ListBlock from "@/components/Common/ListBlock"
import ProfileBlock from "@/components/Common/ProfileBlock";

type Params = Promise<{ name: string }>;
export default async function CategoryDetail({ params }: { params: Params }){
    const { name } = await params;
    
    return(
        <>
            <ProfileBlock name="Seo Hayoen"
                          github="hayonn"
                          email="seohayeon.kr@gmail.com" 
                          avatar="https://avatars.githubusercontent.com/u/190105697?s=400&u=43e6fbe9b66f60c570e0caccba86541486254573&v=4"/>
             <ListBlock name={name}/>
        </>
        )
}