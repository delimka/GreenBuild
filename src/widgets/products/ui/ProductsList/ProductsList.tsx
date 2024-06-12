import { IProducts } from "@/entities/products";
import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from "./styles.module.scss";
import { ReactNode } from "react";
import ProductCard from "@/entities/products/ui/ProductCard/ProductCard";

interface Props {
  products?: IProducts[];
  type?: "banner" | "item";
  direction?: "row" | "column";
  viewProductsSlot?: (products: IProducts) => ReactNode;
}

const ProductsList = ({ products, type = "item", viewProductsSlot }: Props) => {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {products?.map((item) => {
        return (
          <ProductCard
            key={item.id}
            viewProductsSlot={viewProductsSlot}
            item={item}
            type={type}
          />
        );
      })}
    </ul>
  );
};

const ProductsListWithSkeleton = withSkeleton<Props>(ProductsList, 10);

export default ProductsListWithSkeleton;
