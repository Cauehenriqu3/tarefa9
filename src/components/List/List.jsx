import { useCallback, useMemo } from 'react';
import Item from '../Item';

const List = ({ items = [], onItemClick }) => {
  const handleItemClick = useCallback((index) => {
    onItemClick(index);
  });

  const map = useMemo(() => items.map((item, index) => {
    return (
      <Item key={index} item={item} onItemClick={() => handleItemClick(index)} index={index} />
    );
  }), [items, handleItemClick]);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {map}
      </ul>
    </div>
  );
};

export default List;
