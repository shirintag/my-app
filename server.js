var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyBLr5OYAIDjyGiDaJbkg3VffbRby8Fn4tY",
    authDomain: "new-app-test-firebase.firebaseapp.com",
    databaseURL: "https://new-app-test-firebase.firebaseio.com",
    projectId: "new-app-test-firebase",
    storageBucket: "new-app-test-firebase.appspot.com",
    messagingSenderId: "348291113886"
};

firebase.initializeApp(config);

var ref = firebase.app().database().ref();
ref.once('value')
    .then(function (snap) {
        console.log('snap.val() ', snap.val());
    });