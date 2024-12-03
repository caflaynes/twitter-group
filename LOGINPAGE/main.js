// Function to create a button element
function createButton(className, text, iconClass) {
    const button = document.createElement('button');
    button.className = className;
    if (iconClass) {
      const icon = document.createElement('i');
      icon.className = iconClass;
      button.appendChild(icon);
    }
    button.appendChild(document.createTextNode(text));
    return button;
  }
  
  // Function to build the login form dynamically
function renderLoginForm() {
  const app = document.getElementById("app");

  // Page header
  const pageHeader = document.createElement("div");
  pageHeader.className = "page-header";
  pageHeader.innerHTML = `
    <h1>Happening now</h1>
    <h2>Join Today.</h2>
  `;
  app.appendChild(pageHeader);

  // Sign-up buttons
  app.appendChild(createButton("sign-up-google", "Sign up with Google", "fab fa-google"));
  app.appendChild(createButton("sign-up-apple", "Sign up with Apple", "fab fa-apple"));
  
  const orText = document.createElement("p");
  orText.textContent = "or";
  orText.style.margin = "1rem 0";
  app.appendChild(orText);
  
  app.appendChild(createButton("create-account", "Create an account"));

  // Terms and privacy policy text
  const termsText = document.createElement("p");
  termsText.className = "terms-text";
  termsText.innerHTML = `
    By signing up, you agree to the <a href="#">Terms of Service</a> and 
    <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.
  `;
  app.appendChild(termsText);

  // "Already have an account?" text
  const signInText = document.createElement("p");
  signInText.className = "sign-in";
  signInText.textContent = "Already have an account?";
  app.appendChild(signInText);

  // Sign-In button
  const signInButton = createButton("sign-in-button", "Sign in");
  signInButton.classList.add("sign-up-google"); // Reuse Google button styles for visual consistency
  
  // Add redirection to the button
  signInButton.addEventListener('click', () => {
    window.location.href = '../Home _ X.html'; // Redirect to Home_X.html
  });

  app.appendChild(signInButton);
}

// Function to create footer links
function renderFooter() {
  const footerLinks = [
    'About', 'Download the X app', 'Help Center', 'Terms of Service',
    'Privacy Policy', 'Cookie Policy', 'Accessibility', 'Ads info',
    'Blog', 'Careers', 'Brand Resources', 'Advertising', 'Marketing',
    'X for Business', 'Developers', 'Directory', 'Settings'
  ];

  const footer = document.getElementById('footer-links');
  footerLinks.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = link;
    li.appendChild(a);
    footer.appendChild(li);
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderLoginForm();
  renderFooter();
});
