const footer = document.createElement('footer');
footer.className = 'footer';
footer.style.backgroundColor = '#000';
footer.style.color = '#fff';
footer.style.padding = '20px';
footer.style.textAlign = 'center';

// Social media links array
const socialLinks = [
    { url: 'https://github.com/Kalpeshgunjal07', icon: 'fab fa-github', label: 'GitHub' },
    { url: 'https://www.linkedin.com/in/kalpesh-gunjal-13275a226', icon: 'fab fa-linkedin', label: 'LinkedIn' },
    { url: 'mailto:kalpeshgunjal07@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
    { url: 'tel:+91-7208783587', icon: 'fas fa-phone', label: 'Contact' },
];

// Create a div for social icons
const socialIconsDiv = document.createElement('div');
socialIconsDiv.style.display = 'flex';
socialIconsDiv.style.justifyContent = 'center';
socialIconsDiv.style.gap = '30px';

// Add each social link as an anchor with icon
socialLinks.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.className = 'icon';
    anchor.style.color = '#fff';
    anchor.style.fontSize = '20px';
    anchor.style.textDecoration = 'none';
    anchor.style.display = 'flex';
    anchor.style.alignItems = 'center';
    anchor.style.gap = '8px';
    anchor.target = '_blank';
    anchor.innerHTML = `<i class="${link.icon}"></i> ${link.label}`;
    anchor.onmouseover = () => { anchor.style.color = '#007bff'; };
    anchor.onmouseleave = () => { anchor.style.color = '#fff'; };
    socialIconsDiv.appendChild(anchor);
});

// Append social icons to footer
footer.appendChild(socialIconsDiv);

// Append footer to the footer-container div
document.getElementById('footer-container').appendChild(footer);
