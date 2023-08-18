const menuPortfolio = document.querySelector("#portfolio")
const menuContacts = document.querySelector("#contacts")
const menuAbout = document.querySelector("#about")

const pagePortfolio = document.querySelector(".portfolio")
const pageContacts = document.querySelector(".contacts")
const pageAbout = document.querySelector(".about")

const portfolioImages = document.querySelectorAll(".portfolio-img")
const portfolioModal = document.querySelector(".portfolio-modal")
const portfolioModalImg = document.querySelector(".portfolio-modal__img")
const closePortfolioModal = document.querySelector(".close")

openPage(menuPortfolio, pageContacts, pageAbout, pagePortfolio)
openPage(menuContacts, pagePortfolio, pageAbout, pageContacts)
openPage(menuAbout, pageContacts, pagePortfolio, pageAbout)

setMenuItemActive(menuPortfolio)
setMenuItemActive(menuContacts)
setMenuItemActive(menuAbout)

openPortfolioImage()

closePortfolioModal.addEventListener("click", () => {
  portfolioModal.classList.add("portfolio-modal-remove")
})

function setMenuItemActive(menuItem) {
  menuItem.addEventListener("click", () => {
    if(menuItem.classList.contains("menu-list__item-active")) {
      return
    }

    const menuLists = document.querySelectorAll(".menu-list__item")
    menuLists.forEach(item => item.classList.remove("menu-list__item-active"))
    menuItem.classList.add("menu-list__item-active")
  })
}

function openPage(link, pageRemove1, pageRemove2, pageOpen) {
  link.addEventListener("click", () => {
    if(pageOpen.classList.contains("page-remove")) {
      pageOpen.classList.remove("page-remove")
    }

    pageRemove1.classList.add("page-remove")
    pageRemove2.classList.add("page-remove")
  })
}

function openPortfolioImage() {
  portfolioImages.forEach(img => {
    img.addEventListener("click", () => {
      portfolioModal.classList.remove("portfolio-modal-remove")
      const src = img.getAttribute("src")
      portfolioModalImg.src = src
    })
  })
}