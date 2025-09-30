let date =new Date()
// let time =date.toLocaleTimeString()
// document.getElementById("clock").innerHTML=time 
setInterval(()=>{
    let date =new Date()
    let time =date.toLocaleTimeString()
    document.getElementById("clock").innerHTML=time 
},1000)

