var admin = require("firebase-admin");
var serviceAccount = require("./dorna-global-firebase-adminsdk-yiir8-f092db7eac.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const adminDb = admin.Firestore();

export { admin, adminDb };
