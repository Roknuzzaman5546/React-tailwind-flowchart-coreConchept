import PropTypes from 'prop-types';
const Li = ({route}) => {

    return (
        <nav>
            <li><a 
            href={route.path}
            className="mr-7" 
            >{route.name}</a></li>
        </nav>
    );
};

Li.propTypes ={
    route: PropTypes.array.isRequired
}

export default Li;