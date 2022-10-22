import React, {FC, memo} from 'react'
import Head from '~/components/Head/Head'
import { isDev } from '~/utils/helpers'

const AddPropertyPage = memo(
    () => {
      return (
        <div >
            <Head title='Add Your Property To Dorna Global'
            titleClassnames='text-4xl pt-2' />
        </div>
      )
    }
)

if(isDev){
    AddPropertyPage.displayName = 'AddPropertyPage'
}

export default AddPropertyPage