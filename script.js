console.log("Progrss container");
const progress=document.getElementById('progress');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const circle=document.querySelectorAll('.circle')
console.log(progress)


let currentActive=1;
next.addEventListener('click',()=>{
    currentActive++;
    console.log(currentActive);
})