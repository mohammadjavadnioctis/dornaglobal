import React, {FC, memo} from 'react'
import AddPropertyPage from '~/components/pages/AddProperty/AddPropertyPage'
import { isDev } from '~/utils/helpers'

const addProperty: FC = memo(

    () => {
      return (
        <div>
            <AddPropertyPage />
        </div>
      )
    }
)

if(isDev){
    addProperty.displayName = "add-property"
}

export default addProperty