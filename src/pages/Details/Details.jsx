import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const Details = () => {
  const parameters = useParams();

  const [user, setUser] = useState(undefined);

  const fetchUser = async (id) => {
    const response = await fetch('https://randomuser.me/api/?results=10&seed=844f4b736d272e48');
    const data = await response.json();
    const result = data.results[id];


    if (!result) {
      setUser(null);
      return;
    }

    setUser(result);
  };

  useEffect(() => {
      const { id } = parameters;
      fetchUser (id);
  }, [parameters]);

  return (
    <div>
      <h1>Detalhes</h1>
      {user === undefined && (
        <div>
          <p>Carregando...</p>
        </div>
      )}
      {user === null && (
        <div>
          <p>Usuário não encontrado.</p>
        </div>
      )}
      {user && (
        <div>
          <img alt="User pic" src={user.picture.large} width="200px" height="auto" />
          <h2>{user.name.first}</h2>
          <p>{user.email}</p>
        </div>
      )}
      <Link to='/'>Voltar</Link>
    </div>
  );
};

export default Details;
