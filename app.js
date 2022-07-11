var index = 0;
var item = document.querySelectorAll('.btn');

function currentButton(n) {
    showActive(index = n);
}

function showActive(n){
    for(var i = 0; i < item.length; i++){
        item[i].className = item[i].className.replace(' active','');
    }
    item[n].className += ' active';

    var currentBtn = item[n].value;
    
    document.querySelector('.selBtn').innerHTML = `${currentBtn}`;
}
