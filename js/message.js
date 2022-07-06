
if(window.matchMedia("(max-width: 425px)").matches){
    let inbox = document.getElementById('temi').addEventListener('click', function(e){
      e.preventDefault
      let chats = document.getElementById("chats");
      chats.style.display = "block";
      let inboxes = document.getElementById("inboxes");
      inboxes.style.display = "none";
      let headerText = document.getElementById("header-text");
      headerText.innerHTML = "Chat"; 
    })
 } else {
     inbox.removeEventListener('click')
 }




 
 
    




 
   