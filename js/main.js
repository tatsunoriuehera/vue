(function(){
  'use strict'

//two way data binding

  var vm=new Vue({
    el:'#app',
    data:{
      //name:'your name!'
      todos:[
        'task1',
        'task2',
        'task3'
      ]
    }
  });
})();
