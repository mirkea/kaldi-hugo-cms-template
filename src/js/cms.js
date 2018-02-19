import React from "react";
import CMS from "netlify-cms";
import PropTypes from 'prop-types';

import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import { SlidesControl, SlidesPreview } from "./Slides";
// import { TranslationsControl, TranslationsPreview } from "./Translations";
// import { Slides2Control, Slides2Preview } from "./Slides2";
// import { StringzControl, StringzPreview } from "./Stringz";


// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

var CategoriesControl = createClass({
  handleChange: function(e) {
    console.log("e=" + e.target.name)
    this.props.onChange(this.props.value.map(function(val, index) {
      var out = val;
      console.log("val=" + val +" index=" +index +" this=" + this);
   //  if (index==Number(e.target.name.split("__")[1]))  {
        console.log("found " +  e.target.name);
        out = e.target.value;
     // }
      return out;
    }));
  },
  
  keys: String,

  render: function() {
    var value = this.props.value;
    var that = this;
    var keys = this.props.field.get("keys").split(",");
    var labels = this.props.field.get("label");
    return <div className='ioio'>{
      value.map(function(val, index) {
        return <div><span>{ keys[index] }</span>{ h('input', {type:'text', value: val, name: labels + "__" + index, onChange: that.handleChange} ) }</div>;
      })
    }</div>;
    //return  <div className='ioio' >{h('input', { type: 'text', value: value ? value.join(', ') : '', onChange: this.handleChange })} </div>;
  }
});


var CategoriesPreview = createClass({
  render: function() {
    var value = this;
    var keys = this.props.field.get("keys").split(",");
    var labels = this.props.field.get("label").split(",");
    return h('div', {},
      this.props.value.map(function(val, index) {
        return "{" + keys[index] +":" + val + "}";
        //return h('li', {key: index}, val);
      })
    );
  }
});













CMS.registerWidget('categories', CategoriesControl, CategoriesPreview); 
// CMS.registerWidget('translations', TranslationsControl, TranslationsPreview);

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerWidget("color", ColorControl);
CMS.registerWidget("slides", SlidesControl, SlidesPreview);
// CMS.registerWidget("slides2", Slides2Control, Slides2Preview);
// CMS.registerWidget("stringz", StringzControl, StringzPreview);

