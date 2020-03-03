<template>
  <div id="app">
    <div class="container">
      <div class="section">

        <base-input
          :onSearch="searchUrlParam"/>

        <div class="section__in">
          <transition name="fade">
            <the-spinner
              v-if="loading" />

            <block-user-list
              v-else
              :users="filteredUsers"
              :searchParam="searchUrlParam"/>
          </transition>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

import axios from 'axios';
import BaseInput from "./components/Base/BaseInput.vue";
import BlockUserList from "./components/BlockUser/BlockUserList.vue";
import TheSpinner from "./components/TheSpinner/index.vue";

import { eventBus } from './packs/application';

export default {
  components: {
    BaseInput,
    BlockUserList,
    TheSpinner
  },
  data() {
    return {
      userList: [],
      loading: true,
      search: '',
      urlParam: '',
      searchUrlParam: '',
    }
  },
  mounted() {
    this.getUsers();
    eventBus.$on('searchQuery', this.onSeach);
    this.getParamFromUrl();
  },
  methods: {
    getUsers() {
      this.loading = true;
      axios.get('/users').then((response) => {
        this.loading = false;
        let users = response.data['data'];
        this.userList = users;

        this.setParamToSearch();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    },
    onSeach(e) {
      this.search = e;
    },
    getParamFromUrl() {
      let urlString = window.location.href;
      let url = new URL(urlString);
      this.urlParam = url.searchParams.get("search");
    },
    setParamToSearch() {
      if (this.urlParam !== null) {
        this.searchUrlParam = this.urlParam;
      }
    },
  },
  computed: {
    filteredUsers() {
      let query = this.search.toLowerCase();

      return this.userList.filter(user => {
        return user.name.toLowerCase().includes(query) ||
        user.title.toLowerCase().includes(query) ||
        user.address.toLowerCase().includes(query) ||
        user.city.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      })
    }
  },
}
</script>

<style lang="scss">

.section {
  position: relative;
  max-width: 564px;
  width: 100%;
  margin: 54px auto;
  background: #FFF;

  &__in {
    padding: 87px 28px 0 12px;
    height: 643px;

    @media (max-width: 767px) {
      padding-right: 12px;
    }
  }
}

</style>
