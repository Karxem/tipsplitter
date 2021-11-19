var rounded;

function divide(bill, value) {
    var bill = parseInt(document.getElementById('bill').value);
    var total = bill / value;
    var roundedString = total.toFixed(2);

    rounded = Number(roundedString);

    if (isFinite(bill) && isFinite(value)) {
        if (bill != null && value != null) {
            document.getElementById('total').innerHTML = rounded;
        }
    } else {
        document.getElementById('error').style.display = "block"
        setTimeout(function () {
            document.getElementById('error').style.display = "none"
        }, 5000);
    }
}

function dividing(value, ppl) {
    var ppl = parseInt(document.getElementById('ppl').value);
    var total = value / ppl;
    var roundedString = total.toFixed(2);

    rounded = Number(roundedString);

    if (isFinite(ppl) && isFinite(value)) {
        if (bill != null && value != null) {
            document.getElementById('total').innerHTML = rounded;
        }
    } else {
        document.getElementById('error').style.display = "block"
        setTimeout(function () {
            document.getElementById('error').style.display = "none"
        }, 5000);
    }
}

function reset() {
    document.getElementById('total').innerHTML = "0.00";
    document.getElementById('tip').innerHTML = "0.00";
    document.getElementById('bill').value = null;
    document.getElementById('ppl').value = null;
    document.getElementById('cstm').value = null;
}

function tipster(tip) {
    var tipster = (rounded * tip) / 100;
    var roundedString = tipster.toFixed(2);
    var roundedTip = Number(roundedString);

    var final = rounded + roundedTip;
    var roundedFinal = final.toFixed(2);
    var finalTotal = Number(roundedFinal);

    if (isFinite(roundedTip)) {
        document.getElementById('tip').innerHTML = roundedTip;
        document.getElementById('total').innerHTML = finalTotal;
    } else {
        document.getElementById('fail').style.display = "block"
        setTimeout(function () {
            document.getElementById('fail').style.display = "none"
        }, 5000);
    }
}