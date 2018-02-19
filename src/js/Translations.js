import React from "react";

var TranslationsControl = createClass({
	handleChange: function(e) {
	  this.props.onChange(e.target.value.split(',').map((e) => e.trim()));
	},
 
	render: function() {
	  var value = this.props.value;
	  return  <div className='ioio' >{h('input', { type: 'text', value: value ? value.join(', ') : '', onChange: this.handleChange })} </div>;
	}
 });
 
 var TranslationsPreview = createClass({
	render: function() {
	  return h('ul', {},
		 this.props.value.map(function(val, index) {
			return h('li', {key: index}, val);
		 })
	  );
	}
 });