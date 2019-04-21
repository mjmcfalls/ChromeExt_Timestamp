// import './js/moment.js';
var format = "YYYYMMDDTHH:mm:ss"
function onClickHandler(info, tab) {
    if (info.menuItemId == "timestamp201904") {
    //   console.log("Clicked " + info.menuItemId);
        var text = moment().format();
        // console.log(todayIso);
        chrome.tabs.sendMessage(tab.id, {"act":"insert", "text":text}, {frameId: info.frameId || 0});
  };
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "timestamp201904",
        title: "Test Context Menu",
        contexts: ["editable"],
    });
});
