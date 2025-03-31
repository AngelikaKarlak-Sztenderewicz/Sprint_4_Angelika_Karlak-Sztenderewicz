const button = document.getElementById("button");
const input = document.getElementById("input");
const list = document.getElementById("list");

button.onclick = function () {
  if (input.value === "") {
    alert("Nazwa zadania nie może być pusta.");
  } else {
    const listItem = document.createElement("li");
    listItem.textContent = input.value;

    const button1 = document.createElement("button");
    button1.textContent = "Edytuj";
    listItem.appendChild(button1);

    const button2 = document.createElement("button");
    button2.textContent = "Usuń";
    listItem.appendChild(button2);

    list.appendChild(listItem);
    input.value = "";

    button1.onclick = function () {
      const newInput = document.createElement("input");
      newInput.value = listItem.firstChild.textContent;
      listItem.textContent = "";
      listItem.appendChild(newInput);

      const saveButton = document.createElement("button");
      saveButton.textContent = "Zatwierdź zmiany";
      listItem.appendChild(saveButton);

      listItem.appendChild(button2);
      saveButton.onclick = function () {
        if (newInput.value !== "") {
          listItem.textContent = newInput.value;
          listItem.appendChild(button1);
          listItem.appendChild(button2);
        } else {
          alert("Nazwa zadania nie może być pusta.");
        }
      };
    };

    button2.onclick = function () {
      list.removeChild(listItem);
    };
  }
};
