import displayContact from "./contactContent";
import displayHome from "./homeContent";
import displayMenu from "./menuContent";

const pageLoad = function() {
    const content = document.getElementById('content');
    const header = createHeader();
    document.body.insertBefore(header, content);
}

function createHeader() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Restaurant';
    header.appendChild(h1);

    function createNavBar() {
        // Navbar
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');
    
        // Home 
        const homeNav = document.createElement('li');
        homeNav.textContent = 'Home';
        homeNav.setAttribute('data-active', '1');
        homeNav.addEventListener('click', () => {
            const content = document.getElementById('content');
            if (content.firstChild.id === 'home-page') return;
            contactNav.setAttribute('data-active', '0');
            menuNav.setAttribute('data-active', '0');
            homeNav.setAttribute('data-active', '1');
            content.removeChild(content.firstChild);
            displayHome();
        });
    
        // Menu
        const menuNav = document.createElement('li');
        menuNav.textContent = 'Menu';
        menuNav.setAttribute('data-active', '0');
        menuNav.addEventListener('click', () => {
            const content = document.getElementById('content');
            if (content.firstChild.id === 'menu-page') return;
            homeNav.setAttribute('data-active', '0');
            contactNav.setAttribute('data-active', '0');
            menuNav.setAttribute('data-active', '1');
            content.removeChild(content.firstChild);
            displayMenu();
        });
    
        // Contact
        const contactNav = document.createElement('li');
        contactNav.textContent = 'Contact';
        contactNav.setAttribute('data-active', '0');
        contactNav.addEventListener('click', () => {
            const content = document.getElementById('content');
            if (content.firstChild.id === 'contact-page') return;
            menuNav.setAttribute('data-active', '0');
            homeNav.setAttribute('data-active', '0');
            contactNav.setAttribute('data-active', '1');
            content.removeChild(content.firstChild);
            displayContact();
        });

        // Append elements
        ul.appendChild(homeNav);
        ul.appendChild(menuNav);
        ul.appendChild(contactNav);
        nav.appendChild(ul);
    
        return nav;
    }

    header.appendChild(createNavBar());
    return header;
}

export default pageLoad;