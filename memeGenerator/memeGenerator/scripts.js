const topText = document.body.querySelector("#toptext");
const bottomText = document.body.querySelector("#bottomtext");
const pictureUrl = document.body.querySelector("#pictureurl");
const inputField = document.body.querySelector("#inputfield");
const clipBoard = document.body.querySelector("#clipboard");
const textColor = document.body.querySelector("#textcolor");

clipBoard.add

inputField.addEventListener("click", function (e) {
    e.preventDefault();
    //console.log(e);

    // if you click button do this
    if (e.target.nodeName === "BUTTON") {
        // create temp variables for fields
        let newDivAll = document.createElement("div");
        let newWordsTop = document.createElement("h1");
        let newWordsBottom = document.createElement("h1");
        let newImage = document.createElement('img');
        let newButton = document.createElement('button');
        newImage.src = pictureUrl.value;
        // add image first
        newDivAll.append(newImage);
        // deal with top and bottom words
        newWordsBottom.innerText = bottomText.value;
        newWordsTop.innerText = topText.value;
        newButton.innerHTML = '&#10060;';

        // make style changes on top vs bottom
        newDivAll.style.position = "relative";
        newWordsTop.style.position = "absolute";
        newWordsTop.style.top = "0px";
        newWordsTop.style.color = textColor.value;
        newWordsTop.style.textAlign = "center";
        newWordsBottom.style.position = "absolute";
        newWordsBottom.style.bottom = "0px";
        newWordsBottom.style.color = textColor.value;
        newWordsBottom.style.textAlign = "center";
        // console.log();
        // add the words to the picture
        // add the picture to the page
        newDivAll.append(newWordsBottom);
        newDivAll.append(newWordsTop);
        newDivAll.append(newButton);
        clipBoard.append(newDivAll);
        topText.value = '';
        bottomText.value = '';
        pictureUrl.value = '';
        textColor.value = "#000000";
    } // end of if e.target.nodeName == button

}) //end of inputField Listener

// clipboard listener
clipBoard.addEventListener("click", function (e) {
    // if you click a button in clipboard
    e.preventDefault();
    if (e.target.nodeName === "BUTTON") {
        e.target.parentElement.remove();
    }
})


