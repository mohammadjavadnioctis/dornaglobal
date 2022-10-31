import React, { FC, FormEvent, memo, useEffect, useState } from "react";
import { DefinedStringSchema } from "yup/lib/string";
import { UiNativeSelect, UiSelect } from "~/lib";
import { IstanbulDistricts } from "~/utils/data";
import { isDev } from "~/utils/helpers";
import { FiltersType } from "~/utils/types";





const Filters: FC = memo(() => {
 
  const initialFilters: FiltersType = {
    address: {
      city: '',
      district: '',
      neighbourhood: ''
    },
    balcony: false,
    dateListed: null,
    floor: null,
    furnished: null,
    heatingSystem: null,
    isInBuildingComplex: null,
    noOfBathRooms: null,
    noOfBedRooms: null,
    price: {
      maxPrice: null,
      minPrice: null
    },
    titleDeedStatus: null,
    usageStatus: null,
    yearBuilt: null,

  }

  const [filters, setFilters] = useState<FiltersType>(initialFilters);

  const handleFilterchange = (name: string, e: any) => {
    console.log("this is the event", e, name);
    // TODO : refactor this part 
    switch (name) {
      case 'district':
        setFilters(prevState => ({...prevState, address: {...prevState?.address!, district: e }} ))
        break;
      case 'neighbourhood':
        setFilters(prevState => ({...prevState, address: {...prevState?.address!, neighbourhood: e }} ))
      default:
        break;
    }
 
    // setFilters(prevState => ( { ...prevState } ))
  };

  

  useEffect(() => {
    console.log("filters changed: ", filters);
  }, [filters]);

  return (
    <div>
      <div className="adress_forms">

      <div className="form_input_section ">
        <label className="text-xs">District:</label>
        <UiSelect
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
        />
      </div>
      </div>
    </div>
  );
});

if (isDev) {
  Filters.displayName = "Filters";
}

export default Filters;
