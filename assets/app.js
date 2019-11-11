const MakeBox = document.getElementById('MakeABox')
const MakeText = document.getElementById('MakeAText')
const MakeButton = document.getElementById('MakeAButton')
const MakeImage = document.getElementById('MakeAImage')
const CreationZone = document.getElementById('CreationZone')
let numOfDivs = 0
let numOfTexts = 0
let numOfButtons = 0
let numOfImages = 0
let divArray = []
let elementListArray = []
let focusedDiv
let resizeDivs = []
optionBox = document.getElementById('FocusedDivOptions')
optionBoxText = document.getElementById('TextOptions')
optionBoxImage = document.getElementById('ImageOptions')
elementListBox = document.getElementById('ElementListBox')
let formElements = document.getElementsByClassName('formElement')

MakeBox.onclick = () => {
    let newDiv = document.createElement("div")
    newDiv.setAttribute("style", "box-sizing: border-box; border:2px solid #000000; height: 50px; width: 50px; background-color: #ffffff; position: absolute; top: 400px; left: 600px; z-index: 0")
    numOfDivs++
    newDiv.classList.add("div")
    newDiv.classList.add("div" + numOfDivs)
    newDiv.setAttribute('name', "div" + numOfDivs)
    newDiv.onmousedown = handleMouseDownDiv
    newDiv.ondblclick = toggleOptionBox
    CreationZone.appendChild(newDiv)
    divArray.push(newDiv)
    listElements()
}

MakeText.onclick = () => {
    let newText = document.createElement('div')
    newText.setAttribute("style","font-size: 16px; font-weight: normal; text-decoration: none; font-style: normal; color: #000000; width: 100px; height: 20px; position: absolute; top: 400px; left: 600px; z-index: 0")
    numOfTexts++
    newText.textContent = 'SOME TEXT'
    newText.classList.add("text")
    newText.classList.add("text" + numOfTexts)
    newText.setAttribute('name', "text" + numOfTexts)
    newText.onmousedown = handleMouseDownText
    newText.ondblclick = toggleOptionBoxText
    CreationZone.appendChild(newText)
    divArray.push(newText)
    listElements()
}

MakeButton.onclick = () => {
    let newButton = document.createElement('button')
    newButton.setAttribute("style", "box-sizing: border-box; border:2px solid #000000; height: 30px; width: 60px; background-color: #cccccc; position: absolute; top: 400px; left: 600px; z-index: 0")
    numOfButtons++
    newButton.classList.add("button")
    newButton.classList.add("button" + numOfButtons)
    newButton.setAttribute('name', "button" + numOfButtons)
    newButton.onmousedown = handleMouseDownDiv
    newButton.ondblclick = toggleOptionBox
    CreationZone.appendChild(newButton)
    divArray.push(newButton)
    listElements()
}

MakeImage.onclick = () => {
    let newImage = document.createElement('img')
    newImage.setAttribute("style", "height: 60px; width: 60px;  position: absolute; top: 400px; left: 600px; z-index: 0")
    numOfImages++
    newImage.setAttribute('alt', 'image' + numOfImages)
    newImage.setAttribute('src', "")
    newImage.classList.add("image")
    newImage.classList.add("image" + numOfImages)
    newImage.setAttribute('name', "image" + numOfImages)
    newImage.onmousedown = handleMouseDownImage
    newImage.ondblclick = toggleOptionBoxImage
    CreationZone.appendChild(newImage)
    divArray.push(newImage)
    listElements()
}

const onFileSelected = event => {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
  
    reader.onload = function(event) {
      focusedDiv.src = event.target.result;
    };
    if(selectedFile) {
        reader.readAsDataURL(selectedFile);
    }
}

const handleMouseDownDiv = e => {
    focusedDiv = e.target 
    optionBoxText.style.display='none'
    optionBoxImage.style.display = 'none'
    if(!focusedDiv.classList.contains('focused')) {
        optionBox.style.display = 'block'
        setOptionBox()
        removeFocusBox()
        createFocusBox(focusedDiv)
        focusedDiv.classList.add('focused')
        return
    }
    document.onmouseup = closeDragElement
    document.onmousemove = elementDrag
}

