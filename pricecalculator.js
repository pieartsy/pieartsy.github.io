// JavaScript Document

(function() {
    "use strict";

    var level = document.getElementById("id_level");
    
    var size = document.getElementById("id_size");
    
    document.addEventListener('DOMContentLoaded', function(){
    
        document.getElementById('price_calculator').addEventListener('submit', calculatePrice);
    
        var v_btn_calculate = document.getElementById('btn_estimate');
    
        v_btn_calculate.disabled = true;
    
    
        state.addEventListener('change', function(){
    
            if(state.value === ''){
                v_btn_calculate.disabled = true;
                console.log("True");
            }
            else{
                v_btn_calculate.disabled = false;
                console.log("False");
            }
    
        });
    
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

    
        var background = document.querySelector('input[name=ship]:checked').value || '';
            
        var backgroundCostPer,
            totalbackgroundCost, 
            taxFactor = 1,
            totalItemPrice, 
            estimate;
        
        var t_quantity = charas + jersey + supple + water;
        totalItemPrice = (charas * 90 ) + (jersey * 25) + (supple * 30) + (water * 4);
    
        if (state.value === 'CA'){
            taxFactor = 1.075;
        }
        else if(state.value ==='WA'){
            taxFactor = 1.065;	
        }
    
        switch(background){
            case 'us':
                backgroundCostPer = 2;
                break;
            case 'ups':
                backgroundCostPer = 3;	
                break;
            default :
                backgroundCostPer = 0;
                break;
        }
    
        totalbackgroundCost = backgroundCostPer * t_quantity;
        
        estimate = '$' +((totalItemPrice * taxFactor ) + totalbackgroundCost).toFixed(2);
        
        document.getElementById('total_estimate').value=estimate;
    
        var result_html = document.getElementById('results');
    
        result_html.innerHTML = 'Total Item: ' + t_quantity + '<br>';
        result_html.innerHTML +='Total background: $' + totalbackgroundCost.toFixed(2) + '<br>';
        result_html.innerHTML +='Tax:' + (( taxFactor - 1 )*100).toFixed(2) + '%';
        
        result_html.innerHTML +='(State:'  + level_index + ')';
        
    
    
        
    
    }
    
    })();