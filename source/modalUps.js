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
    modalWindows.forEach(element => {
      element.style.display = "none"
    })
    hideOverlay();
    toggleScroll();
  }

  //Prevent closing if click on pop-up

  modalWindows.forEach(element => {
    element.onclick = event => {
      event.stopPropagation()
    }
  })

  //Listeners for open-buttons
  
  openerModalButtons.forEach(element => {
    element.addEventListener("click", event => {
      event.preventDefault()
      const modalWindow = document.querySelector(`[modal-window="${element.getAttribute('open-modal-window')}"]`)
      modalWindow.style.display = "block"
      showOverlay();
      toggleScroll();
    });
  })

  //Listeners for close-buttons
  
  closerModalButtons.forEach(element => {
    element.onclick = closeAllModalWindows;
  })
  
  modalOverlay.onclick = closeAllModalWindows;

};