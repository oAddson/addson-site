import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App";

import "./bootstrap.scss";
import "./vendor";

const doGet = (url) => {
    const promiseCallback = (resolve, reject) => {
    fetch(url)
        .then((response) => { 
            if(!response.ok) throw new Error ('Deu ruim'); 
            return response.json();  
    })
        .then(resolve)
        .catch(reject)
    }
    return new Promise(promiseCallback);
}


setTimeout(() => {
    doGet(window.location.href + 'api/movies').then(el => {
        console.log('Data from Mirage Api:')
        el.movies.forEach(
            movie => console.log(`-${movie.name}`)
        )
    })
}, 500);


ReactDOM.render(<App />, document.getElementById("root"));