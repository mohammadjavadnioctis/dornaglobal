import React, { FC, memo, useEffect, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiAutoComplete, UiNativeSelect, UiTextinput } from "~/lib";
import { AddressSampleData } from "~/utils/data";
import { isDev } from "~/utils/helpers";
import { collection, where, getDocs, query} from "firebase/firestore"; 
import { db } from "~/utils/config/firebase";
import { CityType, DistrictType, NeighbourHoodType } from "~/utils/types";
import { createStyles } from "@mantine/core";
import { useSearchProperties } from "~/contexts/SearchPropertiesContext";



interface AddressInputProps {
  wrapperClassNames?: string
}


interface CityDataTypeForTheInput {
  value: (radix?: number | undefined) => string;
    label: string;
    CityID: number;
    CountyID: number;
    PhondeCode: string;
    PlateNo: string;
    CityName: string;
    id: string;
}[]
 

const myStyles = createStyles(theme => ({
  dropDown: {
    height: '400px',
    overflowY: 'scroll'
  
  }
}) )

const AddressInput: FC<AddressInputProps> = memo((props) => {





const {wrapperClassNames} = props
  const {classes} = myStyles()
  
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


  const {filters: {address}, setFilters, filters, handleFilterchange} = useSearchProperties()
  const [citiesList, setCitiesList] = useState<CityType[]>()
  const [citiesForTheSelectComp, setCitiesForTheSelectComp] = useState<CityDataTypeForTheInput[]>()

  const [fetchedDistricts, setFetchedDistricts] = useState<DistrictType[]>()
  const [districtsForSelectComp, setDistrictsForSelectComp] = useState<DistrictType[]>()

  const [fetchedNeighbourHoods, setFetchedNeghbourHoods ] = useState<NeighbourHoodType[]>()
  const [neighbourhoodsForSelectComp, setNeighbourhoodsForSelectComp] = useState<NeighbourHoodType[]>()

    const handleChangeForCityInput = (value: string) => {
     
      // const value = event.currentTarget.value
      // const inputName = event.currentTarget.name
      // setDetails(prevState => ({...prevState , address: {...prevState.address , [inputName]: value } }  ))
    //   setFilters(prevState => ({...prevState , address: {...prevState?.address , city: value } }  ))
    }

    const handleChangeForDistrictInput = (value: string) => {   
        // setFilters(prevState => ({...prevState , address: {...prevState.address , district: value } }  ))
    }

    const handleChangeForNeighbourHoodInput = (value: string) => {      
        // setFilters(prevState => ({...prevState , address: {...prevState.address , neighbourhood: value } }  ))
    }

    // TODO: fetches should not happen until the drop down is open
    const fetchCitiesList = async () => {

      try{
        const q = query(
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
        const cityID = citiesForTheSelectComp?.filter(city => city.CityName === address?.city)[0]?.PlateNo

        console.log('this is the, cityId',cityID)
        if(cityID){
          const q = query(
            collection(db, "districtsV2"),
            where('ilce_sehirkey','==',parseInt(cityID))
            );
            const fetchedDistricts = await getDocs(q);
            const theData = fetchedDistricts.docs.map((doc) => ({
                  ...doc.data(),
                  id: doc.id,
                }));
                setFetchedDistricts(theData as unknown as DistrictType[])

        }
      }catch(error){
        console.log('this is error', error)
      }
    }


    const fetchNeighBourhoods = async () => {
      try{
        // find corresponding districts's ID
        const districtId = districtsForSelectComp?.filter(district => district.ilce_title === address?.district)[0]?.ilce_key
        console.log('neighbourhood : this is districtId, ', districtId, 'districtsForSelectComp', districtsForSelectComp,'address.neidistrictghgou', address?.district)
        if(districtId){
          const q = query(
            collection(db, "neighboursV2"),
            where('mahalle_ilcekey','==', districtId)
            );
            const fetchedNeighBourHoods = await getDocs(q);
            const theData = fetchedNeighBourHoods.docs.map((doc) => ({
                  ...doc.data(),
                  id: doc.id,
                }));
                setFetchedNeghbourHoods(theData as unknown as NeighbourHoodType[])
                console.log('neighbourhood : theData for neightbourhood', theData)
        }
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
   const list =  fetchedDistricts?.map(district => ({...district, value: district.ilce_title}))
   setDistrictsForSelectComp(list as unknown as DistrictType[])
  } ,
  [fetchedDistricts])
  useEffect(() => {
   const list =  fetchedNeighbourHoods?.map(neighbourhood => ({...neighbourhood, value: neighbourhood.mahalle_title}))
   setNeighbourhoodsForSelectComp(list as unknown as NeighbourHoodType[])
  } ,
  [fetchedNeighbourHoods])

  useEffect(() => {
    fetchDistrictsList()
  } ,
  [address?.city])


  useEffect(() => {
    fetchNeighBourhoods()
  },[address?.district])


  useEffect(() => {
    console.log('filters', filters)
  },[filters])
  useEffect(() => {
    console.log('fetchedDistricts', fetchedDistricts)
  },[fetchedDistricts])
  useEffect(() => {
    console.log('districtsForSelectComp ', districtsForSelectComp)
  },[districtsForSelectComp])

  return (
    <div className={`${wrapperClassNames}`}>
      <h4>AddressInput</h4>
      <div className={`form_container flex flex-col space-y-6 mt-3`}>
        {/* <UiNativeSelect
          value={address?.city}
          onChange={(event) => handleChange(event)}
          data={AddressSampleData.cities}
          name="city"
        /> */}
        <UiAutoComplete
          value={address?.city ?? undefined}
          onChange={(event) => handleFilterchange("city", event)} 
          // @ts-ignore
          data={citiesForTheSelectComp ?? AddressSampleData.cities}
          name="city"
          limit={85}
          classNames={{dropdown: classes.dropDown}}
        />
        <UiAutoComplete
          value={address?.district ?? undefined}
        //   onChange={(event) => handleChangeForDistrictInput(event)}
        onChange={(event) => handleFilterchange("district", event)} 
          // @ts-ignore
          data={ districtsForSelectComp ?? AddressSampleData.districts}
          name="district"
          classNames={{dropdown: classes.dropDown}}
          limit={200}

        />
        <UiAutoComplete
          value={address?.neighbourhood ?? undefined}
          onChange={(event) => handleFilterchange("neighbourhood", event)}
          // @ts-ignore
          data={ neighbourhoodsForSelectComp ?? AddressSampleData.neighbourhoods}
          name='neighbourhood'
          classNames={{dropdown: classes.dropDown}}
          limit={200}

        />
      </div>
    </div>
  );
});


if(isDev){
  AddressInput.displayName = 'AddressInput'
}


export default AddressInput;