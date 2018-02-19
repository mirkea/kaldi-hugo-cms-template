import PropTypes from 'prop-types';
import React from 'react';

export default class String2Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
  };

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle
    } = this.props;

    return (
      <input
        type="text"
        id={forID}
        className={classNameWrapper}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
      />
    );
  }
}

export default function String2Preview({ value }) {
  return <div className="nc-widgetPreview">{ value }</div>;
}

String2Preview.propTypes = {
  value: PropTypes.node,
};
