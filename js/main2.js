(function(){
  'use strict'

//two way data binding

var app = new Vue({
  el: '#app',
  data: {
      addText: '',
      list: [],
      uniqueKey: 0,
  },
  methods: {
      addToDo() {
          if (this.addText) {
              this.list.unshift({
                  'text': this.addText,
                  'id': ++this.uniqueKey
              });
              this.addText = '';  //入力値初期化
          }
      }
  }
});
})();
