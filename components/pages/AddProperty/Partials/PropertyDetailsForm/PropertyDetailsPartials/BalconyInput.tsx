import React, {FC, useState} from 'react'
import { UiChip } from '~/lib'
import { isDev } from '~/utils/helpers'

const BalconyInput: FC = () => {
    const [checked, setChecked] = useState(false);
  return (
    <div>
    <UiChip checked={checked} onChange={() => setChecked((v) => !v)}>
        Balcony 
    </UiChip>
    </div>
  )
}

if(isDev){
    BalconyInput.displayName = 'BalconyInput'
}

export default BalconyInput