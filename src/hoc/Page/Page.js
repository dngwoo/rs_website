import React, { Component } from "react";
import Home from "../../components/Home";
import About from "../../components/About";
import Project from "../../components/Project";
import Contact from "../../components/Contact";
import ProjectInfo from "../../components/Project/ProjectInfo/ProjectInfo";

class Page extends Component {
  displayPage = no => {
    switch (no) {
      case 0:
        return <Home />;
      case 1:
        return <About />;
      case 2:
        return <Project />;
      case 3:
        return <Contact />;
      case 4:
        return <ProjectInfo />;
      default:
        return <Home />;
    }
  };

  render() {
    return <>{this.displayPage(this.props.page)}</>;
  }
}

export default Page;
