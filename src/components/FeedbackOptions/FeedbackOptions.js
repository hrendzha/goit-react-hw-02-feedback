import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <>
            {options.map(option => (
                <button
                    className={s.option}
                    key={option}
                    type="button"
                    data-option={option}
                    onClick={onLeaveFeedback}
                >
                    {option}
                </button>
            ))}
        </>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
