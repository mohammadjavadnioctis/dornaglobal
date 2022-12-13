import React, {FC, memo} from 'react'
import { UIButton } from '~/lib'
import UiLink from '~/lib/UiLink'
import { isDev } from '~/utils/helpers'

const ReviewStep:FC = memo(

        () => {
        return (
            <div className='flex flex-col items-center space-y-8'>
                <h2 className='text-3xl'>Reviewing :</h2>
                <h3 className='text-xl'>Your property is under review by Dorna Global team. Once varified, the property will be published.</h3>
                <h3 className='text-xl'>Stay Tuned</h3>
                <UiLink href={'/'}>

                    <UIButton
                    // onClick={handleFileUpload}
                    size='xl'
                    className={
                        "border border-accent bg-accent text-white hover:bg-white hover:text-accent mt-8 mx-auto relative left-1/2 -translate-x-1/2"
                    }
                    >

                      Return to the home page
                    </UIButton>
                </UiLink>
            </div>
        )
        }
)

if(isDev) {
    ReviewStep.displayName = 'ReviewStep'
}

export default ReviewStep