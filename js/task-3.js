function getElementWidth(content, padding, border) {
    
    const newContent = content.split("px")[0]
    const newPadding = padding.split('px')[0];
    const newBorder = border.split('px')[0];
    
    return Number.parseFloat(newContent) + Number.parseFloat(newPadding) * 2 + Number.parseFloat(newBorder) * 2
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

