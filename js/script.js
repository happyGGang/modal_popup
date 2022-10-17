;(function () {
  'use strict'
  const get = (target) => {
    return document.querySelector(target)
  }

  const $button = get('.modal_open_button')

  const toggleModal = () => {
    
  }

  $button.addEventListen('click', () => {
    toggleModal()
  })
})()
