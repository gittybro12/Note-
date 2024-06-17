const but = document.querySelector('#butt')
const text = document.getElementById('text')
const deleteB = document.querySelector('.fa-trash')

but.addEventListener("click",function(){
 const note = text.value;
 localStorage.setItem('note',note);

 alert("Note Saved")

});
document.addEventListener("DOMContentLoaded",function(){
    const saved = localStorage.getItem('note');
    if(saved){
        text.value = saved
    }
})
deleteB.addEventListener("click",function(){
    localStorage.removeItem('note')
    text.value = " ";
   
    
   
   });