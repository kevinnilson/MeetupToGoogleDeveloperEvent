window.addEventListener("message", function(event) {
  chrome.extension.sendRequest(event.data, function(response) {});
}, false);
      

console.log('is inside Meetup to Google+ Event Chrome Extension');

if(document.getElementById('event-title')){
  var event = {};
  
  var protocol = window.location.protocol;
  var host = window.location.host;
  var pathname = window.location.pathname;
  
  event.meetupEventUrl = protocol + '://' +host + '/' + pathname;
  event.meetupEventTitle = document.getElementById('event-title').innerText;
  event.meetupEventWhen = document.getElementById('event-when-display').innerText;
  event.meetupEventWhere = document.getElementById('event-where-display').innerText;
  event.meetupEventDescription = document.getElementById('event-description-wrap').innerText;
  
  
  console.log(event);
  var clickString = 'document.defaultView.postMessage('+JSON.stringify(event)+', "*");';
  console.log(clickString);
  button = document.createElement('button');
  button.setAttribute('onclick', clickString);
  button.appendChild(document.createTextNode("Add Google Developer Event"));

  document.getElementById('event-title').appendChild(button);
  
} else {
  // No match was found.
}