const handleMouseDownText = e => {
    focusedDiv = e.target 
    optionBox.style.display = 'none'
    optionBoxImage.style.display = 'none'
    if(!focusedDiv.classList.contains('focused')) {
        optionBoxText.style.display = 'block'
        setOptionBoxText()
        removeFocusBox()
        createFocusBox(focusedDiv)
        focusedDiv.classList.add('focused')
        return
    }
    document.onmouseup = closeDragElement
    document.onmousemove = elementDrag
}
const handleMouseDownImage = e => {
    focusedDiv = e.target 
    optionBox.style.display = 'none'
    optionBoxText.style.display = 'none'
    if(!focusedDiv.classList.contains('focused')) {
        optionBoxImage.style.display = 'block'
        setOptionBoxImage()
        removeFocusBox()
        createFocusBox(focusedDiv)
        focusedDiv.classList.add('focused')
        return
    }
    document.onmouseup = closeDragElement
    document.onmousemove = elementDrag
}

const showElementList = () => {
    if(elementListBox.style.display == 'block') {
        elementListBox.style.display = 'none'
        return
    }
    elementListBox.style.display = 'block'
    listElements()
}

const showInstructions = () => {
    if(document.getElementById('Explanation').style.display == 'block') {
        document.getElementById('Explanation').style.display = 'none'
        return
    }
    document.getElementById('Explanation').style.display = 'block'
}

const listElements = () => {
    while( document.getElementById('ElementList').firstChild ){
        document.getElementById('ElementList').removeChild( document.getElementById('ElementList').firstChild );
    }
    elementListArray = []
    for(i=0;i<divArray.length;i++) {
        let newElement = document.createElement('LI')
        newElement.classList.add('listElement')
        newElement.textContent = divArray[i].getAttribute('name')
        elementListArray.push(newElement)
        newElement.onclick = handleElementListClick
        document.getElementById('ElementList').appendChild(newElement)
    }
}

const toggleOptionBox = () => {
    if(optionBox.style.display == 'block') {
        optionBox.style.display = 'none'
        return
    }
    optionBox.style.display = 'block'
}

const toggleOptionBoxText = () => {
    if(optionBoxText.style.display == 'block') {
        optionBoxText.style.display = 'none'
        return
    }
    optionBoxText.style.display = 'block'
}

const toggleOptionBoxImage = () => {
    if(optionBoxImage.style.display == 'block') {
        optionBoxImage.style.display = 'none'
        return
    }
    optionBoxImage.style.display = 'block'
}

document.onmousedown = e => {
    let isDivArray = false
    if(e.target == document.getElementById('ShowInstructions')) {
        return
    }
    if(e.target == document.getElementById('Explanation')) {
        return
    }
    for(i=0;i<resizeDivs.length;i++) {
        if(e.target == resizeDivs[i]) {
            return
        }
    }
    for(i=0;i<formElements.length;i++) {
        if(e.target == formElements[i]) {
            return
        }
    }
    if(e.target == optionBox) {
        return
    }
    if(e.target == optionBoxText) {
        return
    }
    for(i=0;i<divArray.length;i++) {
        if(e.target != divArray[i]) {
            divArray[i].classList.remove('focused')
        }
        if(e.target == divArray[i]) {
            isDivArray = true
        }
    }
    for(i=0;i<elementListArray.length;i++) {
        if(e.target == elementListArray[i]) {
            return
        }
    }
    if(!isDivArray) {
        focusedDiv = ''
        optionBox.style.display = 'none'
        optionBoxText.style.display = 'none'
        optionBoxImage.style.display = 'none'
        removeFocusBox()
    }
}

const handleElementListClick = e => {
    let index
    for(i=0;i<elementListArray.length;i++) {
        if(e.target == elementListArray[i]) {
            index = i
        }
    }
    focusedDiv = divArray[index]
    focusedDiv.classList.add('focused')
    removeFocusBox()
    createFocusBox(focusedDiv)
    if(focusedDiv.classList.contains('div')) {
        optionBoxText.style.display = 'none'
        optionBox.style.display = 'block'
        setOptionBox()
        return
    }
    if(focusedDiv.classList.contains('text')) {
        optionBox.style.display = 'none'
        optionBoxText.style.display = 'block'
        setOptionBoxText()
    }
}

