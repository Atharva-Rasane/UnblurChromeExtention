// Function to remove blur from an element
function removeBlur(el) {
    el.style.filter = 'none';
    el.style.backdropFilter = 'none';
    el.style.textShadow = 'none';
  }
  
  // Remove blur on existing elements
  document.querySelectorAll('*').forEach(el => removeBlur(el));
  
  // Observe future changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      document.querySelectorAll('*').forEach(el => removeBlur(el));
    });
  });
  
  observer.observe(document.body, { attributes: true, childList: true, subtree: true });
  