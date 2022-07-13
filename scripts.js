let tip_amount = '0.00';
let total = '0.00'
let tip = '0.00';
document.getElementById('tip_amount').innerHTML = tip_amount;
document.getElementById('total').innerHTML = total;

let bill_value = document.getElementById('bill').value;

const button5 = document.getElementById('button5');
const button10 = document.getElementById('button10');
const button15 = document.getElementById('button15');
const button25 = document.getElementById('button25');
const button50 = document.getElementById('button50');
const custom_button = document.getElementById('cust_tip');


button5.addEventListener('click', function handleClick() {
    tip = 5;
    button15.style.backgroundColor = "hsl(183, 100%, 15%)";
    button50.style.backgroundColor = "hsl(183, 100%, 15%)";
    button25.style.backgroundColor = "hsl(183, 100%, 15%)";
    button5.style.backgroundColor = "hsl(172, 67%, 45%)";
    button10.style.backgroundColor = "hsl(183, 100%, 15%)";
    button5.style.color = "hsl(183, 100%, 15%)";
    button15.style.color = "white";
    button10.style.color = "white";
    button25.style.color = "white";
    button50.style.color = "white";

    if (document.getElementById('bill').value != "" && document.getElementById('quantity').value != "") {
        document.getElementById('total').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * 5)) / document.getElementById('quantity').value).toFixed(2);
        document.getElementById('tip_amount').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * 5)) / document.getElementById('quantity').value - Number(document.getElementById('bill').value) / document.getElementById('quantity').value).toFixed(2);
    } else if (document.getElementById('bill').value == "") {
        document.getElementById('bill').style.outline = "2px solid red";
    } else if (document.getElementById('quantity').value == "") {
        document.getElementById('quantity').style.outline = "2px solid red";
    }
});

button10.addEventListener('click', function handleClick() {
    tip = 10;
    button15.style.backgroundColor = "hsl(183, 100%, 15%)";
    button5.style.backgroundColor = "hsl(183, 100%, 15%)";
    button25.style.backgroundColor = "hsl(183, 100%, 15%)";
    button10.style.backgroundColor = "hsl(172, 67%, 45%)";
    button50.style.backgroundColor = "hsl(183, 100%, 15%)";
    button10.style.color = "hsl(183, 100%, 15%)";
    button15.style.color = "white";
    button5.style.color = "white";
    button25.style.color = "white";
    button50.style.color = "white";
    if (document.getElementById('bill').value != "" && document.getElementById('quantity').value != "") {
        document.getElementById('total').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * 10)) / document.getElementById('quantity').value).toFixed(2);
        document.getElementById('tip_amount').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * 10)) / document.getElementById('quantity').value - Number(document.getElementById('bill').value) / document.getElementById('quantity').value).toFixed(2);
    } else if (document.getElementById('bill').value == "") {
        document.getElementById('bill').style.outline = "2px solid red";
    } else if (document.getElementById('quantity').value == "") {
        document.getElementById('quantity').style.outline = "2px solid red";
    }
});

button25.addEventListener('click', function handleClick() {
    tip = 25;
    button15.style.backgroundColor = "hsl(183, 100%, 15%)";
    button5.style.backgroundColor = "hsl(183, 100%, 15%)";
    button50.style.backgroundColor = "hsl(183, 100%, 15%)";
    button25.style.backgroundColor = "hsl(172, 67%, 45%)";
    button10.style.backgroundColor = "hsl(183, 100%, 15%)";
    button25.style.color = "hsl(183, 100%, 15%)";
    button15.style.color = "white";
    button10.style.color = "white";
    button5.style.color = "white";
    button50.style.color = "white";

    if (document.getElementById('bill').value != "" && document.getElementById('quantity').value != "") {
        document.getElementById('total').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * 25)) / document.getElementById('quantity').value).toFixed(2);
        document.getElementById('tip_amount').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * 25)) / document.getElementById('quantity').value - Number(document.getElementById('bill').value) / document.getElementById('quantity').value).toFixed(2);
    } else if (document.getElementById('bill').value == "") {
        document.getElementById('bill').style.outline = "2px solid red";
    } else if (document.getElementById('quantity').value == "") {
        document.getElementById('quantity').style.outline = "2px solid red";
    }
});

button50.addEventListener('click', function handleClick() {
    tip = 50;
    button15.style.backgroundColor = "hsl(183, 100%, 15%)";
    button5.style.backgroundColor = "hsl(183, 100%, 15%)";
    button25.style.backgroundColor = "hsl(183, 100%, 15%)";
    button50.style.backgroundColor = "hsl(172, 67%, 45%)";
    button10.style.backgroundColor = "hsl(183, 100%, 15%)";
    button50.style.color = "hsl(183, 100%, 15%)";
    button15.style.color = "white";
    button10.style.color = "white";
    button25.style.color = "white";
    button5.style.color = "white";
    if (document.getElementById('bill').value != "" && document.getElementById('quantity').value != "") {
        document.getElementById('total').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * 50)) / document.getElementById('quantity').value).toFixed(2);
        document.getElementById('tip_amount').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * 50)) / document.getElementById('quantity').value - Number(document.getElementById('bill').value) / document.getElementById('quantity').value).toFixed(2);
    }
});