const setOptionBox = () => {
    document.getElementById('FormBorderStyle').value = focusedDiv.style.borderStyle
    document.getElementById('FormBorderWidth').value = focusedDiv.style.borderWidth.substring(0, focusedDiv.style.borderWidth.length-2)
    document.getElementById('FormName').value = focusedDiv.getAttribute('name')
    document.getElementById('FormWidth').value = focusedDiv.style.width.substring(0, focusedDiv.style.width.length -2)
    document.getElementById('FormHeight').value = focusedDiv.style.height.substring(0, focusedDiv.style.height.length -2)
    document.getElementById('FormLevel').value = focusedDiv.style.zIndex
    document.getElementById('FormTop').value = focusedDiv.style.top.substring(0, focusedDiv.style.top.length-2)
    document.getElementById('FormLeft').value = focusedDiv.style.left.substring(0, focusedDiv.style.left.length-2)
    let rgb = getRGB(focusedDiv.style.backgroundColor)
    let backColor = '#' + fullColorHex(rgb[0], rgb[1], rgb[2])
    document.getElementById('FormColor').value = backColor
    let rgb2 = getRGB(focusedDiv.style.borderColor)
    let borderColor = '#' + fullColorHex(rgb2[0], rgb2[1], rgb2[2])
    document.getElementById('FormBorderColor').value = borderColor
}

const setOptionBoxText = () => {
     document.getElementById('FormText').value = focusedDiv.textContent
     document.getElementById('FormNameText').value = focusedDiv.getAttribute('name')
     document.getElementById('FormWidthText').value = focusedDiv.style.width.substring(0, focusedDiv.style.width.length -2)
     document.getElementById('FormHeightText').value = focusedDiv.style.height.substring(0, focusedDiv.style.height.length -2)
     document.getElementById('FormLevelText').value = focusedDiv.style.zIndex
     document.getElementById('FormFontSize').value = focusedDiv.style.fontSize.substring(0, focusedDiv.style.fontSize.length-2)
     if(focusedDiv.style.fontStyle == 'italic') {
         document.getElementById('ITALIC').checked = true
     }else {
        document.getElementById('ITALIC').checked = false
     }
     if(focusedDiv.style.fontWeight == 'bold') {
        document.getElementById('BOLD').checked = true
    }else {
       document.getElementById('BOLD').checked = false
    }
    if(focusedDiv.style.textDecoration == 'underline') {
        document.getElementById('UNDERLINE').checked = true
    }else {
       document.getElementById('UNDERLINE').checked = false
    }
    document.getElementById('FormTopText').value = focusedDiv.style.top.substring(0, focusedDiv.style.top.length-2)
    document.getElementById('FormLeftText').value = focusedDiv.style.left.substring(0, focusedDiv.style.left.length-2)
     let rgb = getRGB(focusedDiv.style.color)
     let color = '#' + fullColorHex(rgb[0], rgb[1], rgb[2])
     document.getElementById('FormColorText').value = color
}

const setOptionBoxImage = () => {
    document.getElementById('FormNameImage').value = focusedDiv.getAttribute('name')
    document.getElementById('FormWidthImage').value = focusedDiv.style.width.substring(0, focusedDiv.style.width.length -2)
    document.getElementById('FormHeightImage').value = focusedDiv.style.height.substring(0, focusedDiv.style.height.length -2)
    document.getElementById('FormLevelImage').value = focusedDiv.style.zIndex
    document.getElementById('FormTopImage').value = focusedDiv.style.top.substring(0, focusedDiv.style.top.length-2)
    document.getElementById('FormLeftImage').value = focusedDiv.style.left.substring(0, focusedDiv.style.left.length-2)
}
const getRGB = rgb => {
    let firstSplit = rgb.split('(')
    let secondSplit = firstSplit[1].split(',')
    let r = secondSplit[0]
    let g = secondSplit[1]
    let b = secondSplit[2].substring(0, secondSplit[2].length-1)
    return [r, g, b]
}
const deleteDiv = () => {
    CreationZone.removeChild(focusedDiv)
    let newElementListArray = []
    let newDivArray = []
    let index
    for(i=0;i<divArray.length;i++) {
        if(divArray[i] != focusedDiv) {
            newDivArray.push(divArray[i])
        }else {
            index = i
        }
    }
    document.getElementById('ElementList').removeChild(elementListArray[index])
    for(i=0;i<elementListArray.length;i++) {
        if(i != index) {
            newElementListArray.push(elementListArray[i])
        }
    }
    elementListArray = newElementListArray
    divArray = newDivArray
    removeFocusBox()
    listElements()
    optionBox.style.display = 'none'
    optionBoxText.style.display = 'none'
    optionBoxImage.style.display = 'none'
}

