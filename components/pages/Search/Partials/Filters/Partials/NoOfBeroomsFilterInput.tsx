import React, {FC, memo} from 'react'
import { useSearchProperties } from '~/contexts/SearchPropertiesContext'
import { UiNumberInput } from '~/lib'
import { isDev } from '~/utils/helpers'

const NoOfBeroomsFilterInput: FC = memo(
    () => {
        const {filters, setFilters, fetchBasedOnFilters, handleFilterchange}  =  useSearchProperties()
      return (
        <div className="form-input-wrapper p-4 bg-white rounded-lg border border-accent-200 mb-3">
        <label className="text-xs">Number of bedrooms :</label>

        <UiNumberInput
          // label="Price"
          defaultValue={undefined}
          value={filters.noOfBedRooms as number}
          onChange={(e) => handleFilterchange("noOfRooms", e)}
        />
      </div>
      )
    }
)

if(isDev){
    NoOfBeroomsFilterInput.displayName = 'NNoOfBeroomsFilterInputo'
}

export default NoOfBeroomsFilterInput