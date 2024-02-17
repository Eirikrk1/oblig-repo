function antallValidering(antall) {
    if(isNaN(antall)) {
        alert("Not a number");
        document.getElementById("antall").value = "";
    }
}

function epostValidering(epost) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(epost)) {
        return true;
    }
    else {
        alert("Not a valid email");
        document.getElementById("epost").value = "";
    }
}

function telefonValidering(telefon) {
    if (/^[0-9]{8}$/.test(telefon)) {
        return true;
    }
    else {
        alert("Not a valid number");
        document.getElementById("telefonnr").value = "";
    }
}

let billettArray = [];
function lagreBilletter() {
        let film = document.getElementById("velgfilm").value;
        let antall = document.getElementById("antall").value;
        let fornavn = document.getElementById("fornavn").value;
        let etternavn = document.getElementById("etternavn").value;
        let telefonnr = document.getElementById("telefonnr").value;
        let epost = document.getElementById("epost").value;

        if (film && antall && fornavn && etternavn && telefonnr && epost) {
            billettArray.push({filmKey:film,antallKey:antall,fornavnKey:fornavn,
                etternavnKey:etternavn,telefonnrKey:telefonnr,epostKey:epost});

            printBilletter(billettArray);
            nullstillInput();
        }
}

function printBilletter(billettArray) {
    let utskrift = "<ol>";
    for (let i in billettArray) {
        utskrift+= "<li>"+billettArray[i].filmKey+" | "+billettArray[i].antallKey+
            " | "+billettArray[i].fornavnKey+" | "+billettArray[i].etternavnKey+
            " | "+billettArray[i].telefonnrKey+" | "+billettArray[i].epostKey+"</li>";
    }
    utskrift+="</ol>";
    document.getElementById("utskrift").innerHTML = utskrift;
    console.log(utskrift);
}

function nullstillInput() {
    document.getElementById("billettInput").reset();
}

function slettBilletter() {
    billettArray = [];
    document.getElementById("utskrift").innerHTML = "";
}