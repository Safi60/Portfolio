window.addEventListener('scroll', function(e){
    console.log('SCROLL', window.scrollY)
    if(window.scrollY > 0){
        document.getElementById('site-header').classList.add('sticky')
    }else{
        document.getElementById('site-header').classList.remove('sticky')
    }
})

document.getElementById('menu-button').addEventListener('click', function(e){
    document.getElementById('site-nav').classList.toggle('open')
})