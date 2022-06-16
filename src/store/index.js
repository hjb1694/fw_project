import { createStore } from 'vuex';

const store = createStore({
    strict: true, 
    state(){
        return {
            userData: [], 
            filteredUserData: []
        }
    }, 
    getters: {
        userData(state){
            return state.userData;
        }, 
        filteredUserData(state){
            return state.filteredUserData;
        }
    }, 
    mutations: {
        storeUserData(state, payload){
            state.userData = payload;
        }, 
        storeFilteredUserData(state, payload){
            state.filteredUserData = payload;
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
                commit('storeFilteredUserData', data);

                return true;
            
            }catch(e){
                console.log(e);
                throw new Error(e);
            }
            
        }, 
        searchUsers({commit, state}, payload){

            const filtered = state.userData.filter(item => {
                return item.name.startsWith(payload);
            });

            commit('storeFilteredUserData', filtered);


        }
    }
});


export default store;