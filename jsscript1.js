function selectLoan(type, limit, selectedCard){

    let cards = document.querySelectorAll('.loan-card');

    cards.forEach(card => {
        card.classList.add('blur');
        card.classList.remove('active');
    });

    selectedCard.classList.remove('blur');
    selectedCard.classList.add('active');

    selectedCard.querySelector('input').checked = true;

    document.getElementById("loanInfo").style.display = "block";

    document.getElementById("loanInfo").innerHTML =
        "<strong>" + type + "</strong><br>" +
        "Maximum Eligible Amount: " + limit;
}

function goToStep2(){

    let loan =
    document.querySelector('input[name="loanType"]:checked');

    if(!loan){

        alert("Please select a loan type.");
        return;
    }

    document.getElementById("step2").style.display = "block";

    window.location.href = "#step2";
}

function sendOTP(){

    let consent =
    document.getElementById("consent");

    if(!consent.checked){

        alert("Please accept consent.");
        return;
    }

    document.getElementById("step3").style.display = "block";

    window.location.href="#step3";
}


function enableMobileField(){

    let consent =
    document.getElementById("consent");

    let mobile =
    document.getElementById("mobile");

    mobile.disabled = !consent.checked;
}
function verifyOTP(){

    let otp =
    document.getElementById("otp").value;

    if(otp=="1234"){

        alert("OTP Verified");

        document.getElementById("step4").style.display = "block";

        window.location.href="#step4";

    }
    else{

        alert("Invalid OTP");
    }
}

function calculateEMI(){

    let P =
    document.getElementById("amount").value;

    let annualRate =
    document.getElementById("rate").value;

    let N =
    document.getElementById("months").value;

    let R =
    annualRate/12/100;

    let EMI =
    (P*R*Math.pow(1+R,N))/
    (Math.pow(1+R,N)-1);

    document.getElementById("result").innerHTML =
    "Monthly EMI : ₹"+EMI.toFixed(2);
}

function showEmailStep(){

    document.getElementById("step5").style.display = "block";

    window.location.href="#step5";
}