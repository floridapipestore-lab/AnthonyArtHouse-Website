// INSTAGRAM DROPDOWN BEHAVIOR
// No editing needed when replacing photos, text, or links.
const social = document.querySelector('.social');

// Close the dropdown when someone clicks outside it.
document.addEventListener('click', (event) => {
  if (!social.contains(event.target)) social.open = false;
});

// Let keyboard users close the dropdown with Escape.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && social.open) {
    social.open = false;
    social.querySelector('summary').focus();
  }
});

// Photos automatically use their viewing button URL.
// EDIT the button href in index.html; the photo updates too.
document.querySelectorAll('.collection').forEach((collection) => {
  const photoLink = collection.querySelector('.photo-link');
  const button = collection.querySelector('.shop');
  const destination = button.getAttribute('href');
  if (photoLink && destination && button.getAttribute('aria-disabled') !== 'true') {
    photoLink.setAttribute('href', destination);
    photoLink.removeAttribute('aria-disabled');
    ['target', 'rel'].forEach((attribute) => {
      if (button.hasAttribute(attribute)) {
        photoLink.setAttribute(attribute, button.getAttribute(attribute));
      }
    });
  }
});
