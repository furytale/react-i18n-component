/* eslint-disable  */
import {default as React, Component} from 'react';
import * as en from './en';
import * as de from './de';

const languages = { en, de };

export default function translate(key) {
  return WrappedComponent => {
    class TranslationComponent extends Component {
      render() {
        const strings = languages[this.context.locale][key];
        const merged = {
          ...this.props.strings,
          ...strings
        };
        if (strings) {
          return (
            <WrappedComponent
              {...this.props}
              strings={merged}
              locale={this.context.locale} />
          );
        }

        return (
          <WrappedComponent
            {...this.props}
            locale={this.context.locale} />
        );
      }
    }

    TranslationComponent.contextTypes = {
      locale: React.PropTypes.string
    };

    TranslationComponent.propTypes = {
      strings: React.PropTypes.object
    };

    return TranslationComponent;
  };
}
