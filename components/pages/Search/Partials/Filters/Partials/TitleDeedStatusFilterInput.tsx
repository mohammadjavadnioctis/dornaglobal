import React, {FC, memo} from 'react'
import { useSearchProperties } from '~/contexts/SearchPropertiesContext'
import { UiSelect } from '~/lib'
import useTrans from '~/lib/useTranslate'
import { TitleDeedTypes } from '~/utils/data'
import { isDev } from '~/utils/helpers'

const TitleDeedStatusFilterInput: FC = memo(
    () => {
        const { filters, handleFilterchange } = useSearchProperties()
        const t = useTrans()
      return (
        <div className="form-input-wrapper p-4 bg-white rounded-lg border border-accent-200 mb-3">
        <label className="text-xs"> </label>
    
        <div className="form_input_section ">
          <label className="text-xs">{t("TITLE DEED STATUS")} :</label>
          <UiSelect
            defaultValue={undefined}
            value={filters.titleDeedStatus}
            name="titleDeed"
            onChange={(event) => handleFilterchange("titleDeedStatus", event)}
            data={TitleDeedTypes}
          />
        </div>
      </div>
      )
    }

)

if(isDev){
    TitleDeedStatusFilterInput.displayName = 'TitleDeedStatusFilterInput'
}

export default TitleDeedStatusFilterInput