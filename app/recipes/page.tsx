'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Montserrat, Oregano } from 'next/font/google';
import Image from "next/image";

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX_IMAGES || "";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});


export default function Cocktails() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 100);
    return () => clearTimeout(timer);
  }, []);




  return (
    <>
      <Head>
        <title>Cocktail Recipes | Ottakomban</title>
      </Head>
      <div className="cocktail-page">
        <h1 className={`main-title ${showText ? 'fade-in' : 'hidden'}`}>Cocktail</h1>
        <h2 className={`title ${showText ? 'fade-in' : 'hidden'}`}>Recipes</h2>

        <section className="cocktail-section">
          <div className="cocktail-content">
            <div className="cocktail-image left">
              
              <Image src={`${assetPrefix}/cocktail1.png`} alt="Gooseberry Sparkler" />
            </div>
            <div className="cocktail-text right">
              <h2>SPICED JUNGLE MULE</h2>
              <p>A tropical twist on the classic Moscow Mule.</p>
              <p>Ingredients:</p>
              <ul>
                <li>  50ml OTTAKOMBAN spirit</li>
                <li> 20ml lime juice</li>
                <li> 10ml ginger syrup (or muddle fresh ginger)</li>
                <li>Top with ginger beer</li>
                <li> Mint sprig</li>
                <li>Ice</li>
              </ul>
              <p className='method'>Method</p>
              <p className='method-details'>Shake the OTTAKOMBAN, lime juice, and ginger syrup with ice.
Strain into a highball glass over fresh ice.
Top with ginger beer and garnish with mint.</p>
              <p className="inspiration">Inspiration: A modern take on ancient forest ingredients</p>
            </div>
          </div>
        </section>

        
        <section className="cocktail-section alt-bg">
          <div className="cocktail-content reverse">
            <div className="cocktail-text left">
              <h2>SPICED JUNGLE MULE</h2>
              <p>A tropical twist on the classic Moscow Mule.</p>
              <p>Ingredients:</p>
              <ul>
                <li>  50ml OTTAKOMBAN spirit</li>
                <li> 20ml lime juice</li>
                <li> 10ml ginger syrup (or muddle fresh ginger)</li>
                <li>Top with ginger beer</li>
                <li> Mint sprig</li>
                <li>Ice</li>
              </ul>
              <p className='method'>Method</p>
              <p className='method-details'>Shake the OTTAKOMBAN, lime juice, and ginger syrup with ice.
Strain into a highball glass over fresh ice.
Top with ginger beer and garnish with mint.</p>
              
            </div>
            <div className="cocktail-image right">
              <Image src={`${assetPrefix}/cocktail2.jpeg`} alt="Classic Red Mule" />
            </div>
          </div>
        </section>

       
        <section className="cocktail-section">
          <div className="cocktail-content">
            <div className="cocktail-image left">
              <Image src={`${assetPrefix}/cocktail3.webp`} alt="Nutmeg Highball" />
            </div>
            <div className="cocktail-text right">
              <h2>KERALA SUNSET</h2>
              <p>Fruity, citrusy, and a nod to South Indian flavours.</p>
              <p>Ingredients:</p>
              <ul>
                <li>  50ml OTTAKOMBAN spirit</li>
                <li> 30ml orange juice</li>
                <li> 15ml lime juice</li>
                <li>10ml grenadine</li>
                <li> A pinch of chilli powder (optional, for a kick)</li>
                <li>Ice</li>
              </ul>
              <p className='method'>Method</p>
              <p className='method-details'>Shake the OTTAKOMBAN, lime juice, and ginger syrup with ice.
Strain into a highball glass over fresh ice.
Top with ginger beer and garnish with mint.</p>
             
            </div>
          </div>
        </section>
      </div>
    </>
  );

}