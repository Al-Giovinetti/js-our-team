const ourTeam = [
    {
        name: "Wayne",
        surname: "Barnet",
        role: "ounder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela",
        surname: "Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter",
        surname: "Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela",
        surname: "Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott",
        surname: "Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }
]

const containerElement = document.querySelector("div.grid");

for(let i=0 ; i < ourTeam.length ; i++){
    const subject = ourTeam[i];
    //console.log(subject.name,subject.surname,subject.role,subject.img) 
    
    const boxElement = document.createElement("div")
    boxElement.classList.add("box-style")
    boxElement.innerHTML =`
    <p>${subject.role}</p>
    <p>${subject.name + " " + subject.surname}</p>
    <img src="img/${subject.img}">`

    containerElement.append(boxElement)
}

const btnAdd = document.querySelector("footer > div.container > button")
const divAdd = document.querySelector("div.add-member")
btnAdd.addEventListener("click",function() {
    divAdd.classList.remove("d-none")
});

const btnFinalAdd = document.getElementById("final-add")
btnFinalAdd.addEventListener("click",function(){
    const newName = document.querySelector("input#name")
    const newRole = document.querySelector("input#role")
    const newImg = document.querySelector("input#img")

    const newMember = {
        name: newName.value,
        role: newRole.value,
        img: newImg.value
    }

    ourTeam.push(newMember);

    const newboxElement = document.createElement("div")
    newboxElement.classList.add("box-style")
    newboxElement.innerHTML =`
    <p>${newMember.role}</p>
    <p>${newMember.name}</p>
    <img src="img/${newMember.img}">`

    containerElement.append(newboxElement)

    
})

