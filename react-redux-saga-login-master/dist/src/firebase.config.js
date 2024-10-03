'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _firebaseConfig=require('../../../../firebase.config.json');// uncomment the line below when under development
// const FIREBASE_PROJECT = process.env.npm_config_firebase_project;
// const FIREBASE_API_KEY = process.env.npm_config_firebase_api_key;
// const FIREBASE_ID = process.env.npm_config_firebase_id;
exports.default={apiKey:_firebaseConfig.FIREBASE_API_KEY,authDomain:_firebaseConfig.FIREBASE_PROJECT+'.firebaseapp.com',databaseURL:'https://'+_firebaseConfig.FIREBASE_PROJECT+'.firebaseio.com',projectId:_firebaseConfig.FIREBASE_PROJECT,storageBucket:_firebaseConfig.FIREBASE_PROJECT+'.appspot.com',messagingSenderId:_firebaseConfig.FIREBASE_ID};// uncomment the line below when build