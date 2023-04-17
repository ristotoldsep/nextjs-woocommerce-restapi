/**
 * External Dependencies
 */

import Head from 'next/head';

/**
 * Internal Dependencies.
 */
import { AppProvider } from '../context';
import Header from './header';
import Footer from './footer';
import { useEffect, useState } from 'react';


const Layout = ({children, headerFooter, uri }) => {
	const { header, footer } = headerFooter || {};

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setIsLoaded(true);
    }, []);

	return (
		<AppProvider>
			<div className={`appp ${isLoaded ? 'loaded' : ''}`}>
				<Head>
					<link rel="shortcut icon" href={ header?.favicon ?? '/favicon.ico' }/>
					{
                        <title>{ header?.siteTitle ?? 'NextJs WooCommerce' }</title>
					}
				</Head>
				<Header header={header}/>
				<main className="container mx-auto p-4 min-h-50vh ">
					{children}
				</main>
				<Footer footer={footer}/>
			</div>
		</AppProvider>
	)
}

export default Layout