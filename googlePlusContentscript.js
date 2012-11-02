console.log('is inside Meetup to Google Developer Event Chrome Extension');

chrome.extension.sendRequest({method: "getMeetupEventInfo"}, function(response) {
  console.log(response);
  
  if(response.meetupEventUrl){
    document.getElementById("id_title").value=response.meetupEventTitle;
    
    document.getElementById("id_location").value=response.meetupEventWhere;
    document.getElementById('id_plot_map').checked=true
    
    //document.getElementById("id_date_string").value='2012-11-02'
    document.getElementById("id_time_string").value='6:00 PM'
    //document.getElementById("id_end_date_string").value='2012-11-02'
    document.getElementById("id_end_time_string").value='9:00 PM'
    document.getElementById("id_timezone_name").value='US/Pacific';
    
    document.getElementById("id_icon_url").value="/_static/images/gdg-icon.png";
    
    document.getElementById("id_link").value=response.meetupEventUrl;

    document.getElementById("id_description").value='IMPORTANT: You can indicate interest ' +
    'in the event here.  However, YOU MUST REGISTER SEPARATELY ON THE MEETUP PAGE at: '+
    response.meetupEventUrl;
    
    document.getElementById('id_published').checked=true
  }      
});
