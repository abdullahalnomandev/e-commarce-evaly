import Product from 'components/common/Product';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Products = () => {
    return (
        <div className='my-5' >
            <Container>
                <h2 className='mb-4'>Latest Products</h2>
                <Row >
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </Row>
            </Container>
        </div>
    );
};

export default Products;