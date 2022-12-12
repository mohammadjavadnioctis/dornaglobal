import React, {FC, memo} from 'react'
import UiLink from '~/lib/UiLink'
import { isDev } from '~/utils/helpers'
import { PropertyUploadContextType } from '~/utils/types'

interface PropertyRowType {
property: PropertyUploadContextType
}

const PropertyRow: FC<PropertyRowType> = memo(
    (props) => {
        const {property: {title, price, listingStatus, id}} = props
      return (
        <UiLink href={`/property/${id}`}>
        <div className='outer_container w-full px-3 py-5 border border-gray-200 rounded-lg bg-white hover:-translate-x-1 hover:-translate-y-1 transition-all'>
            <div className='inner_container w-full h-full flex items-center justify-between'>
                <span className='truncate w-2/5'>{title}</span>
                <span>₺{price}</span>
                <span>{listingStatus}</span>
            </div>
        </div>
        </UiLink >
      )
    }

)

if(isDev){
    PropertyRow.displayName = 'PropertyRow'
}

export default PropertyRow