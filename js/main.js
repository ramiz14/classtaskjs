var txt='Hello World '
function reverse(a) {
    console.log(typeof(a));
    
    if (typeof a ==='string') {
      return a.split("").reverse().join("")
    }
}
console.log(reverse(txt));
var arr=[11,15,11,12,12,25,43,25,324];
function remove(b) {
    for (let i = 0; i < b.length; i++) {
        for (let j = i+1; j < b.length; j++) {
            if (i!==j) {
                if (b[i]===b[j]) {
                    
                    delete b[i]
                }
            }
        }
       
    }
    for (let x = 0; x < b.length; x++) {
        if (b[x]==null) {
            console.log('s');
            b.splice(x,1)
        }
        
    }
    return b
}
console.log(remove(arr));
var btnp=document.getElementById('plus')
var btnm=document.getElementById('minus')
var p=document.getElementById('counter')
btnp.onclick=function plus() {
    p.innerHTML=Number(p.innerHTML)+1
}
btnm.onclick=function minus() {
    if (Number(p.innerHTML)>0) {
        p.innerHTML=Number(p.innerHTML)-1
    }
}

