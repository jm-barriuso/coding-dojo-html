let count = [0,0,0] 

function addLike(i){
    let likeCounter = document.getElementById("like-counter-"+i+"")
    count[i]++
    console.log(count[i])
    likeCounter.innerText = count[i] + " like(s)"

}