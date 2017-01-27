import {default as React, PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class TranslationProvider extends Component {
  getChildContext() {
    return {
      locale: this.props.locale
    };
  }

  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}

TranslationProvider.propTypes = {
  children: PropTypes.array,
  locale: PropTypes.string,
  className: PropTypes.string.isRequired,
};

TranslationProvider.childContextTypes = {
  locale: PropTypes.string.isRequired
};

const stateToProps = (state: Object) => ({
  locale: state.locale || 'en'
});

export default connect(stateToProps)(TranslationProvider);
