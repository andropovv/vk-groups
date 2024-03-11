import { useEffect, useState } from 'react';
import { getGroups } from '../../api/groups';
import { Group } from '../../types';
import GroupsItem from './GroupsItem';
import Loader from '../Loader';
import Error from '../Error';

const GroupsList = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getGroupsList();
  }, []);

  const getGroupsList = async () => {
    try {
      setIsLoading(true);
      const groups = await getGroups();

      setGroups(groups);
      setError(null);
    } catch (error: any) {
      setError(error);
      setGroups([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col gap-2">
      {error && !isLoading && <Error message={error} />}
      {isLoading ? (
        <Loader />
      ) : (
        groups.map((g) => <GroupsItem key={g.id} group={g} />)
      )}
    </main>
  );
};

export default GroupsList;