const rgbToHex = rgb => { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
}

const fullColorHex = (r,g,b) => {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red+green+blue;
}

const removeFocusBox = () => {
    for(i=0;i<resizeDivs.length;i++) {
        CreationZone.removeChild(resizeDivs[i])
    }
    resizeDivs = []
}

const createFocusBox = focusedDiv => {
    const divHeight = Number(focusedDiv.style.height.substring(0, focusedDiv.style.height.length - 2)) + 2
    const divWidth = Number(focusedDiv.style.width.substring(0, focusedDiv.style.width.length - 2)) + 2
    const divTop = Number(focusedDiv.style.top.substring(0, focusedDiv.style.top.length - 2))
    const divLeft = Number(focusedDiv.style.left.substring(0, focusedDiv.style.left.length - 2))
    let borderLeft = document.createElement('div')
    let borderRight = document.createElement('div')
    let borderTop = document.createElement('div')
    let borderBottom = document.createElement('div')
    borderLeft.classList.add('focusOutline', 'resizeew')
    borderRight.classList.add('focusOutline', 'resizeew')
    borderTop.classList.add('focusOutline', 'resizens')
    borderBottom.classList.add('focusOutline', 'resizens')
    borderLeft.setAttribute("style", "border-left:3px dashed red; position: absolute; height: " + divHeight + 'px')
    borderRight.setAttribute("style", "border-right:3px dashed red; position: absolute; height: " + divHeight + 'px')
    borderTop.setAttribute("style", "border-top:3px dashed red; position: absolute; width: " + divWidth + 'px')
    borderBottom.setAttribute("style", "border-bottom:3px dashed red; position: absolute; width: " + divWidth + 'px')
    borderLeft.style.top = divTop + 'px'
    borderLeft.style.left = (divLeft-3) + 'px'
    borderRight.style.top = divTop + 'px'
    borderRight.style.left = (divLeft + divWidth + 2) + 'px'
    borderTop.style.top = (divTop -3) + 'px'
    borderTop.style.left = divLeft + 'px'
    borderBottom.style.top = (divTop + divHeight + 2) + 'px'
    borderBottom.style.left = divLeft + 'px'
    borderLeft.onmousedown = handleMouseDownResize
    borderRight.onmousedown = handleMouseDownResize
    borderTop.onmousedown = handleMouseDownResize
    borderBottom.onmousedown = handleMouseDownResize
    resizeDivs.push(borderLeft)
    resizeDivs.push(borderRight)
    resizeDivs.push(borderTop)
    resizeDivs.push(borderBottom)
    CreationZone.appendChild(borderLeft)
    CreationZone.appendChild(borderRight)
    CreationZone.appendChild(borderTop)
    CreationZone.appendChild(borderBottom)
}

