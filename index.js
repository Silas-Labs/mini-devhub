let title = document.getElementById("title")
let link = document.getElementById("link")
let category = document.getElementById("category")
let dificulty = document.getElementById("difficulty")
let file = document.getElementById("file")
const table = document.getElementById("resource-table")
let fileName = ""
let resources = JSON.parse(localStorage.getItem("resources")) || []

let edit = false
let indexToEdit = 0

document.addEventListener("DOMContentLoaded",()=>{
    loadFromStorage()
})

file.addEventListener("change",(e)=>{
    fileName=e.target.files
    console.log(fileName)
})

const btnSave = document.getElementById("save")
btnSave.addEventListener("click",(e)=>{
    e.preventDefault()
    let newResource = {
        title: title.value,
        link: link.value,
        category: category.value,
        dificulty: dificulty.value,
    }
    
    if (edit == false){
        //newResource.file = fileName[0]["name"]
        resources = [...resources,newResource]
        saveTolocalStorage(resources)
    } else {
        resources[indexToEdit] == newResource
        saveTolocalStorage(resources)
        edit= false
    }
    clearForm()
    loadFromStorage()
})

const clearForm=()=>{
    title.value=""
    link.value=""
    dificulty.selectedIndex=0
    category.selectedIndex=0
    file.value=""
}

const saveTolocalStorage=(items)=>{
    localStorage.setItem("resources",JSON.stringify(items))
    loadFromStorage()
}

const loadFromStorage=()=>{
    table.innerHTML = ""
    let data = JSON.parse(localStorage.getItem("resources")) || []
    if (data.length == 0) {
        table.innerHTML = "<tr><td style='text-align:center; color: white;' colspan='5'>No data to display</td></tr>"
    } else {
        data?.forEach((it,index)=>{
            const row = table.insertRow();
            row.insertCell(0).textContent=it.title,
             row.insertCell(1).textContent=it.link,
             row.insertCell(2).textContent=it.category,
             row.insertCell(3).textContent=it.dificulty 
             row.insertCell(4).textContent=it.file
             
            let actions = row.insertCell(5);
            actions.innerHTML = `<span id='icons' style='display:flex;gap:5px;'><p style='background-color: rgb(10,250,10); padding:0px 2px; vertical-align:center' onClick=Edit(${index})><img src="./edit.png" width=22px alt="edit"/></p><p style='color:rgb(233, 81, 81);' onClick=Delete(${index})><svg style='background-color:red;' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 16 16">
<path d="M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 13.328125 3.671875 14 4.5 14 L 10.5 14 C 11.328125 14 12 13.328125 12 12.5 L 12 4 L 13 4 L 13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 Z M 5 5 L 6 5 L 6 12 L 5 12 Z M 7 5 L 8 5 L 8 12 L 7 12 Z M 9 5 L 10 5 L 10 12 L 9 12 Z"></path>
</svg></p></span>`
    })
    }
}

const Edit=(index)=>{
    indexToEdit = index
    edit= true
     
    title.value = resources[index].title
    link.value = resources[index].link
    category.value = resources[index].category
    dificulty.value = resources[index].dificulty

}

const Delete=(index)=>{
    let newArr = [];
    for (let i = 0; i < resources.length; i++) {
        if (i !== index){
            newArr.push(resources[i])
        }
    }
    resources = newArr
    saveTolocalStorage(resources)
}