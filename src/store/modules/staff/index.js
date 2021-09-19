import axios from 'axios';

const state = {
  staffList: [],
  filterParam: '',
  isProfileVisible: false,
};

const mutations = {
  UPDATE_STAFF_LIST(state, payload) {
    state.staffList = payload;
  },
  UPDATE_FILTER_PARAM(state, payload) {
    state.filterParam = payload;
  },
};

const getDateFromNow = (item) => {
  const getDatePart = item.slice(0, 10);

  const day = getDatePart.split('-');

  const currentYear = new Date().getFullYear();
  const newBirthDay = new Date(currentYear, day[1] - 1, day[2]);
  const now = new Date().valueOf();

  if (newBirthDay.valueOf() < now) {
    newBirthDay.setFullYear(currentYear + 1);
  }

  const dataFromNow = newBirthDay.valueOf() - now;

  return dataFromNow;
};

const actions = {
  async getStaffList({ commit }) {
    const { data } = await axios.get(
      'http://interview.dev.steinias.com/api/employees'
    );
    data.sort((a, b) => {
      const birthdayA = getDateFromNow(a.birthday);
      const birthdayB = getDateFromNow(b.birthday);
      if (birthdayA > birthdayB) return 1;
      if (birthdayA < birthdayB) return -1;

      return 0;
    });
    commit('UPDATE_STAFF_LIST', data);
  },
  setFilterParam({ commit }, filterParam) {
    commit('UPDATE_FILTER_PARAM', filterParam);
  },
  makeProfileVisible({ commit }, status) {
    commit('UPDATE_FILTER_PARAM', status);
  },
};

const getters = {
  filterParam: (state) => state.filterParam,
  staffListLength: (state) => state.staffList.length,
  staffProfile: ({ staffList }) => (id) => {
    const temp = staffList;
    temp.find((item) => item.id === id);
  },
  filteredList: ({ staffList, filterParam }) => {
    const temp = staffList;
    return temp.filter((item) => item.name.toLowerCase().includes(filterParam));
  },
};

const staffModule = {
  state,
  mutations,
  actions,
  getters,
};

export default staffModule;
