import CayoPerico from '../../assets/imgs/cayoPericoImage.png';
import PersonGTA52 from '../../assets/imgs/personGta5-2.png';
import PersonGTA5 from '../../assets/imgs/personGta5.png';
import Product from '../../components/Product';

import './styles.scss';
import './responsive.scss';

function LandingPage() {
  return (
    <main className="landingPageContainer">
      <section className="firstInformationLandingPageContainer">
        <div className="textFirstInformationContainer">
          <div className="headingFirstInformationContainer">
            <i className="bx bx-rocket" />
            <h2>Evolution Scripts</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum justo sit amet arcu egestas
            fringilla. <b>Fusce gravida posuere metus</b>, id pellentesque urna gravida vitae. Integer iaculis libero ut
            eleifend semper. Ut dignissim commodo lacus, vitae iaculis erat. Curabitur vulputate blandit lacus, non
            condimentum dui varius sollicitudin. Nam mi metus, sollicitudin vel rutrum eget, aliquam at mi. Sed
            tristique neque ipsum, ut <b>lobortis ex faucibus vitae</b>. Phasellus lacinia ullamcorper tortor at
            consequat. Aenean tortor massa, dapibus commodo est id, commodo faucibus lorem. Phasellus mollis dignissim
            lorem non suscipit. In sit amet lobortis massa. Phasellus sagittis sit amet augue molestie fermentum. Ut
            tempor erat fringilla purus imperdiet, non efficitur quam ultricies. <b>Cras eget faucibus orci</b>.
          </p>
        </div>
        <img src={PersonGTA5} alt="" />
      </section>
      <section className="qualitiesContainer">
        <h2>
          <i className="bx bx-book-bookmark" />
          Nossas características
        </h2>

        <div className="qualities">
          <div className="qualityContainer">
            <i className="bx bx-timer" />
            <h5>Entrega rápida</h5>
            <p>A entrega é feita de forma automática e o mais rápido possível.</p>
          </div>
          <div className="qualityContainer">
            <i className="bx bx-lock-alt" />
            <h5>Compra segura</h5>
            <p>Nós não temos nenhum acesso aos seus dados dentro de nossa plataforma.</p>
          </div>
          <div className="qualityContainer">
            <i className="bx bx-support" />
            <h5>Suporte</h5>
            <p>A EvolutionScripts lhe oferece 100% de suporte para qualquer tipo de situação.</p>
          </div>
        </div>
      </section>
      <section className="secondInformationLandingPageContainer">
        <div className="textSecondInformationContainer">
          <h2>
            <i className="bx bx-medal" />
            Produtos mais vendidos
          </h2>
          <div className="bestSellingProductsContainer">
            <Product title="Ilha Cayo Perico" price="30,90" imageUrl={CayoPerico} />
            <Product title="Hud Nova" price="59,99" imageUrl={CayoPerico} />
            <Product title="Script Gráfico" price="30,90" imageUrl={CayoPerico} />
          </div>
        </div>
        <img className="secondInformationImage" src={PersonGTA52} alt="" />
      </section>
    </main>
  );
}

export default LandingPage;
