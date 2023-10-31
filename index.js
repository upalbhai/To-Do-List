let inp = document.querySelector("#input-box");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (inp.value === "") {
    alert("Your must need to enter the task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inp.value;
    console.log(li.innerHTML);
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    li.addEventListener("click", () => {
      li.classList.toggle("checked");
    });
    span.addEventListener("click", (event) => {
      let rem = event.target.parentElement;
      rem.remove();
    });
    inp.value = "";
  }
});
