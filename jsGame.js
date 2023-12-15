function clickMe() {
  alert("You clicked me!");
}

function removeOptions(selectElement) {
   var i, L = selectElement.options.length - 1;
   for(i = L; i >= 0; i--) {
      selectElement.remove(i);
   }
}

function appendNewOption(f_optionValue, f_optionText) {
    var mySelect = document.getElementById('myFriendList'),
        newOption = document.createElement('option');

    newOption.value = f_optionValue;

    // Not all browsers support textContent (W3C-compliant)
    // When available, textContent is faster (see http://stackoverflow.com/a/1359822/139010)
    if (typeof newOption.textContent === 'undefined')
    {
        newOption.innerText = f_optionText;
    }
    else
    {
        newOption.textContent = f_optionText;
    }
    mySelect.appendChild(newOption);
}

function myGroupView() {
     var xGroupList = document.getElementById("myGroupList");
     var xGroupValue = myGroupList.options[xGroupList.selectedIndex].value;
     var xGroupText = myGroupList.options[xGroupList.selectedIndex].text;

    //alert("xGroupvalue= " + xGroupValue);

    // using the function:
    removeOptions(document.getElementById('myFriendList'));

     if (xGroupValue == "1") {
            appendNewOption(1, "My Family")

            var img = document.createElement("img");
            img.src = "images/my family.jpg";
            document.body.appendChild(img);
    }
     if (xGroupValue == "2") {
            appendNewOption(1, "Jianna and Austin")

            var img = document.createElement("img");
            img.src = "images/jiana austin.jpg";
            document.body.appendChild(img);
    }

    return false;
}

function myFriendView() {
     //alert("myFriendView v"+ver);
     var myFriendList = document.getElementById("myFriendList");
     var myFriendValue = myFriendList.options[myFriendList.selectedIndex].value;
     var myFriendText = myFriendList.options[myFriendList.selectedIndex].text;
     myFriendFile = "images/" + myFriendText.toLowerCase() + ".jpg";
     //myFriendFile = "/images/" + myFriendText + ".jpg";
     //alert("myFriendFile java att= "+myFriendFile);
     var img = document.createElement("img");
//     var img = new Friend();
     img.src = myFriendFile;
//     img.width = 250;
//     img.height = 300;
//     document.write("\n");
//     document.writeln();
     document.body.appendChild(img);
//     document.appendChild(img);
//     open(myFriendFile, '_blank', "School");
}

function myImageView() {
     //alert("myImageView v"+ver);
     var myImageList = document.getElementById("myImageList");
     var myImageValue = myImageList.options[myImageList.selectedIndex].value;
     var myImageText = myImageList.options[myImageList.selectedIndex].text;
     myImageFile = "images/" + myImageText.toLowerCase() + ".jpg";
     //myImageFile = "/images/" + myImageText + ".jpg";
     //alert("myImageFile java att= "+myImageFile);
     var img = document.createElement("img");
//     var img = new image();
     img.src = myImageFile;
//     img.width = 250;
//     img.height = 300;
//     document.write("\n");
//     document.writeln();
     document.body.appendChild(img);
//     document.appendChild(img);
//     open(myImageFile, '_blank', "School");
}

function myLinkView() {
     //alert("myLinkView v"+ver);
     var myLinkList = document.getElementById("myLinkList");
     var value = myLinkList.options[myLinkList.selectedIndex].value;
     var text = myLinkList.options[myLinkList.selectedIndex].text;
     var  addr='https://' + value;
     window.open(addr, '_blank', "Game Attendance");
}
