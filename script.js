function sendMessage(){
  Email.send({
    SecureToken: "4fb58e12-ebfd-4b5d-9010-a152f4b1e400",
    To : 'holdenevers@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "Name: " + document.getElementById("name").value 
          + "<br> Email: " + document.getElementById("email").value 
          + "<br> Message: " + document.getElementById("message-box").value
  }).then(
  message => alert("Message sent successfully ")
  );
}
