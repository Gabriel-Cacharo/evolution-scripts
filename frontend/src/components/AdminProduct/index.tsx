import './styles.scss';

function AdminProduct() {
  return (
    <div className="productAdminContainer">
      <div className="productNameAndId">
        <h3>Nome produto</h3>
        <small>#35</small>
      </div>

      <div className="productPrice">
        <h6>
          <span>R$</span> 30,00
        </h6>
      </div>

      <div className="productButtons">
        <button type="button">
          <i className="bx bx-edit-alt" /> Atualizar
        </button>
        <button type="button">
          <i className="bx bx-message-square-x" /> Excluir
        </button>
      </div>
    </div>
  );
}

export default AdminProduct;
