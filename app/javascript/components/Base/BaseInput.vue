<template>
  <div class="input input_fixed">
    <svg class="input__img" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path opacity=".54" fill-rule="evenodd" clip-rule="evenodd" d="M15.502 14h-.794l-.276-.274A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16a6.47 6.47 0 004.225-1.566l.276.274v.792l4.998 4.991L20.49 19l-4.988-5zM9.5 14a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" fill="#000"/></svg>
    <input
      v-model="searchQuery"
      class="input__self"
      type="text"
      placeholder="Search">
  </div>
</template>

<script>
import { eventBus } from '../../packs/application';

export default {
  name: 'BaseInput',
  props: {
    onSearch: {
      type: String
    }
  },
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    addParamToUrl(val){
      let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?search=' + val;
      window.history.pushState({ path: newurl }, '', newurl);
    }
  },
  watch: {
    searchQuery(e) {
      eventBus.$emit("searchQuery", e);
      this.addParamToUrl(e);
    },
    onSearch() {
      this.searchQuery = this.onSearch;
    }
  }
}
</script>

<style lang="scss">

.input {
  position: relative;
  margin-bottom: 20px;

  &__img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    max-width: 24px;
    max-height: 24px;
  }

  &__self {
    background: #FAFAFA;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    width: 100%;
    border: none;
    padding: 10px 10px 9px 50px;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.75);

    &:focus {
      outline: none;
    }
  }

  &_fixed {
    position: absolute;
    background: #FFF;
    top: 19px;
    left: 12px;
    right: 28px;
    z-index: 2;
  }
}

</style>
