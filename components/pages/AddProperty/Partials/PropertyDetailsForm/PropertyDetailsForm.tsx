import React, {FC, memo} from 'react'
import { isDev } from '~/utils/helpers'
import PriceInput from './PropertyDetailsPartials/PriceInput'
import PropertyTitleInput from './PropertyDetailsPartials/PropertyTitleInput'

const PropertyDetailsForm: FC = () => {
  return (
    <div className='outer_wrapper bg-white container rounded-lg py-7'>
      <div className='inner_wrapper grid grid-cols-2 gap-y-16'>
        <div className='col-span-2 grid grid-cols-2'>
          <PropertyTitleInput wrapperClassNames='' />
        </div>
          <PriceInput />


      </div>
    </div>
  )
}

if(isDev){
  PropertyDetailsForm.displayName = 'PropertyDetailsForm'
}


export default PropertyDetailsForm