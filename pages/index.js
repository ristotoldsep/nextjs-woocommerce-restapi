import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../src/components/layouts/header'
import axios from 'axios'
import Footer from '@/src/components/layouts/footer'
import { HEADER_FOOTER_ENDPOINT } from '@/src/utils/constants/endpoints'
import Products from '@/src/components/products'


export default function Home({data}) {
  const test = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;
  console.warn(data);

  const { header, footer } = data;
  return (
    <>
      
      <Header header={header} />
      <main >
       <Products />
      </main>
      <Footer footer={footer} />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get( HEADER_FOOTER_ENDPOINT );

  // const res = await fetch( HEADER_FOOTER_ENDPOINT );
  // const data = await res.json();


  return {
    props: data || {},
    revalidate: 1,
  };
}