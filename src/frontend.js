import React from 'react';
import ReactDom from 'react-dom';
import "./frontend.scss";

const divsToUpdate = document.querySelectorAll(".update-me-by-front-end-technologies");

divsToUpdate.forEach(function(div){
    // attributes data from gutenberg block
    const data = JSON.parse(div.querySelector("pre").innerHTML);

    // render react component
    ReactDom.render(<MyComponent {...data} />, div);
})


// your custom react component
function MyComponent(props){
    return(
        <h1>My react component {props.dummyName}</h1>
    )
}