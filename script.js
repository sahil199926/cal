

var privious=0;

var string_eq="";

var res=0;
function ev(a){   
    if(a=="c") {string_eq="";}
    else if(a=="d"){string_eq=string_eq.slice(0,-1);}
    else{
     string_eq+=a;res=0;}
     
    
    document.getElementById("row_1").innerHTML=string_eq;
}

function cal(){
    res+=eval(string_eq);
   document.getElementById("row_1").innerHTML=res;
   document.getElementById("priviou").innerHTML=res;
  string_eq=res;
   
   
}
