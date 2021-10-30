import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
            {total ? (
                <>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {total}</p>
                    <p>Positive feedback: {positivePercentage}%</p>
                </>
            ) : (
                // ? компонент Notification краще щоб був тут? Бо можна і в компоненті App по умові рендерити
                <Notification message="No feedback given" />
            )}
        </>
    );
}

Statistics.propTypes = {
    // ? Як тут зрозуміти чи потрібно цим пропам задавати ще isRequired, та не можу визначитися чи потрібні пропам компонента Statics прописувати дефолт, вроді як і напрошується але 🤔
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

export default Statistics;
