import React, {FC, memo} from 'react'
import { isDev } from '~/utils/helpers'
import FloorNoInput from './PropertyDetailsPartials/FloorNoInput'
import LivingAreaInput from './PropertyDetailsPartials/LivingAreaInput'
import NoOfBathroomsInput from './PropertyDetailsPartials/NoOfBathroomsInput'
import NoOfRoomsInput from './PropertyDetailsPartials/NoOfRoomsInput'
import PriceInput from './PropertyDetailsPartials/PriceInput'
import PropertyDescriptionInput from './PropertyDetailsPartials/PropertyDescriptionInput'
import PropertyTitleInput from './PropertyDetailsPartials/PropertyTitleInput'
import TotalAreaInput from './PropertyDetailsPartials/TotalAreaInput'

const PropertyDetailsForm: FC = () => {
  return (
    <div className='outer_wrapper bg-white container rounded-lg py-7'>
      <h3 className='text-2xl mb-20'>Property Details Form</h3>
      <div className='inner_wrapper grid grid-cols-2 gap-y-16 gap-x-4'>
        <div className='col-span-2'>
          <PropertyTitleInput wrapperClassNames='' />
        </div>
        <div className='col-span-2 '>
          <PropertyDescriptionInput />

        </div>
          <PriceInput />
          <FloorNoInput />
          <LivingAreaInput />
          <TotalAreaInput />
          <NoOfRoomsInput />
          <NoOfBathroomsInput />

      </div>
    </div>
  )
}

if(isDev){
  PropertyDetailsForm.displayName = 'PropertyDetailsForm'
}


export default PropertyDetailsForm