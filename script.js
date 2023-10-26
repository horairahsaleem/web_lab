function toggleClass() {
    let divElement = document.getElementsByClassName('faq');
    divElement.classList.toggle("active");
 }


 let input1 = document.getElementById('inp1')
 let input2 = document.getElementById('inp2')
 let space = document.getElementById('space')
 let myFucntion=()=>{
    space.innerHTML=`

    
    <div class="w3-card-4">

<header class="w3-container w3-blue">
  <h1>${input1.value}</h1>
</header>

<div class="w3-container">
  <p>${input2.value}</p>
</div>



</div>
    `}