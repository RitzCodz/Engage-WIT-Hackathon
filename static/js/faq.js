document.addEventListener('DOMContentLoaded', function(){

function expand(id) {
    if (id[0] == "q") {
        let idNumber = id.substring(1);
        let newId = `a${idNumber}`;
        let answer = document.getElementById(newId);
        console.log(answer);
        if (answer.className == "answer-shown") answer.className = "answer-hidden"
        else answer.className = "answer-shown";
    }
}

window.onclick = e => {
    let idE = e.target.id;
    console.log(idE);
    expand(idE);
}

})