const title = document.getElementById("title")
const link = document.getElementById("link")
const category = document.getElementById("category")
const dificulty = document.getElementById("difficulty")
const file = document.getElementById("file")
const table = document.getElementById("resource-table")

let resources = JSON.parse(localStorage.getItem("resources")) || []

document.addEventListener("DOMContentLoaded",()=>{
    loadFromStorage()
})

const btnSave = document.getElementById("save")
btnSave.addEventListener("click",(e)=>{
    e.preventDefault()

    const newResource = {
        title: title.value,
        link: link.value,
        category: category.value,
        dificulty: dificulty.value,
        file: file.value
    }
    
    resources = [...resources,newResource]
    localStorage.setItem("resources",JSON.stringify(resources))
    loadFromStorage()
    clearForm()
})

const clearForm=()=>{
    title.value=""
    link.value=""
    dificulty.selectedIndex=0
    category.selectedIndex=0
    file.value=""
}

const loadFromStorage=()=>{
    table.innerHTML = ""
    let data = JSON.parse(localStorage.getItem("resources")) || []
    if (data.length == 0) {
        table.innerHTML = "<tr><td style='text-align:center; color: white;' colspan='5'>No data to display</td></tr>"
    } else {
        data?.forEach((it)=>{
            const row = table.insertRow();
            row.insertCell(0).textContent=it.title,
             row.insertCell(1).textContent=it.link,
             row.insertCell(2).textContent=it.category,
             row.insertCell(3).textContent=it.dificulty 
             row.insertCell(4).textContent=it.file 
    })
    }
}