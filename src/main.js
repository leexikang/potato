import Vue from 'vue'
import Router from "vue-router"
import Resource from "vue-resource"
import App from './App'
import Latest from './components/Latest'
import Hello from './components/Hello'

Vue.use(Router)
Vue.use(Resource)

var router = new Router()
router.map({
	'/news': {
		component: Latest 
	}
})

router.start(App, '#app')


