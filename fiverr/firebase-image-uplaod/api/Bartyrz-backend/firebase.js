const admin = require('firebase-admin')
const firebase = require("firebase-admin");

 require("firebase-admin/storage")

const firebaseConfig = {
  type: "service_account",
  project_id: "bartyrz-db",
  private_key_id: "07f388fb7a91df047dd5a8a09f4644a67f6379f7",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDOc0jamZoyGL75\nIlb3YAoI7BhTmbE+dHLBs2nnDSXhXCDE/GEIZTTGY+/yP3Po9lwuBZqD2Uf98CLI\nKhNBoeRgYPjRgyjOz2EGU3liU5SUGmF4mNa+mfMeF55/eIQzTD+rxCv8/pTpYQRm\njLMynDzM8ZfreIbmk+ZO9qN8NRRdR5orG5H+9w1UbDjGupyAnmmLEa0wbi0nOOwe\nGcoI4SDJSGyHgO7B+ZHP94VVp9wpGJGTNrNGng90HW3xwalD7nURRaYn823+NKpT\nH7cnZ2k1iRGazXxVXb3PF4D8Ae3BVDSDBm5NRKLSJvuxgQV4zz/2zZfIVe1qUapq\nJohyCl1lAgMBAAECggEAA1oLzMDBqB6Ouyy7jLiacRqkKndMUV9CnbJz/bRQ8R+1\nyHzwdlpuSOpGcwBkuVuGk5izsYBNkunbJrTIK0CdnJL2dzBR8UmcoaWpStdgiicD\nfhm9IssND2gCwr8KJmsOfZNpw2m+sStKDwApyKCQvCMP/Fqwlf3At3d5oAKcmgcQ\nGpfyjXtVf53CIgR3MVvRDT+FZj81mj+GM89hyUoXgjVBgZqqjhXj8Y9u4AuurIM9\n2GYnyBTPyTxIFX/FLwcAR4obsQDzlem3ztHzRtE8GlZT+M8dx8Zz0vjTjNtp+ncJ\nW0X3EKx1a/wAwyCWZZ7FZTE7YZq0uDizRTzM0S6iAQKBgQDoY+i0SVSWvICgmInQ\ntxtRMzbyPRjhWiCNKZMz19osMgbo/VHCjN9ANoTcVmGsE+A4c/PIyMw4lnVHLPTH\nezexyhi0rnZ/2Ca69I4g8e1ZXQUxHvJgzPgJzT3HJZZ/8BXLgGsmkjXRWiTt5ncu\niewgOwT0mjiQk9r5wdmj/RgQlQKBgQDjbLhdXZoMBNnZrZC+1kL/EH+gikjSL/Ow\n63uduq442XpdUVxeEllZbkoiYr/CUlpta0qSX9elSmR3LrM2w9uAQsBgXWxtdZ7Y\nJGa8hTvD6y2qy/R4MMMnJzpSdIDh0P/lkTSz2QHNgzbOe8vg/QrRyZZ0TV81ox1O\n/PmhkunVkQKBgGrwPs9nx0MuL0q3pwOinzF4jdpe/yoEXWJYNWLv+3fG9aMVnyAV\nz04vSGhUX9Hdu5p+0ToeHMwVgJZmO6XoL7Liuwe6GNGv1/LEQvsqGPy8b30xLnwZ\nFjL8fWc9BsqM4pqo16YCNj3Ga6QGH+YMldonDpq4tTriryurZsmt1/sZAoGAM3H/\njpdC5p8eTKB3ksPTKfGofT9q06knPgk20GpPSOrhRETIWTtbXOCXAopGCIYqkH/p\nwYzOskROz6sPvT6245+19taLVYN66DfryY92Ao6rqOw0JBAbxTqZddeG5A4sJNkh\nC+H2B3A8MJ9OclmrXeN1Fl/+PprkYV7WdVdPcBECgYBt5K8DqLggXdWUzzoRx3UA\nwv9B9fr/nym22pEmID9Bvrm5Y5Ctaye6pf/p7liV7Fbznk93TqbZNGUQYcQRVVJg\naWPgkqEEGjFcFVt4Gjo9/NzKECbWhNuNyFd7ooI6SjfJx0GQaKdq/Hv1ho9Onqpk\nUIiBozTeerSOsyIcKb1QeA==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-5ehmd@bartyrz-db.iam.gserviceaccount.com",
  client_id: "107960370272345461786",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5ehmd%40bartyrz-db.iam.gserviceaccount.com",

    storageBucket: "bartyrz-db.appspot.com",

     
};

const db = firebase.initializeApp({
  credential: firebase.credential.cert(firebaseConfig),
});


module.exports = db;
