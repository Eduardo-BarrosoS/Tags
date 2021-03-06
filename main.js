let tags = []
const tagContainer = document.querySelector('.tag-container')
const tagContainerList = document.querySelector('.tagContainerList')
const input =  tagContainer.querySelector('input')
const iconPlus = tagContainer.querySelector('.plus')
const iconSend = tagContainer.querySelector('.send')
const divAlert = document.querySelector('.alert')
const timeBar = divAlert.querySelector('.timeBar')


iconPlus.addEventListener('click', showInput)
iconSend.addEventListener('click', hideInput)

function hideInput() {
    if (input.value == ''){
        iconPlus.style.display='none';
        iconSend.style.display='flex';
        input.style.display='flex';
        input.style.animationName='show';
    } else {
        iconPlus.style.display='flex';
        iconSend.style.display='none';
        input.style.display='none';
        input.style.animationName='hide';
    }
    }
    

function showInput(){
    iconPlus.style.display='none';
    iconSend.style.display='flex';
    input.style.display='flex';
    input.style.animationName='show';
}



input.addEventListener('keyup', addTags)
iconSend.addEventListener('click', addTagsWithIconSend)
iconSend.addEventListener('click', alert)




function addTagsWithIconSend(event) {
    const mousePressed = event.type == 'click'
    if (input.value == '') {

        setTimeout( ( ) => {
            divAlert.style.display = 'none'
        }, 3000)
        divAlert.style.display = 'flex'
        divAlert.style.animationName = 'alert'
        timeBar.style.animationName = 'timeBar' 
        

    } else {
        if(mousePressed) {

            input.value.split(',').forEach( tag => {
                if (tag) {
                    tags.push(tag.trim())
                }
            })
            upDateTags()
            input.value = ""
        }
  
    }
    
}

function addTags(event) {

    const keyPressedEnter = event.key == 'Enter'
    
    if (input.value == '') {

        setTimeout( ( ) => {
            divAlert.style.display = 'none'
        }, 3000)
        divAlert.style.display = 'flex'
        divAlert.style.animationName = 'alert'
        timeBar.style.animationName = 'timeBar' 
        

    } else {
        if(keyPressedEnter) {

        input.value.split(',').forEach( tag => {
            if (tag) {
                tags.push(tag.trim())
            }
        })
        upDateTags()
        input.value = ""
        }
    }
    
  
}

function upDateTags(){
    clearTags()

    tags.slice().reverse().forEach(tag => {
        tagContainerList.prepend(createTag(tag))
    })
}

function createTag(tag) {


    const div = document.createElement('div')
    div.classList.add('tag') 
    

    const span = document.createElement('span')
    span.innerHTML = tag
    div.append(span)

    const i = document.createElement('i')
    i.classList.add(`close`)
    i.setAttribute('data-item', tag)
    i.addEventListener('click', removeTag)
    span.append(i)

    return div
}


function removeTag(event) {
    console.log("alo")
    
    const buttonX = event.currentTarget 
    const item = buttonX.dataset.item
    const index = tags.indexOf(item)
    tags.splice(index, 1)
    upDateTags()

}

function clearTags(){
    tagContainerList.querySelectorAll('.tag')
        .forEach( tagElement => tagElement.remove())
}




