importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBjuN_EgbdGNDrjui6Pn4LslW5pP-R9kLc",
    authDomain: "alphaalert-dcf6e.firebaseapp.com",
    databaseURL: "https://alphaalert-dcf6e.firebaseio.com",
    projectId: "alphaalert-dcf6e",
    storageBucket: "alphaalert-dcf6e.appspot.com",
    messagingSenderId: "932377411850",
    appId: "1:932377411850:web:5fc636d7df15431751baf3",
    measurementId: "G-X14JH0BPKS"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Emergency Alert';
    const notificationOptions = {
        body: 'This is an Emergency from John Doe',
        icon: '/firebase-   logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
