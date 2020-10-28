
const input = document.querySelector('#input');

input.addEventListener('keypress', function (event) {
    if (event.key == 'Enter' && event.target.value != '') {
        event.preventDefault();

        /* select list */
        const list = document.querySelector('.list');

        /* Creat li */
        const li = document.createElement('li');
        li.classList.add('list-item');

        /* creat p element */
        const p = document.createElement('p');
        p.classList.add('item-text')
        // Den under linje gör att när man skriver nånting i input kommer hamnar som li-text 
        // =p.appenchild('event.target.value')
        // p.textContent = event.target.value;
        p.textContent = input.value;

        /* create i element */
        const i = document.createElement('i');
        i.classList.add('fas', 'fa-times')

        /* add p inside li */
        li.appendChild(p)
        li.appendChild(i)
        list.appendChild(li)

        /* clear the input box */
        event.target.value = '';
        // input.value='';

        // skickar inte info 
    }
})



// /* Adding event lister on the list with deligatiom concept */
const list = document.querySelector('.list');
list.addEventListener('click', function (event) {
    /* event.target is all the element inside the .list */


    // /* event.target is the i element */ contains is like index,searching after somtething
    if (event.target.classList.contains('fa-times')) {

        /* finding th eright list item */
        const IDforListItem = event.target.parentElement;

        /* finding th eright list item */
        list.removeChild(IDforListItem)
    }

    /* event.target is all the element inside the .list */
    if (event.target.classList.contains('item-text')) {
        // med toggle kan add and remove inte samme time
        event.target.classList.toggle('task-finished')

    }
})