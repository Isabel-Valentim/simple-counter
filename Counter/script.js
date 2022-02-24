let count = 0
let color = ''
const countText = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn){
    btn.addEventListener('click', function (e) {
        const btnClass = e.currentTarget.classList
        if(btnClass.contains('decrease')){
            count-=1
            color = "red"
        }
        if(btnClass.contains('reset')){
            count = 0
            color = "black"
        }
        if(btnClass.contains('increase')){
            count+=1 
            color = "green"  
        }
        countText.innerHTML = count
        countText.style.color = color       
    });
});