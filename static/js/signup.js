document.addEventListener('DOMContentLoaded', function(){

    function dataCheck(){
        let title = document.getElementById('title').value;
        let allowedTitle = ['mr', 'mr.', 'mrs', 'mrs.', 'ms', 'ms.', 'miss', 'miss.', 'doctor', 'doctor.', 'Other', 'other.', null];
        let errors = 0;
        if (allowedTitle.includes(title.toLowerCase())) document.getElementById('titleError').className = "nonerror"
        else {
            document.getElementById('titleError').className = "error";
            errors += 1;
            };
        
        if (document.getElementById('firstName').value == "" || document.getElementById('firstName').value == "First Name") {
            document.getElementById('firstNameError').className = "error";
            errors += 1;
            }
        else document.getElementById('firstNameError').className = "nonerror";       


        if (document.getElementById('lastName').value == "" || document.getElementById('lastName').value == "Last Name") {
            document.getElementById('lastNameError').className = "error";
            errors += 1;
            }
        else document.getElementById('lastNameError').className = "nonerror";   


        if (!validateEmail(document.getElementById('email').value)) {
            document.getElementById('emailError').className = "error";
            errors += 1;
            }
        else document.getElementById('emailError').className = "nonerror";   


        if (!validatePassword(document.getElementById('password').value)) {
            document.getElementById('passwordError').className = "error";
            errors += 1;
            }
        else document.getElementById('passwordError').className = "nonerror";   


        if (document.getElementById('password').value != document.getElementById('retypePassword').value) {
            document.getElementById('retypePasswordError').className = "error";
            errors += 1;
            }
        else document.getElementById('retypePasswordError').className = "nonerror"; 

        if (errors == 0) {
            window.location.href = "thankyou.html";
        }
    } 

    function validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      };

    function validatePassword(password){
        let testLength = true;
        if (password.length <6 || password.length >12) testLength = false;
        let testCharacters = false;
        let testCapitalCharacters = false;
        let testNumbers = false;
        let re1 = /[a-z]/;
        let re2 = /[A-Z]/;
        let re3 = /[0-9]/;
        for (i=0; i<=password.length; i++){
            if (re1.test(password)) testCharacters = true;
            if (re2.test(password)) testCapitalCharacters = true;
            if (re3.test(password)) testNumbers = true;
        }
        return (testLength && testCharacters && testCapitalCharacters && testNumbers) 
    };
    
    let signUpButton = document.getElementById('signupButton');
    signUpButton.addEventListener('click', function(event){
        dataCheck();
    })

})