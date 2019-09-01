<template>
  <div>
    <div class="search">
        <input v-model="keyword" class='search-input' type='text' placeholder="输入城市名或拼音" />
    </div>
    <div class="serch-content" ref='search' v-show='keyword'>
      <ul>
        <li
          class="search-item border-bottom"
          v-for='item in list'
          :key='item.id'
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
         <li class="search-item border-bottom" v-show='hasNoData'>
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name: 'CitySearch',
    props: {
      cities: Object
    },
    data () {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    methods: {
      handleCityClick (city) {
        // this.$store.dispatch('changeCity', city)
        // this.$store.commit('changeCity', city)
        this.changeCity(city) // 代替上面那种写法，方法被mapmutations直接映射过来了
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    computed: {
      hasNoData () {
        return !this.list.length
      }
    },
    watch: {
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = []
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.search, {click: true})
    }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
      font-size: .24rem
  .serch-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
