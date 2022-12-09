import React, {FC, memo} from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { isDev } from '~/utils/helpers'

const PropertyListedStep: FC = memo(
    () => {
      return (
        <div className='flex flex-col items-center space-y-8'>
            <h2>congratulations! The property is Listed !</h2>
            <h3>Keep an eye on your messages, costumers will contact you from there.</h3>
            <IoCheckmarkCircleOutline className="w-36 h-36 text-accent" />    
        </div>
        
      )
    }

) 

if(isDev){
    PropertyListedStep.displayName = 'PropertyListedStep'
}

export default PropertyListedStep