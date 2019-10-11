import queries from "../queries/gitHubQueries.js";

const apiToken = "xx";

const getUsers = async function(loginName) {
  return fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiToken}`
    },
    body: JSON.stringify({
      query: queries.searchUsers,
      variables: { searchString: `${loginName} in:login` }
    })
  }).then(r => r.json());
};



export default {
  getUsers
};
