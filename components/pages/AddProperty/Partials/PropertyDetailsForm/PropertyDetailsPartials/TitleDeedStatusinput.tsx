import React, {FC, useState} from 'react'
import { UiNativeSelect, UiSelect } from '~/lib'

const TitleDeedStatusinput:FC = () => {
    const [titleDeedStatus, setTitleDeedStatus] = useState('');
    // const handleSelect = (event: any) => {
    //     console.log(event)
    // }
  return (
    <div>
        <h4> TitleDeedStatusinput</h4>
    <UiNativeSelect
      value={titleDeedStatus}
      onChange={(event) => setTitleDeedStatus(event.currentTarget.value) }
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