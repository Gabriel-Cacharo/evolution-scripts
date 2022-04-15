import CayoPericoImage from '../../assets/imgs/cayoPericoImage.png';
import Product from '../../components/Product';

import './styles.scss';

function CartPage() {
  return (
    <div className="cartPage">
      <h2>
        <i className="bx bx-basket" />
        Meu carrinho
      </h2>

      <section className="myCartContainer">
        <Product title="Best Selling" price="30,90" imageUrl={CayoPericoImage} inCart />
        <Product title="Best Selling" price="30,90" imageUrl={CayoPericoImage} inCart />
        <Product title="Best Selling" price="30,90" imageUrl={CayoPericoImage} inCart />
        <Product title="Best Selling" price="30,90" imageUrl={CayoPericoImage} inCart />
        <Product title="Best Selling" price="30,90" imageUrl={CayoPericoImage} inCart />
      </section>
    </div>
  );
}

export default CartPage;
