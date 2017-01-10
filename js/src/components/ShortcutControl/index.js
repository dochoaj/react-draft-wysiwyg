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

  toggleShortcut: => {
    console.log('On click');
  }

  renderInFlatList(currentStyles, config) {
    return (
      <div className={classNames('rdw-shortcut-wrapper', config.className)}>
        <Option
          value={style.toUpperCase()}
          onClick={this.toggleShortcut}
          className={className(config.className)}
        >
          <img
            role='presentation'
            src={config.icon}
          />
        </Option>
      </div>
    );
  }
}
