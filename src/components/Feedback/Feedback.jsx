import shortid from 'shortid';
import PropTypes from 'prop-types';
import { List, Item, Button } from './Feedback.styled';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        const id = shortid.generate();
        return (
          <Item key={id}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
