let timeoutId=null;
let istext;
let isacc;
const company=document.getElementById('company');
const according=document.getElementById('according');

company.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
    isacc=false;
    timeoutId=setTimeout(() => {
        acc(true);
    }, 200);
});

company.addEventListener("mouseleave", () => {
    clearTimeout(timeoutId);
    timeoutId=setTimeout(() => {
        if(!isacc){
            acc(false);
        }      
    }, 400);
});

according.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
    isacc=true;
});

according.addEventListener("mouseleave", () => {
    clearTimeout(timeoutId);
    timeoutId=setTimeout(() => {
        isacc=false;
        acc(false);
    }, 400);
});

function acc(open){
    const according=document.getElementById('according');
    if(open){
        according.innerHTML='';
        const items1=[
            {text1:'公司簡介'},
            {text1:'主要產品'},
            {text1:'公司沿革'}
        ]
        items1.forEach((item1)=>{
            const li = document.createElement("li");
            li.textContent = item1.text1;
            li.className='list';
            according.appendChild(li);
        })
    }
    else{
        according.textContent='';
        according.removeAttribute('class')
    }
}