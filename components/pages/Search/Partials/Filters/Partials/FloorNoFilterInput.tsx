import React, { memo, FC } from 'react'
import { useSearchProperties } from '~/contexts/SearchPropertiesContext'
import { UiNumberInput } from '~/lib'
import useTrans from '~/lib/useTranslate'
import { isDev } from '~/utils/helpers'

const FloorNoFilterInput: FC = memo(
    () => {
        const { filters, setFilters, fetchBasedOnFilters, handleFilterchange } = useSearchProperties()
        const t = useTrans()
        return (
            <div className="form-input-wrapper p-4 bg-white rounded-lg border border-accent-200 mb-3">
                <label className="text-xs">{t("FLOOR NUMBER")} :</label>

                <UiNumberInput
                    // label="Price"
                    defaultValue={undefined}
                    value={filters.floor as number}
                    onChange={(e) => handleFilterchange("floorNo", e)}
                />
            </div>
        )
    }

)

if (isDev) {
    FloorNoFilterInput.displayName = 'FloorNoFilterInput'
}

export default FloorNoFilterInput