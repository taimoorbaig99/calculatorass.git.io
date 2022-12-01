var inp = document.getElementById('inp');
function get(a) {
    inp.value += a ;
}

function calculateval(){
    var f = eval(inp.value);
    // console.log();
    inp.value = f ;
}
function clearall() {
    inp.value = "" ;
}