const elementDrag = e => {
    const divWidth = focusedDiv.style.width.substring(0, focusedDiv.style.width.length - 2)
    const divHeight = focusedDiv.style.height.substring(0, focusedDiv.style.height.length - 2)
    const halfWidth = divWidth/2
    const halfHeight = divHeight/2
    const boundTop = e.pageY - halfHeight
    focusedDiv.style.left = (e.pageX - halfWidth) + 'px'
    focusedDiv.style.top = (e.pageY - halfHeight) + 'px'
    if(boundTop < 127) {
        focusedDiv.style.top = '127px'
        resizeDivs[2].style.top = '124px'
        resizeDivs[3].style.top = (129 + Number(divHeight)) + 'px'
    }else {
        resizeDivs[2].style.top = (e.pageY-halfHeight-3) + 'px'
        resizeDivs[3].style.top = (e.pageY+halfHeight+5) + 'px'
    }
    resizeDivs[0].style.top = focusedDiv.style.top
    resizeDivs[0].style.left = (e.pageX-halfWidth-3) + 'px'
    resizeDivs[1].style.top = focusedDiv.style.top
    resizeDivs[1].style.left = (e.pageX+halfWidth+5) + 'px'
    resizeDivs[2].style.left = focusedDiv.style.left 
    resizeDivs[3].style.left = focusedDiv.style.left
}
//Shifting too much when draggable is allowed
// const optionsDragStart = e => {
//     document.onmouseup = closeDragElement
//     document.onmousemove = optionsDrag
// }

// const optionsDrag = e => {
//     optionBox.style.left = (e.pageX - 150) + 'px'
//     optionBox.style.top = (e.pageY - 200) + 'px'
// }
const handleMouseDownResize = e => {
    document.onmouseup = handleResizeMouseUp
    if(e.target == resizeDivs[0]) {
        document.onmousemove = resizeDragLeft
    }
    if(e.target == resizeDivs[1]) {
        document.onmousemove = resizeDragRight
    }
    if(e.target == resizeDivs[2]) {
        document.onmousemove = resizeDragTop
    }
    if(e.target == resizeDivs[3]) {
        document.onmousemove = resizeDragBottom
    }
}

const handleResizeMouseUp = () => {
    closeDragElement()
    let leftPosition = Number(resizeDivs[0].style.left.substring(0, resizeDivs[0].style.left.length - 2))
    let rightPosition = Number(resizeDivs[1].style.left.substring(0, resizeDivs[1].style.left.length - 2))
    let topPosition = Number(resizeDivs[2].style.top.substring(0, resizeDivs[2].style.top.length - 2))
    let bottomPosition = Number(resizeDivs[3].style.top.substring(0, resizeDivs[3].style.top.length - 2))
    let newWidth = Math.abs(leftPosition - rightPosition)
    let newHeight = Math.abs(topPosition - bottomPosition)
    if(leftPosition > rightPosition) {
        let temp = leftPosition
        leftPosition = rightPosition
        rightPosition = temp
    }
    if(topPosition > bottomPosition) {
        let temp = topPosition
        topPosition = bottomPosition
        bottomPosition = temp
    }
    focusedDiv.style.width = (newWidth-6) + 'px'
    focusedDiv.style.height = (newHeight-6) + 'px'
    focusedDiv.style.left = (leftPosition+3) + 'px'
    focusedDiv.style.top = (topPosition+3) + 'px'
    resizeDivs[0].style.height = newHeight + 'px'
    resizeDivs[0].style.top = topPosition + 'px'
    resizeDivs[1].style.height = newHeight + 'px'
    resizeDivs[1].style.top = topPosition + 'px'
    resizeDivs[2].style.width = newWidth + 'px'
    resizeDivs[2].style.left = leftPosition + 'px'
    resizeDivs[3].style.width = newWidth + 'px'
    resizeDivs[3].style.left = leftPosition + 'px'
    if(focusedDiv.classList.contains('div')) {
        setOptionBox()
    }
    if(focusedDiv.classList.contains('button')) {
        setOptionBox()
    }
    if(focusedDiv.classList.contains('text')) {
        setOptionBoxText()
    }
    if(focusedDiv.classList.contains('image')) {
        setOptionBoxImage()
    }
}

