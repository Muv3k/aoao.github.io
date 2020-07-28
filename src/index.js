import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCFXC8W7qdHdVhGP7znkI9f8yM4DCLl5uk",
    authDomain: "xb4iv50ohjcek33tzxlo.firebaseapp.com",
    databaseURL: "https://xb4iv50ohjcek33tzxlo.firebaseio.com",
    projectId: "xb4iv50ohjcek33tzxlo",
    storageBucket: "xb4iv50ohjcek33tzxlo.appspot.com",
    messagingSenderId: "323900495802",
    appId: "1:323900495802:web:81d20f6ac56d82bc81ef83"
};

firebase.initializeApp(firebaseConfig);
// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
