import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ProductSkeletons = () => {
    return (
        <>
            <Row >
                {
                    Array(12).fill('')?.map((product, index) =>
                        <Col key={index} md={3} className='mb-3' >
                            <Skeleton style={{ borderRadius: 10 }} height={350} />
                        </Col>
                    )
                }
            </Row>
        </>
    );
};

export default ProductSkeletons;