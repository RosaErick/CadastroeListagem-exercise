function formTest(e) {
  e.preventDefault();

  const phoneIndex = e.target.elements["phone"].value;
  let phonePattern = /[^0-9-() ]+/g;
  if (phonePattern.test(phoneIndex)) {
    alert("Apenas numeros sao permitidos neste campo.");
    return false;
  }

  if (
    phoneIndex.replace(/[-() ]/g, "").length < 11 ||
    phoneIndex.replace(/[-() ]/g, "").length > 11
  ) {
    alert("Numero invalido");
    return false;
  }

  /* for (i in phoneIndex) {
    if ("0123456789".indexOf(phoneIndex[i]) == -1) {
      alert("Apenas numeros sao permitidos neste campo.");
      return false;
    }

    if (phoneIndex.length < 11) {
      alert("Numero invalido");
      return false;
    }
  }
*/
  const peopleRaw = localStorage.getItem("people");
  if (peopleRaw != null) {
    var people = JSON.parse(peopleRaw);
  } else {
    var people = [];
  }

  if (id !== null) {
    people[id] = {
      name: e.target.elements["name"].value,
      tel: e.target.elements["phone"].value,
      xp: e.target.elements["xp"].value == "true",
    };
  } else {
    people.push({
      name: e.target.elements["name"].value,
      tel: e.target.elements["phone"].value,
      xp: e.target.elements["xp"].value == "true",
    });
  }
  localStorage.setItem("people", JSON.stringify(people));
  document.getElementById("goHome").click();
}

const mainUrl = new URL(window.location.href);
const id = mainUrl.searchParams.get("person");
if (id !== null) {
  const peopleRaw = localStorage.getItem("people");
  if (peopleRaw != null) {
    var people = JSON.parse(peopleRaw);
  } else {
    var people = [];
  }

  document.getElementById("name").value = people[id].name;
  document.getElementById("phone").value = people[id].tel;
  if (people[id].xp) {
    document.getElementById("xp-yes").checked = true;
  } else {
    document.getElementById("xp-no").checked = true;
  }
}

function phoneTest(e) {
  e.preventDefault();

  if (e.target.value.length == 0) {
    e.target.value += "(";
  }
  if (e.target.value.length == 3) {
    e.target.value += ") ";
  }
  if (e.target.value.length == 10) {
    e.target.value += "-";
  }
  if (/[0-9 -()]/g.test(e.key) && e.target.value.length < 15) {
    e.target.value += e.key;
  }
}
