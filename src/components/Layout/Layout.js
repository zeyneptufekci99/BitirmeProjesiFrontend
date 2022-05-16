import "./Layout.style.css";

import React from "react";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <main className="content">{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
