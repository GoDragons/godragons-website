import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      // we have to scroll the #root element instead of the whole window, because its
      // direct parent (the body element) has overflow: auto and height: 100vh
      document.querySelector("#root").scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
