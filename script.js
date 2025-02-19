function compute() {
    //get the values of the inputs
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    //validation to accept only an amount greater than 0.
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("result").innerHTML = "";
        document.getElementById("principal").focus();
    }
    else {
        //if the amount is greater than 0 then show result
        document.getElementById("result").innerHTML = "If you deposit " + "<span style='color:#ECE32B;'>" + principal + "</span>" + ",\<br\>at an interest rate of " + "<span style='color:#ECE32B;'>" + rate + "</span>" + "%\<br\>You will receive an amount of " + "<span style='color:#ECE32B;'>" + interest + "</span>" + ",\<br\>in the year " + "<span style='color:#ECE32B;'>" + year + "</span>" + "\<br\>"
    }
}

//function for update the input range
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}