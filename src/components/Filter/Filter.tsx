import { FC, useState } from 'react';
import Dropdown from '../UI/Dropdown';
import { colors, types } from './filterOptions';

interface IFilter {
  onChange: (value: string | null | boolean, name: string) => void;
}

const Filter: FC<IFilter> = ({ onChange }) => {
  const [friends, setFriends] = useState<boolean>(false);

  const handleToggleFriends = () => {
    onChange(!friends, 'friends');
    setFriends(!friends);
  };

  return (
    <div className="mb-3 border-b-2 pb-2">
      <div className="flex gap-4">
        <Dropdown options={types} label="Тип группы" name="closed" onChange={onChange} />
        <Dropdown options={colors} label="Цвет аватарки" name="avatar_color" onChange={onChange} />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            onChange={handleToggleFriends}
            checked={friends}
          />
          <p>Только группы с друзьями</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
