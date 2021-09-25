import { useLocation as Location } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

const header = ({ title, onAdd, showAdd }) => {
    const location = Location()

    return (
        <header>
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>)}
        </header>
        
    )
}

header.defaultProps = {
    title: 'Task Tracker'
}

header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default header
