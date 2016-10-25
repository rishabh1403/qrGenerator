var tabQuery = {
    "active" : true,
    "currentWindow" : true
};

chrome.tabs.query(tabQuery,function(tabs){
    var url = tabs[0].url;
    console.log(url);
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      width: 300,
      height: 300
    });
    qrcode.makeCode(url);
    
});