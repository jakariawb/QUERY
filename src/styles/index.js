

var h1 = document.getElementById('btn')
var color = ['red','yellow','green'];
var i = 0
h1.addEventListener('click',function(){
    var name = document.getElementById('h')
    name.style.background = color[i]
    name.innerHTML = 'jakaria'
    if(i>=color.length){
        i = 0
    }else{
        i++
    }
})
