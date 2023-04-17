import axios from 'axios'
import { HEADER_FOOTER_ENDPOINT, GET_PRODUCTS_ENDPOINT } from '@/src/utils/constants/endpoints'
import Products from '@/src/components/products'
import Layout from '../src/components/layout';


export default function Home({ headerFooter, products }) {

  const { header, footer } = headerFooter || {};

  // console.log(products);

  return (
    <Layout headerFooter={ headerFooter || {} }>
       <Products products={products} />
    </Layout>
  )
}

export async function getStaticProps() {
  const { data: headerFooterData } = await axios.get( HEADER_FOOTER_ENDPOINT );
  const { data: productsData } = await axios.get( GET_PRODUCTS_ENDPOINT );

  // const res = await fetch( HEADER_FOOTER_ENDPOINT );
  // const data = await res.json();

  const data = { 
    headerFooter: headerFooterData?.data ?? {}, 
    products: productsData?.products ?? {} 
  };

  return {
    props: data || {},
    revalidate: 1,
  };
}