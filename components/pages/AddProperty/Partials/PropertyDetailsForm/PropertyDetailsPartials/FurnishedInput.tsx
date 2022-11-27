import React, {FC, useState} from 'react'
import { UiChip } from '~/lib'
import { isDev } from '~/utils/helpers'

const FurnishedInput: FC = () => {
    const [checked, setChecked] = useState(false);
  return (
    <div>
    <UiChip checked={checked} onChange={() => setChecked((v) => !v)}>
        Furnished
    </UiChip>
    </div>
  )
}

if(isDev){
    FurnishedInput.displayName = 'FurnishedInput'
}

export default FurnishedInput