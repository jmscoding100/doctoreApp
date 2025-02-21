let count = 1

class Doctor {

    constructor(appName, docName, time, reason){

        this.info = {
            id: count++,
            appName,
            docName,
            time,
            reason
        }
    }

    getDescription(appName, docName, time, reason){
        return`Hello ${appName} you have an appointment with Dr.${docName} for a ${reason} at ${time}`
    }
}

const sumbitBtn = document.getElementById('submitBtn')

sumbitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    let obj = {}
    obj = {...getInfo()}
    // console.log(obj)
    const doctorV = new Doctor(obj.appName, obj.docName, obj.inputTime, obj.appReasons)
    buildCard(doctorV.info, doctorV.getDescription)
})



const getInfo =()=>{
    const appName = document.getElementById('appName').value
    const docName = document.getElementById('docName').value
    const inputTime = document.querySelector('select[name="inputTime"]').value
    const appReasons = document.querySelector('select[name="reason"]').value


    return{appName, docName, inputTime, appReasons}
}





const buildCard=(obj, func)=>{
    console.log(obj)
    const row = document.getElementById('cardRow')

    const column = document.createElement('div')
    column.classList.add('col')

    const card = document.createElement('div')
    card.classList.add('card', 'h-100')

    const cardBody = document.createElement('section')
    cardBody.classList.add('card-body')

    const appName = document.createElement('h2')
    appName.classList.add('card-title', 'text-capitalize')
    appName.innerText = obj.appName

    const docName= document.createElement('p')
    docName.classList.add('card-text', 'text-capitalize')
    docName.innerText = obj.docName

    const inputTime = document.createElement('p')
    inputTime.classList.add('card-text')
    inputTime.innerText = obj.time

    const appReasons = document.createElement('p')
    appReasons.classList.add('card-text', 'fst-italic')
    appReasons.innerText = obj.reason

    const description = document.createElement('p')
    description.classList.add('card-text', 'fst-italic')
    description.innerText = func(obj.appName, obj.docName, obj.time, obj.reason)



    cardBody.appendChild(appName)
    cardBody.appendChild(docName)
    cardBody.appendChild(inputTime)
    cardBody.appendChild(appReasons)
    cardBody.appendChild(description)

    card.appendChild(cardBody)
    column.appendChild(card)
    row.appendChild(column)
}

