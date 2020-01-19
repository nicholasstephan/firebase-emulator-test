/* global expect it */

const functions = require('./index.js');
const admin = require('firebase-admin'); 
// admin.initializeApp() called in index.js


it("tests a firebase function", done => {
  
  
  // Set initial test conditions in database/firestore/etc.
  
  admin.database().ref("foo").set("bar");
  
  
  // Stub request and response handler for firebase function.
  
  const req = { query: {key: "foo"} };
  const res = {
    status: code => {
      expect(code).toBe(200);
      return res;
    },
    send: value => {
      expect(value).toBe("bar");
      done();
    }
  };
  
  
  // Run firebase function.
  
  functions.test(req, res);
  
});