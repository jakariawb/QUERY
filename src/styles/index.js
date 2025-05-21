

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
var button1 = $('#btn')
var btn1Style = {
    background:'green',
    padding:'20px 30px',
    fontSize:'40px',
    fontFamily:'Arial',
    color:'red'
    
} 
Object.assign(button1.style,btn1Style)
var h12 = $('#h')
// h1.style.background = 'red'
var h1Style = {
    background:'red',
    fontSize:'30px',
    padding:'30px',
    textAlign:'center',
    fontFamily:'Arial',
    
    
    
}
Object.assign(h12.style,h1Style)


// var addText = $('#btn1')
// var nextColor = ['yellow','red','green']
// var g = 0
// addText.addEventListener('click',function(){
//     var h1 = $('#h1')
//     h1.innerHTML = 'holde'
//     h1.style.color = nextColor[g]
//     if(g>=nextColor.length){
//         g = 0
//     }else{
//         g++
//     }
// })
function $ (sec){
   return document.querySelector(sec)
}
