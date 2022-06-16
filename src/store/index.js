import { createStore } from 'vuex';

const store = createStore({
    strict: true, 
    state(){
        return {
            userData: []
        }
    }, 
    getters: {
        userData(state){
            return state.userData;
        }
    }, 
    mutations: {
        storeUserData(state, payload){
            state.userData = payload;
        }
    }, 
    actions: {
        async fetchUserData({commit}){

            try{

                const resp = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!resp.ok){
                    throw new Error('Response failed.');
                }
                const data = await resp.json();

                console.log(data);
                commit('storeUserData', data);

                return true;
            
            }catch(e){
                console.log(e);
                throw new Error(e);
            }
            
        }
    }
});


export default store;