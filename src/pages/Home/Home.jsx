import { useNavigate } from 'react-router-dom';
import { List } from '../../components';
import { useEffect, useState } from 'react';


const Home = () => {
  const navigate = useNavigate();
  const [users,setUsers] = useState([]);
  const handleClick = (index) => {
    navigate(`/details/${index}`);
  };

  const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10&seed=844f4b736d272e48');
    const data = await response.json();
    setUsers(data.results);
    console.log(data);
  };
   useEffect(() => {
    fetchUsers();
  },[]);

  return (
    <div>
      <h1>Home</h1>
      <List items={users} onItemClick={handleClick} />
    </div>
  );
};

export default Home;
