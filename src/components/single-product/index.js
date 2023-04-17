/**
 * Internal Dependencies.
 */
import AddToCart from '../cart/add-to-cart';
import ExternalLink from '../products/external-link';
import ProductGallery from './product-gallery';

const SingleProduct = ( { product } ) => {
    console.log(product); 

	return Object.keys( product ).length ? (
		<div className="single-product container mx-auto my-32 px-4 xl:px-0">
			<div className="grid md:grid-cols-2 gap-4">
				<div className="product-images">
					
					{ product.images.length ? (
						<ProductGallery items={ product?.images }/>
					) : null }
				</div>
				<div className="product-info">
					<h4 className="products-main-title text-2xl uppercase">{ product.name }</h4>
                    <hr style={{margin: '20px 0'}}></hr>
					<div
						
						dangerouslySetInnerHTML={ {
							__html: product.description,
						} }
						className="product-description mb-5"
					/>
					<div
						
						dangerouslySetInnerHTML={ {
							__html: product?.price_html ?? '',
						} }
						className="product-price mb-5"
					/>
					{ 'simple' === product?.type ? <AddToCart product={ product }/> : null }
					{
						'external' === product?.type ?
							<ExternalLink
								url={ product?.external_url ?? '' }
								text={ product?.button_text ?? '' }
							/> : null
					}
                    <hr style={{margin: '20px 0'}}></hr>
                    <div className="flex gap-1">
                        <p className="font-bold	">Kategooriad:</p>
                        {
                            product.categories.map((category, i) => (
                                <span key={i}>{category.name}  | </span>
                            ))
                        }
                    </div>
                    
				</div>
			</div>
		
		</div>
	) : null;
	
};

export default SingleProduct;