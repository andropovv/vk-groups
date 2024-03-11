import { FC } from 'react';
import { Group } from '../../types';

interface IItemTop {
  group: Group;
}

const ItemTop: FC<IItemTop> = ({ group }) => {
  return (
    <section className="flex items-center w-full gap-4 mb-3 px-3">
      {group.avatar_color && (
        <div
          className={`rounded-full h-[70px] w-[70px] bg-${group.avatar_color}-500 border`}
        ></div>
      )}
      <div className="flex flex-col gap-1 justify-self-end">
        <h3 className="font text-2xl ">{group.name}</h3>
        <p className="text-md text-gray-400 italic">
          {group.closed ? 'Закрытая' : 'Открытая'}
        </p>
      </div>
    </section>
  );
};

export default ItemTop;
