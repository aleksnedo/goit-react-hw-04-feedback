import PropTypes from 'prop-types';
import { Element } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <Element>Good: {good}</Element>
      <Element>Neutral: {neutral}</Element>
      <Element>Bad: {bad}</Element>
      <Element>Total: {total}</Element>
      <Element>Positive feedback: {positivePercentage}%</Element>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
