import React from 'react';
import Collection from '@/components/Collection';

const {NEXT_PUBLIC_HOST_URL} = process.env;

const getData = async (category) => {
  try {
    const res = await fetch(`${NEXT_PUBLIC_HOST_URL}/api/collections/${category}`, { cache: 'no-store' });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

async function Page({ params }) {
  const { category } = params;
  const data = await getData(category);

  // Ensure data is properly destructured and default values are handled
  const products = data?.products || [];
  const categories = data?.categories || [];

  return (
    <Collection 
      product={products} 
      img={'https://sahara-theme.myshopify.com/cdn/shop/collections/duo.jpg'} 
      title={category} 
      categories={categories}
    />
  );
}

export default Page;
