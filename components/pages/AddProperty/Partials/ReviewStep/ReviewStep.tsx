import React, {FC, memo} from 'react'
import { isDev } from '~/utils/helpers'

const ReviewStep:FC = memo(

        () => {
        return (
            <div className='flex flex-col items-center space-y-8'>
                <h2 className='text-3xl'>Reviewing :</h2>
                <h3 className='text-xl'>Your property is under review by Dorna Global team. Once varified, the property will be published.</h3>
                <h3 className='text-xl'>Stay Tuned</h3>
            </div>
        )
        }
)

if(isDev) {
    ReviewStep.displayName = 'ReviewStep'
}

export default ReviewStep