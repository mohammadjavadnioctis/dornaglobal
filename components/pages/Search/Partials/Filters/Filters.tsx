import React, {FC, memo} from 'react'
import { isDev } from '~/utils/helpers'

const Filters: FC = memo(

    () => {
      return (
        <div>filters</div>
      )
    }
)

if(isDev){
    Filters.displayName = 'Filters'
}


export default Filters