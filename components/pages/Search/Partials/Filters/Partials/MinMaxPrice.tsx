import React, { FC } from 'react'
import { UiNumberInput } from '~/lib'
import { defaultCurrency } from "~/app.config";
import { useSearchProperties } from '~/contexts/SearchPropertiesContext';
import { isDev } from '~/utils/helpers';
import useTrans from '~/lib/useTranslate';



const MinMaxPrice: FC  = () => {
    const {filters, setFilters, fetchBasedOnFilters, handleFilterchange}  =  useSearchProperties()
    const t = useTrans()
  return (
    <div className="form-input-wrapper p-4 bg-white rounded-lg border border-accent-200 mb-3">
    <div className="form_input_section">
      <label className="text-xs">{t('MIN PRICE')} :</label>
      <UiNumberInput
        // label="Price"
        defaultValue={undefined}
        value={filters.price?.minPrice as number}
        onChange={(e) => handleFilterchange("minPrice", e)}
        parser={(value) => value?.replace(/\₺\s?|(,*)/g, "")}
        formatter={(value) =>
          !Number.isNaN(parseFloat(value as string))
            ? `${defaultCurrency.symbol} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : `${defaultCurrency.symbol} `
        }
      />
    </div>
    <div className="form_input_section">
      <label className="text-xs">{t("MAX PRICE")} :</label>
      <UiNumberInput
        // label="Price"
        defaultValue={undefined}
        value={filters.price?.maxPrice as number}
        onChange={(e) => handleFilterchange("maxPrice", e)}
        parser={(value) => value?.replace(/\₺\s?|(,*)/g, "")}
        formatter={(value) =>
          !Number.isNaN(parseFloat(value as string))
            ? `${defaultCurrency.symbol} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : `${defaultCurrency.symbol} `
        }
      />
    </div>
  </div>
  )
}

if(isDev){
    MinMaxPrice.displayName = 'MinMaxPrice'
}


export default MinMaxPrice