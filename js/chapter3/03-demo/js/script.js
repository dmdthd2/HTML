const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

const colorBg=()=>{
    document.body.style.background = color.value;
    text.textContent = `컬러코드: ${color.value}`;
     if(color.value === '#ffffff'){
        text.textContent = `컬러코드: ${color.value} white`;
     }

    
}
color.addEventListener('input',colorBg);