import React, {FC, memo} from 'react'
import { useSearchProperties } from '~/contexts/SearchPropertiesContext'
import { UiNumberInput } from '~/lib'
import useTrans from '~/lib/useTranslate'
import { isDev } from '~/utils/helpers'

const NoOfBeroomsFilterInput: FC = memo(
    () => {
        const {filters, setFilters, fetchBasedOnFilters, handleFilterchange}  =  useSearchProperties()
        const t = useTrans()
      return (
        <div className="form-input-wrapper p-4 bg-white rounded-lg border border-accent-200 mb-3">
        <label className="text-xs">{t("BEDROOM COUNT")} :</label>

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
    NoOfBeroomsFilterInput.displayName = 'NoOfBeroomsFilterInputo'
}

export default NoOfBeroomsFilterInput