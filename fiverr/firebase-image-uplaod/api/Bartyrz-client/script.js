
import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getStorage, ref as ref_storage, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-storage.js";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCr4fQriL5RnMn5g1kmmOnkdq8Vg8xFs8s",
    authDomain: "bartyrz-db.firebaseapp.com",
    projectId: "bartyrz-db",
    storageBucket: "bartyrz-db.appspot.com", // <<<
    messagingSenderId: "260235828916",
    appId: "1:260235828916:web:4ab696bdd88d9ee0fc81e1",
    measurementId: "G-6CP3H6HCPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


const submissionId = nanoid(5);
const send = (submissionId, imgnum, file) => {
    console.log("sending...", submissionId)
    const imgPathRef = ref_storage(storage, `${submissionId}/${imgnum}/${file.name}` );

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


// the selector will match all input controls of type :checkbox
// and attach a click event handler
$("input:checkbox").on("click", function () {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});

//Image upload

// let imagesArray = [null, null, null, null];
let fileUrls=[]

async function readFile1 () {
  if (!this.files || !this.files[0]) return;
 
    await send(submissionId, 1, this.files[0])
        .then((url) => {
            console.log("response url", url);
            // show img
            document.querySelector(`#img-1`).src = url;
            fileUrls.push(url);
        })
}

async function readFile2() {
    if (!this.files || !this.files[0]) return;
 
    await send(submissionId, 2, this.files[0])
        .then((url) => {
            console.log("response url", url);
            // show img
            document.querySelector(`#img-2`).src = url;
            fileUrls.push(url);
        })
}

async function readFile3() {
    if (!this.files || !this.files[0]) return;
 
    await send(submissionId, 3, this.files[0])
        .then((url) => {
            console.log("response url", url);
            // show img
            document.querySelector(`#img-3`).src = url;
            fileUrls.push(url);
        })
}

async function readFile4() {
    if (!this.files || !this.files[0]) return;
 
    await send(submissionId, 4, this.files[0])
        .then((url) => {
            console.log("response url", url);
            // show img
            document.querySelector(`#img-4`).src = url;
            fileUrls.push(url);
        })
}

document.querySelector(`#file-input-1`).addEventListener("change", readFile1);
document.querySelector(`#file-input-2`).addEventListener("change", readFile2);
document.querySelector(`#file-input-3`).addEventListener("change", readFile3);
document.querySelector(`#file-input-4`).addEventListener("change", readFile4);

let websiteURL = document.referrer.toString();
let websiteName = ''
console.log(websiteURL);
if (websiteURL.startsWith("www")) {
  websiteName = websiteURL.split(".");
  document.getElementById("website-name").textContent = websiteName[2];
  document.getElementById("website-name-1").value = websiteName[2];
} else {
  websiteName = websiteURL.split("/");
  document.getElementById("website-name").textContent = websiteName[2];
  document.getElementById("website-name-1").value = websiteName[2];
}

//Submission + Validation

function submitForm(event) {
  event.preventDefault();
  document.getElementById(
    "submit-btn"
  ).innerHTML = `<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>`;
  document.getElementById("submit-btn").setAttribute("disabled", true);
  //Load input values into variables
  let itemContribution = document.querySelector(
    "input[type=checkbox]:checked"
  ).value;
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let duration = document.getElementById("days").value;
  let itemTitle = document.getElementById("item-title").value;
  let itemDesc = document.getElementById("item-desc").value;
  console.log(itemDesc);
  let imagesId = submissionId;
  let downloadUrlsArray = [];
  fileUrls.forEach((image) => {
    if (image !== null) {
      downloadUrlsArray.push(image);
    }
  });
  if (itemContribution != null) {
    const data = {
      itemContribution: itemContribution,
      firstName: firstName,
      lastName: lastName,
      email: email,
      duration: duration,
      itemTitle: itemTitle,
      itemDesc: itemDesc,
      downloadUrlsArray: downloadUrlsArray,
      imagesId: imagesId,
      contentProvider: websiteName[2],
    };
    try {
      fetch("https://shrouded-sands-88939.herokuapp.com/bartyrz/addSubmission", {
    //   fetch("http://localhost:3000/bartyrz/addSubmission", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          document.getElementById("serial-id").textContent = data.submission.id;
          document.getElementById("serial-id-ship").textContent =
            data.submission.id;
          document.getElementById("serial-id-mail").textContent =
            data.submission.id;
          document.getElementById("typeOfItem").textContent =
            data.submission.itemContribution.toString();
          document.getElementById("itemName").textContent =
            data.submission.itemTitle;
          document.getElementById("itemDesc").textContent =
            data.submission.itemDesc;
          document.getElementById("website-name-2").textContent =
            websiteName[2];
          for (let i = 0; i < fileUrls.length; i++) {
            document.getElementById(
              "images-row"
            ).innerHTML += `<img src=${fileUrls[i]} height="150px" width="150px" style="padding:10px;"/>`;
          }
        })
        .catch((error) => console.log(error))
        .finally(() => {
          document.getElementById("fname").value = "";
          document.getElementById("lname").value = "";
          document.getElementById("email").value = "";
          document.getElementById("days").value = "";
          document.getElementById("item-title").value = "";
          document.getElementById("item-desc").value = "";
          document.getElementById("submit-btn").removeAttribute("disabled");
          document.getElementById("submit-btn").innerHTML = "Button";
          document.querySelector(`#img-1`).src =
            "https://img.icons8.com/clouds/100/000000/image.png";
          document.querySelector(`#img-2`).src =
            "https://img.icons8.com/clouds/100/000000/image.png";
          document.querySelector(`#img-3`).src =
            "https://img.icons8.com/clouds/100/000000/image.png";
          document.querySelector(`#img-4`).src =
            "https://img.icons8.com/clouds/100/000000/image.png";
            downloadUrlsArray = [];
          document.querySelector("#link-tab-2917").click();
        });
    } catch (error) {
      console.log(error);
    }
  }
}
document.getElementById("form").addEventListener("submit", (event) => {
  submitForm(event);
});
