window.onload = function() {

  const body = document.querySelector("body"),
        modalOverlay = document.querySelector('[modal-overlay]'),
        openerModalButtons = document.querySelectorAll('[open-modal-window]'),
        closerModalButtons = document.querySelectorAll('[close-modal-window]'),
        modalWindows = document.querySelectorAll('[modal-window]');
  
  function toggleScroll() {
    body.style.overflow === "hidden" ? body.style.overflow = "auto" : body.style.overflow = "hidden"
  }
  
  function hideOverlay() {
    modalOverlay.style.display = "none"
  }
  
  function showOverlay() {
    modalOverlay.style.display = "flex"
  }
  
  function closeAllModalWindows() {
    event.preventDefault()
    modalWindows.forEach(element => {
      element.style.display = "none"
    })
    hideOverlay();
    toggleScroll();
  }

  modalWindows.forEach(element => {
    element.onclick = event => {
      event.stopPropagation()
    }
  })
  
  openerModalButtons.forEach(element => {
    element.addEventListener("click", event => {
      event.preventDefault()
      const modalWindow = document.querySelector(`[modal-window="${element.getAttribute('open-modal-window')}"]`)
      modalWindow.style.display = "block"
      showOverlay();
      toggleScroll();
    });
  })
  
  closerModalButtons.forEach(element => {
    element.onclick = closeAllModalWindows;
  })
  
  modalOverlay.onclick = closeAllModalWindows;

};