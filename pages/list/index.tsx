import { GetServerSideProps } from "next"
import {FC, memo} from 'react'
import { isDev } from "~/utils/helpers"


export const getServerSideProps: GetServerSideProps = async (context) => {
    
    

    return{ props: {}}
}




const Search: FC = memo(
    ()=>{
        return <h1>the list page</h1>
    }

)

if(isDev){
    Search.displayName = 'Search'
}

export default Search