function displayContact() {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.id = 'contact-page';
    div.append(messageSection(), info());
    content.appendChild(div);
}

function messageSection() {
    const container = document.createElement('div');

    // Message form
    const form = document.createElement('form');
    const h2 = document.createElement('h2');
    h2.textContent = 'Send us a message';

    // Name input
    const nameField = document.createElement('p');
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.id = 'name';
    nameField.append(nameLabel, nameInput);

    // Email input
    const emailField = document.createElement('p');
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'E-mail:';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.id = 'email';
    emailField.append(emailLabel, emailInput);

    // Text input
    const textField = document.createElement('p');
    const textLabel = document.createElement('label');
    textLabel.setAttribute('for', 'message');
    textLabel.textContent = 'Message:';
    const textInput = document.createElement('textarea');
    textInput.id = 'message';
    textField.append(textLabel, textInput);

    // Submit button
    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.setAttribute('type', 'button');

    // Append elements
    container.appendChild(form);
    form.append(h2, nameField, emailField, textField, button);
    
    return container;
}

function info() {
    const container = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';

    const email = document.createElement('p');
    email.textContent = 'E-mail: restaurant-email@restaurant.com';

    const address = document.createElement('p');
    address.textContent = 'Restaurant Street, 123';

    const phone = document.createElement('p');
    phone.textContent = '123-456-7890';

    container.append(h2, email, address, phone);

    return container;
}

export default displayContact;