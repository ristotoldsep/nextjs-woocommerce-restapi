import Link from "next/link";
import { useContext, useState } from "react";
import { isEmpty } from "lodash";
import Head from "next/head";

import { BurgerIcon, TailwindIcon, Bag, User, Wishlist } from '../../icons';
import Image from "../../image";
import { AppContext } from '../../context';

const Header = ({ header }) => {

	// console.log(header);
  const [ cart, setCart ] = useContext( AppContext );

  console.log(cart);
  const { headerMenuItems, siteDescription, siteLogoUrl, siteTitle, favicon } =
    header || {};

  const [isMenuVisible, setMenuVisibility] = useState(false);

  return (
    <>
      <Head>
        <title>{siteTitle} - {siteDescription}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Head>

      <div className="header">
        <nav className="bg-white py-5 px-4">
          <div className="flex items-center justify-between flex-wrap container mx-auto">
            <div className="flex items-center flex-shrink-0 text-black mr-20">
              <Link href="/">
                {siteLogoUrl ? (
                
                  <Image
                    sourceUrl={ siteLogoUrl ?? '' }
                    altText={ siteTitle ?? 'logo'}
                    title={ siteTitle ?? '' }
                    width="86"
                    height="86"
                    className="mr-2"
					        />

                ) : (
                  <TailwindIcon />
                )}
              </Link>
              <span>
                <Link href="/">
                  <p className="font-semibold text-xl tracking-tight">{ siteTitle || 'Pharmalead' }</p>
                </Link>
                {siteDescription ? (
                  <p className="mb-0">{}</p>
                ) : null}
              </span>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => setMenuVisibility(!isMenuVisible)}
                className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-[#9e4c55] hover:border-black"
              >
                <BurgerIcon className="fill-current h-3 w-3"/>
              </button>
            </div>
            <div
              className={`${
                isMenuVisible ? "max-h-full" : "h-0"
              } overflow-hidden w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
              <div className="text-sm font-medium uppercase lg:flex-grow">
                {!isEmpty(headerMenuItems) && headerMenuItems.length
                  ? headerMenuItems.map((menuItem) => {

                    let fixedUrl = menuItem?.url.replace(/^https/, 'http');

                    return (
                      <Link key={menuItem?.ID} href={fixedUrl ?? "/"}>
                      <p
                        className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#9e4c55] duration-500 mr-10 text-center"
                        dangerouslySetInnerHTML={{ __html: menuItem.title }}
                      />
                    </Link>
                    )
                     
                  })
                  : null}
              </div>
              <div className="text-sm font-medium">
                <a
                  href="#responsive-header"
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#9e4c55] mr-10 justify-center"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <User className="mr-1 lg:mr-0"/>
                    Minu konto
                  </span>
                </a>
                <a
                  href="#responsive-header"
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#9e4c55] mr-10 justify-center"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <Wishlist className="mr-1 lg:mr-0"/>
                    Sooviloend
                  </span>
                </a>
                <Link href="/cart">
                  <p className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#9e4c55] mr-10 justify-center">
                  <span className="flex flex-row items-center lg:flex-col">
                    <Bag className="mr-1 lg:mr-0"/>
                    <span className="ml-1">Ostukorv { cart?.totalQty ? `(${cart?.totalQty})` : '(0)' }</span>
                  </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
