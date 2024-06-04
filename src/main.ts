import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { initializeApp } from 'firebase/app'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'

import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import Tooltip from 'primevue/tooltip'
import ProgressSpinner from 'primevue/progressspinner'

import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ConfirmDialog from 'primevue/confirmdialog'
import InlineMessage from 'primevue/inlinemessage'
import InputNubmer from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import Calendar from 'primevue/calendar'
import RadioButton from 'primevue/radiobutton'
import Badge from 'primevue/badge'
import Chart from 'primevue/chart'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: "AIzaSyAR1L-ZvtVHDdjqU_5ey0H_vh3yoavP57s",
  authDomain: "interviews-ac0bb.firebaseapp.com",
  projectId: "interviews-ac0bb",
  storageBucket: "interviews-ac0bb.appspot.com",
  messagingSenderId: "276658823192",
  appId: "1:276658823192:web:9e5c200e936306aac5e36d"
};

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(ToastService)
app.use(ConfirmationService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('app-menubar', Menubar)
app.directive('tooltip', Tooltip)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-progress', ProgressSpinner)
app.component('app-card', Card)
app.component('app-datatable', DataTable)
app.component('app-column', Column)
app.component('app-dialog', ConfirmDialog)
app.component('app-message', InlineMessage)
app.component('app-input-number', InputNubmer)
app.component('app-textarea', Textarea)
app.component('app-calendar', Calendar)
app.component('app-radio', RadioButton)
app.component('app-badge', Badge)
app.component('app-chart', Chart)

app.mount('#app')
