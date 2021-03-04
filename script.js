
var privious=0;

var string_eq="";

var res=0;
function ev(a){
   
    if(a==='/'||a==='-'||a==='+'){
        if(string_eq[string_eq.length-1]==='/'||string_eq[string_eq.length-1]==='-'||string_eq[string_eq.length-1]==='+'||string_eq[string_eq.length-1]==='*')
            {
                return;
            }
    }
    if(a==='*'){
        if(string_eq[string_eq.length-1]==='/'||string_eq[string_eq.length-1]==='-'||string_eq[string_eq.length-1]==='+'){
            return;
        }
        if(string_eq[string_eq.length-2]==='*'){
            return;
        }
    }
    if(a=="c") {string_eq="";}
    else if(a=="d"){string_eq=string_eq.slice(0,-1);}
    else{
     string_eq+=a;}
     
    
    document.getElementById("row_1").innerHTML=string_eq;
}

function cal(){
var r=eval(string_eq);
if(r===Infinity||r===undefined)
{
    res=0;
    string_eq="";
    document.getElementById("row_1").innerHTML="value is too large";
   document.getElementById("priviou").innerHTML="value was too large";
    return;
}
   document.getElementById("row_1").innerHTML=r;
   document.getElementById("priviou").innerHTML=r;
    res=r;
    string_eq=res;
   
}
