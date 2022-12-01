let btn=document.getElementById('clickBTN');
let img=document.getElementById('bullab');
let body=document.getElementsByTagName('body')
console.log(body);
btn.addEventListener('click',clickBTN);

function clickBTN(){
    if(
        btn.textContent.includes('On'))
        {
            bullab.src="images/onbulb.png"
            btn.textContent="Turn Off"
            body[0].style.backgroundColor="white"
            
            
        }
        else{
            bullab.src="images/offbulb.png"
            btn.textContent="Turn On"
            body[0].style.backgroundColor="black"
        };
}
// function on_bulb() {
//     let BulbImage = document.getElementById('bullab');
//     // console.log(BulbImage)

//     if (BulbImage.src.match("offbulb")) {
//         BulbImage.src = "images/onbulb.png";
//     } else {
//         BulbImage.src = "images/offbulb.png";
//     }
//     let btn=document.getElementById('clickBTN');
//     console.log(btn.innerText)
//     if(btn.innerText=="On Bulb") {
//         btn.innerText="Off Bulb";
//     }
//     else{
//         btn.innerText="On Bulb"
//     }
//   }
//   document.body.style.backgroundColor="white";
//   alert('working')
// console.log('body')
