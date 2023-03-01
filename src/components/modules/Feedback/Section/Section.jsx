import PropTypes from 'prop-types';

// import styles from './section.module.css';

const Section = ({children, title}) => {
    return (
        <div className="">
            <h3 className="">{title}</h3>
            {children}
        </div>
    );
};

export default Section;

Section.propTypes ={
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}
