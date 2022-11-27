import React, { FC, memo, useEffect, useState } from "react";
import { UiNativeSelect, UiTextinput } from "~/lib";
import { AddressSampleData } from "~/utils/data";

interface AddressInputProps {
  wrapperClassNames?: string
}



const AddressInput: FC<AddressInputProps> = memo((props) => {
const {wrapperClassNames} = props


  const [address, setAddress] = useState({
    city: undefined,
    district: undefined,
    neighbourhood: undefined
  })

  const handleSelect = (event: any) => {
    console.log('this is e: ', event)
    let value = event.currentTarget.value
    let inputName = event.currentTarget.name
    setAddress(prevState => { return { ...prevState, [inputName]: value } })
  }

  useEffect(() => {
    console.log('address changed: ', address)
  }, [
    address
  ])

  return (
    <div className={`${wrapperClassNames}`}>
      <h4>AddressInput</h4>
      <div className={`form_container grid grid-cols-3 gap-4`}>
        <UiNativeSelect
          value={address.city}
          onChange={(event) => handleSelect(event)}
          data={AddressSampleData.cities}
          name="city"
        />
        <UiNativeSelect
          value={address.district}
          onChange={(event) => handleSelect(event)}
          data={AddressSampleData.districts}
          name="district"
        />
        <UiNativeSelect
          value={address.neighbourhood}
          onChange={(event) => handleSelect(event)}
          data={AddressSampleData.neighbourhoods}
          name='neighbourhood'
        />
      </div>
    </div>
  );
});



export default AddressInput;