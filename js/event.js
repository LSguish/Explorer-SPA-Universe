export default function() {
  const bodyApp = document.querySelector('body')
  const a1Event = document.querySelector('nav .navigation a.a1')
  const a2Event = document.querySelector('nav .navigation a.a2')
  const a3Event = document.querySelector('nav .navigation a.a3')

  function changeBG(route) {
    if (route == "/pages/home.html") {

      bodyApp.classList.remove('universe', 'explorer')
      
      a1Event.classList.add('checked')
      a2Event.classList.remove('checked')
      a3Event.classList.remove('checked')
    } else if (route == "/pages/universe.html") {

      bodyApp.classList.add('universe')
      bodyApp.classList.remove('explorer')

      a2Event.classList.add('checked')
      a1Event.classList.remove('checked')
      a3Event.classList.remove('checked')
    } else if (route == "/pages/explorer.html") {

      bodyApp.classList.add('explorer')
      bodyApp.classList.remove('universe')

      a3Event.classList.add('checked')
      a1Event.classList.remove('checked')
      a2Event.classList.remove('checked')
    }
  }

  return {
    changeBG
  }
}