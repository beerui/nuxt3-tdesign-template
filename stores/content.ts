import { defineStore } from 'pinia'
export const useContentStore = defineStore('Content', {
  state: () => ({
    item: []
  }),
  actions: {
    // 登录
    changeContent (params: any) {
      this.item = params
    }
  },
  persist: process.client && {
    storage: localStorage
  }
})
