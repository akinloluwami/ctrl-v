chrome.contextMenus.create({
  id: "send to device",
  title: "Send to your devices",
  contexts: ["link"],
});

chrome.contextMenus.onClicked.addEventListener((clickedData) => {
  localStorage.setItem("clickkk", clickedData);
});
