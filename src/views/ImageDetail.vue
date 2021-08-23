<template lang="html">
      <v-overlay>
        <div class="img-container">
          <img :src="image.full_picture" class="img" />
        </div>
        <v-btn
            icon
            dark
            @click="$router.go(-1)"
            class="close-btn"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <div class="info-container">
            <v-container>
              <v-row>
                Author: {{image.author}}
              </v-row>
              <v-row>
                Camera used: {{image.camera}}
              </v-row>
              <v-row>
                Tags: {{image.tags}}
              </v-row>
            </v-container>
         </div>
         <v-btn elevation="10" fab rounded class="share-btn" color="light-blue">
           <v-icon>mdi-share-variant</v-icon>
         </v-btn>
      </v-overlay>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Image Details',
  components: {},
  props: [],
  data () {
    return {
      dialog: true
    }
  },
  computed: {
    ...mapGetters({
      image: 'image'
    })
  },
  watch: {
    image: {
      immediate: true,
      deep: true,
      handler (value) {

      }
    }
  },
  mounted () {
    this.$store.dispatch('getImage', this.$route.params.id)
  }
}
</script>

<style>
.img-container {
  width: 100vw;
  height: 100vh;
}

.img {
  width: 100vw;
  height: 100vh;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 30px;
}

.info-container {
  position: absolute;
  /* z-index: 999; */
  bottom: 0px;
  left: 0px;
  background: #00000055;
  width: 100%;
  padding-bottom: 20px;
  padding-top: 20px;
}

.share-btn {
  position: absolute;
  right: 30px;
  bottom: 20px;
}
</style>
