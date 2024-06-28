
let element = document.getElementById('auto-text');
let text = "dinesh kumar singh"
let i = 0;
setInterval(()=>{
    if(i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
    }
},200);

const typed = new Typed("#auto-typed",{
    strings: ["DSA learner","web developer"],
    typeSpeed: 190,
    backSpeed: 60,
    loop: true
});

