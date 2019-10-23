import React from 'react';
import PropTypes from 'prop-types';
import popularEmoji from '@img/popular.png';
import styles from './SectionName.module.scss';

class SectionName extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;

    return (
      <h2 className={styles["list-title"]}>
        {title}
        <img className={styles["emoji"]} src={popularEmoji} alt="emoji popular" />
      </h2>
    );
  }
}

export default SectionName;
