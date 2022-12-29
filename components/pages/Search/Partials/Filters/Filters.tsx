import React, { FC, FormEvent, memo, useEffect, useState } from "react";
import { DefinedStringSchema } from "yup/lib/string";
import { defaultCurrency } from "~/app.config";
import { useSearchProperties } from "~/contexts/SearchPropertiesContext";
import { UiNativeSelect, UiNumberInput, UiSelect } from "~/lib";
import { IstanbulDistricts, TitleDeedTypes } from "~/utils/data";
import { isDev } from "~/utils/helpers";
import { FiltersType } from "~/utils/types";
import AddressInput from "../AddressInput/AddressInput";
import FloorNoFilterInput from "./Partials/FloorNoFilterInput";
import MinMaxPrice from "./Partials/MinMaxPrice";
import NoOfBathRoomsFilterInput from "./Partials/NoOfBathRoomsFilterInput";
import NoOfBeroomsFilterInput from "./Partials/NoOfBeroomsFilterInput";
import TitleDeedStatusFilterInput from "./Partials/TitleDeedStatusFilterInput";

const Filters: FC = memo(() => {

  const { filters, setFilters, fetchBasedOnFilters, handleFilterchange } = useSearchProperties()

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

  const handleFiltersSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchBasedOnFilters()
  }

  return (
    <div className="hidden md:inline-block">
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

          <MinMaxPrice />
          <NoOfBeroomsFilterInput />
          <NoOfBathRoomsFilterInput />
          <FloorNoFilterInput />
         <TitleDeedStatusFilterInput />
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
