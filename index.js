const title = document.getElementById("title")
const link = document.getElementById("link")
const category = document.getElementById("category")
const dificulty = document.getElementById("difficulty")

const btnSave = document.getElementById("save")
btnSave.addEventListener("click",(e)=>{
    e.preventDefault()

    console.log("title: ",title.value)
    console.log("link: ",link.value)
    console.log("category: ",category.value)
    console.log("difficulty: ",dificulty.value)
})