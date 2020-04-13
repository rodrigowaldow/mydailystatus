const admin = require("firebase-admin");
const secret = require("./firebase-secret.json");
const { GeoFirestore } = require("geofirestore")

admin.initializeApp({
  credential: admin.credential.cert(secret)
})

const db = admin.firestore();
const dbGeo = new GeoFirestore(db);

dbGeo
  .collection("test").add({
      test: 1,
      coordinates: new admin.firestore.GeoPoint(-20.218990, -45.939060)
  })
  .then(() => {
      console.log("ok");
  })