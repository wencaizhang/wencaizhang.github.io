import {
  Autocomplete,
  Button,
  Card,
  Menu,
  Container,
  Badge,
  Row,
  Col,
  Link,
  Icon,
  Main,
  MenuItem,
  Carousel,
  CarouselItem,
} from 'element-ui'
import Translation from '@theme/plugins/Translation'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // global helper for adding base path to absolute urls
  Vue.prototype.$withBase = function (path) {
    if (!path) return ''
    const base = this.$site.base
    if (path.charAt(0) === '/') {
      return base + path.slice(1)
    } else {
      return path
    }
  }
  Vue.use(Autocomplete)
  Vue.use(Button)
  Vue.use(Card)
  Vue.use(Menu)
  Vue.use(Container)
  Vue.use(Badge)
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Link)
  Vue.use(Icon)
  Vue.use(Main)
  Vue.use(MenuItem)
  Vue.use(Carousel)
  Vue.use(CarouselItem)
  Vue.use(Translation)
}
