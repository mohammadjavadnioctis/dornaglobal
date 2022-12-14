import React, {FC, memo} from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'
import UserIcon from '~/assets/icons/UserIcon'
import { useAuth } from '~/contexts/AuthContext'
import { isDev } from '~/utils/helpers'






const ProfileTab: FC = memo(

    () => {

      const { logout, user } = useAuth();

const userData: Record<string, any> = [
  {
    field: 'Name',
    value: user?.displayName,
    Img: UserIcon
  },
  {
    field: 'Email',
    value: user?.email,
    Img: IoMailOutline
  },
  {
    field: 'Phone Number',
    value: user?.phoneNumber,
    Img: BsTelephone
  },

]


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
             <span className='xl:w-[400px]'>{data.value ?? 'not provided'} </span>
             <span>
             <FaRegEdit />
             </span>
           </div>
         )
          }
          )
        }
        <div className='w-min px-4 py-3 mt-4 cursor-pointer border border-gray-400 rounded-lg float-right' onClick={() => {logout()}}>logout</div>
          </div>
        </div>
      )
    }
)

if(isDev){
    ProfileTab.displayName = 'ProfileTab'
}

export default ProfileTab