function mortgageCalculation() {

    let APR = document.getElementById("APR").value / 12;
    let term = document.getElementById("loanTerms").value * 12;
    let amount = document.getElementById("amount").value;


    if (isInputEmpty(APR, term, amount)) {
        
        let monthlyPayment = amount * APR * (Math.pow(1 + APR, term)) / (Math.pow(1 + APR, term) - 1)

        return document.getElementById("payment").value = "$" + monthlyPayment.toFixed(2);
    }
};


function isInputEmpty(APR, term, amount) {

    if (!APR || APR * 12 > 25) {
        document.getElementById("error-Message").innerHTML = "Please fill out a APR lower than 25.00 before submitting"
        return document.getElementById("APR").focus();
    }
    if (!term || term / 12 > 40) {
        document.getElementById("error-Message").innerHTML = "Please fill out loan term in years lower than 40 before submitting"
        return document.getElementById("loanTerms").focus();
    }
    if (!amount) {
        document.getElementById("error-Message").innerHTML = "Please fill out all fields before submitting"
        return document.getElementById("amount").focus();
    }

    return true;
};

function clearForm() {
    document.getElementById("APR").value = ""
    document.getElementById("loanTerms").value = ""
    document.getElementById("amount").value = ""
    document.getElementById("payment").value = ""
    document.getElementById("error-Message").innerHTML = ""
};