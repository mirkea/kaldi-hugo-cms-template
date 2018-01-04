import React from "react";
import CMS from "netlify-cms";

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
    console.log("e=" + e.index +" / " + e.target.value +" / " + e.target.index + " val=" + e.target.value);
    console.dir(e.target.name);
    //this.props.onChange(e.target.value.split(',').map((e) => e.trim()));
    var old = this.props.value;
    // console.log("old=" +old[1]);
    // //.split[","];
    
    // old[Number(e.target.name)] = e.target.value;
    // var out = old.join(",");
    ///this.props.value = this.props.value;
    //this.props.onChange(old);

    var n = Number(e.target.name);
    var v = e.target.value;

    this.props.onChange(old.map(function(val, index) {
      var out = val;
      if (index==n) out = v;
      return out;
    }));
  },


  render: function() {
    var value = this.props.value;
    console.log("value=" +value);
    // var obj = value.map(function(val, index) {
    //   return h('li', {key: index}, val);
    // });
    var that = this;
    return <div className='ioio'>obj={
      value.map(function(val, index) {
        return h('input', {type:'text', value: val, name: index, onChange: that.handleChange} );
      })
    }</div>;
    //return  <div className='ioio' >{h('input', { type: 'text', value: value ? value.join(', ') : '', onChange: this.handleChange })} </div>;
  }
});

var CategoriesPreview = createClass({
  render: function() {
    return h('ul', {},
      this.props.value.map(function(val, index) {
        return h('li', {key: index}, val);
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

