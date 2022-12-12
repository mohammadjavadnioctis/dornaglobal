import { useRouter } from 'next/router';
import React,{FC, memo} from 'react'
import { isDev } from '~/utils/helpers'


// TODO: define the type of the properties list: 
interface PendingPropertiesList {
    PropertiesList: any;
}


const PendingPropertiesList: FC<PendingPropertiesList> = memo(

    (props) => {
        const router = useRouter()
        const { PropertiesList } = props
   
     return (
       <div>
           Pending Properties List
           
           <table className='w-full my-6 border-2 border-separate border-spacing-0 overflow-hidden rounded-2xl'>
           <thead className='h-12 text-[#3944B3] text-md !font-light text-left
                            bg-[#E1E9F9] !rounded-2xl border-seperate dark:bg-[#171925] dark:text-[#fff]'>
   
             <tr className='border-separate'>
               <th className='font-medium p-2 rounded-bl-2xl dark:text-[#fff]'>Title </th>
               <th className='font-medium p-2 dark:text-[#fff]'>user</th>
               <th className='font-medium p-2 dark:text-[#fff]'>Price</th>
             </tr>
           </thead>
           <tbody>
             {
               PropertiesList.map( (property: any) =>{
                const {title, user: {email}, price, id} = property
                  return (
                    <tr onClick={() => router.push(`/property/${id}`)} className='hover:-translate-x-1 hover:-translate-y-1 transition-all cursor-pointer'>
                      <td className='text-sm p-3 dark:text-[#fff]'>{title}</td>
                      <td className='text-sm p-3 dark:text-[#fff]'>{email}</td>
                      <td className='text-sm p-3 dark:text-[#fff]'>₺{price}</td>
                    </tr>
      
                  )
               }
               )
             }
   
           </tbody>
     
        </table>
       </div>
     )
   }
)


if(isDev){
    PendingPropertiesList.displayName = 'PendingPropertiesList'
}

export default PendingPropertiesList