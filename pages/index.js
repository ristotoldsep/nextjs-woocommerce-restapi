import Image from 'next/image'
import Header from '../src/components/layouts/header'
import axios from 'axios'
import Footer from '@/src/components/layouts/footer'
import { HEADER_FOOTER_ENDPOINT, GET_PRODUCTS_ENDPOINT } from '@/src/utils/constants/endpoints'
import Products from '@/src/components/products'


export default function Home({ headerFooter, products }) {

  // const test = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;
  // console.warn(data);

  const { header, footer } = headerFooter || {};

  console.log(products);

  return (
    <>
      <Header header={header} />
      <main className="container mx-auto p-4" >
       <Products products={products} />
      </main>
      <Footer footer={footer} />
    </>
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