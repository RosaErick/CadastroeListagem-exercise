const people = [
  {
    name: "Fernando Henrique Caversan Santos Duro",
    tel: "14999999999",
    xp: true,
  },
  {
    name: "Anderson Arcenio Matos da Costa",
    tel: "14999999999",
    xp: true,
  },
  {
    name: "Karina do Amaral",
    tel: "14999999999",
    xp: false,
  },
  {
    name: "Caue Sanches Padua",
    tel: "14999999999",
    xp: false,
  },
];

for (person in people) {
  document.querySelector(".list tbody").innerHTML += `
   <tr style="background-color: ${person % 2 == 0 ? "#eeee" : "#fff"}">
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
                              : "Nao"
                          }
                    </td>
                    <td>
                        <button> Alterar </button>
                    </td>
                </tr>


        `;
}
