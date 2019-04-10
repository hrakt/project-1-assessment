console.log("we loaded and good");


let value;
let toBeAdded;
const getClick = () =>{


    $(".button").click(fucntion = (e) =>{
        value = Number($('#output-box').html());

        toBeAdded = Number($('#input-box').val());
        
        if($(e.target).attr('id') == 'plus'){
            value += toBeAdded;
            document.getElementById("output-box").value = value;
        }else if($(e.target).attr('id') == 'minus'){
            value -= toBeAdded;
            document.getElementById("output-box").value = value;
        }

        if(value > 0 ){
            $("#output-box").css('color','black');
        }else{
            $("#output-box").css('color','red');
        }
        // if(e.target.attr('id'))
    })
}

getClick();