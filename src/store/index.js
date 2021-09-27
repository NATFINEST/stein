import { createStore } from 'vuex';
import staffModule from './modules/staff';

export default createStore({
  modules: {
    staffModule,
  },
});
