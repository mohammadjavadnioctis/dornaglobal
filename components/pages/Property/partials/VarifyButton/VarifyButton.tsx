import React, { FC, memo, useEffect, useState } from 'react'
import { useAuth } from '~/contexts/AuthContext'
import { UiButton } from '~/lib'
import isDev from '~/utils/helpers/isDev'

const VarifyButton: FC = memo(
    () => {


       
        const [isScrolled, setIsScrolled] = useState(false)

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
                <div className='flex space-x-8'>

                    <UiButton
                        variant="filled"
                        size="lg"
                        color="#E9C46A"
                        uppercase
                        className="transition-all text-accent-600 border-accent-600 hover:bg-accent-600 hover:text-white"
                    >
                    See user's info
                    </UiButton>
                    <UiButton
                        variant="filled"
                        size="lg"
                        color="#E9C46A"
                        uppercase
                        className="bg-accent hover:bg-accent-600 transition-all "
                    >
                        Varify this property
                    </UiButton>
                </div>
                </div>
            </div>
        )
    }
)

if (isDev) {
    VarifyButton.displayName = 'VarifyButton'
}

export default VarifyButton