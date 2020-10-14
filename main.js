window.onload = () => {
  let input = document.querySelector("#input");

  input.oninput = function () {
    let value = this.value.trim();
    let list = document.querySelectorAll(".list li");

    if (value) {
      list.forEach((el) => {
        if (el.innerText.indexOf(value, 0) == -1) {
          el.classList.add("hide");
        }
      });
    } else {
      list.forEach((el) => {
        el.classList.remove("hide");
      });
    }
    console.log(this.value);
  };
};
