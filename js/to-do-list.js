'use strict'

if (localStorage.Tasklist) {
  var Tasklist = JSON.parse(localStorage.Tasklist);
} else {
  var Tasklist = {
    list: []
  }
};

var Item = function (task) {
 this.task = task;
 this.done = false;
}

var save = function(index) {
  $('#save' + index).on({'click': function() {
    Tasklist.list[index].task = ($('#item' + index).val());
    listTasks();
  }})
};

var done = function(index) {
  $('#done' + index).on({'click': function() {
    if (Tasklist.list[index].done == false) {
      Tasklist.list[index].done = true;
      $('#item' + index).css("background-color", "#D3D9EE");
      $('#box' + index).css("background-color", "#D3D9EE");
      $('#save' + index).css("background-color", "#C79DB4").css("border", "5px solid #F9FDEF");
    } else {
      $('#item' + index).css("background-color", "#75AEA7");
      $('#box' + index).css("background-color", "#75AEA7");
      $('#save' + index).css("background-color", "#C79DB4").css("border", "5px solid #F9FDEF");
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
    $('#tasks').prepend('<div class=\"to-do-item\" id=\"box' + i + '\"><textarea id=\"item' + i + '\">' + Tasklist.list[i].task + '</textarea><button type=\"button\" id=\"save' + i + '\">SAVE</button><button type=\"button\" id=\"done' + i + '\">DONE</button><button type=\"button\" id=\"delete' + i + '\">DELETE</button></div>');
      if (Tasklist.list[i].done) {
        $('#item' + i).css("background-color", "#D3D9EE");
        $('#box' + i).css("background-color", "#D3D9EE");
      };
      $('#item' + i).change(function() {
        console.log("change!");
        $('#item' + i).css("color", "#D3D9EE");
        $('#save' + i).css("background-color", "#C79DB4").css("border", "5px solid #F9FDEF");
      })
    save(i);
    done(i);
    deleteTask(i);
    store();
  })
};

var store = function() {
    var session = JSON.stringify(Tasklist);
    localStorage.Tasklist = session;
};

if (localStorage.Tasklist) {
  var Tasklist = JSON.parse(localStorage.Tasklist);
  listTasks();
};

$('#submit-task').on({'click': function() {
  if ($('#new-task').val() !== "") {
    var input = new Item($('#new-task').val());
    Tasklist.list.push(input);
    $('#new-task').val("");
    listTasks();
  }
}});