import { useGetLatestProductsQuery } from "@/entities/products/api/api";
import styles from "./styles.module.css";
import { ProductsList } from "@/widgets/products";
import { IProducts } from "@/entities/products";
import { useAppDispatch } from "@/app/appStore";
import { setCurrentProducts } from "@/entities/products/model/productsSlice";
import { useNavigate } from "react-router-dom";

const LatestProducts = () => {
  const { data, isLoading } = useGetLatestProductsQuery(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateTo = (products: IProducts) => {
    dispatch(setCurrentProducts(products));
    navigate(`/products/${products.id}`);
  };

  return (
    <section className={styles.section}>
      <ProductsList
        type="banner"
        direction="row"
        products = {data && data.products}
        isLoading={isLoading}
        viewProductsSlot={(products: IProducts) => (
          <p onClick={() => navigateTo(products)}>view more...</p>
        )}
      />
    </section>
  );
};

export default LatestProducts;
