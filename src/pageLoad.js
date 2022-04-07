const pageLoad = function() {
    const content = document.getElementById('content');
    document.body.insertBefore(createHeader(), content);
    document.body.insertBefore(createNavBar(), content);
}

function createHeader() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Restaurant';
    header.appendChild(h1);
    return header;
}

function createNavBar() {
    // Navbar
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    // Home 
    const homeNav = document.createElement('li');
    homeNav.textContent = 'Home';

    // Menu
    const menuNav = document.createElement('li');
    menuNav.textContent = 'Menu';

    // Contact
    const contactNav = document.createElement('li');
    contactNav.textContent = 'Contact';

    // Append elements
    ul.appendChild(homeNav);
    ul.appendChild(menuNav);
    ul.appendChild(contactNav);
    nav.appendChild(ul);

    return nav;
}

export default pageLoad;