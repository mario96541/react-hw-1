import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ plan }) => {
  const labelClasses = [
    styles.label,
    styles[`${plan.label.toLowerCase()}Color`],
  ];
  const buttonClasses = [styles.button, styles[`${plan.label.toLowerCase()}`]];

  return (
    <div className={styles.pricingItem}>
      <i
        className={styles.icon}
        style={{ backgroundImage: `url(${plan.icon})` }}
      />
      <h2 className={labelClasses.join(' ')}>{plan.label}</h2>
      <p className={styles.capacity}>{plan.capacity} storage</p>
      <p className={styles.description}>{plan.description}</p>
      <p className={styles.price}>${plan.price}/mo</p>
      <button type="submit" className={buttonClasses.join(' ')}>
        Get Started
      </button>
    </div>
  );
};

PricingItem.propTypes = {
  plan: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default PricingItem;
