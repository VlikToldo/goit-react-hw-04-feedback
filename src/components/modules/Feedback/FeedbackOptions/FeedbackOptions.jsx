import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import styles from "./feedback-options.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const elements = options.map((name) => (
        <>
            <button
                key={nanoid()}
                className={styles.buttonVote}
                type="button"
                onClick={() => onLeaveFeedback(name)}
            >
                {name}
            </button>
        </>

    ));

    return <>{elements}</>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
