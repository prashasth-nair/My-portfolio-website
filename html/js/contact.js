const textarea = document.querySelector("textarea");

textarea.addEventListener("keyup", (e) => {
  textarea.style.height = "63px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});

function sendEmail() {
  var name_ = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var mail_body = "Name: " + name_ + "<br>" + "Email: " + email + "<br>" + "Message: " + message;
  Email.send({
    // Host : "smtp.elasticemail.com",
    SecureToken: "1f3ac6be-d073-4608-aea2-e4349b1af823",
    To: 'prashasthnair@gmail.com',
    From: "prashasthdm@gmail.com",
    Subject: "New Contact Form Your Portfolio Website.",
    Body: mail_body
  }).then(
    message => alert(message)
  );
}
