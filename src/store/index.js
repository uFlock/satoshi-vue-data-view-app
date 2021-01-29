import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const superagent = require("superagent/lib/client");

const API_LOGIN_URL = process.env.VUE_APP_LOGIN_API_URL;
const API_USER_DETAILS_URL = process.env.VUE_APP_GET_USER_DETAILS_API_URL;

const SERVICE_ERROR = 'SERVICE_ERROR';
const UNAUTHORISED = 'Unauthorised';

const sessionToken = window.localStorage.getItem('sessionToken');

const store = new Vuex.Store({
	state: {
		loginError: null,
		user: {
			loggedIn: false,
			data: {
				username: '',
				age: 0,
				score: 0,
			},
		}
	},
	getters: {
		getUserLoginStatus: state => state.user.loggedIn,
		getUsername: state => state.user.data.username,
		getAge: state => state.user.data.age,
		getScore: state => state.user.data.score,
		getLoginError: (state) => state.loginError,
	},
	mutations: {
		setAge: (state, payload) => state.user.data.age = payload,
		setScore: (state, payload) => state.user.data.score = payload,
		setUsername: (state, payload) => state.user.data.username = payload,
		setUserData: (state, payload) => state.user.data = payload,
		setUserLoginState: (state, payload) => state.user.loggedIn = payload,
		setLoginError: (state, payload) => state.loginError = payload,
	},
	actions: {
		submitLoginForm: async (state, payload) => {

			try {

				const result = await superagent
					.post(API_LOGIN_URL)
					.withCredentials()
					.send(payload);

				state.commit('setUserLoginState', true);
				state.commit('setUsername', result.body.username);
				state.commit('setAge', result.body.age);
				state.commit('setScore', result.body.score);

				window.localStorage.setItem('sessionToken', result.body.sessionToken);

			} catch (err) {

				const error = getErrorFromAgent(err);

				state.commit('setUserLoginState', false);
				state.commit('setLoginError', error);

				throw error;
			}
		},
		getUserDetails: async (state, payload) => {

			try {

				const result = await superagent
					.get(API_USER_DETAILS_URL)
					.withCredentials()
					.set('sessionToken', payload);

				state.commit('setUserLoginState', true);
				state.commit('setUsername', result.body.username);
				state.commit('setAge', result.body.age);
				state.commit('setScore', result.body.score);

			} catch (err) {

				const error = getErrorFromAgent(err);

				if (error === UNAUTHORISED) {
					state.commit('setUserLoginState', false);
					window.localStorage.removeItem('sessionToken');
				}
			}
		}
	},
	modules: {},
	plugins: [createPersistedState({
		storage: window.localStorage,
	})],
});

export default store;

//refresh user details on load
if (sessionToken && navigator.onLine) {
	refreshUserDetails().catch(error => console.log(error));
}

async function refreshUserDetails() {
	await store.dispatch('getUserDetails', sessionToken);
}

function getErrorFromAgent(agentError) {
	return agentError && agentError.response ? agentError.response.text || agentError.response.body : SERVICE_ERROR;
}
