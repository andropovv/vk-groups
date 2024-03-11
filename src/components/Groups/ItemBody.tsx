import { useState } from 'react';
import { Group } from '../../types';

const ItemBody = ({ group }: { group: Group }) => {
  const [isFriendsVisible, setIsFriendsVisible] = useState<boolean>(false);

  const handleToggleFriends = () => {
    setIsFriendsVisible((prev) => !prev);
  };

  return (
    <section className="flex flex-col gap-1 px-3">
      <div>
        <p>Участников: {group.members_count}</p>
      </div>
      <div>
        <p
          onClick={handleToggleFriends}
          className={
            group.friends?.length ? 'text-blue-400 cursor-pointer' : ''
          }
        >
          Друзей: {group.friends?.length || 0}
        </p>
        {isFriendsVisible &&
          group.friends?.map((f, i) => (
            <p key={i} className="text-gray-400">
              - {`${f.first_name} ${f.last_name}`}
            </p>
          ))}
      </div>
    </section>
  );
};

export default ItemBody;
