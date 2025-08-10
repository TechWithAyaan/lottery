var lot1= "7B684-6711";
var lot2= "7B241-5398";
var lot3= "7B915-7824";
var lot4= "7B347-2295";
var lot5= "7B762-1904";
var lot6= "7B103-5827";
var lot7= "7B564-9341";
var lot8= "7B812-4509";
var lot9 = "7B276-1458";
var lot10 = "7B934-8225";

function lot(){
    var user = prompt("Enter Your Lottery Ticket Number")
    if(user == lot1){
        alert("You Win Grand Prize 100! Rupees")

    }else if (user == lot2){
        alert("You Win Grand Prize 100! Rupees")
    }
    else if (user == lot3){
        alert("You Win 45 Rupees")
    }
    else if (user == lot4){
        alert("Better Luck Next Time")
    }
    else if (user == lot5){
        alert("You Win 12 Rupees")
        
    }
    else if (user == lot6){
        
        alert("Better Luck Next Time") 
    }
    else if (user == lot7){
        alert("You Win 25 Rupees") 
        
    }
    else if (user == lot8){
        alert("You Win 97 Rupees") 
        
    }
    else if (user == lot9){
        alert("Better Luck Next Time") 
           
    }
       else if (user == lot10){
        alert("You Win 3 Rupees") 
        
    }
    else{
        alert("Invalid Ticket Number")
}
}
