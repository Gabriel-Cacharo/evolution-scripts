import MyProduct from '../../components/MyProduct';
import './styles.scss';

function DashboardPage() {
  return (
    <div className="dashboardPage">
      <h2>
        <i className="bx bx-basket" />
        Minhas compras
      </h2>

      <section className="myProductsContainer">
        <MyProduct />
        <MyProduct />
        <MyProduct />
        <MyProduct />
        <MyProduct />
        <MyProduct />
        <MyProduct />
        <MyProduct />
      </section>
    </div>
  );
}

export default DashboardPage;
