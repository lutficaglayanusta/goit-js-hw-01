function getElementWidth(content, padding, border) {
    let result;

    let newContent = content.split("px")[0]
    let newPadding = padding.split('px')[0];
    let newBorder = border.split('px')[0];
    
    result = Number.parseFloat(newContent) + Number.parseFloat(newPadding) * 2 + Number.parseFloat(newBorder) * 2

    return result
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

