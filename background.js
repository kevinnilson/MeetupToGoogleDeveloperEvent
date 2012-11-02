var meetupEventInfo;

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getMeetupEventInfo"){
      sendResponse(meetupEventInfo);
      meetupEventInfo=null; 
    }
});

function done(data){
  console.log('done');
}

function tabCreated(data){
  console.log('tabCreated');
}
  

// Called when a message is passed.  We assume that the content script
// wants to show the page action.
function onRequest(request, sender, sendResponse) {
  if(request && request['meetupEventUrl']){
    console.log('in meetup google+ request='+request);
    meetupEventInfo=request;
       
    chrome.tabs.create({url: 'https://developers.google.com/events/createevent?event_type=event','active':true}, tabCreated);   
  }

  sendResponse({});
};

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);

