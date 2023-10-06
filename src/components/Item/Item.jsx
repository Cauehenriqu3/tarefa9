import { useCallback } from 'react';

const Item = ({ item, onItemClick, index }) => {
  const handleClick = useCallback(() => {
    onItemClick(index);
  });

  return (
    <li>
      <p>{item.name.title} {item.name.first} {item.name.last}</p>
      <button type="button" onClick={handleClick}>Ver detalhes</button>
    </li>
  );
};

export default Item;
