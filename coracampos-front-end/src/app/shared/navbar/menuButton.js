const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
    }
}

/**
 * Easy on scroll event listener 
 */
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

let selectHNavbar = select('.navbar-default')
if (selectHNavbar) {
    onscroll(document, () => {
        if (window.scrollY > 100) {
            selectHNavbar.classList.add('navbar-reduce')
            selectHNavbar.classList.remove('navbar-trans')
        } else {
            selectHNavbar.classList.remove('navbar-reduce')
            selectHNavbar.classList.add('navbar-trans')
        }
    })
}