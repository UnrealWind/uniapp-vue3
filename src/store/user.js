import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state() {
        return {
            userInfo: {
                userName:'test'
            }
        }
    },
    actions: {
        setUserInfo(data) {
            this.userInfo = data
        }
    }
})
