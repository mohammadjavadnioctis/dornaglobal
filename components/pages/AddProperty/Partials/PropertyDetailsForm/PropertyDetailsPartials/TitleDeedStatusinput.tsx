import React, {FC, useState} from 'react'
import { usePropertyContext } from '~/contexts/AddPropertyContext';
import { UiNativeSelect, UiSelect } from '~/lib'



interface TitleDeedStatusinputType {
  errorHandlingProp?: any
}


const TitleDeedStatusinput:FC<TitleDeedStatusinputType> = (props) => {
  const {errorHandlingProp} = props
    // const [titleDeedStatus, setTitleDeedStatus] = useState('');
    // const handleSelect = (event: any) => {
    // }

    const {details: {titleDeedStatus}, setDetails} = usePropertyContext()
    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.currentTarget.value
    // @ts-ignore
      setDetails(prevState => ({...prevState , titleDeedStatus: value }  ))
    }
  

  return (
    <div>
        <h4> TitleDeedStatusinput</h4>
    <UiNativeSelect
    // @ts-ignore
      value={titleDeedStatus}
      onChange={handleChange}
      data={[
        {value: '', label: ''},
        { value: 'mulkiyet', label: 'Kat Mülkiyet' },
        { value: 'irtifak', label: 'Kat İrtifaklı' },
        { value: 'hisseli', label: 'Hisseli' },
        { value: 'arsa', label: 'Arsa Tapulu' },
      ]}
      {...errorHandlingProp}
    />
    </div>
  )
}

export default TitleDeedStatusinput