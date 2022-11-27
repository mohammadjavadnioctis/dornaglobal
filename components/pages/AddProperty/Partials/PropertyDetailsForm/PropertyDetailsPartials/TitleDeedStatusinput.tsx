import React, {FC, useState} from 'react'
import { UiNativeSelect, UiSelect } from '~/lib'

const TitleDeedStatusinput:FC = () => {
    const [value, setValue] = useState('');
    const handleSelect = (event: any) => {
        console.log(event)
    }
  return (
    <div>
        <h4> TitleDeedStatusinput</h4>
    <UiSelect
      value={value}
      onChange={(event) => handleSelect(event) }
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