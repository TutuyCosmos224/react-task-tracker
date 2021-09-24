import PropTypes from 'prop-types'
import Button from './Button'

const header = ({ title }) => {
    const onClick = ()  => {
        console.log('click')
    }

    return (
        <header>
            <h1>{title}</h1>
            <Button color='green' text='add' onClick={onClick}/>
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
