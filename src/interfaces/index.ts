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
