import React, {FC, memo} from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'
import UserIcon from '~/assets/icons/UserIcon'
import { isDev } from '~/utils/helpers'




const userData: Record<string, any> = [
  {
    field: 'Name',
    value: 'Example Name',
    Img: UserIcon
  },
  {
    field: 'Email',
    value: 'Example@gmail.com',
    Img: IoMailOutline
  },
  {
    field: 'Phone Number',
    value: '+123456789',
    Img: BsTelephone
  },

]


const ProfileTab: FC = memo(



    () => {
      return (
        <div className='w-full h-full p-4'>
          <h2 className='text-accent-600'>My Profile</h2>
          <h3 className='text-sm opacity-60'>Profile overview </h3>
          <div className='mt-7'>

          {
          userData.map((data: Record<string, any>) =>
          {
            const {Img, field, value} = data
            return (

           <div className='w-full min-h-[60px] py-2 mt-4 flex flex-col md:flex-row justify-between items-center border-b border-[#DADBE8]'>
             <div className='min-w-14 min-h-14 flex items-center'>
              <Img className='w-7 h-7'/>
               <span className='ml-2 whitespace-nowrap'>{data.field}</span>
             </div>
             <span className='xl:w-[400px]'>{data.value}</span>
             <span>
             <FaRegEdit />
             </span>
           </div>
         )
          }
          )
        }
          </div>
        </div>
      )
    }
)

if(isDev){
    ProfileTab.displayName = 'ProfileTab'
}

export default ProfileTab