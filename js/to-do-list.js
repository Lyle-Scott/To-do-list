'use strict'

var Tasklist = {
list: []
};

var Item = function (task) {
 this.task = task;
 this.done = false;
}

var update = function(index) {
  $('#update' + index).on({'click': function() {
    Tasklist.list[index].task = ($('#item' + index).val());
    console.log(Tasklist.list[index].task);
  }})
};

var done = function(index) {
  $('#done' + index).on({'click': function() {
    console.log('clicked', Tasklist.list[index].done);
    if (Tasklist.list[index].done == false) {
      Tasklist.list[index].done = true;
      $('#item' + index).css("background-color", "#4C1200");
      $('#box' + index).css("background-color", "#4C1200");
      console.log("changed to dark red");
    } else {
      $('#item' + index).css("background-color", "#019974");
      $('#box' + index).css("background-color", "#019974");
      Tasklist.list[index].done = false;
    }
  }})
};

var deleteTask = function(index) {
  $('#delete' + index).on({'click': function() {
    Tasklist.list.splice(index, 1);
    listTasks();
  }})
};

var listTasks = function() {
  $('#tasks').empty();
  $.each(Tasklist.list, function(i, val) {
    $('#tasks').append('<div class=\"to-do-item\" id=\"box' + i + '\"><textarea id=\"item' + i + '\">' + Tasklist.list[i].task + '</textarea><button type=\"button\" id=\"update' + i + '\">UPDATE</button><button type=\"button\" id=\"done' + i + '\">DONE</button><button type=\"button\" id=\"delete' + i + '\">DELETE</button></div>');
      if (Tasklist.list[i].done) {
        $('#item' + i).css("background-color", "#4C1200");
        $('#box' + i).css("background-color", "#4C1200");
      };
    update(i);
    done(i);
    deleteTask(i);
  })
};

$('#submit-task').on({'click': function() {
  if ($('#new-task').val() !== "") {
    var input = new Item($('#new-task').val());
    Tasklist.list.push(input);
    $('#new-task').val("");
    listTasks();
  }
}});