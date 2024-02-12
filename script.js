// Selectores
const eyeIcon = document.querySelector(".pass-field i");
const passwordInput = document.querySelector(".pass-field input");
const requirementsList = document.querySelectorAll(".requirement-list li");

const requirements = [
  { regex: /.{8,}/, index: 0 }, // Evalua si hay 8 carácteres
  { regex: /[0-9]/, index: 1 }, // Evalua si hay al menos 1 número
  { regex: /[a-z]/, index: 2 }, // Evalua si hay una letra minúscula
  { regex: /[^A-Za-z0-9]/, index: 3 }, // Evalua si hay carácteres especiales
  { regex: /[A-Z]/, index: 4 }, // Evalua si hay una letra mayúscula
];

// Evaluar la contraseña
passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementsList[item.index];

        if(isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }



    })
})

// Ocultar/Mostrar contraseña
eyeIcon.addEventListener("click", () => {
   passwordInput.type = passwordInput.type === "password" ? "text" : "password";
   eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});

