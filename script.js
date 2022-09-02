
console.log("Progrss container");
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");
console.log(progress);

let currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;
  console.log(currentActive);
  if(currentActive>circle.length){
    currentActive=circle.length
  }

  console.log(currentActive);
    update()
});

// Working on Prev
prev.addEventListener("click", () => {
    currentActive--;
    console.log(currentActive);
    if(currentActive<1){
      currentActive=1;
    }
    update()
    console.log(currentActive);
  });
  

  const update=()=>{
    circle.forEach((circle,index)=>{
        if(index<currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })



    const actives=document.querySelectorAll('.active')

    progress.style.width=(actives.length / circle.length)*100 +'%'
  }