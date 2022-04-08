const displayHome = function() {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.id = 'home-page';
    div.append(hours(), about(), location());
    content.appendChild(div);
}

function hours() {
    const container = document.createElement('div');
    container.classList.add('hours');
    const h2 = document.createElement('h2');
    h2.textContent = 'Hours';

    const sunday = document.createElement('p');
    const monday = document.createElement('p');
    const tuesday = document.createElement('p');
    const wednesday = document.createElement('p');
    const thursday = document.createElement('p');
    const friday = document.createElement('p');
    const saturday = document.createElement('p');

    sunday.textContent = 'Sunday: 8am - 8pm';
    monday.textContent = 'Monday: 6am - 6pm';
    tuesday.textContent = 'Tuesday: 6am - 6pm';
    wednesday.textContent = 'Wednesday: 6am - 6pm';
    thursday.textContent = 'Thursday: 6am - 10pm';
    friday.textContent = 'Friday: 6am - 10pm';
    saturday.textContent = 'Saturday: 8am - 10pm';

    container.append(h2, sunday, monday, tuesday, wednesday, thursday, friday, saturday);

    return container;
}

function about() {
    const container = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = 'About Us';
    const p = document.createElement('p');
    p.textContent = 'Maecenas vitae urna nec erat tempus pellentesque et sit amet ipsum. Sed tempus justo et risus porta condimentum. Vivamus finibus, risus eget vehicula posuere, ligula elit facilisis turpis, ut pellentesque massa elit et nisi. Pellentesque accumsan odio id nisi hendrerit imperdiet. Aliquam erat volutpat. Nunc quis lectus vel nunc consequat elementum. Phasellus volutpat mollis accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sem lacus, iaculis id metus vel, auctor consectetur nunc. Duis lacinia id libero scelerisque vulputate. Sed consequat tortor nec lobortis volutpat. Nunc consequat vulputate euismod. Praesent quis vehicula enim.';
    
    container.append(h2, p);

    return container;
}

function location() {
    const container = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = 'Location';
    const p = document.createElement('p');
    p.textContent = 'Restaurant Street, 123, 12345'
    container.append(h2, p);

    return container;
}

export default displayHome;