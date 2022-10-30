import React, {FC, FormEvent, memo, useState} from 'react'
import { UiNativeSelect } from '~/lib';
import { IstanbulDistricts } from '~/utils/data';
import { isDev } from '~/utils/helpers'
import { FiltersType } from '~/utils/types';



const Filters: FC = memo(
  
    () => {
      const [filters, setFilters] = useState<FiltersType | null>(null);

      const handleFilterchange = (e: FormEvent )=>{
        console.log('this is the event', e.currentTarget.value)
      }

      return (
        <div>
          <div className='border border-orange-400'>
          <UiNativeSelect
            value={filters?.address?.district}
            name="address.district"
            onChange={(event) => handleFilterchange(event)}
            data={IstanbulDistricts}
          />
          </div>
        </div>
      )
    }
)

if(isDev){
    Filters.displayName = 'Filters'
}


export default Filters