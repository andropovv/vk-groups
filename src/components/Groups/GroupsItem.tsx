import { FC } from 'react';
import { Group } from '../../types';
import ItemTop from './ItemTop';
import ItemBody from './ItemBody';

interface IGroupItem {
  group: Group;
}

const GroupsItem: FC<IGroupItem> = ({ group }) => {
  return (
    <div className="shadow-md border border-slate-100 w-full min-h-14 p-2 rounded-sm">
      <ItemTop group={group} />
      <ItemBody group={group} />
    </div>
  );
};

export default GroupsItem;
