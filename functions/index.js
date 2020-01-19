const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.test = functions.https.onRequest(async (req, res) => {
  
  const key = req.query.key;
  
  const data = await admin.database()
    .ref(key)
    .once('value')
    .then(s => s.val());
    
  // do something with data...
  
  res.status(200).send(data);
   
});