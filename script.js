
var btn = document.getElementById('add-text')
var input= document.getElementById('input');
var todo_list = document.getElementById('todo-list')




btn.addEventListener('click', () => {
    var inputText = input.value.trim(); 
    
    if (inputText === '') {
        alert('Please enter some text');
        
    }

    var inputText = input.value;
    var todo = todo_list;
    if (inputText) {
        var li = document.createElement('li');

        li.textContent=inputText;
        li.classList.add('li')
        
      
        
        var btn_list = document.createElement('button');
        btn_list.textContent = "Remove";
        btn_list.classList.add('remove')
        
       
        btn_list.addEventListener('click', () => {
            todo.removeChild(li);
        });

        li.appendChild(btn_list);
        todo.appendChild(li);

        li.addEventListener('click',function(){
           if( li.style.textDecoration=='line-through'){
            li.style.textDecoration='none';
           }else{
            li.style.textDecoration='line-through';
           }
        })

       
        input.value = '';
    }
    
});


