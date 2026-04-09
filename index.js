const title = document.getElementById("title")
const link = document.getElementById("link")
const category = document.getElementById("category")
const dificulty = document.getElementById("difficulty")
const table = document.getElementById("resource-table")

let resources = []

const btnSave = document.getElementById("save")
btnSave.addEventListener("click",(e)=>{
    e.preventDefault()

    const newResource = {
        title: title.value,
        link: link.value,
        category: category.value,
        dificulty: dificulty.value
    }
    
    resources = [...resources,newResource]
    localStorage.setItem("resources",JSON.stringify(resources))
    loadFromStorage()
    clearForm()
})

const clearForm=()=>{
    title.value=""
    link.value=""
}

const loadFromStorage=()=>{
    let count = 0
    let data = JSON.parse(localStorage.getItem("resources")) || []
    if (data.length == 0) {
        table.innerHTML = "<tr><td colspan='4'>No data to display</td></tr>"
    } else {
        
        data?.forEach((it)=>{
            const row = table.insertRow();
            row.insertCell(0).textContent=it.title,
             row.insertCell(1).textContent=it.name,
             row.insertCell(2).textContent=it.category,
             row.insertCell(3).textContent=it.difficulty 
    })
    }
}