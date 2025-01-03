let mailru_block = true
let mailru_highlight = false

function checkExtensionLocalStorage(){
  chrome.storage.local.get(['mailruadblockerstorage'], function(data) {
    if((data.mailruadblockerstorage.blockall != true && data.mailruadblockerstorage.blockall != false) || (data.mailruadblockerstorage.highlightall != true && data.mailruadblockerstorage.highlightall != false)){
      chrome.storage.local.set({'mailruadblockerstorage': {
        'blockall' : true,
        'highlightall' : false
      }})
      return 0
    }

    let json = data.mailruadblockerstorage
    mailru_block = json.blockall
    mailru_highlight = json.highlightall
    
    //console.log(mailru_block + ' and ' + mailru_highlight)
  })
}

async function getTabId(){
  var tabs = await chrome.tabs.query({active: true, currentWindow: true})
  return tabs[0].id
}
async function getTabUrl(){
  var tabs = await chrome.tabs.query({active: true, currentWindow: true})
  return tabs[0].url
}

async function insertScript(){
  try{
    checkExtensionLocalStorage()
    let tabUrl = await getTabUrl()
    if(tabUrl.indexOf('https://e.mail.ru/inbox') != 0) return 0
    let tabId = await getTabId()
    if(mailru_block) chrome.scripting.executeScript({target: {tabId: tabId}, files: ['blockall.js']})
    if(mailru_highlight) chrome.scripting.executeScript({target: {tabId: tabId}, files: ['highlightall.js']})
  }catch(e){}
}

chrome.tabs.onUpdated.addListener(insertScript)