const applyChanges = () => {
    focusedDiv.style.zIndex = document.getElementById('FormLevel').value
    let newName = document.getElementById('FormName').value
    focusedDiv.setAttribute('name', newName)
    focusedDiv.style.backgroundColor = document.getElementById('FormColor').value
    focusedDiv.style.borderStyle = document.getElementById('FormBorderStyle').value
    focusedDiv.style.borderWidth = document.getElementById('FormBorderWidth').value + 'px'
    focusedDiv.style.borderColor = document.getElementById('FormBorderColor').value
    let newTop = document.getElementById('FormTop').value
    if(newTop < 127) {
        newTop = 127
    }
    focusedDiv.style.top = newTop +'px'
    focusedDiv.style.left = document.getElementById('FormLeft').value + 'px'
    removeFocusBox()
    createFocusBox(focusedDiv)
    let newWidth = document.getElementById('FormWidth').value
    let newHeight = document.getElementById('FormHeight').value
    focusedDiv.style.width = newWidth + 'px'
    focusedDiv.style.height = newHeight + 'px'
    resizeDivs[0].style.height = newHeight + 'px'
    resizeDivs[1].style.height = newHeight + 'px'
    resizeDivs[2].style.width = newWidth + 'px'
    resizeDivs[3].style.width = newWidth + 'px'
    let rightPosition = Number(focusedDiv.style.left.substring(0, focusedDiv.style.left.length-2)) + Number(focusedDiv.style.width.substring(0, focusedDiv.style.width.length-2))
    resizeDivs[1].style.left = (rightPosition+5) + 'px'
    let bottomPosition = Number(focusedDiv.style.top.substring(0, focusedDiv.style.top.length-2)) + Number(focusedDiv.style.height.substring(0, focusedDiv.style.height.length-2))
    resizeDivs[3].style.top = (bottomPosition+5) + 'px'
    listElements()
}
const applyChangesText = () => {
    focusedDiv.textContent = document.getElementById('FormText').value
    focusedDiv.style.zIndex = document.getElementById('FormLevelText').value
    let newName = document.getElementById('FormNameText').value
    focusedDiv.setAttribute('name', newName)
    focusedDiv.style.color = document.getElementById('FormColorText').value
    let newTop = document.getElementById('FormTopText').value
    if(newTop < 127) {
        newTop = 127
    }
    focusedDiv.style.fontSize = document.getElementById('FormFontSize').value + 'px'
    focusedDiv.style.top = newTop +'px'
    focusedDiv.style.left = document.getElementById('FormLeftText').value + 'px'
    removeFocusBox()
    createFocusBox(focusedDiv)
    if(document.getElementById('BOLD').checked) {
        focusedDiv.style.fontWeight = 'bold'
    }else {
        focusedDiv.style.fontWeight = 'normal'
    }
    if(document.getElementById('ITALIC').checked) {
        focusedDiv.style.fontStyle = 'italic'
    }else {
        focusedDiv.style.fontStyle = 'normal'
    }
    if(document.getElementById('UNDERLINE').checked) {
        focusedDiv.style.textDecoration = 'underline'
    }else {
        focusedDiv.style.textDecoration = 'none'
    }
    let newWidth = document.getElementById('FormWidthText').value
    let newHeight = document.getElementById('FormHeightText').value
    focusedDiv.style.width = newWidth + 'px'
    focusedDiv.style.height = newHeight + 'px'
    resizeDivs[0].style.height = newHeight + 'px'
    resizeDivs[1].style.height = newHeight + 'px'
    resizeDivs[2].style.width = newWidth + 'px'
    resizeDivs[3].style.width = newWidth + 'px'
    let rightPosition = Number(focusedDiv.style.left.substring(0, focusedDiv.style.left.length-2)) + Number(focusedDiv.style.width.substring(0, focusedDiv.style.width.length-2))
    resizeDivs[1].style.left = (rightPosition+5) + 'px'
    let bottomPosition = Number(focusedDiv.style.top.substring(0, focusedDiv.style.top.length-2)) + Number(focusedDiv.style.height.substring(0, focusedDiv.style.height.length-2))
    resizeDivs[3].style.top = (bottomPosition+5) + 'px'
    listElements()
}

