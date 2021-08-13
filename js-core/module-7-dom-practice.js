console.log(document);
console.dir(document);
console.log(document.body.parentNode);
console.log(document.parentNode);
console.log(document.body);

console.log(document.childNodes);
console.log(document.children);
console.log(document.body.childNodes)
console.log(document.body.children)

console.log(document.firstChild);
console.log(document.body.firstChild);


console.log(document.lastChild);

console.log(document.previousSibling); //! null
console.log(document.nextSibling); //! null

console.log(document.body.previousSibling);
console.log(document.body.nextSibling); //! null 
console.clear()

//! ===== getting 1 || first DOM node => Object ===== *//

//? document.querySelector("tag-name")
const headerLogoTag = document.querySelector("span")
console.log(headerLogoTag);

//? document.querySelector(#id)
const headerLogoID1 = document.querySelector('#headerLogo')
console.log(headerLogoID1);

//? document.getElementById(id)
const headerLogoID2 = document.getElementById('headerLogo')
console.log(headerLogoID2);

//? doccument.querySelector(.class)
const headerLogoClass = document.querySelector('.text')
console.log(headerLogoClass);

//? document.querySelector([attribute])
const logoLink = document.querySelector('[href="./index.html"]')
console.log(logoLink);

console.clear()

//! ===== getting ALL DOM nodes by... => PSEUDOARRAY  */
//? document.querySelectorAll(tag-name)
const allLinks = document.querySelectorAll('a')
console.log(allLinks);

//? document.querySelectorAll(#id)
//? document.querySelectorAll(.class)
const linksClassLink = document.querySelectorAll('.link')
console.log(linksClassLink)

//? documents.getElementsByClassName(class)
const linksByClassName = document.getElementsByClassName("link")
console.log(linksByClassName);

//? document.getSelectorAll([attribute])
const elementsWithAttribute = document.querySelectorAll('[src]')
console.log(elementsWithAttribute);

console.clear()

//! PROPERTIES of NODES
//? attributes => properties
//? id, name, value, checked, src, href, hidden, etc...
console.dir(headerLogoTag)
console.log(headerLogoTag.id)
console.log(headerLogoTag.classList)
console.log(headerLogoTag.className)

//? HAS GET
console.log(headerLogoTag.hasAttribute("name"))
console.log(headerLogoTag.hasAttribute("id"))
console.log(headerLogoTag.getAttribute("id"))

headerLogoTag.setAttribute('name', 'logo-span')
console.log(headerLogoTag.hasAttribute("name"))
console.log(headerLogoTag.getAttribute("name"))
headerLogoTag.setAttribute('name', 'logo-span2')
headerLogoTag.removeAttribute('name', 'logo-span2')
// headerLogoTag.removeAttribute('id')

//? all attributes
console.log(headerLogoTag.attributes);

//! DELETE
headerLogoTag.removeAttribute('name', 'logo-span2')

//? data-attr dataset


headerLogoTag.setAttribute('data-myAttr1', 'user1')
headerLogoTag.setAttribute('data-myAttr2', 'user2')
headerLogoTag.setAttribute('data-myAttr3', 'user3')
console.log(headerLogoTag.attributes);

console.log(headerLogoTag.dataset);

console.clear()

//! ===== other props =====
//?   .textcontent
console.dir(headerLogoTag);
console.log(headerLogoTag.textContent);
headerLogoTag.textContent = "logo "
headerLogoTag.style.color = "pink"

console.log(headerLogoTag.className);
console.log(headerLogoTag.classList);

headerLogoTag.classList.add("test")
console.log(headerLogoTag.classList);


headerLogoTag.classList.add('mainLogo')
console.log(headerLogoTag.classList);

headerLogoTag.classList.replace('mainLogo', 'mainLogoNew')
console.log(headerLogoTag.classList);

headerLogoTag.classList.replace('mainLogo', 'main-logo')
console.log(headerLogoTag.classList);

//? classList.toggle(className)

console.clear()

const logoLinkN = document.createElement('a')
console.log(logoLinkN);
console.log(logoLinkN.attributes);
logoLinkN.setAttribute('href', './index.html')
console.log(logoLinkN.classList);
logoLinkN.classList.add('logo')
console.log(logoLinkN.classList);
logoLinkN.textContent = 'Studio'
console.log(logoLinkN.textContent);

const logoParent = document.getElementById('logo-parent')
console.log(logoParent);

//! ADD elements to HTML 
//? parent.appendChild(child)
// logoParent.appendChild(logoLinkN)
console.log(logoParent); //* в конец родителя

//? parent.prepend(...children) // (afterbegin)
logoParent.prepend(logoLinkN)

//? parent.before(...children) // (beforebegin)
//? parent.after(...children) // (aftereend)

const logoSpan = document.createElement('span')
console.log(logoSpan);
logoSpan.classList.add('text', 'header-logo')
logoSpan.textContent = 'Web'

// logoLinkN.prepend(logoSpan)

//? parent.insertAdjacentElement('beforeend', child)
//? parent.insertAdjacentElement('aftereend', child)
//? parent.insertAdjacentElement('beforebegin', child)
//? parent.insertAdjacentElement('afterbegin', child)
logoLinkN.insertAdjacentElement("afterbegin", logoSpan)

//? parent.replaceWith(child, nextElem)
//? parent.insertBefore(child, nextElem)

//! Clone Node

console.clear()
const footerLogo = logoLinkN.cloneNode(false)
console.log(footerLogo);
const footerLogoParent = document.getElementById('footer-logo-parent')
console.log(footerLogoParent);
footerLogoParent.insertAdjacentElement("afterbegin", footerLogo)
console.log(footerLogo.parentElement);
console.log(footerLogo.parentNode);
footerLogo.classList.add('home-page')
console.log(footerLogo);
footerLogo.classList.remove('logo')
footerLogo.textContent = 'Studio'
const footerLogo2 = logoSpan.cloneNode(false)
console.log(footerLogo2);
footerLogo2.classList.remove('text', 'header-logo')
footerLogo2.classList.add("text")
footerLogo2.textContent = 'Web'
footerLogo.insertAdjacentElement("afterbegin", footerLogo2)
console.clear()

//! add HTML

const footerAddress =  `<address class="address-text">
            <span class="text">г. Киев, пр-т Леси Украинки, 26</span>
            <a href="mailto:info@example.com" class="link">info@example.com</a>
            <a href="tel:+380991111111" class="link">+38 099 111 11 11</a>
          </address>`

console.log(footerAddress);
footerLogoParent.insertAdjacentHTML('beforeend', footerAddress)

//! Remove Element
const slWrapper = document.querySelector('.sl-wrapper')
console.log(slWrapper);
const slTitle = document.querySelector('.title-link')
console.log(slTitle);

//slWrapper.removeChild(slTitle)
slTitle.remove()

