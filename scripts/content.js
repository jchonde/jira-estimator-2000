chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    sendResponse({data: document.querySelector('#descriptionmodule .mod-content').innerText.trim().length, success: true});
});

