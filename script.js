document.querySelector("#submit").onclick = function () {
  const input = document.querySelector("#input");
  const taskValue = input.value.trim();

  if (taskValue.length === 0) {
    alert("Please enter a task");
  } else {
    const listContainer = document.querySelector("#list");

    listContainer.innerHTML += `
        <div class="list">
          <span class="taskname">${taskValue}</span> 
          <div>
            <button class="btn2">✖</button> 
            <button class="mark-done">✔</button>
          </div>
        </div>`;

    input.value = "";

    const deleteButtons = document.querySelectorAll(".btn2");
    deleteButtons.forEach((button) => {
      button.onclick = function () {
        this.closest(".list").remove();
      };
    });

    const markDoneButtons = document.querySelectorAll(".mark-done");
    markDoneButtons.forEach((button) => {
      button.onclick = function () {
        const task = this.closest(".list").querySelector(".taskname");
        task.classList.toggle("done");
        this.classList.toggle("done-btn");
      };
    });
  }
};
