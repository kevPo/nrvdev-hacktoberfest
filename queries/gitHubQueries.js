const searchUsers = `query SearchUsers($searchString: String!){
  search(query: $searchString, type: USER, first: 5) {
    edges {
      node {
        ... on User {
					login
          name
          avatarUrl
        }
      }
    }
  }
}`;

export default {
  searchUsers
};
