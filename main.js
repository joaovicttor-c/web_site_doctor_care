const navigation = document.getElementById('navigation')
window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}   

function activateMenuAtCurrentSection(section) {
    // Linha alvo
    const targetLine = scrollY + innerHeight / 2
    // Verificar se a seção passou da linha 
    // Quais os dados necessarios?

    // Topo da seção 
    const  sectionTop = section.offsetTop

    // Altura da seção
    const  sectionHeight = section.offsetHeight

    // O topo da secao chegou a ultrapassar a linha alvo

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    // Onde a seção termina?
    const sectionEndsAt = sectionTop + sectionHeight

    //  O final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    // Limite da seção 
    const sectionBoundaries = 
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

   const sectionId = section.getAttribute('id')
   const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

   menuElement.classList.remove('active')
   if (sectionBoundaries) {
       menuElement.classList.add('active')
   }
}

function showNavOnScroll() {
    if (scrollY > 0) {  
        navigation.classList.add('scroll')
       }
   else {
       navigation.classList.remove('scroll')
   }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 500) {  
        backToTopButton.classList.add('show-me')
       }
   else {
        backToTopButton.classList.remove('show-me')
   }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about, 
#about header,
#about .content`)

