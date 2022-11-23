import * as admin from 'firebase-admin'
// var serviceAccount = require("./dorna-global-firebase-adminsdk-yiir8-f092db7eac.json");

if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // @ts-ignore
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
      })
    }); 
  }
  
  const adminDb = admin.firestore();

//   export { adminDb };
// const adminDb = admin.Firestore();

export { admin, adminDb };
