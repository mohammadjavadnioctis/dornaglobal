import React, {FC, FormEvent, memo, useEffect, useState} from 'react'
import { DefinedStringSchema } from 'yup/lib/string';
import { UiNativeSelect, UiSelect } from '~/lib';
import { IstanbulDistricts } from '~/utils/data';
import { isDev } from '~/utils/helpers'
import { FiltersType } from '~/utils/types';



const Filters: FC = memo(
  
    () => {
      const [filters, setFilters] = useState<FiltersType | null>(null);

      const handleFilterchange = (name: string ,e: any )=>{
        console.log('this is the event', e, name)
       
        setFilters(prevState => ( { ...prevState } ))
      }

      useEffect(()=>{
        console.log('filters changed: ', filters)
      },[filters])

      return (
        <div>
          <div className='border border-orange-400'>
          <UiSelect
            value={filters?.address?.district}
            name="address.district"
            onChange={(event) => handleFilterchange('address.district' ,event)}
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