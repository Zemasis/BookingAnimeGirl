// const buyBtns =document.querySelectorAll('.js-buy-ticket')

let ShowMenu = document.querySelector('.menu-mobile');

let headerHeight = header.clientHeight;


// Làm nút chọn menu
ShowMenu.onclick = function (){
    let isClosed = header.clientHeight === headerHeight;
    
    header.style.height = isClosed ? 'auto' : null;
}


// Làm chức năng tự động đống menu
var mobileBtns = document.querySelectorAll('#nav a');

var mobileBtnLength = mobileBtns.length;

for(var i=0; i < mobileBtnLength; i++){
    var mobileBtn = mobileBtns[i];

    

    mobileBtn.onclick = function(Event){
        let MenuFather = this.nextElementSibling && this.nextElementSibling.classList.contains('subnag');

        MenuFather ? Event.preventDefault() : header.style.height =null;
        // if(MenuFather){
        //     Event.preventDefault();
        // }else{
        //     header.style.height =null;
        // }
        
        
    }
    
}

// MoveEff.forEach(link,index => {

// });
// MobileBtn.onclick = function(){
    //     console.log(MobileBtn);
    // }
