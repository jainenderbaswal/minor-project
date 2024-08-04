document.addEventListener('DOMContentLoaded',()=>{
//varibale for code 
    const bar = document.getElementById('bar');
    const smallScreenNav = document.getElementById('mobile');
    const nav=document.getElementById('navbar');
    const close=document.getElementById('close')
    let mainImg =document.getElementById("mainImg");
    let smallimg =document.getElementsByClassName("small-img");
    
    
    //for changing replacing main images with small ones  
    for(let i=0; i<smallimg.length;i++){
            smallimg.item(i).addEventListener('click',(e)=>{
                e.preventDefault();
                console.log("its working");
    
                mainImg.src = smallimg[i].src;
            });
        }
    
    
    // for navbar toggle
    smallScreenNav.addEventListener('click',(e)=>{
        if(smallScreenNav.getAttribute('id','bar')){
            nav.classList.add('active');
            close.addEventListener('click', () => {
                        nav.classList.remove('active');
                      
                
                });
        }
        document.addEventListener('click', (event) => {
            if (!smallScreenNav.contains(event.target) && event.target !== bar) {
                console.log(event.target);
                nav.classList.remove('active');
            }
        });
    })
    
    


});//dom ends here
