import { memoryUsage } from 'process'
import React,{FC, memo} from 'react'
import UiImage from '~/lib/Image'
import { isDev } from '~/utils/helpers'

const ProfileHero: FC = memo(
    () => {
      return (
        <div className='relative'>
            <div className='image_container relative h-52 w-full border border-orange-400'>
            <UiImage
            src={'https://firebasestorage.googleapis.com/v0/b/dorna-global.appspot.com/o/dev%2Ftierra-mallorca-JXI2Ap8dTNc-unsplash.jpg?alt=media&token=41326320-2f2a-4c68-b51d-8a72724f7ad6'}
            layout="fill"
            objectFit='cover'
            
            />
            </div>
             <div className='contents absolute w-full h-full top-0 left-0 bg-black bg-opacity-[0.7] z-10 border-2 border-green-400'>
hi
            </div>
           
        </div>
      )
    }

)


if(isDev){
    ProfileHero.displayName = "ProfileHero"
}

export default ProfileHero