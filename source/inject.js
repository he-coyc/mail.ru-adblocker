var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        try{removeSideAd()}catch{}
        try{removeTopAd()}catch{}
        
    });
  });
mutationObserver.observe(document.body, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
});

function removeSideAd(){
    let potentialAd = document.querySelector('.application.app.application_new-toolbar').children[0].children[0].children[0].children[1].children[0];
        if(potentialAd.children.length > 3) {
            potentialAd = potentialAd.children;
            if(potentialAd.length >= 5){
                let divNum = 0, divClassLengthMax = 0;
                for(i = 0; i < potentialAd.length - 1; i++){
                    if(divClassLengthMax < potentialAd[i].classList.length){
                        divClassLengthMax = potentialAd[i].classList.length;
                        divNum = i;
                    }
                }
                let ad = potentialAd[divNum];
                removeElement(ad);
            }
        }
}

function removeTopAd(){
    let ad = document.querySelector('.new-menu').parentElement.children[0].children[0].children[0];
    removeElement(ad);
    document.querySelector('.new-menu').parentElement.children[2].style.height = '100%';
}

function viewElement(element){
    element.style.backgroundColor = 'red';
    element.style.border = '1px dashed black';
}
function removeElement(element){
    element.style.display = 'none';
}