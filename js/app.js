let count = 0;
let result = document.getElementById("result")

document.getElementById("remove").addEventListener("click", (event) => {
    count = count-1;
    result.innerText = count;
})

document.getElementById("add").addEventListener("click", (env) => {
    console.log(count);
    count = count+1;
    result.innerText = count;
});

document.getElementById("reset").addEventListener("click", (envent) => {
    count = 0;
    result.innerText = count;
    console.log(count);
})