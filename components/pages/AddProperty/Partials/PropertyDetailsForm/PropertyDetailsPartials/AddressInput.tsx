import React, { FC, memo, useEffect, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiAutoComplete, UiNativeSelect, UiTextinput } from "~/lib";
import { AddressSampleData } from "~/utils/data";
import { isDev } from "~/utils/helpers";
import { collection, where, getDocs, query} from "firebase/firestore"; 
import { db } from "~/utils/config/firebase";
import { CityType } from "~/utils/types";



interface AddressInputProps {
  wrapperClassNames?: string
}


interface CityDataTypeForTheInput {
  value: (radix?: number | undefined) => string;
    label: string;
    CityID: number;
    CountyID: number;
    PhondeCode: string;
    PateNo: string;
    CityName: string;
    id: string;
}[]
 


const AddressInput: FC<AddressInputProps> = memo((props) => {
const {wrapperClassNames} = props

  
  // const [address, setAddress] = useState({
  //   city: undefined,
  //   district: undefined,
  //   neighbourhood: undefined
  // })

  // const handleSelect = (event: any) => {
  //   console.log('this is e: ', event)
  //   let value = event.currentTarget.value
  //   let inputName = event.currentTarget.name
  //   setAddress(prevState => { return { ...prevState, [inputName]: value } })
  // }


  const {details: {address}, setDetails, details} = usePropertyContext()
  const [citiesList, setCitiesList] = useState<CityType[]>()
  const [citiesForTheSelectComp, setCitiesForTheSelectComp] = useState<CityDataTypeForTheInput[]>()

  const [fetchedDistricts, setFetchedDistricts] = useState()


    const handleChangeForCityInput = (value: string) => {
     
     console.log('this is event: ', value)
      // const value = event.currentTarget.value
      // const inputName = event.currentTarget.name
      // setDetails(prevState => ({...prevState , address: {...prevState.address , [inputName]: value } }  ))
      setDetails(prevState => ({...prevState , address: {...prevState.address , city: value } }  ))
    }

    const handleChangeForDistrictInput = (value: string) => {   
      setDetails(prevState => ({...prevState , address: {...prevState.address , city: value } }  ))
    }

    const handleChangeForNeighbourHoodInput = (value: string) => {      
      setDetails(prevState => ({...prevState , address: {...prevState.address , city: value } }  ))
    }

    // TODO: fetches should not happen until the drop down is open
    const fetchCitiesList = async () => {

      try{
        const q = await query(
          collection(db, "citiesData"));
          const fetchedCity = await getDocs(q);
          const theData = fetchedCity.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
              setCitiesList(theData as unknown as CityType[])
      }catch(error){
        console.log('this is error', error)
      }
    }


    const fetchDistrictsList = async () => {
      try{
        // find corresponding city's ID
        const cityID = citiesForTheSelectComp?.filter(city => city.CityName === address?.city)
        const q = query(
          collection(db, "districts"),
          where('CityID','==', cityID)
          );
          const fetchedDistricts = await getDocs(q);
          const theData = fetchedDistricts.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
              setCitiesList(theData as unknown as CityType[])
      }catch(error){
        console.log('this is error', error)
      }
    }

  useEffect(() => {
    fetchCitiesList()
  }, [
    address
  ])


  useEffect(() => {
   const list =  citiesList?.map(city => ({...city, value: city.CityName}))
   setCitiesForTheSelectComp(list as unknown as CityDataTypeForTheInput[])
  } ,
  [citiesList])

  useEffect(() => {

  } ,
  [citiesForTheSelectComp])

  useEffect(() => {
    console.log('details', details)
  },[details])

  return (
    <div className={`${wrapperClassNames}`}>
      <h4>AddressInput</h4>
      <div className={`form_container grid grid-cols-3 gap-4`}>
        {/* <UiNativeSelect
          value={address?.city}
          onChange={(event) => handleChange(event)}
          data={AddressSampleData.cities}
          name="city"
        /> */}
        <UiAutoComplete
          value={address?.city}
          onChange={(event) => handleChangeForCityInput(event)}
          // @ts-ignore
          data={citiesForTheSelectComp ?? AddressSampleData.cities}
          name="city"
        />
        <UiAutoComplete
          value={address?.district}
          onChange={(event) => handleChangeForDistrictInput(event)}
          data={AddressSampleData.districts}
          name="district"
        />
        <UiAutoComplete
          value={address?.neighbourhood}
          onChange={(event) => handleChangeForNeighbourHoodInput(event)}
          data={AddressSampleData.neighbourhoods}
          name='neighbourhood'
        />
      </div>
    </div>
  );
});


if(isDev){
  AddressInput.displayName = 'AddressInput'
}


export default AddressInput;
