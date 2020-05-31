const favoriListProduct=document.getElementById('favori-list');


function isNotExist(list,title){
    let listTitle=[];
    for (let i = 0; i < list.length; i++) {
        var itemTitle=list[i].innerText.replace(/"/g,'');
        listTitle.push(itemTitle);
    }
    return !listTitle.includes(title);
}

function getItem(itemContent){
    let item=createNode('product-item');
    item.innerHTML=itemContent.innerHTML;
    console.log(item);
    let span=item.querySelector('#favori-btn');
    span.id='remove-btn';
    span.innerHTML=`<i class="fas fa-trash"></i>`
    console.log(span);
    return item;
}

function addListToFavori(e){
    let itemContent=e.target.parentElement.parentElement.parentElement;
    /***2nd method
    if(!e.target.classList.contains('toggle')){
        e.target.classList.add('toggle');
        let item=getItem(itemContent);
        favoriListProduct.appendChild(item);
    }***/
    let title=itemContent.getElementsByClassName('product-title')[0].innerText;
    let favoriTitleList=favoriListProduct.getElementsByClassName('product-title');
    if(isNotExist(favoriTitleList,title)){
        e.target.classList.add('toggle');
        let item=getItem(itemContent);
        favoriListProduct.appendChild(item);
    }

}




function addProductToFavori(e){
    if(e.target.parentElement.id=="favori-btn"){
        addListToFavori(e);
        addLocalStorage(e);//localStoage
    }
}


function favoriButtonEventClick(){
    document.addEventListener('click', addProductToFavori);
}


//localStorage
const itemsFavorit=JSON.parse(localStorage.getItem('items')) || [];
console.log(itemsFavorit);

function addLocalStorage(e){
    let itemContent=e.target.parentElement.parentElement.parentElement;
    let itemInfoObject=getInfoFromItem(itemContent);
    itemsFavorit.push(itemInfoObject);
    //createProductListFavorit();
    localStorage.setItem('items',JSON.stringify(itemsFavorit));
}

function getInfoFromItem(itemContent){
    let imageSrc =itemContent.querySelector('.product-photo img').src;
    let title =itemContent.getElementsByClassName('product-title')[0].innerText;
    let description =itemContent.getElementsByClassName('product-desc')[0].innerText;
    let price =itemContent.getElementsByClassName('product-price')[0].innerText;
    let category =itemContent.getElementsByClassName('product-category')[0].innerText;
    return {imageSrc,title,description,price,category};
}