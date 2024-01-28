const elements = {
  username: document.getElementById('username'),
  email: document.getElementById('email'),
  phone: document.getElementById('phone'),
  address: document.getElementById('address'),
  saveButton: document.getElementById('save-button'),
  outputDisplay: document.getElementById('displayUserData'),
};

function getUserInput() {
  // Get user input values
  const { username, email, phone, address, outputDisplay } = elements;
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const addressValue = address.value.trim();

  // Create a string to display
  const displayUserData = `
    <p>Username: ${usernameValue}</p>
    <p>Email: ${emailValue}</p>
    <p>Phone: ${phoneValue}</p>
    <p>Address: ${addressValue}</p>
  `;

  // Display the string in the designated div
  outputDisplay.innerHTML = `<p id="data-display-text-header">Created new user successfully!</p>${displayUserData} `;
}

// New code to verify user input
elements.saveButton.addEventListener('click', (event) => {
  event.preventDefault();
  getUserInput();
});
