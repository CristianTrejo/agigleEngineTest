<template lang="html">
  <v-container>
    <v-row align="center">
      <v-col v-for="image in pictures" :key="image.id" cols="12" lg="3" xl="" md="4" sm="6" xs="12">
        <v-img :src="image.cropped_picture" lazy-src="https://picsum.photos/id/11/10/6" class="grid-image" @click="openImage(image.id)"></v-img>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="mt-10">
      <v-pagination
      v-model="page"
      :length="totalPages"
      circle
      :total-visible="7"
      >
      </v-pagination>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'images',
  components: {},
  props: [],
  data () {
    return {
      page: 1,
      totalPages: 0,
      hasMore: false,
      pictures: []
    }
  },
  computed: {
    ...mapGetters({
      images: 'images'
    })
  },
  watch: {
    images: {
      immediate: true,
      deep: true,
      handler (value) {
        this.totalPages = value.pageCount
        this.pictures = [...value.pictures]
        this.hasMore = value.hasMore
      }
    },
    page: {
      immediate: true,
      deep: true,
      handler (value) {
        this.$store.dispatch('getImages', value)
      }
    }
  },
  mounted () {
    this.$store.dispatch('getImages', this.page)
  },
  methods: {
    openImage (id) {
      this.$router.push({ name: 'imageDetails', params: { id: id } })
    }
  }
}
</script>

<style>
.grid-image {
  cursor: pointer;
}
</style>
