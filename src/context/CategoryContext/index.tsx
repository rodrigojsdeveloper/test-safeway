import React, { createContext, useEffect, useState } from "react";
import { ICategory } from "../../interfaces";
import { api } from "../../services/api";

type CategoryContextData = {
  categories?: ICategory[];
};

type CategoryContextProvider = {
  children: React.ReactNode;
};

export const CategoryContext = createContext({} as CategoryContextData);

export const CategoryContextProvider = ({
  children,
}: CategoryContextProvider) => {
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
