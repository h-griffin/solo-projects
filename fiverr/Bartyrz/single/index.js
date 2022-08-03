// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getDatabase, set, push, child as child_db, ref as ref_db, get } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
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
// Create a db reference from our db service
const dbRef = ref_db(getDatabase());


var collectionCountRef = ref_db(db, "collectionCount");


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
// Create a storage reference from our storage service
// const storageRef = ref_storage(storage);
// const imagesRef = ref_storage(storage, "images/");


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




const send = (firstFiveKey, file) => {
       
    const imgPathRef = ref_storage(storage, `${firstFiveKey}/${file.name}` );
    
    return new Promise(resolve => {
        uploadBytes(imgPathRef, file)
            .then((snapshot) => {
                console.log('Uploaded a blob or file!');
            })
            .then(() => {
                getDownloadURL(ref_storage(imgPathRef))
                    .then((url) => {
                        resolve(url);     
                    })
                    .catch((error) => {
                        console.log("error : ", error);
                    });
            }) 
    })
}

// upload optional photo submit to firebase storage
const sendAllImages = async (firstFiveKey) => {
    
    var fileCount = document.getElementById("photos").files.length < 4 ? document.getElementById("photos").files.length : 4;
    var FileUrls= [];

    for(var i = 0; i < fileCount; i++){
        var file = document.getElementById("photos").files[i];
        
        await send(firstFiveKey, file)
            .then((url) => {

                FileUrls.push(url);
            })
    }

    return FileUrls;
    
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

    // get key
    const newSubmissionKey = push(child_db(ref_db(db, "submissions"), 'posts')).key;
    console.log("key", newSubmissionKey);
    
    // trim key
    var firstFiveKey = newSubmissionKey.slice(1, 6);

    // optional photo upload
    if(document.getElementById("photos").files[0]){

        sendAllImages(firstFiveKey).then(function(downloadUrl) { 
            saveSubmission(firstName, lastName, email, itemTypeSelected, durationExchangeDays, itemTitle, itemDescription, contentProvider, firstFiveKey, downloadUrl);
        });
    } else {
        saveSubmission(firstName, lastName, email, itemTypeSelected, durationExchangeDays, itemTitle, itemDescription, contentProvider, firstFiveKey);
    }

}

// listen for form submit
document.getElementById("surveyForm").addEventListener('submit', submitForm);

// save to submissions on firebase
function saveSubmission(firstName, lastName, email, itemTypeSelected, durationExchangeDays, itemTitle, itemDescription, contentProvider, firstFiveKey, downloadUrl=[]) {

    // firebase realtime databse does not hold arrays 
    var downloadUrl1 = downloadUrl[0] ? downloadUrl[0]: "";
    var downloadUrl2 = downloadUrl[1] ? downloadUrl[1]: "";
    var downloadUrl3 = downloadUrl[2] ? downloadUrl[2]: "";
    var downloadUrl4 = downloadUrl[3] ? downloadUrl[3]: "";

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
        firstFiveKey: firstFiveKey,

        downloadUrl1: downloadUrl1, 
        downloadUrl2: downloadUrl2,
        downloadUrl3: downloadUrl3,
        downloadUrl4: downloadUrl4
    }

    console.log("new submission", newSubmission);

    // set review tab values
    document.getElementById('reviewFirstName').innerHTML = firstName
    document.getElementById('reviewLastName').innerHTML = lastName
    document.getElementById('reviewEmail').innerHTML = email
    document.getElementById('reviewItemTypeSelected').innerHTML = itemTypeSelected
    document.getElementById('reviewDurationExchangeDays').innerHTML = durationExchangeDays
    document.getElementById('reviewItemTitle').innerHTML = itemTitle
    document.getElementById('reviewItemDescription').innerHTML = itemDescription
    document.getElementById('reviewContentProvider').innerHTML = contentProvider
    
    document.getElementById('reviewDownloadUrl1').setAttribute('src', downloadUrl1) 
    document.getElementById('reviewDownloadUrl2').setAttribute('src', downloadUrl2)  
    document.getElementById('reviewDownloadUrl3').setAttribute('src', downloadUrl3)  
    document.getElementById('reviewDownloadUrl4').setAttribute('src', downloadUrl4) 

    // activate review tab
    switchTabs(firstFiveKey);

    console.log("save submission success");
    return set(ref_db(db, "submissions/" + firstFiveKey), newSubmission);
     
}

function switchTabs(firstFiveKey){
    // disable form tab
    document.getElementById('link-tab-14b7').ariaSelected = false;
    document.getElementById('link-tab-14b7').classList.remove("active");
    document.getElementById('tab-14b7').ariaSelected = false;
    document.getElementById('tab-14b7').classList.remove("u-tab-active");
    
    // update review page with submission key
    Array.from(document.getElementsByClassName("key")).forEach(
        function(element, index, array) {
            element.innerHTML = firstFiveKey;
        }
    );
    
    // activate review tab
    document.getElementById('link-tab-2917').ariaSelected = true;
    document.getElementById('link-tab-2917').classList.add("active");
    document.getElementById('tab-2917').ariaSelected = true;
    document.getElementById('tab-2917').classList.add("u-tab-active");
    
}







