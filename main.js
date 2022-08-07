const navBar = document.querySelector('nav')
const faqs = document.querySelectorAll('.faq')

const que = document.querySelectorAll('.que')
const theAns = document.querySelectorAll('.ans')

window.addEventListener('scroll', () => {
        navBar.classList.toggle('window-scroll' , window.scrollY > 0)
    })
        

faqs.forEach(faq => {
    faq.addEventListener('click' , () =>{
        faq.classList.toggle('open')

        const icon = faq.querySelector('.off')
        icon.classList.toggle('in')

        const icons = faq.querySelector('.on')
        icons.classList.toggle('out')
      
    })
})
/* -------------------NAVBAR--------------*/

const navMenu = document.querySelector('.nav_menu')
const openBtn = document.querySelector('.open_btn')
const closeBtn = document.querySelector('.close_btn')

openBtn.addEventListener('click' , ()=>{
    navMenu.classList.toggle('active')
    openBtn.style.display = 'none'
    closeBtn.style.display = 'block'
    closeBtn.style.marginRight = '4%'
    closeBtn.style.width = '20px'
})

closeBtn.addEventListener('click' , ()=>{
    navMenu.classList.toggle('active')
    openBtn.style.display = 'block'
    closeBtn.style.display = 'none'
})
/* -------------------END OF NAVBAR--------------*/

const bodyTheme = document.querySelector('.themes')
const redTheme = document.querySelector('.red-theme')
const body = document.querySelector('.body')

redTheme.addEventListener('click' , ()=>{
    body.classList.toggle('red')
})

const teamMember = document.querySelector('.team_member')
const socials = document.querySelector('.socials')

teamMember.addEventListener('click' , ()=>{
    socials.classList.toggle('active')
})















































     
   


