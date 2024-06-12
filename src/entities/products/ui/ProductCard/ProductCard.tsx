import { ReactNode } from "react";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { IProducts } from "../..";
import styles from "./styles.module.scss";
import Image from "@/shared/ui/Image/Image";

interface Props {
  item: IProducts;
  type: "banner" | "item";
  viewProductsSlot?: (news: IProducts) => ReactNode;
}

const ProductsCard = ({ item, type = "item", viewProductsSlot }: Props) => {
  return (
    <li className={`${styles.card} ${type === "banner" && styles.banner}`}>
      {type === "banner" ? (
        <Image image={item?.image} />
      ) : (
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      )}

      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>

      {viewProductsSlot ? viewProductsSlot(item) : null}
    </li>
  );
};

export default ProductsCard;
