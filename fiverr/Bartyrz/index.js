// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getDatabase, set, push, child as child_db, ref as ref_db, update } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
// import { getStorage, ref } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-storage.js";
import { getStorage, ref as ref_storage, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBr6P0zPSzDKIVnH8V3GGo9oz-hBcgjJnk",
    authDomain: "bartyrz-fiverr.firebaseapp.com",
    projectId: "bartyrz-fiverr",
    storageBucket: "bartyrz-fiverr.appspot.com",
    messagingSenderId: "822646118171",
    appId: "1:822646118171:web:83440736db398f28b6e5be",

    databaseURL: "https://bartyrz-fiverr-default-rtdb.firebaseio.com/",
    storageBucket: "gs://bartyrz-fiverr.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize RealtimeDatabase and get a reference to the service
const db = getDatabase(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
// Create a storage reference from our storage service
const storageRef = ref_storage(storage);
const imagesRef = ref_storage(storage, "images/");


// ======================================

//  -- storage --
//  images
    // sgsdgsdgs
    // sbsdbsbf

    
// -- realtime db -- 
// submissions
    // id
        // data
        // storage download url
    
// ======================================

// insert referr website
document.addEventListener('DOMContentLoaded', function () {
    const linkOfTheWebsiteUserCame = document.referrer.split('/')[2];
    document.getElementById('referrWebsite').innerHTML = linkOfTheWebsiteUserCame;
    
    document.getElementById('contentProvider').value = linkOfTheWebsiteUserCame;
  }, false);
 
// quickly get values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// upload optional photo submit to firebase storage
function uploadimage(){

    return new Promise(resolve => {
        var file = document.getElementById("photos").files[0];
        const imgPathRef = ref_storage(storage, "images/" + file.name);

        uploadBytes(imgPathRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        }).then(() => {
            getDownloadURL(ref_storage(imgPathRef))
            .then((url) => {
                // show img on page
                // document.getElementById('myimg').setAttribute('src', url);

                resolve(url);
            })
            .catch((error) => {
                console.log("error : ", error);
            });
        }) 
    })
}
 

// form submission handler
async function submitForm (e) {
    e.preventDefault();

    // get values
    var firstName = getInputVal('firstName');
    var lastName = getInputVal('lastName');
    var email = getInputVal('email');
    var itemTypeSelected = document.querySelector('input[name="typeOfItem"]:checked').value;
    var durationExchangeDays = getInputVal('durationExchangeDays');
    var itemTitle = getInputVal('itemTitle');
    var itemDescription = getInputVal('itemDescription');
    var contentProvider = getInputVal('contentProvider');

    // optional photo upload
    if(document.getElementById("photos").files[0]){
        uploadimage().then(function(downloadUrl) { 
            saveSubmission(firstName, lastName, email, itemTypeSelected, durationExchangeDays, itemTitle, itemDescription, downloadUrl, contentProvider);
        });
    } else {
        saveSubmission(firstName, lastName, email, itemTypeSelected, durationExchangeDays, itemTitle, itemDescription, contentProvider);
    }

}

// listen for form submit
document.getElementById("surveyForm").addEventListener('submit', submitForm);

// save to submissions on firebase
function saveSubmission(firstName, lastName, email, itemTypeSelected, durationExchangeDays, itemTitle, itemDescription, downloadUrl="", contentProvider) {

    // new entry
    const newSubmission = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        itemTypeSelected: itemTypeSelected,
        durationExchangeDays: durationExchangeDays,
        itemTitle: itemTitle,
        itemDescription: itemDescription,
        contentProvider: contentProvider,
        downloadUrl: downloadUrl ? downloadUrl : "",
    }
    console.log("new submission", newSubmission);

    // get key
    const newSubmissionKey = push(child_db(ref_db(db, "submissions"), 'posts')).key;
    console.log("key", newSubmissionKey);

    // activate review tab
    switchTabs(newSubmissionKey);

    console.log(" save submission success");
    return set(ref_db(db, "submissions/" + newSubmissionKey), newSubmission);
     
}

function switchTabs(newSubmissionKey){
    // disable form tab
    document.getElementById('link-tab-14b7').ariaSelected = false;
    document.getElementById('link-tab-14b7').classList.remove("active");
    document.getElementById('tab-14b7').ariaSelected = false;
    document.getElementById('tab-14b7').classList.remove("u-tab-active");
    
    // update review page with submission key
    Array.from(document.getElementsByClassName("key")).forEach(
        function(element, index, array) {
            element.innerHTML = "key" + newSubmissionKey;
        }
    );
    
    // activate review tab
    document.getElementById('link-tab-2917').ariaSelected = true;
    document.getElementById('link-tab-2917').classList.add("active");
    document.getElementById('tab-2917').ariaSelected = true;
    document.getElementById('tab-2917').classList.add("u-tab-active");
    
}






