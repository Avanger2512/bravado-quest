<template>
  <li
    :class="['catalog__item', {'is-active': mark}]">

    <div
      v-lazy:background-image="item.avatar"
      class="catalog__image" />

    <div class="catalog__in">
      <div class="catalog__content">
        <div
          :title="item.name"
          v-html="$options.filters.highlight(item.name, onSearchEvent)"
          class="catalog__title" />

        <div
          v-html="$options.filters.highlight(item.title, onSearchEvent)"
          class="catalog__text catalog__text_bold" />

        <div class="catalog__text">
          <span
            v-html="$options.filters.highlight(item.address, onSearchEvent)" />,
          <span
            v-html="$options.filters.highlight(item.city, onSearchEvent)" />
        </div>

        <a
          :href="`mailto:${item.email}`"
          :title="item.email"
          v-html="$options.filters.highlight(item.email, onSearchEvent)"
          class="catalog__text catalog__text_link" />

      </div>

      <div class="catalog__footer">
        <button
          @click="updateMarkCondition(item.id)"
          class="catalog__text catalog__btn"
          type="button">
          {{ setMarkText }}
        </button>
      </div>

    </div>

  </li>
</template>

<script>
export default {
  name: 'BlockUserItem',
  props: {
    item: {
      type: Object
    },
    onSearchEvent: {
      type: String
    }
  },
  mounted() {
    this.setMarkText;

    if (this.item.hasOwnProperty('mark')) {
      this.mark = true;
    }
  },
  data() {
    return {
      mark: false,
      buttonText: ['MARK AS SIUTABLE', 'SKIP SELECTION']
    }
  },
  methods: {
    updateMarkCondition(index) {
      this.mark = !this.mark;

      this.$set(this.item, 'mark', this.mark);
    }
  },
  computed: {
    setMarkText() {
      return (this.mark) ? this.buttonText[1] : this.buttonText[0]
    }
  }
}
</script>

<style lang="scss">
$imageWidth: 134px;

.catalog {
  &__item {
    position: relative;
    margin-bottom: 20px;
    background: #FAFAFA;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
    border-radius: 3px;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    border: 1px solid transparent;
    transition: border-color .15s ease;

    @media (max-width: 767px) {
      flex-flow: column nowrap;
    }

    &.is-active {
      border-color: #4765FF;
    }
  }

  &__image {
    width: $imageWidth;
    height: 136px;
    background-size: cover;
    background-position: center center;

    @media (max-width: 767px) {
      margin: 0 auto;
    }
  }

  &__in {
    width: calc(100% - #{$imageWidth});

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  &__content {
    padding: 5px 9px 0 27px;
    margin-bottom: 5px;

    @media (max-width: 767px) {
      padding: 5px 9px;
      text-align: center;
    }
  }

  &__title {
    font-size: 24px;
    line-height: 1.35;
    color: rgba(0, 0, 0, 0.87);
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 767px) {
      font-size: 20px;
      max-width: 100%;
      white-space: normal;
      line-height: 1.2;
    }
  }

  &__text {
    font-size: 14px;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.54);
    line-height: 1.4;
  }

  &__text_bold {
    font-weight: bold;
  }

  &__text_link {
    position: absolute;
    top: 6px;
    right: 6px;
    text-decoration: none;
    transition: opacity .15s ease;
    max-width: 20%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 767px) {
      position: static;
      max-width: 100%;
      white-space: normal;
    }

    &:hover {
      opacity: .8;
    }
  }

  &__footer {
    position: relative;
    padding: 14px 9px 14px 27px;

    @media (max-width: 767px) {
      padding: 14px 9px;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.12);
    }

    .is-active & {
      &:before {
        background: transparent;
      }
    }
  }

  &__btn {
    background: none;
    border: none;
    color: #009688;
    min-width: 140px;
    text-align: center;
    transition: opacity .15s ease;
    cursor: pointer;
    font-weight: 500;

    @media (max-width: 767px) {
      min-width: 100%;
    }

    &:hover {
      opacity: .8;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
