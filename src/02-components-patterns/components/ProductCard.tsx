import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

// import { ProductImage } from './ProductImage';
// import { ProductTitle } from './ProductTitle';
// import { ProductButtons } from './ProductButtons';

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string; 
    style?: React.CSSProperties,
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;




export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    const { counter, increaseBy } = useProduct( { onChange, product, value } );

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
            }}>
            <div className={ `${styles.productCard} ${className}` } style={ style }>

                { children }

            </div>
        </Provider>
    )
}

// ProductCard.Image = ProductImage;
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;