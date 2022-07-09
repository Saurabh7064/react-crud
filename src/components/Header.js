import PropTypes from 'prop-types'

export const Header = ({title}) => {
    const exampleTest = 'Example';
    return(
        <header className='header'>
            {/*<h1>{props.title} with an {exampleTest}</h1>*/}
            <h1 style={HeadingStyle}>{title} with an {exampleTest}</h1>
        </header>
        )
}

//This applies when no props are passed
Header.defaultProps = {
    title: 'Default React Crud'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const HeadingStyle = {
    color: 'green'
}
