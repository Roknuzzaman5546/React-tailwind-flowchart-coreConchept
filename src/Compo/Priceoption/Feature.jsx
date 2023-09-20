import { AiOutlineCheck } from 'react-icons/ai';
import PropTypes from 'prop-types';


const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-1'>
            <AiOutlineCheck></AiOutlineCheck>
            <h2>{feature}</h2>
        </div>
    );
};

Feature.propTypes ={
    feature: PropTypes.string
}
export default Feature;