const applyChangesImage = () => {
    let newName = document.getElementById('FormNameImage').value
    focusedDiv.setAttribute('name', newName)
    let imageURL = document.getElementById('FormURL').value 
    if(imageURL) {
        focusedDiv.src = imageURL
    }
    let newTop = document.getElementById('FormTopImage').value
    if(newTop < 127) {
        newTop = 127
    }
    focusedDiv.style.top = newTop +'px'
    focusedDiv.style.left = document.getElementById('FormLeftImage').value + 'px'
    removeFocusBox()
    createFocusBox(focusedDiv)
    focusedDiv.style.zIndex = document.getElementById('FormLevelImage').value
    let newWidth = document.getElementById('FormWidthImage').value
    let newHeight = document.getElementById('FormHeightImage').value
    focusedDiv.style.width = newWidth + 'px'
    focusedDiv.style.height = newHeight + 'px'
    resizeDivs[0].style.height = newHeight + 'px'
    resizeDivs[1].style.height = newHeight + 'px'
    resizeDivs[2].style.width = newWidth + 'px'
    resizeDivs[3].style.width = newWidth + 'px'
    let rightPosition = Number(focusedDiv.style.left.substring(0, focusedDiv.style.left.length-2)) + Number(focusedDiv.style.width.substring(0, focusedDiv.style.width.length-2))
    resizeDivs[1].style.left = (rightPosition+5) + 'px'
    let bottomPosition = Number(focusedDiv.style.top.substring(0, focusedDiv.style.top.length-2)) + Number(focusedDiv.style.height.substring(0, focusedDiv.style.height.length-2))
    resizeDivs[3].style.top = (bottomPosition+5) + 'px'
    listElements()
}

// const setFocusedDiv = () => {
//     for(i=0;i<divArray.length;i++) {
//       if(divArray[i].classList.contains('focused')) {
//         focusedDiv = divArray[i]
//       }
//     }
// }

const resizeDragLeft = e => {
    resizeDivs[0].style.left = e.pageX + 'px'
}
const resizeDragRight = e => {
    resizeDivs[1].style.left = e.pageX + 'px'
}
const resizeDragTop = e => {
    resizeDivs[2].style.top = e.pageY + 'px'
    if(e.pageY < 127) {
        resizeDivs[2].style.top = 127 + 'px'
    }
}
const resizeDragBottom = e => {
    resizeDivs[3].style.top = e.pageY + 'px'
    if(e.pageY < 127) {
        resizeDivs[3].style.top = 127 + 'px'
    }
}

const closeDragElement = () => {
    if(focusedDiv.classList.contains('div')) {
        setOptionBox()
    }
    if(focusedDiv.classList.contains('button')) {
        setOptionBox()
    }
    if(focusedDiv.classList.contains('text')) {
        setOptionBoxText()
    }
    if(focusedDiv.classList.contains('image')) {
        setOptionBoxImage()
    }
    //focusedDiv = ""
    document.onmouseup = null
    document.onmousemove = null
}

const getHTML = () => {
    while( document.getElementById('Output').firstChild ){
        document.getElementById('Output').removeChild( document.getElementById('Output').firstChild );
    }
    document.getElementById('HideOutput').style.display = 'block'
    document.getElementById('Output').style.display = 'block'
    let headP = document.createElement('p')
    headP.textContent = '<!DOCTYPE html>\n <html lang="en">\n <head>\n<meta charset="UTF-8"> \n<meta name="viewport" content="width=device-width, initial-scale=1.0"> \n<meta http-equiv="X-UA-Compatible" content="ie=edge">\n<title>My New Site</title>\n</head>\n<body>'
    document.getElementById('Output').appendChild(headP)
    for(i=0;i<divArray.length;i++) {
        newTop = divArray[i].style.top.substring(0, divArray[i].style.top.length-2)
        newTop = newTop - 127
        divArray[i].style.top = newTop + 'px'
    }
    for(i=0;i<divArray.length;i++) {
        let newP = document.createElement('p')
        newP.textContent = divArray[i].outerHTML
        document.getElementById('Output').appendChild(newP)
    }
    let tailP = document.createElement('p')
    tailP.textContent = '</body>\n </html>'
    document.getElementById('Output').appendChild(tailP)
    for(i=0;i<divArray.length;i++) {
        newTop = divArray[i].style.top.substring(0, divArray[i].style.top.length-2)
        newTop = Number(newTop) + 127
        divArray[i].style.top = newTop + 'px'
    }
}

const hideHTML = () => {
    document.getElementById('Output').style.display = 'none'
    document.getElementById('HideOutput').style.display = 'none'
}