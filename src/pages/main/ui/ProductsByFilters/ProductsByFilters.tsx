import { useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetProductsQuery } from "@/entities/products/api/api";
import styles from "./styles.module.css";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { ProductsFilters } from "@/widgets/products";
import ProductsListWithPagination from "../ProductsListWithPagination/ProductsListWithPagination";

const ProductsByFilters = () => {
  const filters = useAppSelector((state) => state.products.filters);
  const products = useAppSelector((state) => state.products.products);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetProductsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });
  const { data } = useGetCategoriesQuery(null);

  return (
    <section className={styles.section}>
      <ProductsFilters filters={filters} categories={data?.categories || []} />

      <ProductsListWithPagination
        isLoading={isLoading}
        products ={products}
        filters={filters}
      />
    </section>
  );
};

export default ProductsByFilters;
