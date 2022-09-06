// const nanoidEsm = require("nanoid-esm");
const firebase = require("../firebase");
const Submission = require("../models/submission");

const db = require('../index');
const firestore = firebase.firestore();


const addSubmission = async (req, res) => {
    console.log("body", req.body);

  try {
    let data = req.body;
    data = { id: data.imagesId, ...data };
    await firestore.collection("submissions").doc().set(data);
    res.status(200).send({
      message: "Submission Inserted Successfully",
      submission: data,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};


module.exports = {
  addSubmission,
};
