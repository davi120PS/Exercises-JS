var x,y,operacion,text; 

function Suma() {  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if ( x == "" || y == "") 
    {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y  
      operacion = parseFloat(x)+parseFloat(y);  
      text= operacion;  
    }  
    document.getElementById("resultado").innerHTML = text;  
  }
function Resta() {  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (x == "" || y == "") 
    {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      operacion = parseFloat(x) - parseFloat(y);  
      text= operacion;  
    }  
    document.getElementById("resultado").innerHTML = text;  
}
function Multiplicacion() {  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (x == "" || y == "") 
    {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      operacion = parseFloat(x) * parseFloat(y);  
      text= operacion;  
    }  
    document.getElementById("resultado").innerHTML = text;  
}  
function Division() {  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (x == "" || y == "") 
    {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      operacion = parseFloat(x) / parseFloat(y);  
      text= operacion;  
    }  
    document.getElementById("resultado").innerHTML = text;  
}  
function Limpiar()
{
        document.getElementById("num1").value = "";  
        document.getElementById("num2").value = ""; 
        document.getElementById("resultado").innerHTML = "";  
}