import axios from 'axios';
import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import React, { useEffect, useState } from 'react';
import productsServecies from 'services/productsServecies';
import { IProduct } from 'types';
const Home = () => {

    const [product, setProducts] = useState<IProduct[]>([] as IProduct[])


    useEffect(() => {
        // productsServecies.getProducts()
        // .then( res => setProducts(res))
        const getProduct = async () => {

            const res = await axios.get('https://fvaly.herokuapp.com/api/product')
            setProducts(res.data.data)
        }
        getProduct()
    }, [])



    return (
        <div>
            <Banner />
            <Products products={product} />
        </div>
    );
};

export default Home;