import { useEffect, useState } from 'react';

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([])

  useEffect(() => {
    console.log('fetch product', category)
    setProducts(['Clothes', 'Shoes', 'Bags'])
  }, [category])

  return (
    <div></div>
  )
}

export default ProductList;