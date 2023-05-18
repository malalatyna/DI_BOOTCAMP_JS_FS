// Exercise 3 : Fortune Teller
//Create a self invoking function that takes 4 arguments: 
//number of children, partner’s name, geographic location, job title.
//The function should display in the DOM a sentence

(function (nbrChildren, partnerName, locationGeo, jobTitle) {
  const sentence = (`You will be a ${jobTitle} in ${locationGeo}, and married to ${partnerName} with ${nbrChildren} kids.`);
  document.getElementById('textId').textContent=sentence;
 
})(2, "Kelly", "Los Angeles","doctor")

