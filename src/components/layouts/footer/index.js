/**
 * Internal Dependencies.
 */
import { getPathNameFromUrl, sanitize } from '../../../utils/miscellaneous';

/**
 * External Dependencies.
 */
import { isEmpty, isArray } from 'lodash';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = ( { footer } ) => {
	
	const { copyrightText, footerMenuItems, sidebarOne, sidebarTwo, socialLinks } = footer || {};
	const [ isMounted, setMount ] = useState( false );
	
	
	useEffect( () => {
		setMount( true );
	}, [] );
	
	return (
		<footer className="footer bg-[#181818] p-6">
			<div className="container mx-auto">
				<div className="flex flex-wrap -mx-1 overflow-hidden text-white">
					
					{/*	Footer Menus*/ }
					<div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
						{ ! isEmpty( footerMenuItems ) && isArray( footerMenuItems ) ? (
							<ul>
								{ footerMenuItems.map( menuItem => (
									<li key={ menuItem?.ID }>
										<Link href={ menuItem?.url  || '/' }>
											<p>{ menuItem?.title }</p>
										</Link>
									</li>
								) ) }
							</ul>
						) : null }
					</div>
				</div>
				<div className="mb-8 mt-8 w-full flex flex-wrap">
					{/*Copyright Text*/ }
					<div className="w-full md:w-1/2 lg:w-1/4 text-white">
						{ copyrightText ? copyrightText : '© Pharma 2023' }
					</div>
					<div className="w-full lg:w-3/4 flex justify-end">
						{ ! isEmpty( socialLinks ) && isArray( socialLinks ) ? (
							<ul className="flex item-center mb-0">
								{ socialLinks.map( socialLink => (
									<li key={ socialLink?.iconName } className="no-dots-list mb-0 flex items-center">
										<a href={ socialLink?.iconUrl || '/' } target="_blank"
										   title={ socialLink?.iconName } className="ml-2 inline-block">
											{  socialLink?.iconName  }
											<span className="sr-only">{ socialLink?.iconName }</span>
										</a>
									</li>
								) ) }
							</ul>
						) : null }
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;