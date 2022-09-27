import React from "react";
import ReactDOM from "react-dom/client";
import MyWidget from "./MyWidget";
import styles from "./MyWidget.scss?inline";

class Main extends HTMLElement {
  connectedCallback() {
    var shadowDOM = this.attachShadow({ mode: "open" });

    this.element = ReactDOM.createRoot(shadowDOM);
    this.element.render(
      <React.StrictMode>
        <style>{styles}</style>
        <MyWidget />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    if (typeof ReactDOM.createRoot === "function") {
      this.element.unmount();
    } else {
      ReactDOM.unmountComponentAtNode(this);
    }
  }
}
customElements.define("my-widget", Main);
