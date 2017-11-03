
// apply styles
var style = document.createElement('link');
style.rel = 'stylesheet';
style.href = chrome.extension.getURL('catb.css');
document.head.appendChild(style);

// Rearrange Title
var titleBlock = document.getElementsByClassName('navheader')[0].getElementsByTagName('th')[0];
var title = titleBlock.innerText;
titleBlock.style.display = "none";
document.getElementsByClassName('navheader')[0].getElementsByTagName('th')[1].innerHTML = title;

window.onscroll = function(e) {
  if (document.body.scrollTop == 0) {
    document.body.classList.remove('scrolled');
  } else {
    document.body.classList.add('scrolled');
  }
}
