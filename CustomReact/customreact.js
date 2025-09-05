function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
  href:'https://google.com',
  target:'blank'
    },
    children:'click me to visit google'
}

const mainconatiner=document.querySelector('#root');

customRender(reactElement,mainconatiner)