//Zain(Chen Zeyu)
function myFunction(){
    var x = document.getElementById("myText").value//Get the value of x
    var y = document.getElementById("myText1").value//Get the value of y
    if(isNaN(x)|isNaN(y)|x==""|y==""|x=="null"|y=="null"){//Determines whether x and y are numbers. If they are numbers, add them together. If they are not numbers, return the user to enter a number
     document.getElementById("demo").innerHTML = "Please enter two numbers"
    }
    else{   
        z= Number(x)+Number(y)
        document.getElementById("demo").innerHTML = "x+y= "+z 
    }
}
