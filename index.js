const title = document.getElementById("title")
const link = document.getElementById("link")
const category = document.getElementById("category")
const dificulty = document.getElementById("difficulty")
const file = document.getElementById("file")
const table = document.getElementById("resource-table")
let fileName = ""
let resources = JSON.parse(localStorage.getItem("resources")) || []

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
    const newResource = {
        title: title.value,
        link: link.value,
        category: category.value,
        dificulty: dificulty.value,
        file: fileName[0]["name"]

    }
    
    resources = [...resources,newResource]
    saveTolocalStorage(resources)
    clearForm()
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
            actions.innerHTML = `<span style='display:flex;gap:5px;'><p style='color:rgb(120,190,219);' onClick=Edit(${index})>Edit</p><p style='color:rgb(233, 81, 81);' onClick=Delete(${index})>Delete</p></span>`
    })
    }
}

const Edit=(index)=>{
    console.log("Editing")
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