import React,{FC, memo} from 'react'
import { isDev } from '~/utils/helpers'


// TODO: define the type of the properties list: 
interface AllPropertiesListType {
    PropertiesList: any;
}


const AllPropertiesList: FC<AllPropertiesListType> = memo(

    (props) => {
   
        const { PropertiesList } = props
   
     return (
       <div>
           All Properties List
           
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
                const {title, user: {email}, price} = property
                  return (
                    <tr>
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
    AllPropertiesList.displayName = 'AllPropertiesList'
}

export default AllPropertiesList