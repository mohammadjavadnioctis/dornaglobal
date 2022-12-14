import { User } from 'firebase/auth'
import { doc, DocumentData, DocumentReference, setDoc, updateDoc } from 'firebase/firestore'
import React, { FC, memo, useEffect, useState } from 'react'
import { useAuth } from '~/contexts/AuthContext'
import { UiButton } from '~/lib'
import { db } from '~/utils/config/firebase'
import isDev from '~/utils/helpers/isDev'
import { PropertyTypeV2 } from '~/utils/types'
import ContactUserModal from '../ContactUserModal.tsx/ContactUserModal'


interface VarifyButtonType {
    user?: User,
    property?: PropertyTypeV2
}

const VarifyButton: FC<VarifyButtonType> = memo(
    (props) => {

        const {user: owner, property} = props
        console.log('this is property form varifyButton', property)
        console.log('this is props for varify button: ', props)
        const {userFromFirebase : currentUser} = useAuth()
        const [loading, setLoading] = useState(false)
        const [opened, setOpened] = useState(false)
        const [isScrolled, setIsScrolled] = useState(false)


        const handleOpenModal = async () => {
            setOpened(prevState => !prevState)
        }       
        
        
        const handleVarifyProperty = async () => {
            if(currentUser && currentUser?.isAdmin){
                try{
                    setLoading(true)
                    const propertyRef = doc(db, `testproperties/${property?.id}`);
                    const response = await updateDoc(propertyRef, {
                        isVarifed: true,
                        varifiedBy: currentUser
                    })
                   
                    setLoading(false)

                } catch (err) {
                    console.log(err) 
                }
            }
        }
        
        useEffect(() => {
            window.addEventListener('scroll', () => {
                if(window.scrollY > 47){
                    setIsScrolled(true)
                }else {
                    setIsScrolled(false)
                }

            })
          return () => {
            window.removeEventListener('scroll', () => {
            })
          }
        }, [])


        return (
            <div className={`w-full pz-5 py-10 sticky backdrop-saturate-[180%] backdrop-blur-[5px] bg-[hsla(0,0%,100%,.8)] z-50 transition-all ${isScrolled ? 'top-[76px]' : 'top-[119px]'}`}>
                <div className='container flex items-center justify-between'>

               <span className='text-red-500 text-xl'>
                 This property is not varified yet
                </span>
            {
                // @ts-ignore
                currentUser && currentUser.isAdmin && (
                    <div className='flex space-x-8'>

                    <UiButton
                        variant="filled"
                        size="lg"
                        color="#E9C46A"
                        uppercase
                        className="transition-all text-accent-600 border-accent-600 hover:bg-accent-600 hover:text-white"
                        onClick={handleOpenModal}
                    >
                    See user's info
                    </UiButton>
                    <UiButton
                    onClick={handleVarifyProperty}
                        variant="filled"
                        size="lg"
                        color="#E9C46A"
                        uppercase
                        className="bg-accent hover:bg-accent-600 transition-all "
                        loading={loading}
                    >
                        Varify this property
                    </UiButton>
                    <ContactUserModal opened={opened} setOpened={setOpened} user={owner}/>
                </div>
                )    
            }
               
                </div>
            </div>
        )
    }
)

if (isDev) {
    VarifyButton.displayName = 'VarifyButton'
}

export default VarifyButton