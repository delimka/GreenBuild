import { useAppSelector } from "@/app/appStore";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import ProductsDetails from "@/entities/products/ui/ProductDetails/ProductDetails";

const ProductsPage = () => {
  const currentProducts = useAppSelector((state) => state.products.currentProducts);

  if (!currentProducts) {
    return (
      <div>
        <h1>Cannot find products</h1>
        <Link to={"/"}>
          <h3>Go to main page</h3>
        </Link>
      </div>
    );
  }
  return (
    <main className={styles.products}>
      <h1>{currentProducts.title}</h1>

      <ProductsDetails item={currentProducts} />
    </main>
  );
};

export default ProductsPage;
