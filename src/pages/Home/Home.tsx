import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import useAsync from 'hooks/useAsync';
import React, { useEffect, useState } from 'react';
import productsServecies from 'services/productsServecies';
import { IProduct } from 'types';
const Home = () => {

    // const [product, setProducts] = useState<IProduct[]>([] as IProduct[])

    // useEffect(() => {
    //     productsServecies.getProducts().then( res => setProducts(res))

    // }, [])

    const { data, isLoading } = useAsync(productsServecies.getProducts);

    return (
        <div>
            <Banner />
            <Products products={data} isLoading={isLoading} />
        </div>
    );
};

export default Home;