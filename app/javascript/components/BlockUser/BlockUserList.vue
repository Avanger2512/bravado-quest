<template>
  <div
    v-if="users.length !== 0"
    class="catalog">

    <virtual-list
      :size="139"
      :remain="4"
      wtag="ul">

      <block-user-item
        v-for="(user, index) in users"
        :key="index"
        :item="user"
        :indexChangeEvent="user.id"
        :onSearchEvent="userSearchString" />

    </virtual-list>

  </div>

  <p v-else
    class="no-found">No item's found</p>
</template>

<script>
import BlockUserItem from './BlockUserItem.vue';
import virtualList from 'vue-virtual-scroll-list';
import { eventBus } from '../../packs/application';

export default {
  name: 'BlockUserList',
  components: {
    BlockUserItem,
    'virtual-list': virtualList
  },
  props: {
    users: {
      type: Array,
      required: true
    },
    highlightKey: {
      type: String
    },
    searchParam: {
      type: String
    }
  },
  data() {
    return {
      userSearchString: '',
    }
  },
  mounted() {
    this.onSeachEvent(this.searchParam);
    eventBus.$on('searchQuery', this.onSeachEvent);
  },
  methods: {
    onSeachEvent(e) {
      this.userSearchString = e;
    }
  }
}
</script>

<style lang="scss">
.catalog {
  height: 100%;
  overflow: auto;
}
</style>
