<template>
  <div class="indexPage" v-if="container">
    <h3>Kliknij kafelek, aby edytować tytuł</h3>
    <div class="indexPage__container">
      <Item
        v-for="(element, index) in container.elements"
        :key="index"
        :item="element"
        :active="activeIndex === index"
        @click="activeIndex = index"
      />
    </div>

    <button
      class="indexPage__button"
      @click="mixElements"
    >
      Wymieszaj elementy
    </button>

    <input
      v-model="activeItem"
      class="indexPage__input"
      placeholder="Tytuł"
      :disabled="activeIndex < 0"
    />
  </div>
</template>

<script>
import Container from '@/classes/Container'
import data from '@/assets/json/data'
import Item from '@/components/Item'

export default {
  name: 'IndexPage',

  components: {
    Item
  },

  data () {
    return {
      container: null,
      activeIndex: -1,
    }
  },

  computed: {
    activeItem: {
      get: function () {
        return this.container.elements[this.activeIndex]?.title;
      },
      set: function (val) {
        console.log('x')
        return this.container.elements[this.activeIndex].title = val;
      }
    }
  },

  mounted () {
    this.initialize();
  },

  methods: {
    initialize () {
      this.container = new Container(data);
    },

    mixElements () {
      this.container.mixElements();
    }
  }
}
</script>

<style scoped>
.indexPage__container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}

.indexPage__button {
  display: block;
  width: 100%;
  height: 60px;
  font-size: 2rem;
}

.indexPage__input {
  display: block;
  width: 100%;
  height: 60px;
  font-size: 2rem;
  margin-top: 20px;
  padding: 0 10px;
}
</style>
