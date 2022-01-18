function formTest(e) {
  e.preventDefault();

   const peopleRaw = localStorage.getItem("people");
  if (peopleRaw != null) {
    var people = JSON.parse(peopleRaw);
  } else {
    var people = [];
  }

  people.push({
    name: e.target.elements["name"].value,
    tel: e.target.elements["phone"].value,
    xp: e.target.elements["xp"].value == "true",
  });

  localStorage.setItem("people", JSON.stringify(people));
  document.getElementById("goHome").click();
}



const mainUrl = new URL(window.location.href)

console.log(mainUrl);


const id = mainUrl.searchParams.get('person');

if (id !== null) {

    console.log(id);
}