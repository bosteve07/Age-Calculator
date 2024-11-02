const dobInput = document.getElementById("date"); 
const calclulateBtn =  document.getElementById("submit");
const resultDiv = document.getElementById("finalAge");

function calculateAge() {
   
    const dob = new Date(dobInput.value);
    const ageInMS = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMS);
    const age = ageDate.getUTCFullYear() - 1970;
    if (age >= 0){
        resultDiv.innerHTML=`Your age is ${age} year(s)`;

    } else{
        resultDiv.innerHTML=`Enter The Correct DOB`;

    }




}
