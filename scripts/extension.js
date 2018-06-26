function getEstimateText(response) {
    return `There is like <strong>${response.data}</strong> letters! <br> It will take me <strong>${Math.ceil(response.data/150)}</strong> day(s)!`;
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('counter');

    button.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data: ''}, function(response) {
                document.getElementById('status').innerHTML = getEstimateText(response);
            });
        });
    });
});

