
document.addEventListener('DOMContentLoaded', function() {
let subscribe = document.getElementById('submit');
console.log(subscribe);
subscribe.addEventListener('click', function(event){
    alert("Thank you for subscribing to our newsletter!");
});

function menuToggle() {
    document.querySelector('.nav2').classList.toggle('active');
    }

    document.querySelector('.menu-icon').addEventListener('click', menuToggle);
    document.querySelector('.cross').addEventListener('click', menuToggle);

})