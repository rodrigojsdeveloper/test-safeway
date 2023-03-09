export interface IProduct {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
  categoria_id: number;
  count: number;
}

export interface ICategory {
  id: number;
  nome: string;
}

export interface IProductComponent {
  product: IProduct;
  handleListCartProducts: (product: IProduct) => void;
  handleClickCartProduct: (product: IProduct) => void;
  handleRemoveCartProducts: (product: IProduct) => void;
}

export interface IProductProps {
  product: IProduct;
  handleListCartProducts: (product: IProduct) => void;
}

export interface IListProducts {
  products: IProduct[];
  handleListCartProducts: (product: IProduct) => void;
}

export interface ICart {
  cartProducts: IProduct[];
  clearAllProducts: () => void;
  handleClickCartProduct: (product: IProduct) => void;
  handleRemoveCartProducts: (product: IProduct) => void;
  handleListCartProducts: (product: IProduct) => void;
}
