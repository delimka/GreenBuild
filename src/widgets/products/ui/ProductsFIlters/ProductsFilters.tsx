import { useAppDispatch } from "@/app/appStore";
import { useTheme } from "@/app/providers/ThemeProvider";
import { IFilters } from "@/shared/interfaces";
import { setFilters } from "@/entities/products/model/productsSlice";
import styles from "./styles.module.css";
import { CategoriesType } from "@/entities/category";
import Slider from "@/feauters/slider/ui/Slider/Slider";
import Search from "@/feauters/search/ui/Search/Search";
import Categories from "@/feauters/category/ui/Categories/Categories";

interface Props {
  filters: IFilters;
  categories: CategoriesType[];
}

const ProductsFilters = ({ filters, categories }: Props) => {
  const { isDark } = useTheme();

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider isDark={isDark}>
          <Categories
            categories={categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

export default ProductsFilters;
