// function customReander(reactElement, container) {
//   const domElement = document.createElement(reactElement.type);
//   domElement.innerHTML = reactElement.children;
//   domElement.setAttribute("href", reactElement.props.href);
//   domElement.setAttribute("target", reactElement.props.target);

//   container.appendChild(domElement);
// }

function customReander(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const props in props) {
    if (props == 'children') continue;

  }

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Click me to to visit",
};

const mainContainer = document.querySelector("#root");

customReander(reactElement, mainContainer);

// const reactElement2 = {
//   type: "div",
//   props:{
//     href: "http://facebook.github.com/react",
//     id: "herosection",
//     className: "hero-section",
//   },
//   children: "Click the link , to visit",
// };
