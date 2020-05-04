import React, { Component } from "react";
import "./Modal.scss";
import cx from "classnames";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keyup", this.onKeyUp);
  }

  onKeyUp = (e) => {
    if (e.keyCode === 27) {
      this.props.onClose();
    }
  };

  componentWillUnmount() {
    window.removeEventListener("keyup", this.onKeyUp);
  }
  render() {
    const { children, onClose, className } = this.props;
    const toggleClassName = cx("modal", className);
    return (
      <div className={toggleClassName} onClick={onClose}>
        <section
          className="modal-main-container"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button label={"Ok"} onClick={onClose}></button>
        </section>
      </div>
    );
  }
}