button15.addEventListener('click', function handleClick() {
    tip = 15;
    button15.style.backgroundColor = "hsl(172, 67%, 45%)";
    button5.style.backgroundColor = "hsl(183, 100%, 15%)";
    button25.style.backgroundColor = "hsl(183, 100%, 15%)";
    button50.style.backgroundColor = "hsl(183, 100%, 15%)";
    button10.style.backgroundColor = "hsl(183, 100%, 15%)";
    button15.style.color = "hsl(183, 100%, 15%)";
    button5.style.color = "white";
    button10.style.color = "white";
    button25.style.color = "white";
    button50.style.color = "white";

    if (document.getElementById('bill').value != "" && document.getElementById('quantity').value != "") {
        document.getElementById('total').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * 15)) / document.getElementById('quantity').value).toFixed(2);
        document.getElementById('tip_amount').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * 15)) / document.getElementById('quantity').value - Number(document.getElementById('bill').value) / document.getElementById('quantity').value).toFixed(2);
    }
});

custom_button.addEventListener('change', function handleClick() {
    tip = document.getElementById('cust_tip').value;
    button15.style.backgroundColor = "hsl(183, 100%, 15%)";
    button5.style.backgroundColor = "hsl(183, 100%, 15%)";
    button25.style.backgroundColor = "hsl(183, 100%, 15%)";
    button50.style.backgroundColor = "hsl(183, 100%, 15%)";
    button10.style.backgroundColor = "hsl(183, 100%, 15%)";
    button15.style.color = "white";
    button5.style.color = "white";
    button10.style.color = "white";
    button25.style.color = "white";
    button50.style.color = "white";

    if (document.getElementById('bill').value != "" && document.getElementById('quantity').value != "") {
        document.getElementById('total').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * tip)) / document.getElementById('quantity').value).toFixed(2);
        document.getElementById('tip_amount').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * tip)) / document.getElementById('quantity').value - Number(document.getElementById('bill').value) / document.getElementById('quantity').value).toFixed(2);
    }


});

document.getElementById('bill').addEventListener('change', function handleClick() {

    if (document.getElementById('bill').value != "" && document.getElementById('quantity').value != "" && document.getElementById('bill').value != 0 && document.getElementById('quantity').value != 0) {
        document.getElementById('bill').style.outline = "none";
        document.getElementById('quantity').style.outline = "none";

        document.getElementById('total').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * tip)) / document.getElementById('quantity').value).toFixed(2);
        document.getElementById('tip_amount').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * tip)) / document.getElementById('quantity').value - Number(document.getElementById('bill').value) / document.getElementById('quantity').value).toFixed(2);
    } else if (document.getElementById('bill').value != "" && document.getElementById('quantity').value == "" || document.getElementById('bill').value != 0 && document.getElementById('quantity').value == 0) {
        document.getElementById('quantity').style.outline = "2px solid red";
        document.getElementById('bill').style.outline = "none";
    } else if (document.getElementById('bill').value == "" && document.getElementById('quantity').value != "" || document.getElementById('bill').value == 0 && document.getElementById('quantity').value != 0) {
        document.getElementById('bill').style.outline = "2px solid red";
        document.getElementById('quantity').style.outline = "none";
    } else if (document.getElementById('bill').value == 0) {
        document.getElementById('bill').style.outline = "2px solid red";
    }
});



document.getElementById('quantity').addEventListener('change', function handleClick() {
    document.getElementById('quantity').style.outline = "none";
    document.getElementById('bill').style.outline = "none";
    if (document.getElementById('bill').value != "" && document.getElementById('quantity').value != "" && document.getElementById('bill').value != 0 && document.getElementById('quantity').value != 0) {
        document.getElementById('bill').style.outline = "none";

        document.getElementById('total').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * tip)) / document.getElementById('quantity').value).toFixed(2);
        document.getElementById('tip_amount').innerHTML = ((Number(document.getElementById('bill').value) + ((Number(document.getElementById('bill').value) / 100) * tip)) / document.getElementById('quantity').value - Number(document.getElementById('bill').value) / document.getElementById('quantity').value).toFixed(2);
    } else if (document.getElementById('bill').value != "" && document.getElementById('quantity').value == "" || document.getElementById('bill').value != 0 && document.getElementById('quantity').value == 0) {
        document.getElementById('quantity').style.outline = "2px solid red";
        document.getElementById('bill').style.outline = "none";
    } else if (document.getElementById('bill').value == "" && document.getElementById('quantity').value != "" || document.getElementById('bill').value == 0 && document.getElementById('quantity').value != 0) {
        document.getElementById('bill').style.outline = "2px solid red";
        document.getElementById('quantity').style.outline = "none";
    } else if (document.getElementById('quantity').value == 0) {
        document.getElementById('quantity').style.outline = "2px solid red";
    }


});


document.getElementById('reset_button').addEventListener('click', function handleClick() {

    document.getElementById('total').innerHTML = `0.00`;
    document.getElementById('tip_amount').innerHTML = `0.00`
    document.getElementById('bill').value = "";
    document.getElementById('quantity').value = "";
    document.getElementById('cust_tip').value = "";
    button15.style.backgroundColor = "hsl(183, 100%, 15%)";
    button5.style.backgroundColor = "hsl(183, 100%, 15%)";
    button25.style.backgroundColor = "hsl(183, 100%, 15%)";
    button50.style.backgroundColor = "hsl(183, 100%, 15%)";
    button10.style.backgroundColor = "hsl(183, 100%, 15%)";
    button15.style.color = "white";
    button5.style.color = "white";
    button10.style.color = "white";
    button25.style.color = "white";
    button50.style.color = "white";
})

let people_quantity = document.getElementById('quantity').value;
tip_amount = tip
console.log(tip);

document.getElementById('tip_amount').innerHTML = tip_amount;
document.getElementById('total').innerHTML = total;