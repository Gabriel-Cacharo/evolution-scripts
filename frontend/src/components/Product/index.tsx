import PropTypes from 'prop-types';

import './styles.scss';

interface IProduct {
  title: string;
  price: string;
  imageUrl?: string;
  inCart?: boolean;
}

function Product({ title, price, imageUrl, inCart }: IProduct) {
  return (
    <div className="productContainer">
      <img src={imageUrl} alt="" />

      <h5>{title}</h5>

      <div className="productDescription">
        <ul>
          <li>
            <i className="bx bx-redo" />
            Adicional no mapa
          </li>
          <li>
            <i className="bx bx-redo" />
            100% otimizado
          </li>
          <li>
            <i className="bx bx-redo" />
            Instalação gratuita
          </li>
        </ul>
      </div>

      <div className="productPrice">
        <h6>
          <span>R$</span> {price}
        </h6>
      </div>

      <div className="productFooter">
        {inCart ? (
          <button type="button" className="productRemoveFromCart">
            <i className="bx bx-no-entry" />
            Retirar do carrinho
          </button>
        ) : (
          <>
            <button type="button" className="productBuy">
              <i className="bx bx-money" />
              Comprar
            </button>
            <button type="button" className="productAddToCart">
              <i className="bx bxs-cart-add" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

Product.defaultProps = {
  imageUrl: null,
  inCart: false,
};

export default Product;
