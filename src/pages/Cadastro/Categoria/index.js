import React from 'react';
import PageDefault from '../../PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria () {
  return (
    <PageDefault>
      <h1>Cadastro Categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>
        <button>
          Cadastrar
        </button>
      </form>
      <br />
      <Link to="/">
        Voltar para home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;