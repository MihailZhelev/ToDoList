let addBtn = document.getElementById('addBtn');
let divText = document.getElementById('addedToDoS');
let button = document.createElement('button');


addBtn.addEventListener('click', event => {

    let addingTxt = document.getElementById('typeText').value;

    let list = document.createElement('li');

        divText.style.visibility = 'visible';
        list.style.listStyle = 'decimal inside';
        list.style.color = 'white';
        list.style.fontSize = '20px';
        

    if (addingTxt.length > 0) {
        list.innerText = addingTxt;
        list.style.height = '28px';
        
        divText.appendChild(list);
        
    }
    else {
        alert('The field should contain some text');
    }

    button = document.createElement('button');
    button.classList.add('removeButton');
    button.style.fontSize = "small";
    button.style.borderRadius = "5px";
    button.innerText = 'Remove item';   
    button.style.borderRadius = '25px';
    
 

    list.appendChild(button);

    button.addEventListener('click', ev => {
        ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);;

    });
});




