import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Select from 'react-select';

import styles from './styles.css'; // eslint-disable-line no-unused-vars
import 'react-select/dist/react-select.css';

export default class ShortcutList extends Component {
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

  logChange: Function = (val): void => {
    console.log(val);
  }

  onInputKeyDown: Function = (event) : void => {
    switch (event.keyCode) {
      case 9:
        event.preventDefault();
        break;
      case 13:
        event.preventDefault();
        break;
    }
  }

  buildOptions() {
    return this.props.shortcuts.map(shortcut => {
      return {
        value: shortcut.value,
        label: shortcut.text
      };
    });
  }

  cleanValue: Function = (value) : Object => {
    return null;
  }

  renderInFlatList(config: Object) : Object {
    const { className } = config;

    const options = this.buildOptions();

    return (
      <div className={classNames('rdw-shortcut-list-wrapper', className)}>
        <Select
          options={options}
          onChange={this.logChange}
          placeholder={ this.props.shortcutPlaceholder || 'Shortcut...'}
          clearable={false}
          selectValue={this.cleanValue}
          onInputKeyDown={this.onInputKeyDown}
        />
      </div>
    );
  }
}
