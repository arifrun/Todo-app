
let alert = document.querySelector('.alert');
let input_value = document.querySelector(".input_value"); 
let add = document.querySelector(".add");  
let list_body = document.querySelector('.list_body'); 

    add.addEventListener('click',()=>{ 
        console.log( input_value.value);  
        if(input_value.value === ''){ 
         alert.innerHTML = 'Please enter a list'
        }else{ 
         alert.style = 'display:none'      

     let list = document.createElement('div');  
     list.classList.add('list'); 
    
     let item = document.createElement('input'); 
     item.classList.add('item');   
     item.setAttribute('type', 'text');  
     item.setAttribute('readonly','readonly');
     item.value = input_value.value 

     let checkbox = document.createElement('input'); 
     checkbox.setAttribute('type','checkbox'); 

     let edit = document.createElement('button');  
     edit.classList.add('edit') 
     edit.innerHTML = 'Edit'   

     let delete_list = document.createElement('button'); 
     delete_list.classList.add('delete') 
     delete_list.innerHTML = 'Delete'     

     list_body.appendChild(list); 
     list.appendChild(checkbox);
     list.appendChild(item); 
     list.appendChild(edit);
     list.appendChild(delete_list);  
     input_value.value = ''  
     
     checkbox.addEventListener('click',()=>{ 
      if(checkbox.checked){
        item.style = 'text-decoration: line-through'
      }else{ 
         item.style = 'text-decoration: none'
      }  
     }) 
     delete_list.addEventListener('click',()=>{ 
        list.remove()
     })  
     edit.addEventListener('click',()=>{ 
        if(edit.innerHTML === 'Edit'){
         item.removeAttribute('readonly','readaonly'); 
         item.style = 'text-decoration: none' 
         checkbox.checked = false
         edit.innerHTML = 'Save' 
        }else{ 
          item.setAttribute('readonly','readonly'); 
          edit.innerHTML = 'Edit' 
        }
     })  
   }        
    });