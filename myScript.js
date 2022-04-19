function myFunction(){
    var x = document.getElementById("myText").value
    var y = document.getElementById("myText1").value
    if(isNaN(x)|isNaN(y)|x==""|y==""|x=="null"|y=="null"){
     document.getElementById("demo").innerHTML = "Please enter two numbers"
    }
    else{   
        z= Number(x)+Number(y)
        document.getElementById("demo").innerHTML = "x+y= "+z 
    }
}