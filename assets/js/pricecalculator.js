"use strict";

const level = document.getElementById("level");

const size = document.getElementById("size");

document.getElementById('price_calculator').addEventListener('submit', calculatePrice);

const v_btn_calculate = document.getElementById('btn_calculate');

v_btn_calculate.enabled = true;
 
function calculatePrice(event) {
    event.preventDefault();

    let charas = document.getElementById("charas").value;

    let level_index = level.value;
    let size_index = size.value;

    let background = document.getElementById("background").checked;

    let levelsizeprice;

    switch (level_index) {
        case "sketch":
            switch (size_index) {
                case "Half body":
                    levelsizeprice = 40;
                    break;
                case "Full body":
                    levelsizeprice = 60;
                    break;
            }
            break;
        case "lineart":
            switch (size_index) {
                case "Half body":
                    levelsizeprice = 90;
                    break;
                case "Full body":
                    levelsizeprice = 110;
                    break;
            }
            break;
        case "color":
            switch (size_index) {
                case "Half body":
                    levelsizeprice = 110;
                    break;
                case "Full body":
                    levelsizeprice = 130;
                    break;
            }
            break;
        case "shading":
            switch (size_index) {
                case "Half body":
                    levelsizeprice = 130;
                    break;
                case "Full body":
                    levelsizeprice = 150;
                    break;
            }
            break;
    }

    let charaprice = (levelsizeprice * (charas - 1) * .5) + levelsizeprice;
    let backgroundprice;

    switch (level_index) {
        case "sketch":
            switch (background) {
                case true:
                    backgroundprice = 60;
                    break;
                default:
                    backgroundprice = 0;
            }
            break;
        case "lineart":
            switch (background) {
                case true:
                    backgroundprice = 110;
                    break;
                default:
                    backgroundprice = 0;
            }
            break;
        case "color":
            switch (background) {
                case true:
                    backgroundprice = 130;
                    break;
                default:
                    backgroundprice = 0;
            }
            break;
        case "shading":
            switch (background) {
                case true:
                    backgroundprice = 150;
                    break;
                default:
                    backgroundprice = 0;
            }
            break;
    }
    let total = charaprice + backgroundprice;

    document.getElementById('calculated_price').value = `$${total}`;

}