let totalCalories = 0;

document.getElementById("dietForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let foodName = document.getElementById("foodName").value;
    let calories = parseInt(document.getElementById("calories").value);

    if (foodName === "" || isNaN(calories)) return;

    totalCalories += calories;
    document.getElementById("totalCalories").textContent = totalCalories;

    let li = document.createElement("li");
    li.innerHTML = `
        ${foodName} - ${calories} kcal
        <button class="delete-btn">X</button>
    `;

    document.getElementById("foodList").appendChild(li);

    li.querySelector(".delete-btn").addEventListener("click", function() {
        totalCalories -= calories;
        document.getElementById("totalCalories").textContent = totalCalories;
        li.remove();
    });

    document.getElementById("dietForm").reset();
});
