import React, { Component } from "react";
import styled from "styled-components";

const SlideControl = props => {
  const StringControl = CMS.getWidget("string").control;
  return (
    <div>
      <span>SlideControl:</span>
      <StringControl {...props} />
    </div>
  );
};

const SlidePreview = props => {
  const StringPreview = CMS.getWidget("string").preview;
  return <div>StringPreview: <StringPreview {...props} /></div>;
};

const defaultSeparator = "---";

export class Slides2Control extends Component {
  // render() {
  //   return <div>--> Slides2Control</div>;
  // }



  handleChange() {
    this.props.onChange(e.target.value.split(',').map((e) => e.trim()));
  };

  render() {
    var value = this.props.value;
    return h('input', { type: 'text', value: value ? value.join(', ') : '', onChange: this.handleChange });
  };



  /*
  getValue() {
    return this.props.value ? this.props.value : "";
  }

  handleSlideChange(value, i) {
    const newValues = this.getValue().split(
      this.props.field.get("separator", defaultSeparator)
    );
    newValues[i] = value;
    this.props.onChange(
      newValues.join(this.props.field.get("separator", defaultSeparator))
    );
  }

  render() {
    const slides = this.getValue().split(
      this.props.field.get("separator", defaultSeparator)
    );
    const slideControls = slides.map((slideContent, i) => (
      <SlideControl
        {...this.props}
        key={i}
        value={slideContent}
        onChange={value => this.handleSlideChange(value, i)}
      />
    ));
    return <div>{slideControls}</div>;
  }*/
}

export const Slides2Preview = props => (
  <div>
      aaaaaaaaaaa
  </div>

  /*
  <div>
    <b>Slides2Preview:</b>
    {props.value
      .split(props.field.get("separator", defaultSeparator))
      .map((val, i) => <SlidePreview {...props} key={i} value={val} />)}
  </div>
  */
);
