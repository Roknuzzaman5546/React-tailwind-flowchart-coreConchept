import PropTypes from 'prop-types';
import Feature from './feature';

const Priceoption = ({option}) => {
    const { name, price, features} = option
    return (
        <div className=' bg-blue-300 p-4 rounded-md text-black space-y-2 flex flex-col'>
            <h2>
                <span className=' text-3xl font-extrabold text-stone-500'>{price}</span>
            </h2>
            <h2>
                <span className=' text-3xl'>{name}</span>
            </h2>
            <div className=' flex-grow'>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
                <button className=' bg-green-400 w-full p-2 rounded-md font-bold hover:bg-green-800'>Select</button>
        </div>
    );
};

Priceoption.propTypes ={
    option: PropTypes.object.isRequired
}
export default Priceoption;