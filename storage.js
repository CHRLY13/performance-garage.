const Storage={
  getAll(key){try{return JSON.parse(localStorage.getItem(key)||'[]')}catch(e){return []}},
  setAll(key,arr){localStorage.setItem(key,JSON.stringify(arr))},
  add(key,obj){const arr=this.getAll(key); arr.push({...obj,_ts:Date.now()}); this.setAll(key,arr)},
  removeAt(key,idx){const arr=this.getAll(key); arr.splice(idx,1); this.setAll(key,arr)}
};