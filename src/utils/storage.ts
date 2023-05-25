const STORAGE = {
  localStorage: window.localStorage,
  set (key: string, value: any) {
    this.localStorage.setItem(key, value)
  },
  get (key: string) {
    return this.localStorage.getItem(key)
  }
}


export default STORAGE
