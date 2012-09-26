function hideAnnouncement(key) {
  createCookie(key, 'hidden', 365);
  var dom = $("#" + key);
  if (dom.parent().children().size() <= 1) {
    dom.parent().slideUp();
  } else {
    dom.slideUp();
  };
}

// http://www.quirksmode.org/js/cookies.html
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}
