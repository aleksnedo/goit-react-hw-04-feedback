import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => {
        const id = shortid.generate();
        return (
          <li key={id}>
            <button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
