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
}

export interface IModalBackground {
  children: React.ReactNode;
}

export interface IHeaderModal {
  title: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalSpecificProduct {
  product: IProduct;
  setOpenModalSpecificProduct: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICategoryContextData {
  categories?: ICategory[];
}

export interface IProductContextData {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  cartProducts: IProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  handleAddToCart: (product: IProduct) => void;
  handleRemoveFromCart: (product: IProduct) => void;
  handleClickCartProduct: (product: IProduct) => void;
  handleClearCart: () => void;
}

export interface IModalContextData {
  handleOpenModalCheckoutCart: () => void;
  handleCloseModalCheckoutCart: () => void;
  openModalCheckoutCart: boolean;
}
