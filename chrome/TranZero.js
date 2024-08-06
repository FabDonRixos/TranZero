const classname = "ManyTranslationsBlockDialog-module--content--024d6"

async function clearCookie() {
    await chrome.runtime.sendMessage({action: "clearCookies"});
    window.location.reload();
}

if (document.getElementsByClassName(classname).length > 0) {
    clearCookie().then();
} else {

    const observer = new MutationObserver((mutations) => {
        if (document.getElementsByClassName(classname).length > 0) {
            clearCookie().then();
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}