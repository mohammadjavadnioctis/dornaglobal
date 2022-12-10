import React, {FC, memo} from 'react'
import { isDev } from '~/utils/helpers'
import { PropertyUploadContextType } from '~/utils/types'

interface PropertyRowType {
property: PropertyUploadContextType
}

const PropertyRow: FC<PropertyRowType> = memo(
    (props) => {
        const {property: {title, price, listingStatus}} = props
      return (
        <div className='outer_container w-full px-3 py-5 border border-gray-400 rounded-lg'>
            <div className='inner_container w-full h-full flex items-center justify-between'>
                <span className='truncate w-2/5'>{title}</span>
                <span>₺{price}</span>
                <span>{listingStatus}</span>
            </div>
        </div>
      )
    }

)

if(isDev){
    PropertyRow.displayName = 'PropertyRow'
}

export default PropertyRow