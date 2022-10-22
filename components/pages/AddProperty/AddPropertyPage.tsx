import React, {FC, memo} from 'react'
import Head from '~/components/Head/Head'
import { isDev } from '~/utils/helpers'
import Stepper from './Partials/Stepper/Stepper'

const AddPropertyPage = memo(
    () => {
      return (
        <div >
            <Head title='Add Your Property To Dorna Global'
            titleClassnames='text-4xl my-0' containerClassNames='my-4' />
            <Stepper />
        </div>
      )
    }
)

if(isDev){
    AddPropertyPage.displayName = 'AddPropertyPage'
}

export default AddPropertyPage