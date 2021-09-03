import React, { Component } from "react";
import "../css/scaleinput.css";

class ScaleInput extends Component {
  highlightScale(e) {
    console.log(e);
  }
  generateScale() {
    const scale = [];
    const scaleOptions = this.props.options;
    for (let i = scaleOptions.min; i <= scaleOptions.max; i++) {
      scale.push(
        <div key={i} className="scaleValue">
          {i}
        </div>
      );
    }
    return scale;
  }
  render() {
    return <div className="scale">{this.generateScale()}</div>;
  }
}

export default ScaleInput;
