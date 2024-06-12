import LatestProducts from "./LatestProducts/LatestProducts";
import ProductsByFilters from "./ProductsByFilters/ProductsByFilters";
import styles from "./styles.module.css";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestProducts />

      <ProductsByFilters />
    </main>
  );
};

export default MainPage;
