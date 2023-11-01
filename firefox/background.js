browser.runtime.onMessage.addListener((message) => {
    if (message.action === "clearCookies") {
        browser.cookies.remove({name: 'dapSid', url: 'https://www.deepl.com/'});
        browser.cookies.remove({name: 'dapUid', url: 'https://www.deepl.com/'});
    }
});