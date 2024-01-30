let activeIndex = 0

const deques = document.getElementsByClassName("deque");

const handleHeartBtn = () => {
  const nextIndex = (activeIndex + 1 <= deques.length - 1) ? activeIndex + 1 : 0

  const currentDeque = document.querySelector(`[data-index="${activeIndex}"]`)
  const nextDeque = document.querySelector(`[data-index="${nextIndex}"]`)

  currentDeque.dataset.status = "after"
  nextDeque.dataset.status = "becoming-active-left"

  setTimeout(() => {
    nextDeque.dataset.status = "active"
    activeIndex = nextIndex
  })
  checkViewBtnClass()
}

const handleXBtn = () => {
  const prevIndex = (activeIndex - 1 >= 0) ? activeIndex - 1 : deques.length - 1 

  const currentDeque = document.querySelector(`[data-index="${activeIndex}"]`)
  const prevDeque = document.querySelector(`[data-index="${prevIndex}"]`)
  
  currentDeque.dataset.status = "before"
  prevDeque.dataset.status = "becoming-active-right"

  setTimeout(() => {
    prevDeque.dataset.status = "active"
    activeIndex = prevIndex
  })

  checkViewBtnClass()
}

const handleViewBtn = () => {
  const buttonView = document.getElementById("view-btn")

  let buttonClass = buttonView.dataset.class
  let iconClass = document.getElementById("view-btn-icon").className

  if (iconClass === "fa fa-plus") {
    document.getElementById("view-btn-icon").className = "fa fa-minus"
  } else {
    document.getElementById("view-btn-icon").className = "fa fa-plus"
  }
  
  buttonClass === "plus" ? buttonClass = "minus" : buttonClass = "plus"
  buttonView.dataset.class = buttonClass

  const currentDeque = document.querySelector(`[data-index="${activeIndex}"]`)
  if (currentDeque.dataset.status === "active") {
    currentDeque.dataset.status = "opened"
  } else {
    currentDeque.dataset.status = "closed"
    currentDeque.dataset.status = "active"
  }
}

const checkViewBtnClass = () => {
  const buttonView = document.getElementById("view-btn")
  const buttonClass = buttonView.dataset.class

  if (buttonClass === "minus") {
    buttonView.dataset.class = "plus"
    document.getElementById("view-btn-icon").className = "fa fa-plus"
  }

}