import AdminProduct from '../../components/AdminProduct';
import './styles.scss';

function AdminDashboardPage() {
  return (
    <div className="adminDashboardPage">
      <h2>Admin Dashboard</h2>

      <div className="productsContainer">
        <AdminProduct />
        <AdminProduct />
        <AdminProduct />
        <AdminProduct />
        <AdminProduct />
      </div>
    </div>
  );
}

export default AdminDashboardPage;
