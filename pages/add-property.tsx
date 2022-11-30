import { GetServerSideProps } from 'next';
import React, { FC, memo } from 'react'
import AddPropertyPage from '~/components/pages/AddProperty/AddPropertyPage'
import { isDev } from '~/utils/helpers'
import nookies from 'nookies'
import { admin, adminDb } from "~/utils/config/firebaseAdmin";
import { collection, doc, setDoc } from "firebase/firestore"; 
import { AddPropertyContext, AddPropertyProvider } from '~/contexts/AddPropertyContext';


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let propsCookies: any;
  let data: any;
    // const propertiesRef = doc(collection(adminDb, "properties"));
    // data = propertiesRef
    let ref = adminDb.collection("testproperties").doc();
    let id = ref?.id
    return { props: { id } };
  
}


export interface AddPropertyType {
  id: string
}



const AddProperty: FC<AddPropertyType> = memo(

  (props) => {
    const {id} = props
    console.log('this is the props from the add property page: ', props)
    return (
      <div>
        <AddPropertyProvider>
          <AddPropertyPage {...props}/>
        </AddPropertyProvider>
      </div>
    )
  }
)

if (isDev) {
  AddProperty.displayName = "add-property"
}

export default AddProperty