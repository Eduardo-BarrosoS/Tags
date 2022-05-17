let tags = []
let tagContainer = document.querySelector('.tag-container')
let input =  tagContainer.querySelector('input')

input.addEventListener('keyup', addTags)

function addTags(event) {
    
    const keyPressedEnter = event.key == 'Enter'
    
    if(keyPressedEnter) {
        
        input.value.split(',').forEach( tag => {
            if (tag) {
                tags.push(tag.trim())
            }
        })
    upDateTags()
    input.value = ""
    }
    

    
    console.log(tags)
    
}

function upDateTags(){
    clearTags()

    tags.slice().reverse().forEach(tag => {
        tagContainer.prepend(createTag(tag))
    })
}

function createTag(tag) {

    const div = document.createElement('div')
    div.classList.add('tag') 

    const span = document.createElement('span')
    span.innerHTML = tag

    div.append(span)

    const i = document.createElement('i')
    i.classList.add('close')
    i.setAttribute('data-item', tag)
    i.addEventListener('onclick', removeTag)
    span.append(i)



    return div
}


function removeTag(event) {
    const buttonX = event.currentTarget 
    const item = buttonX.dataset.item
    const index = tags.indexOf(item)
    tags.splice(index, 1)

}

function clearTags(){
    tagContainer.querySelectorAll('.tag')
        .forEach( tagElement => tagElement.remove())
}
