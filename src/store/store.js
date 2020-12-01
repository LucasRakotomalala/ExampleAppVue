import axios from 'axios';
import {createStore} from 'vuex';

const url = 'https://my-json-server.typicode.com/LucasRakotomalala/ExampleAppVue/';
const messagesUrl = url + 'messages';

export const store = createStore({
    state: {
        messages: [],
    },
    mutations: {
        setMessages(state, payload) {
            state.messages = payload.messages;
        }
    },
    actions: {
        async setMessages(context) {
            try {
                const response = await axios.get(messagesUrl);
                context.commit('setMessages', {messages: response.data});
            } catch (error) {
                console.log(error.toString());
            }
        }
    },
    getters: {
        getMessages(state) {
            return state.messages;
        },
        numberOfUnreadMessages(state) {
            return state.messages.filter((message) => !message.read).length;
        }
    }
});