const categories = document.querySelectorAll('#categories .item')
console.log(" ~ categories:", categories.length)
categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('li').length;
    console.log(`category: ${title}`)
    console.log(`count ${itemsCount}`)
})