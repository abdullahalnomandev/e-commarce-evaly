import useAsync from 'hooks/useAsync';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductsService from 'services/productsServecies';
import { IProduct } from 'types';
import imageUrlParser from 'utils/imageUrlParser';
import { BsFillCartCheckFill } from 'react-icons/bs'

const ProductDetails = () => {
    const { id } = useParams<Record<string, string | undefined>>();
    const { data, isSuccess, isLoading, isError, error } = useAsync<IProduct>(() => ProductsService.getProductByID(String(id)))
    const { name, image, description, price } = (data || {}) as IProduct

    console.log('name is',data?.name);
    
    return (
        <div className='product_details_component mt-3'>
            <Container>
                <div className="wrapper bg-white rounded border">  
                    {
                        isLoading && <h3>Loading.....</h3>
                    }
                    {
                        isSuccess && <Row>

                            <Col md={4}>
                                <img src={imageUrlParser(data ? image : '')} alt={name} />
                            </Col>
                            <Col md={8}>
                                <h3 className='mb-3'>{name}</h3>
                                <h1>${price}</h1>
                                <button className='btn btn-primary'>
                                    <BsFillCartCheckFill />
                                </button>
                                <div className="mt-5">
                                    {description}
                                </div>
                            </Col>

                        </Row>
                    }
                    {
                        isError && <h1>{error}</h1>
                    }
                </div>

            </Container>
        </div>
    );
};

export default ProductDetails;