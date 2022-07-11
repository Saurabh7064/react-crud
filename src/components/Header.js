import PropTypes from 'prop-types'
import {Button} from "./Button";

export const Header = ({title,onStudentAdd,showAdd}) => {
    const exampleTest = 'Example';

    return(
        <header className='header'>
            {/*<h1>{props.title} with an {exampleTest}</h1>*/}
            <h1 style={HeadingStyle}>{title} with an {exampleTest}</h1>
             {/*real button is somewhere else*/}
            <Button color={showAdd?'red':'green'} text={showAdd ? 'Close':'Add'} onClickButton={onStudentAdd}/>
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
