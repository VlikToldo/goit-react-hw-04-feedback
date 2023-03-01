import { Component } from 'react';

import Statistics from './StatisticsBlock/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';



class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onButtonClick = name => {
        this.setState(prevState => {
            return {
                [name]: prevState[name] + 1,
            };
        });
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return Number(total);
    };

    countPositiveFeedbackPercentage() {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        }
        const positiveFeedbackPercentage = ((good / total) * 100).toFixed(2);
        return Number(positiveFeedbackPercentage);
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positiveFeedbackPercentage =
            this.countPositiveFeedbackPercentage();

        return (
            <div className="">
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onButtonClick}
                    />
                </Section>
                <Section title="Statistics">
                    {((Boolean(!total)) && (
                        <Notification message="There is no feedback" />)
                    ) || (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={positiveFeedbackPercentage}
                        />
                    )}
                </Section>
            </div>
        );
    }
}

export default Feedback;
