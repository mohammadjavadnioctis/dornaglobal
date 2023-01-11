import React, { FC, memo } from 'react'
import { useSearchProperties } from '~/contexts/SearchPropertiesContext'
import { UiNumberInput } from '~/lib'
import useTrans from '~/lib/useTranslate'
import { isDev } from '~/utils/helpers'



const NoOfBathRoomsFilterInput: FC = memo(
    () => {
        const { filters, setFilters, fetchBasedOnFilters, handleFilterchange } = useSearchProperties()
        const t = useTrans()
        return (
            <div className="form-input-wrapper p-4 bg-white rounded-lg border border-accent-200 mb-3">
                <label className="text-xs">{t("BATHROOM COUNT")} :</label>

                <UiNumberInput
                    // label="Price"
                    defaultValue={undefined}
                    value={filters.noOfBathRooms as number}
                    onChange={(e) => handleFilterchange("noOfBathRooms", e)}
                />
            </div>
        )
    }

)

if (isDev) {
    NoOfBathRoomsFilterInput.displayName = 'NoOfBathRoomsFilterInput'
}


export default NoOfBathRoomsFilterInput