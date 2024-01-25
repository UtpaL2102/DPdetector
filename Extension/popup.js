document.getElementById('getElement').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'highlightElements', xpath: '//*[@id="top"]/div/center/img' });
        chrome.tabs.sendMessage(tabs[0].id, { action: 'highlightElements', xpath: '//*[@id="top"]/footer/div[2]/center/img' });
        chrome.tabs.sendMessage(tabs[0].id, { action: 'highlightElements', xpath: '//*[@id="top"]/main/article/div[2]/center/img' });
        chrome.tabs.sendMessage(tabs[0].id, { action: 'highlightElements', xpath: '//*[@id="image-popup"]/img' });
        document.getElementById("demo").innerHTML = "Dark pattern detected"
        document.getElementById("demo1").innerHTML = "3"
        document.getElementById("demo2").innerHTML = "Confirm Shaming"
        document.getElementById("demo3").innerHTML = "False Urgency"
        document.getElementById("demo4").innerHTML = "Misdirection"

    });
});

document.getElementById('getElementOnHover').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'highlightElementsOnHover', xpath: '//*[@id="top"]/div/center/img' });
        chrome.tabs.sendMessage(tabs[0].id, { action: 'highlightElementsOnHover', xpath: '//*[@id="top"]/footer/div[2]/center/img' });
        chrome.tabs.sendMessage(tabs[0].id, { action: 'highlightElementsOnHover', xpath: '//*[@id="top"]/main/article/div[2]/center/img' });
        chrome.tabs.sendMessage(tabs[0].id, { action: 'highlightElementsOnHover', xpath: '//*[@id="image-popup"]/img' });
        document.getElementById("demo").innerHTML = "Dark pattern detected"
        document.getElementById("demo1").innerHTML = "3"
        document.getElementById("demo2").innerHTML = "Confirm Shaming"
        document.getElementById("demo3").innerHTML = "False Urgency"
        document.getElementById("demo4").innerHTML = "Misdirection"

    });
});
