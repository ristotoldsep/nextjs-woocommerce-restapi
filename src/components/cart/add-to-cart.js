import { isEmpty } from 'lodash';
import { addToCart } from '../../utils/cart';
import { useContext, useState } from 'react';
import { AppContext } from '../context';
import Link from 'next/link';
import cx from 'classnames';

const AddToCart = ( { product } ) => {
	
	const [ cart, setCart ] = useContext( AppContext );
	const [ isAddedToCart, setIsAddedToCart ] = useState( false );
	const [ loading, setLoading ] = useState( false );
	const addToCartBtnClasses = cx(
		'duration-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow',
		{
			'bg-white hover:bg-[#eb5e7b] hover:text-white': ! loading, 
			'bg-gray-200': loading,
		},
	);
	
	if ( isEmpty( product ) ) {
		return null;
	}
	
	return (
		<>
			<button
				className={ addToCartBtnClasses }
				onClick={ () => addToCart( product?.id ?? 0, 1, setCart, setIsAddedToCart, setLoading ) }
				disabled={ loading }
			>
				{ loading ? 'Lisan...' : 'Lisa korvi' }
			</button>
			{ isAddedToCart && ! loading ? (
				<Link href="/cart">
					<p
						className="bg-white hover:bg-gray-100 text-gray-800 font-semibold ml-4 py-11px px-4 border border-gray-400 rounded shadow"
					>
						Vaata ostukorvi
					</p>
				</Link>
			) : null }
		</>
	);
};

export default AddToCart;