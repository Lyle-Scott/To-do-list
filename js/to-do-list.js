'use strict'

var Task = {
list: []
};

var update = function(index) {
  $('#update' + index).on({'click': function() {
    Task.list[index] = ($('#item' + index).val());
    console.log(Task.list[index]);
  }})
};

var done = function(index) {
  $('#done' + index).on({'click': function() {
    console.log('clicked');
    if ($("#item" + index).css('background-color')=="rgb(1, 153, 116)") {
      $('#item' + index).css("background-color", "#4C1200");
      $('#box' + index).css("background-color", "#4C1200");
      console.log("changed to dark red");
    } else {
      $('#item' + index).css("background-color", "#019974");
      $('#box' + index).css("background-color", "#019974");
    }
  }})
};

var deleteTask = function(index) {
  $('#delete' + index).on({'click': function() {
    Task.list.splice(index, 1);
    listTasks();
  }})
};

var listTasks = function() {
  $('#tasks').empty();
  $.each(Task.list, function(i, val) {
    $('#tasks').append('<div class=\"to-do-item\" id=\"box' + i + '\"><textarea id=\"item' + i + '\">' + Task.list[i] + '</textarea><button type=\"button\" id=\"update' + i + '\">UPDATE</button><button type=\"button\" id=\"done' + i + '\">DONE</button><button type=\"button\" id=\"delete' + i + '\">DELETE</button></div>');
    update(i);
    done(i);
    deleteTask(i);
  })
};

$('#submit-task').on({'click': function() {
  if ($('#new-task').val() !== "") {
    Task.list.push($('#new-task').val());
    $('#new-task').val("");
    listTasks();
  }
}});