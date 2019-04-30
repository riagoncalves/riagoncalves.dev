"use strict";
/*global document: false */

function loadIgPicture() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.querySelector('.ig-profile').src = JSON.parse(this.responseText).data.profile_picture;
    }
  };
  xhttp.open("GET", "https://api.instagram.com/v1/users/3308902477/?access_token=3308902477.70637ff.65f32e6d0998400c840a50cb55b09140", true);
  xhttp.send();
}

function init() {
  loadIgPicture();
}

function ready() {
  if (document.readyState === 'complete') {
    init();
  } else {
      document.addEventListener('DOMContentLoaded', init);
  }

}

ready();

