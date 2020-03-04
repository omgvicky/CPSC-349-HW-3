(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var CheckList = App.CheckList;

  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;

  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });

  formHandler.addInputHandler(Validation.isCompanyEmail);
})(window);


//MODAL

function getMessage(){
  var p = document.getElementById('thanks');
  var n = document.getElementById('name1').value;
  var t = document.getElementsByName('titleName');

for(i = 0; i < t.length; i++) {
  if(t[i].checked)
  var myTitle = t[i].value;
}

  var msg = "Thank you for your purchase ";
  p.textContent = msg  + myTitle+ " " + n  ;

}

//var msg = "Thank you " + "title" +
/*
nam.addEventListener('input', function(){
  p.textContent = msg + tit;
})*/
