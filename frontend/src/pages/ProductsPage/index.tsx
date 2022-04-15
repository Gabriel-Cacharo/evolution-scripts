import CayoPericoImage from '../../assets/imgs/cayoPericoImage.png';
import SecurityImage from '../../assets/imgs/securityImage.svg';
import SupportImage from '../../assets/imgs/supportImage.svg';
import Product from '../../components/Product';

import './styles.scss';
import './responsive.scss';

function ProductsPage() {
  return (
    <main className="productsPageContainer">
      <h2>
        <i className="bx bx-rocket" />
        Nossos Produtos
      </h2>

      <div className="productsContainer">
        <Product title="Best Selling" price="30,90" imageUrl={CayoPericoImage} />
        <Product title="Best Selling" price="30,90" imageUrl={CayoPericoImage} />
        <Product title="Best Selling" price="30,90" imageUrl={CayoPericoImage} />
        <Product title="Best Selling" price="30,90" imageUrl={CayoPericoImage} />
        <Product title="Best Selling" price="30,90" imageUrl={CayoPericoImage} />
        <Product title="Best Selling" price="30,90" imageUrl={CayoPericoImage} />
      </div>

      <div className="productsInformationContainer">
        <h3>
          <i className="bx bxs-bookmark" />
          Informações
        </h3>

        <div className="informationContainer">
          <img src={SupportImage} alt="" />
          <div className="informationTexts">
            <h5>Primeira informação</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra sapien molestie ipsum
              consectetur, eu malesuada urna accumsan. Vivamus at enim ut turpis ultrices semper ac sed lacus. Vivamus
              tincidunt efficitur elit molestie accumsan. Aenean pretium quam eu turpis gravida lacinia. Aliquam ut
              dolor eget velit eleifend sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisl
              ut nibh dignissim convallis non et neque. Morbi scelerisque justo eget nisl molestie maximus.
            </p>
          </div>
        </div>
        <div className="informationContainer">
          <div className="informationTexts">
            <h5>Primeira informação</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra sapien molestie ipsum
              consectetur, eu malesuada urna accumsan. Vivamus at enim ut turpis ultrices semper ac sed lacus. Vivamus
              tincidunt efficitur elit molestie accumsan. Aenean pretium quam eu turpis gravida lacinia. Aliquam ut
              dolor eget velit eleifend sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisl
              ut nibh dignissim convallis non et neque. Morbi scelerisque justo eget nisl molestie maximus.
            </p>
          </div>
          <img src={SecurityImage} alt="" />
        </div>
        <div className="informationContainer">
          <img src={SupportImage} alt="" />
          <div className="informationTexts">
            <h5>Primeira informação</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra sapien molestie ipsum
              consectetur, eu malesuada urna accumsan. Vivamus at enim ut turpis ultrices semper ac sed lacus. Vivamus
              tincidunt efficitur elit molestie accumsan. Aenean pretium quam eu turpis gravida lacinia. Aliquam ut
              dolor eget velit eleifend sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nisl
              ut nibh dignissim convallis non et neque. Morbi scelerisque justo eget nisl molestie maximus.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductsPage;
