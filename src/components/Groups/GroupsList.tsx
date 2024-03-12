import { useEffect, useState } from 'react';
import { getGroups } from '../../api/groups';
import { Group } from '../../types';
import GroupsItem from './GroupsItem';
import Loader from '../Loader';
import Error from '../Error';
import Filter from '../Filter/Filter';

const GroupsList = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState({
    closed: null,
    avatar_color: null,
    friends: false,
  });
  const [filteredGroups, setFilteredGroups] = useState<Group[]>([]);

  useEffect(() => {
    getGroupsList();
  }, []);

  const getGroupsList = async () => {
    try {
      setIsLoading(true);
      const groups = await getGroups();

      setGroups(groups);
      setFilteredGroups(groups);
      setError(null);
    } catch (error: any) {
      setError(error);
      setGroups([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeFilter = (value: string | boolean | null, name: string) => {
    const newFilter = { ...filter, [name]: value };
    setFilter(newFilter);

    setFilteredGroups(filterGroups(newFilter));
  };

  function filterGroups(filter: {}) {
    let filtered = groups;

    for (const f of Object.entries(filter)) {
      if (f[1] !== null) {
        filtered = filtered.filter((g) => {
          if (f[0] == 'friends') {
            return f[1] ? g.friends?.length : true;
          }
          if (f[0] == 'closed') return g[f[0] as keyof Group] !== f[1];
          return g[f[0] as keyof Group] === f[1];
        });
      }
    }

    return filtered;
  }

  return (
    <main className="flex flex-col gap-2">
      <Filter onChange={handleChangeFilter} />
      {error && !isLoading && <Error message={error} />}
      {isLoading ? <Loader /> : filteredGroups.map((g) => <GroupsItem key={g.id} group={g} />)}
    </main>
  );
};

export default GroupsList;
