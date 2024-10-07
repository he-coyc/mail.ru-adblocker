var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        removeSideAd();
        removeTopAd();
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
        let potentialAd = document.querySelector('.application-mail__layout.application-mail__layout_main').children[0];
        if(potentialAd.children.length > 3) {
            potentialAd = potentialAd.children[1].children;
            if(potentialAd.length >= 5){
                let divNum = 0, divClassLengthMax = 0;
                for(i = 0; i < potentialAd.length - 1; i++){
                    if(divClassLengthMax < potentialAd[i].classList.length){
                        divClassLengthMax = potentialAd[i].classList.length;
                        divNum = i;
                    }
                }
                let ad = potentialAd[divNum];
                ad.style.display = 'none';
                //ad.style.backgroundColor = 'red';
            }
        }
}

function removeTopAd(){
    let potentialAd = document.querySelector('.new-menu').parentElement.children[0].children[0].children[0];
    let ad = potentialAd;
    ad.style.display = 'none';
    //ad.style.backgroundColor = 'red';
    document.querySelector('.new-menu').parentElement.children[2].style.height = '100%';
}