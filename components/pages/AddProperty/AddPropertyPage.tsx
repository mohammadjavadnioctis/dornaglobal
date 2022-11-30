import React, {FC, memo, useEffect} from 'react'
import Head from '~/components/Head/Head'
import { usePropertyContext } from '~/contexts/AddPropertyContext'
import { AddPropertyType } from '~/pages/add-property'
import { isDev } from '~/utils/helpers'
import ChooseCategory from './Partials/ChooseCategoryStep/ChooseCategory'
import Stepper from './Partials/Stepper/Stepper'



const AddPropertyPage: FC<AddPropertyType> = memo(
    (props) => {
      const { id } = props
      const {setDetails} = usePropertyContext()
      useEffect(() => {setDetails(prevDetails => ({...prevDetails, id}))} ,[])
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