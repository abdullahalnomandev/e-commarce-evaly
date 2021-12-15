import Banner from "components/home/Banner";
import Products from "components/home/Products";
import useAsync from "hooks/useAsync";
import React from "react";
import ProductsService from "services/ProductsServecies";

const Home = () => {
  // const [product, setProducts] = useState<IProduct[]>([] as IProduct[])

  // useEffect(() => {
  //     productsServecies.getProducts().then( res => setProducts(res))

  // }, [])

  const { data, isLoading } = useAsync(ProductsService.getProducts);

  return (
    <div>
      <Banner />
      <Products products={data} isLoading={isLoading} />
    </div>
  );
};

export default Home;
