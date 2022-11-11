


//detect key press
 
document.addEventListener("keydown", (e)=>{
    // alert("keypressed");
    console.log(e.key)
})



//check which key is pressed
function makesound(key){
    switch(key) {
        case "w":
            alert("W pressed");
            break;
    
        case "s":
            alert("W pressed");
            break;
    
        case "d":
            alert("W pressed");
            break;
    
        case "f":
            alert("W pressed");
            break;
    
        case "g":
            alert("W pressed");
            break;
    
        case "q":
            alert("W pressed");
            break;
            case "t":
                alert("T pressed");
                break;

             default:
                    alert("invalid key pressed");
                    break;
    }
    
}

