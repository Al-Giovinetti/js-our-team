const ourTeam = [
    subject = {
        name: "Wayne",
        surname: "Barnet",
        role: "ounder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    subject = {
        name: "Angela",
        surname: "Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    subject = {
        name: "Walter",
        surname: "Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    subject = {
        name: "Angela",
        surname: "Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    subject = {
        name: "Scott",
        surname: "Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    subject = {
        name: "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
        img: " barbara-ramos-graphic-designer.jpg"
    }
]

const ulElement = document.querySelector("ul")

for(let i=0 ; i < ourTeam.length ; i++){
    let liElement = document.createElement("li")
    liElement.innerHTML=ourTeam[i]
    ulElement.append(liElement)
    console.log(ourTeam[i])
    console.log("///////////////////////////////////")
}
