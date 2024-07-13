
// let element = document.getElementById('auto-text');
// let text = "dinesh kumar singh"
// let i = 0;
// setInterval(()=>{
//     if(i < text.length) {
//         element.innerHTML += text.charAt(i);
//         i++;
//     }
// },200);

// const typed = new Typed("#auto-typed",{
//     strings: ["DSA learner","web developer"],
//     typeSpeed: 190,
//     backSpeed: 60,
//     loop: true
// });


// responsive navbar
let bar = document.getElementById('open');

function myfun() {
    let listbox = document.querySelector('.nav-right-container');
    listbox.classList.toggle('list');
    // console.log(listbox);
    // if(listbox.style.display === 'none'){
    //     listbox.style.display = 'block';
    // } else {
    //     listbox.style.display = 'none';
    // }
}



const skills = {
        "languages": "C, Java, CSS, HTML, Javascript",
        "developertools": "VS Code, IntelliJ IDEA, PyCharm",
        "database": " MySql, Mongodb",
        "others": "Oops in java, DBMS"
    }

const education = [
    {
        "class": "B.E.",
        "session": "2017-2019",
        "schoolname": "sri radha krishana project high school chitadhi",
        "stream": "Information Technology",
    },
    {
        "class": "10th",
        "session": "2017-2019",
        "schoolname": "sri radha krishana project high school chitadhi",
        "stream": "Science, PCM",
    },
    {
        "class": "10th",
        "session": "2017-2019",
        "schoolname": "sri radha krishana project high school chitadhi",
        "stream": "",
    }    
];

const tablinks = document.getElementsByClassName("tab-links");
const activetab = document.getElementsByClassName('contents');

function opentab(clickedtabId,event) {
    for(let key of tablinks) {
        key.classList.remove("active-link");
    }

    for(let content of activetab) {
        content.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(clickedtabId).classList.add('active-tab');
}


// show more and show less button for project
let allprojects = document.getElementsByClassName("project-box");
let showmorebutton = document.getElementById("showmore");

let showmore_activated = false;

showmorebutton.addEventListener('click', showmore);

async function showmore() {
    if(!showmore_activated) {
        Array.from(allprojects).map(async (project) => {
            let res = project.classList.contains("hide-project");
            if(res) {
                project.classList.remove("hide-project");
            }
        });
        let newtext = showmorebutton.innerText.replace("show more", 'show less');
        showmorebutton.innerHTML = newtext;
        showmore_activated = true;
    } else {
        showless();
    }
}

async function showless() {
    Array.from(allprojects).map(async (project) => {
        let res = project.classList.contains("hide-project");
        if(!res) {
            project.classList.add("hide-project");
        }
    });
    let newtext = showmorebutton.innerText.replace("show less", 'show more');
    showmorebutton.innerHTML = newtext;
    showmore_activated = false;
}


