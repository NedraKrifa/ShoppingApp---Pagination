let productTitleList=animalListProduct.getElementsByClassName('product-title');
let favoriBtnList=animalListProduct.getElementsByClassName('favori-btn');

let index=-1;

function changeBtn(index){
    favoriBtnList[index].classList.remove('toggle');
}

function getTitleList(){
    let listTitle=[];
    for (let i = 0; i < productTitleList.length; i++) {
        var itemTitle=productTitleList[i].innerText.replace(/"/g,'');
        listTitle.push(itemTitle);
    }
    return listTitle;
}

function isExist(title){
    let listTitle=getTitleList();
    let titleIndex=listTitle.indexOf(title);
    index=titleIndex;
    return titleIndex > -1;
}


function updateBtnFavori(li){
    let title=li.getElementsByClassName('product-title')[0].innerText;
    if(isExist(title)){
        changeBtn(index);
    }
}

function removeLi(e){
    if(confirm('Are You Sure?')){
        let li = e.target.parentElement.parentElement.parentElement;
        updateBtnFavori(li);
        li.remove();
    }
}

function removeLiFromFavori(e){
    if(e.target.parentElement.id=="remove-btn"){
        removeLi(e);
    }
}

function removeButtonEventClick(){
    document.addEventListener('click', removeLiFromFavori);
}