import React, {FC, memo} from 'react'
import { isDev } from '~/utils/helpers'

const ChooseCategory: FC = memo(

    () => {
    
      return (
        <div>ChooseCategory</div>
      )
    }
)

if(isDev){
    ChooseCategory.displayName = 'ChooseCategory'
}

export default ChooseCategory