import React from "react";
import CMS from "netlify-cms";

import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import { SlidesControl, SlidesPreview } from "./Slides";
import { Slides2Control, Slides2Preview } from "./Slides2";
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

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerWidget("color", ColorControl);
CMS.registerWidget("slides", SlidesControl, SlidesPreview);
CMS.registerWidget("slides2", Slides2Control, Slides2Preview);
// CMS.registerWidget("stringz", StringzControl, StringzPreview);

