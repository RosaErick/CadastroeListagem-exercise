const peopleRaw = localStorage.getItem("people");
if (peopleRaw != null) {
  var people = JSON.parse(peopleRaw);
} else {
  var people = [];
}

function drawTable() {
  currentLines = [...document.querySelectorAll(".dinamic-content")];
  currentLines.forEach((element) => {
    element.remove();
  });

  for (person in people) {
    document.querySelector(".list tbody").innerHTML += `
   <tr class="dinamic-content" style="background-color: ${
     person % 2 == 0 ? "#eeee" : "#fff"
   }">
                    <td>
                        ${people[person].name}
                    </td>
                    <td>
                        ${people[person].tel}
                    </td>
                    <td>
                          ${
                            people[person].xp
                              ? '<span style="border:3px solid #BADA55; border-radius: 4px; background-color:#BADA55">Sim</span>'
                              : '<span style="border:3px solid red; border-radius: 4px; background-color:red; color:#fff">Não</span>'
                          }
                    </td>
                    <td>
                        <button class="edit-btn" onclick="deleteUser(${person})"> Excluir </button>
                        <a class="edit-btn" href="../../src/form.html?person=${person}">Editar</a>
                    </td>
                </tr>


        `;
  }
}

function deleteUser(p) {
  people.splice(p, 1);
  drawTable();
  localStorage.setItem("people", JSON.stringify(people));
}
drawTable();
