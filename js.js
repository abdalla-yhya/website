// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString.split("").filter(function(re){
//   return isNaN(re) && re!==',';}
// ).slice(true,-!false)
// .map(function(re){
//   return re==='_'?" ":re;
// }).reduce(function(re,cur){
//   return re+cur;});
// console.log(solution);
// window.onload = function(){
let img = document.getElementById("img");
let upload = document.getElementById("upload");
let inputs = document.querySelectorAll("input");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");
// let reset = document.getElementById("reset");
let bts = document.querySelector(".buttons");
let download = document.getElementById("download");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function Reset(){
  img.style.filter = 'none';
  saturate.value = '100';
  contrast.value = '100';
  brightness.value = '100';
  sepia.value = '0';
  grayscale.value = '0';
  blur.value = '0';
  hueRotate.value = '0';
}

upload.onchange = function(){
  Reset();
  bts.style.visibility = "visible";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function(){
    img.src = file.result;
  }
  img.onload = function(){
    ctx.drowImage(img,0,0,img.width,img.height);
    img.style.display = 'none';
  }
}
  
inputs.forEach(input =>{
  input.addEventListener("input",function(){
  ctx.filter = `
  saturate(${saturate.value}%)
  contrast(${contrast.value}%)
  brightness(${brightness.value}%)
  sepia(${sepia.value}%)
  grayscale(${grayscale.value})
  blur(${blur.value}px)
  hue-rotate(${hueRotate.value}deg)
  `
  ctx.drowImage(img,0,0,img.width,img.height);
  })})
  download.onclick = function(){
    download.href = canvas.toDataURL('image/jpeg');
  }
  
// }