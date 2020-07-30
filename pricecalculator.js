// JavaScript Document

(function() {
    "use strict";

    var level = document.getElementById("id_level");
    
    var size = document.getElementById("id_size");
    
    document.addEventListener('DOMContentLoaded', function(){
    
        document.getElementById('price_calculator').addEventListener('submit', calculatePrice);
    
        var v_btn_calculate = document.getElementById('btn_calculate');
    
        v_btn_calculate.enabled = true;
    
    });
    
    
    
    function calculatePrice(event) {
        event.preventDefault();
        
        if( level.value === ''){
            alert('Please select the complexity level of your commission.');
            level.focus();
        }
    
        if( size.value === ''){
            alert('Please select the body size of your commission.');
            size.focus();
        }

        var charas = parseInt(document.getElementById("p_charas").value, 10 )|| 0;

        console.log(charas);
    
        var level_index = level.value;
        var size_index = size.value;

    
        var background = document.getElementById("background").checked;
        
        console.log(background);

        var levelsizeprice,
            total;
            
        switch(level_index) {
            case "sketch":
                switch(size_index) {
                    case "Half": levelsizeprice=20; break;
                    case "Full": levelsizeprice=30; break;
                }
                break;
            case "lineart":
                switch(size_index) {
                    case "Half": levelsizeprice=50; break;
                    case "Full": levelsizeprice=60; break;
                }
                break;
            case "color":
                switch(size_index) {
                    case "Half": levelsizeprice=70; break;
                    case "Full": levelsizeprice=80; break;
                }
                break;
            case "shading":
                switch(size_index) {
                    case "Half": levelsizeprice=80; break;
                    case "Full": levelsizeprice=90; break;
                }
                break;
            case "complex":
                switch(size_index) {
                    case "Half": levelsizeprice=100; break;
                    case "Full": levelsizeprice=130; break;
                }
                break;
        }
        
        var charaprice = charas * levelsizeprice * 0.5;
        
        console.log(charaprice);

        var total,
            backgroundprice

        switch(level_index) {
            case "sketch":
                switch(background) {
                    case true: 
                        backgroundprice = 30;break;
                    default: backgroundprice = 0;
                }
                break;
            case "lineart":
                switch(background) {
                    case true: 
                        backgroundprice = 60;break;
                    default: backgroundprice = 0;
                }
                break;
            case "color":
                switch(background) {
                    case true:
                        backgroundprice = 80;break;
                    default: backgroundprice = 0;
                }
                break;
            case "shading":
                switch(background) {
                    case true: 
                        backgroundprice = 90; break;
                    default: backgroundprice = 0;
                }
                break;
            case "complex":
                switch(background) {
                    case true: 
                        backgroundprice = 130; break;
                    default: backgroundprice = 0;
                }
                break;
        }

        total = levelsizeprice + charaprice + backgroundprice;
        
        console.log(backgroundprice);
        console.log(total);
            
        calculated_price = '$' +(total).toFixed(2);
        
        document.getElementById('calculated_price').value=calculated_price;
    
        var result_html = document.getElementById('results');
    
        result_html.innerHTML = size_index + ' ' + level_index + ': $' + levelsizeprice + '<br>';
        
        if (charas > 0) {
        result_html.innerHTML +='Additional characters: '  + charas + '<br>';
        result_html.innerHTML +='Additional characters price: '  + '$' + levelsizeprice + ' * ' + charas + ' * 50% = $' + charaprice + '<br>';
        }
        
        if (background) {
            result_html.innerHTML +='Background price: '  + '$' + backgroundprice; 
        }
    }
    
})();