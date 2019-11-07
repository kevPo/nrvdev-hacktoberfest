<template>
  <div class="add-dev-container">
    <input v-model="loginName" type="text" placeholder="Type GitHub Login" class="spooky-input" @keyup="search"/>
    <ul style="color: white;">
      <li v-for="(user, index) in potentialUsers" :key="index">
        <b>{{ user.login }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
import gitHubService from "../services/gitHubService";

export default {
  data: function () {
    return {
      loginName: '',
      potentialUsers: []
    };
  },
  watch: {
    loginName: function (newLoginName, oldLoginName) {
      this.debouncedSearch();
    }
  },
  created: function () {
    this.debouncedSearch = _.debounce(this.search, 500)
  },
  methods: {
    search: async function () {
      if (this.loginName.length > 2){
        this.potentialUsers = await gitHubService.getUsersLike(this.loginName);
        console.log(this.potentialUsers);
      }
    }
  }
}
</script>

<style>
.spooky-input {
  background-color: transparent;
  border: none;
  border-bottom: 3px solid #f15523;
  color: white;
  font-family: 'Oswald', sans-serif;
  font-size: 2em;
  margin-top: 4em;
  padding: .3em;
  width: 11em;
}

.spooky-input:focus {
  outline: none;
}

.add-dev-container {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
