import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Option from '../Option';
import styles from './styles.css'; // eslint-disable-line no-unused-vars

export default class ShortcutControl extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    editorState: PropTypes.object.isRequired,
    modalHandler: PropTypes.object,
    config: PropTypes.object,
  };

  render() {
    const { config } = this.props;

    return this.renderInFlatList(config);
  }

  toggleShortcut: Function = (): void => {
    console.log(this.props.editorState)
  }

  renderInFlatList(config: Object) : Object {
    const { className, icon } = config;

    return (
      <div className={classNames('rdw-shortcut-wrapper', className)}>
        <Option
          onClick={this.toggleShortcut}
          className={classNames(className)}
        >
          <img
            role='presentation'
            src={icon}
          />
        </Option>
      </div>
    );
  }
}
