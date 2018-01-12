// var admin = require('firebase-admin');
// var serviceAccount = require('../keys/fbsecret/serviceKey.json');
// var databaseURL = 'https://test-73233.firebaseio.com';
//
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: databaseURL
// });
//
// var uid = 1000 ;
//
// admin.auth().getUser(uid)
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log("Successfully fetched user data:", userRecord.toJSON());
//   })
//   .catch(function(error) {
//     console.log("Error fetching user data:", error);
//   });
