import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => (
  <section className={styles.statsSection}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.statsList}>
      {stats.map(item => {
        let color = (Math.random() * 1000000).toFixed();
        if (color.length === 5) color += '5';

        return (
          <li
            key={item.id}
            className={styles.item}
            style={{ backgroundColor: `#${color}` }}
          >
            <span className={styles.label}>{item.label} </span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: 'Upload stats',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;
