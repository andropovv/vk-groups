import groups from '../mock/groups.json';
import { GetGroupsResponse } from '../types';

const groupsPromise = new Promise<GetGroupsResponse>(function (resolve) {
  setTimeout(() => {
    resolve({ result: 1, data: groups });
  }, 1000);
});

export const getGroups = async () => {
  const response: GetGroupsResponse = await groupsPromise;

  if (!response.data || response.result == 0)
    throw new Error('Не удалось получить группы(');

  return response.data;
};
