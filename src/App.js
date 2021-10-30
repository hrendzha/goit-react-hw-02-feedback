import { Component } from 'react';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

const feedbackOptions = ['good', 'neutral', 'bad'];

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback = () =>
        Object.values(this.state).reduce((acc, value) => acc + value);

    countPositiveFeedbackPercentage = () =>
        Math.round((this.state.good * 100) / this.countTotalFeedback()) || 0;

    onLeaveFeedback = e => {
        const option = e.target.dataset.option;
        this.setState(state => ({ [option]: state[option] + 1 }));
    };

    render() {
        const { good, neutral, bad } = this.state;

        return (
            <>
                {/* Компоненти Section повинні бути тут чи краще було б їх забити в FeedbackOptions та Statistics ?*/}
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={feedbackOptions}
                        onLeaveFeedback={this.onLeaveFeedback}
                    />
                </Section>

                <Section title="Statistics">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                </Section>
            </>
        );
    }
}

export default App;
