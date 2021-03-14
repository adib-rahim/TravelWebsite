function validation(){
  let message = document.getElementById("message").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let name = document.getElementById("name").value;
    
    if(name.length < 5){
      alert ("Please enter a valid Full Name");
     
      return false;
    }
    if(subject.length < 4){
      alert ("Please enter a Correct Subject containing at LEAST 4 characters");
      return false;
    }
    if(phone.length != 9){
      alert ("Please enter a valid Phone Number containing 9 digits");
      return false;
    }
    if(message.length <= 50){
      alert("Please enter at least 50 characters for the message.");
      return false;
    }
    if(document.form.submit()) {
    alert("Form Submitted Successfully!");
    return true;
      else{
        return false;
      }
    }

   
  }

