import contacts from "./contacts.js";

// console.log(contacts[0].name);

let mainElement = document.getElementById("contacts-container");

contacts.forEach((contact) => {
  let div = document.createElement("div");
  div.setAttribute("class", "contact-card");
  div.innerHTML = `<img src="${contact.photo}" alt="avatar" />
        <div class="contact-info">
          <h2>${contact.name}</h2>
          <p>📞 ${contact.mobile}</p>
          <p>✉️ ${contact.email}</p>`;
  mainElement.appendChild(div);
});
