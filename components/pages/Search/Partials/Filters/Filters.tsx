import React, { FC, FormEvent, memo, useEffect, useState } from "react";
import { DefinedStringSchema } from "yup/lib/string";
import { defaultCurrency } from "~/app.config";
import { useSearchProperties } from "~/contexts/SearchPropertiesContext";
import { UiNativeSelect, UiNumberInput, UiSelect } from "~/lib";
import { IstanbulDistricts, TitleDeedTypes } from "~/utils/data";
import { isDev } from "~/utils/helpers";
import { FiltersType } from "~/utils/types";
import AddressInput from "../AddressInput/AddressInput";

const Filters: FC = memo(() => {
 
  const {filters, setFilters, fetchBasedOnFilters, handleFilterchange}  =  useSearchProperties()
  
  // const handleFilterchange = (name: string, e: any) => {
  //   // TODO : refactor this part
  //   switch (name) {
  //     case "district":
  //       setFilters((prevState) => ({
  //         ...prevState,
  //         address: { ...prevState?.address!, district: e },
  //       }));
  //       break;
  //     case "neighbourhood":
  //       setFilters((prevState) => ({
  //         ...prevState,
  //         address: { ...prevState?.address!, neighbourhood: e },
  //       }));
  //     case "minPrice":
  //       setFilters((prevState) => ({
  //         ...prevState,
  //         price: { ...prevState?.price!, minPrice: e },
  //       }));
  //     default:
  //       break;
  //   }

  //   // setFilters(prevState => ( { ...prevState } ))
  // };

  const handleFiltersSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchBasedOnFilters()
  }

  return (
    <div>
      <div className="adress_forms">
        <form onSubmit={(e) => handleFiltersSubmit(e)}>
          <div className="form-input-wrapper p-4 bg-white rounded-lg border border-accent-200 mb-3">
            <div className="form_input_section ">
              <AddressInput />
              {/* <label className="text-xs">District:</label> */}
              {/* <UiSelect
                value={filters?.address?.district}
                name="district"
                onChange={(event) => handleFilterchange("district", event)}
                data={IstanbulDistricts}
              />
            </div>
            <div className="form_input_section">
              <label className="text-xs">Neighbourhood:</label>
              <UiSelect
                value={filters?.address?.neighbourhood}
                name="neighbourhood"
                onChange={(event) => handleFilterchange("neighbourhood", event)}
                data={IstanbulDistricts}
              /> */}
            </div>
          </div>

          <div className="form-input-wrapper p-4 bg-white rounded-lg border border-accent-200 mb-3">
            <div className="form_input_section">
              <label className="text-xs">Min price :</label>
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
              <label className="text-xs">Max price :</label>
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
          <div className="form-input-wrapper p-4 bg-white rounded-lg border border-accent-200 mb-3">
            <label className="text-xs">Number of bedrooms :</label>

            <UiNumberInput
              // label="Price"
              defaultValue={undefined}
              value={filters.noOfBedRooms as number}
              onChange={(e) => handleFilterchange("noOfRooms", e)}
            />
          </div>
          <div className="form-input-wrapper p-4 bg-white rounded-lg border border-accent-200 mb-3">
            <label className="text-xs">Number of bathrooms :</label>

            <UiNumberInput
              // label="Price"
              defaultValue={undefined}
              value={filters.noOfBathRooms as number}
              onChange={(e) => handleFilterchange("noOfBathRooms", e)}
            />
          </div>
          <div className="form-input-wrapper p-4 bg-white rounded-lg border border-accent-200 mb-3">
            <label className="text-xs">Floor no :</label>

            <UiNumberInput
              // label="Price"
              defaultValue={undefined}
              value={filters.floor as number}
              onChange={(e) => handleFilterchange("floorNo", e)}
            />
          </div>
          <div className="form-input-wrapper p-4 bg-white rounded-lg border border-accent-200 mb-3">
            <label className="text-xs"> :</label>

            <div className="form_input_section ">
              <label className="text-xs">Title deed status:</label>
              <UiSelect
                defaultValue={undefined}
                value={filters.titleDeedStatus}
                name="titleDeed"
                onChange={(event) => handleFilterchange("titleDeedStatus", event)}
                data={TitleDeedTypes}
              />
            </div>
          </div>
          <button type="submit" className="w-full sticky bottom-0  border bg-accent p-4 ">Apply</button>
        </form>
      </div>
    </div>
  );
});

if (isDev) {
  Filters.displayName = "Filters";
}

export default Filters;
