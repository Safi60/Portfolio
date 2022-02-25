const btns = document.querySelectorAll('.btn-modale');
const modaleEquipement = document.querySelector('.bloc-modale');
const imgIndex = document.querySelector('.bloc-modale img');

if(window.matchMedia("min-width: 850px").matches){

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            
            imgIndex.src = `image-basic-fit/img${e.target.getAttribute('data-index')}.jpg`;
            modaleEquipement.classList.add('active-modale');
            
        })
    })
    
    
    modaleEquipement.addEventListener('click', (e) => {
        modaleEquipement.classList.remove('active-modale');
    })
}



// Animation navbar

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 30) {
      header.classList.add('anim-nav');
    } else {
      header.classList.remove('anim-nav');
    }
})


// Redimensionnement écran

window.addEventListener("resize", () => {
    responsiveModals();
  });
   
  function responsiveModals() {
    if (window.matchMedia("(min-width:850px)").matches) {
      btns.forEach((btn) => {
        btn.addEventListener("click", clickBtn);
      });
   
      modaleEquipement.addEventListener("click", () => {
        modaleEquipement.classList.remove("active-modale");
      });
    } else {
      btns.forEach((btn) => {
        btn.removeEventListener("click", clickBtn);
      });
    }
  }
  responsiveModals();
   
  function clickBtn(e) {
    imgIndex.src = `image-basic-fit/img${e.target.getAttribute(
      "data-index"
    )}.jpg`;
    modaleEquipement.classList.add("active-modale");
  }

  document.getElementById('menu-button').addEventListener('click', function(e){
    document.querySelector('nav').classList.toggle('open')
  })