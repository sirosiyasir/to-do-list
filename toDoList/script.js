/* VANILLA JAVASCRIPT */
const form = document.querySelector("form")
const input = document.querySelector("input")
const sendButton = document.querySelector("#sendButton")
const clearButton = document.querySelector("#clearButton")

/* Get from Local Storage */
function getTasks() {
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  tasks.forEach(function (task) {
    /* Create ul */
    const ul = document.createElement("ul")

    /* Create li */
    const li = document.createElement("li")

    /* Create anchor */
    const link = document.createElement("a")

    /* append ul to form */
    form.appendChild(ul)

    /* append li to ul */
    ul.appendChild(li)

    /* add fontawesome to anchor */
    link.innerHTML = '<i class="fa fa-remove delete-symbol"></i>'

    /* li content is equal input value */
    li.appendChild(document.createTextNode(task))
    /* add link to li */
    li.appendChild(link)

    /* Remove to do */
    link.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-symbol")) {
        if (confirm("Are you sure ?")) {
          e.target.parentElement.parentElement.remove()
          /* Clear from local Storage */
          localStorage.clear(e)
        }
      }
    })

    /* to do limits */
    if (8 < document.getElementsByTagName("i").length) {
      sendButton.disabled = true
    }

    /* Completed to do */
    li.addEventListener("click", () => {
      li.classList.toggle("li-background")
    })
  })
}
getTasks()
/* ----------END OF LOCAL STORAGE------------- */

sendButton.addEventListener("click", () => {
  if (input.value === "") {
    alert("Add a to do")
    /* if i don't remove link when input.value is "" , it will add link(x) when input.value is empty "" */
    li.removeChild(link)
  }

  /* Create ul */
  const ul = document.createElement("ul")

  /* Create li */
  const li = document.createElement("li")

  /* Create anchor */
  const link = document.createElement("a")

  /* append ul to form */
  form.appendChild(ul)

  /* append li to ul */
  ul.appendChild(li)

  /* add fontawesome to anchor */
  link.innerHTML = '<i class="fa fa-remove delete-symbol"></i>'

  /* li content is equal input value */
  /* li.textContent = input.value */
  li.appendChild(document.createTextNode(input.value))
  /* add link to li */
  li.appendChild(link)

  /* to do limits */
  if (8 < document.getElementsByTagName("i").length) {
    sendButton.disabled = true
  }

  // Store in Local Storage
  storeTaskInLocalStorage(input.value)

  /* Clear Input */
  input.value = ""

  /* Completed to do */
  li.addEventListener("click", () => {
    li.classList.toggle("li-background")
  })

  /* Remove to do */
  link.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-symbol")) {
      if (confirm("Are you sure ?")) {
        e.target.parentElement.parentElement.remove()
        /* Clear from local Storage */
        localStorage.clear(e)
      }
    }
  })
})

/* Enter keydown */
input.addEventListener("keydown", (event)=> {
  if(event.key === "Enter"){
    sendButton.click()
  }
})

/* Remove all to do */
clearButton.addEventListener("click", () => {
  form.innerHTML = ""
  localStorage.clear()
  sendButton.disabled = false
})

/* Save to do in the Local Storage */
function storeTaskInLocalStorage(task) {
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  tasks.push(task)
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

/* Text Animation (working with onclick event)*/
let i = 0
let txt = "Yasir Çeşmeci"
let speed = 50

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("myName").innerHTML += txt.charAt(i)
    i++
    setTimeout(typeWriter, speed)
  }
}
