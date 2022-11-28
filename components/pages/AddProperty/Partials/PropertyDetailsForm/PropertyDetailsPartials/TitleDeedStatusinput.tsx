import React, {FC, useState} from 'react'
import { usePropertyContext } from '~/contexts/AddPropertyContext';
import { UiNativeSelect, UiSelect } from '~/lib'

const TitleDeedStatusinput:FC = () => {
    // const [titleDeedStatus, setTitleDeedStatus] = useState('');
    // const handleSelect = (event: any) => {
    //     console.log(event)
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
        { value: 'mulkiyet', label: 'Kat Mülkiyet' },
        { value: 'irtifak', label: 'Kat İrtifaklı' },
        { value: 'hisseli', label: 'Hisseli' },
        { value: 'arsa', label: 'Arsa Tapulu' },
      ]}
    />
    </div>
  )
}

export default TitleDeedStatusinput