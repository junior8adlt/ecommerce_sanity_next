import React from 'react';
import { HeroBanner, Product, FooterBanner } from '../components';
import { client } from '../lib/client';

const Home = ({ products, banners }) => {
  console.log(products);
  return (
    <>
      <HeroBanner heroBanner={banners.length && banners[0]} />
      <div className='products-heading'>
        <h2>Productos más vendidos</h2>
        <p>Bocinas, Audifonos y mucha variedad.</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={banners.length && banners[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);
  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);
  return {
    props: {
      products,
      banners,
    },
  };
};

export default Home;
