'use strict'

var Task = {
list: []
};

var enter = function() {

};

var update = function() {

};

var done = function() {

};

var deleteTask = function() {

};

var listTasks = function() {
  $('#tasks').empty();
  $.each(Task.list, function(i, val) {
    $('#tasks').append('<div class=\"to-do-item\"><textarea>' + Task.list[i] + '</textarea><button type=\"button\" id=\"update' + i + '\">UPDATE</button><button type=\"button\" id=\"done' + i + '\">DONE</button><button type=\"button\" id=\"delete' + i + '\">DELETE</button></div>')
  })
};

$('#submit-task').on({'click': function() {
  if ($('#new-task').val() !== "") {
    Task.list.push($('#new-task').val());
    $('#new-task').val("");
    listTasks();
  }
}});