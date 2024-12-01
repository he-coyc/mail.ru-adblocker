const swBlockall = document.getElementById('mailru_block')
const swHighlightall = document.getElementById('mailru_highlight')

swBlockall.onchange = function(){
    switches(1)
}
swHighlightall.onchange = function(){
    switches(2)
}

function updateSwitches(sw1, sw2){
    swBlockall.checked = sw1
    swHighlightall.checked = sw2
}

function checkExtensionLocalStorage(){
    chrome.storage.local.get(['adblockerdata'], function(data) {
      let json = data.adblockerdata
      let mailru_block = json.blockall
      let mailru_highlight = json.highlightall
      updateSwitches(mailru_block, mailru_highlight)
    })
}

function switches(id){
    if(swHighlightall.checked && swBlockall.checked){
        if(id == 1) swHighlightall.checked = false
        if(id == 2) swBlockall.checked = false
    }
    chrome.storage.local.set({'adblockerdata': {
        'blockall' : swBlockall.checked,
        'highlightall' : swHighlightall.checked
      }
    })
}

checkExtensionLocalStorage()