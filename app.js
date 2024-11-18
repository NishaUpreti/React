
const heading=document.createElement("h1");
heading.innerHTML="Hello World from JavaScript";
const root=document.getElementById("root");
root.appendChild(heading);
const headingReact = React.createElement("h1",{id:"heading", xyz:"abc"},"Hello World from React");
console.log(headingReact); // object
const rootReact1 = ReactDOM.createRoot(document.getElementById("rootReact"));
rootReact1.render(headingReact);
const child = React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hello"),React.createElement("h2",{},"Hello1")]);
const parent= ReactDOM.createRoot(document.getElementById("parent"));
parent.render(child);
