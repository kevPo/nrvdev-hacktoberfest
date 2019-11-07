import gitHubRepository from "../repositories/gitHubRepository";

const getUsersLike = async function(userName) {
  const usersResponse = await gitHubRepository.getUsers(userName);
  const users = usersResponse.data.search.edges.map(edge => {
    return {
      ...edge.node
    }
  });

  return users;
};

export default {
  getUsersLike
};
