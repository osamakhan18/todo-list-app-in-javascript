
var btn = document.getElementById('add-text')
var input= document.getElementById('input');
var todo_list = document.getElementById('todo-list')




btn.addEventListener('click', () => {
    var inputText = input.value;
    var todo = todo_list;
    if (inputText) {
        var li = document.createElement('li');

        li.textContent=inputText;
        
      
        // Create a "Remove" button
        var btn_list = document.createElement('button');
        btn_list.textContent = "Remove";
        
        // Add remove functionality to the button
        btn_list.addEventListener('click', () => {
            todo.removeChild(li);
        });

        li.appendChild(btn_list);
        todo.appendChild(li);

        // Clear the input field after adding the item
        input.value = '';
    }
});


