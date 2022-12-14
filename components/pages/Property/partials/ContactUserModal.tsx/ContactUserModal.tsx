import { createStyles } from '@mantine/core';
import { User } from 'firebase/auth';
import React, {FC, memo, useState} from 'react'
import { BsTelephone } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import UserIcon from '~/assets/icons/UserIcon';
import ProfileTab from '~/components/pages/profile/partials/Tabs/Profile/ProfileTab';
import { UiModal } from '~/lib'
import UiLink from '~/lib/UiLink';
import { isDev } from '~/utils/helpers'

interface ContactUserModalType {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    user?:User;
}

const useStyles = createStyles((theme) => ({
    modal: {
        width: '80vw',
        paddingBottom: '5rem !important'

    }
}))

const ContactUserModal: FC<ContactUserModalType> = memo(
    (props) => {
        const {opened, setOpened, user} = props
        const {classes} = useStyles()

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
                  

        console.log('this is the user: received by modal: ', user)
      return (
        <>
        <UiModal
        opened={opened}
        onClose={() => setOpened(false)}
        classNames={{modal: classes.modal}}
        centered
      >
        {/* Modal content */}

        <div className='w-full h-full p-4'>
          <h2 className='text-accent-600'>The owner of this Property</h2>
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
             <span className='xl:w-[400px]'>
                {field == 'Email'
                 ? 
                 <UiLink href={`mailto:${value}`}>{value ?? 'not provided'}</UiLink> 
                 :
                 field == 'Phone Number' 
                 ? 
                 <UiLink target={'_blank'} href={`https://api.whatsapp.com/send?phone=${value}`}>
                    {value ?? 'not provided'}
                </UiLink>
                 :
                 value ?? 'not provided' 
                //  ({data.value ?? 'not provided'})
            }
             </span>
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
 {/* <table className='w-full my-6 border-2 border-separate border-spacing-0 overflow-hidden rounded-2xl'>
           <thead className='h-12 text-[#3944B3] text-md !font-light text-left
                            bg-[#E1E9F9] !rounded-2xl border-seperate dark:bg-[#171925] dark:text-[#fff]'>
   
             <tr className='border-separate'>
               <th className='font-medium p-2 rounded-bl-2xl dark:text-[#fff]'>Name </th>
               <th className='font-medium p-2 dark:text-[#fff]'>Email</th>
               <th className='font-medium p-2 dark:text-[#fff]'>Phone Number</th>
             </tr>
           </thead>
           <tbody>
            
                
                    <tr>
                      <td className='text-sm p-3 dark:text-[#fff]'>{user?.displayName ?? 'not provided'}</td>
                      <td className='text-sm p-3 dark:text-[#fff]'>{user?.email ?? 'not provided'}</td>
                      <td className='text-sm p-3 dark:text-[#fff]'>₺{user?.phoneNumber ?? 'not provided'}</td>
                    </tr>
   
           </tbody>
     
        </table> */}
      </UiModal>

      {/* <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group> */}
      </>
            
      )
    }
)



if(isDev){
    ContactUserModal.displayName = 'ContactUserModal'
}

export default ContactUserModal