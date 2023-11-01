chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "clearCookies") {
        chrome.cookies.remove({name: 'dapSid', url: 'https://www.deepl.com/'});
        chrome.cookies.remove({name: 'dapUid', url: 'https://www.deepl.com/'});
    }
});