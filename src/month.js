function load() {
    const content = document.querySelector("#content");
    const dummy = document.createElement("p");
    dummy.textContent = "this month";
    content.appendChild(dummy);
}

export const loadMonth = load; 