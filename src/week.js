function load() {
    const content = document.querySelector("#content");
    const dummy = document.createElement("p");
    dummy.textContent = "this week";
    content.appendChild(dummy);
}

export const loadWeek = load; 