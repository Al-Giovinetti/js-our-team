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
        img: " barbara-ramos-graphic-designer.jpg"
    }
]

const ulElement = document.querySelector("ul");

for(let i=0 ; i < ourTeam.length ; i++){
    const subject = ourTeam[i];
    console.log(subject.name,subject.surname,subject.role,subject.img)  
}

