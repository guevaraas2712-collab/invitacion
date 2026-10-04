// ===== PERSONALIZA AQUÍ =====

const data = {
  // Lugar de broma
  prankPlace: "En el Hotel Ruby 👀",
  prankText: "Sí, así de romántico va a ser nuestro gran momento... que dices kk?",

  // Texto después de la broma
  realMessage: "Tengo tres opciones para nosotros. Tú eliges cuál te gustaría más.",

  // LAS 3 OPCIONES REALES
  options: [
    {
      icon: "🌶️🦐",
      label: "OPCIÓN 1",
      title: "Ir por un aguachile",
      
    },
    {
      icon: "🍜",
      label: "OPCIÓN 2",
      title: "Ir por un ramen",
     
    },
    {
      icon: "🥞",
      label: "OPCIÓN 3",
      title: "Ir por una crepa y una buena malteada",
      
    }
  ]
};

const question = document.getElementById("question");
const prank = document.getElementById("prank");
const real = document.getElementById("real");

const showScreen = (screen) => {
  [question, prank, real].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
};

document.getElementById("prankPlace").textContent = data.prankPlace;
document.getElementById("prankText").textContent = data.prankText;
document.getElementById("realMessage").textContent = data.realMessage;

const optionsContainer = document.getElementById("options");

let selectedOption = null;

data.options.slice(0,3).forEach((option,index) => {
  const button = document.createElement("button");
  button.className = "option";
  button.type = "button";

  button.innerHTML = `
    <span class="option-icon">${option.icon}</span>
    <small>${option.label}</small>
    <strong>${option.title}</strong>
    <p>${option.description}</p>
  `;

  button.addEventListener("click", () => {
    document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
    button.classList.add("selected");
    selectedOption = option;

    document.getElementById("selectedText").textContent = option.title;
    document.getElementById("selectedBox").classList.remove("hidden");
    document.getElementById("response").textContent = "";
  });

  optionsContainer.appendChild(button);
});

document.getElementById("yes").onclick = () => {
  showScreen(prank);
  hearts(12);
};

document.getElementById("no").onclick = () => {
  document.getElementById("noMsg").textContent =
    "Valiste ahora me debes 50 besos, ni modo 🥺 ";
};

document.getElementById("reveal").onclick = () => {
  showScreen(real);
  hearts(20);
};

document.getElementById("accept").onclick = () => {
  const response = document.getElementById("response");

  if (!selectedOption) {
    response.textContent = "Primero tienes que elegir una opción 😳💗";
    return;
  }

  response.textContent = `¡Perfecto! Entonces nos vamos por "${selectedOption.title}" 🥰❤️`;
  document.getElementById("accept").textContent = "¡Cita elegida! 💕";
  document.getElementById("accept").disabled = true;

  hearts(25);
};

function hearts(number){
  for(let i=0;i<number;i++){
    setTimeout(()=>{
      const heart=document.createElement("span");
      heart.className="heart";
      heart.textContent=Math.random()>.25 ? "♥" : "♡";
      heart.style.left=Math.random()*100+"%";
      heart.style.fontSize=(12+Math.random()*20)+"px";
      heart.style.animationDuration=(6+Math.random()*7)+"s";
      document.querySelector(".hearts").appendChild(heart);

      setTimeout(()=>heart.remove(),15000);
    },i*70);
  }
}

setInterval(()=>hearts(1),1100);
