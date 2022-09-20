// get iframe content when page loads and insert css to round corners of iframe wrapper

window.onload = function() {
    let myiFrame = document.getElementById("-----VIMEO-URL-REPLACE-NUMBERS-ONLY-----");
    let doc = myiFrame.contentDocument;
    doc.body.innerHTML = doc.body.innerHTML + '<style> .player .vp-video-wrapper{ border-radius: 10px; }  </style>'; }
