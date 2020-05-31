//variable
let currentPage = 1;
let sizePage = 5;
const pagesCount = animalsProducts.length / sizePage;

let paginationElement=document.getElementById('pagination');


function displayCurrentPage(e){
    if (e.target.classList.contains("btn")) {
        if (e.target.innerText === "<<" && currentPage > 1) {
            currentPage=1;
        }
        if (e.target.innerText === ">>" && currentPage < pagesCount) {
            currentPage=pagesCount;
        }
        if (e.target.innerText === "<" && currentPage > 1) {
            currentPage--;
        }
        if (e.target.innerText === ">" && currentPage < pagesCount) {
            currentPage++;
        } else if (e.target.innerText !== ">" && e.target.innerText !== "<" && e.target.innerText !== ">>" && e.target.innerText !== "<<") {
            currentPage = e.target.innerText;
        }
        createPaginationList(animalsProducts,animalListProduct,sizePage,currentPage);
        paginator(currentPage,pagesCount)
      }
}


//add event listener
function paginationButtonEventClick(){
    document.addEventListener('click', displayCurrentPage);
}



//create pagination button
function createPaginationBtn(content,page){
    const btnPage = document.createElement("span");
    btnPage.innerHTML = `${content}`;
    btnPage.className = "btn";
    if (content === Number(page)) {
      btnPage.className = "btn active";
    }
    return btnPage;
}

function createPagination(list,lastPage,firstPage,page){
    for(let i=firstPage;i<=lastPage;i++){
        let btn=createPaginationBtn(i,page);
        list.appendChild(btn);
    }
}

//create pagination number
//list == btnList
function createPaginationNumber(list,page){
    if(page == 1 || page == pagesCount){
        createPagination(list,pagesCount,1,page);
    }
    else{
        let firstPage=Number(page)-1;
        let lastPage=Number(page)+1;
        createPagination(list,lastPage,firstPage,page);
    }
}
function inactiveClass(element,style){
    element.classList.add(style);
}
function inactiveBtn(page,previous,next,style){
    if (Number(page) === 1) {
        inactiveClass(previous,style);
      }
    if (Number(page) >= pagesCount) {
        inactiveClass(next,style);
    }
}



function createPagesBtnsUI(page){
    let btnList=createNode('btn-list');
    let previous = createPaginationBtn("<");
    let next = createPaginationBtn(">");
    let first = createPaginationBtn("<<");
    let last = createPaginationBtn(">>");
    inactiveBtn(page,previous,next,"inactive-in");
    inactiveBtn(page,first,last,"inactive-out");
    btnList.appendChild(first);
    btnList.appendChild(previous);
    createPaginationNumber(btnList,page)
    btnList.appendChild(next);
    btnList.appendChild(last);
    return btnList;
}


function render(rootElement, domNode) {
    rootElement.innerHTML = "";
    rootElement.appendChild(domNode);
}
    
function paginator(page) {
    const paginationUI = createPagesBtnsUI(page);
    render(paginationElement, paginationUI);
}