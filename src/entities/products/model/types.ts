import { CategoriesType } from "@/entities/category";

export interface IProducts {
  author: string;
  category: CategoriesType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface ProductsApiResponse {
  products: IProducts[];
  page: number;
  status: string;
}
