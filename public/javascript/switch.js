function myFunction() {
    // Get the checkbox
    let checkBox = document.getElementById("myCheck");
    // Get the output text
    let text = document.getElementById("text");
    let commentBox = document.getElementById("comment-form");
    let contentBox = document.getElementById("contentBox");
    
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
      commentBox.style.display = "block";
      contentBox.style.display = "block";
    } else {
      text.style.display = "none";
      commentBox.style.display = "none";
      contentBox.style.display = "none";
    }
  }