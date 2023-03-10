import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  ICategory,
  ICategoryContextData,
  IModalBackground,
} from "../../interfaces";

export const CategoryContext = createContext({} as ICategoryContextData);

export const CategoryContextProvider = ({ children }: IModalBackground) => {
  const [categories, setCategories] = useState<ICategory[]>();

  useEffect(() => {
    api
      .get("categorias")
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};
