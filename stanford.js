const discoverBtn = document.querySelector('.discover-btn');
const discover = document.querySelector('.discover-pop-up');

discoverBtn.addEventListener('click',function(){
    discover.classList.toggle('show');
    discoverText.classList.toggle('make_red');
});

const menuBar = document.querySelector('.menu-container');
const covid = document.querySelector('.covid');
const discoverText = document.querySelector('.discover-text');
window.addEventListener('scroll',function(){
    const curHeight = window.pageYOffset;
    const menuHeight = menuBar.getBoundingClientRect().height;
    if(curHeight>menuHeight+50){
        menuBar.classList.add('fixed');
    }
    if(curHeight<menuHeight-50){
        menuBar.classList.remove('fixed');
    }
});

const applyBtns = document.querySelectorAll('.apply-btn');

applyBtns.forEach((applyBtn)=>{
    applyBtn.addEventListener('click',function(e){
        const id = e.target.dataset.id;
        
        if(id){
            console.log(id);
            const tar = document.getElementById(id);
            
            const down = document.querySelector(`.${id}-down`);
            if(tar.classList.contains('show')){
                tar.classList.remove('show');
                down.style.top = '0px';
            }else{
                tar.classList.add('show');
                if(down.classList.contains('first-year-down')){
                    down.style.top = '532px';
                }else if(down.classList.contains('transfer-down')){
                    down.style.top = '383px';
                }else if(down.classList.contains('veterans-down')){
                    down.style.top = '220px';
                }
            }
        }
    });
})