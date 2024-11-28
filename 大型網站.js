let timeoutId=null;
let istext;
let isacc;
const company=document.getElementById('company');
const according=document.getElementById('according');

if(window.innerWidth>768){
    document.getElementById('簡介').className='hidden';
    document.getElementById('產品').className='hidden';
    document.getElementById('沿革').className='hidden';

    company.addEventListener("mouseenter", () => {
        clearTimeout(timeoutId); // 清除任何現存計時器
        isacc = false; // 設置為非激活狀態
        timeoutId = setTimeout(() => {
            istext=false;
            formid(false); // 隱藏其他區域
            acc(true); // 顯示 according 區域
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

    
    
    function acc(open){
        const according=document.getElementById('according');
        if(open){
            according.innerHTML='';
            const items=[
                {text:'公司簡介',action:introduce},
                {text:'主要產品',action:mainproduct},
                {text:'公司沿革',action:develope}
            ]
            items.forEach((item)=>{
                const li = document.createElement("li");
                li.textContent = item.text;
                li.className='list';
                li.onclick=item.action;
                according.appendChild(li);
            })
            according.className='according';
        }
        else{
            according.textContent='';
            according.removeAttribute('class')
        }
    }
    function introduce(){
        window.location.href='公司簡介.html';
    }
    function mainproduct(){
        window.location.href='主要產品.html';
    }
    function develope(){
        window.location.href='公司沿革.html';
    }
    document.getElementById("product").addEventListener("mouseenter", () => {
        clearTimeout(timeoutId);
        istext=false;
        timeoutId=setTimeout(() => {
            isacc=false;
            acc(false);
            formid(true);
        }, 200);
    });
    
    document.getElementById("product").addEventListener("mouseleave", () => {
        clearTimeout(timeoutId);
        timeoutId=setTimeout(() => {
            if(!istext){
                formid(false);
            }
        }, 400);
    });
    
    function formid(open) {
        const formid = document.getElementById("formid");
        if (open) {
            formid.innerHTML = ""; // 清空内容
            const items = [
                { text: "氧體偵測傳感器", action: product1 },
                { text: "陶瓷材料系統", action: product2 },
                { text: "陶瓷製氧基板", action: product3 },
                { text: "多層陶瓷量產設備", action: product4 },
                { text: "多層構裝陶瓷基板與傳感器", action: product5 },
            ];
    
            items.forEach((item) => {
                const li = document.createElement("li");
                li.textContent = item.text;
                li.className='list';
                li.onclick = item.action;
                formid.appendChild(li);
            });
    
            formid.className = "formid";
        } else {
            formid.innerHTML = "";
            formid.removeAttribute("class");
        }
    }
    function product1() {
        window.location.href='氧體偵測傳感器.html';
    }
    
    function product2() {
        window.location.href='陶瓷材料系統.html';
    }
    
    function product3() {
        window.location.href='陶瓷製氧機板.html';
    }
    
    function product4() {
        window.location.href='多層陶瓷量產設備.html';
    }
    
    function product5() {
        window.location.href='多層構裝陶瓷基板與傳感器.html';
    }
}
else{
    isclick=true;
    const company = document.getElementById('company');
    intro.onclick=profile;
    product.onclick=mainproduct;
    history.onclick=develope;
    function fold() {
    const intro = document.getElementById('簡介');
    const product = document.getElementById('產品');
    const history = document.getElementById('沿革');

    const items = [intro, product, history];

    if (isclick) {
        items.forEach(item => {
            item.style.maxHeight = '0';
            item.style.overflow = 'hidden';
            setTimeout(() => {
                item.style.display = 'none'; // 隱藏元素
            }, 300); // 動畫完成後隱藏
        });
    } else {
        items.forEach(item => {
            item.style.display = 'block'; // 顯示元素
            item.style.maxHeight = item.scrollHeight + 'px'; // 展開
        });
    }
    isclick = !isclick;
}

    function profile(){
        window.location.href='公司簡介.html';
    }
    function mainproduct(){
        window.location.href='主要產品.html';
    }
    function develope(){
        window.location.href='公司沿革.html';
    }
}
