function load() {
    const content = document.querySelector("#content");

    const dummy = document.createElement("p");
    dummy.textContent = "dummy"; 
    content.appendChild(dummy);
}

export const loadToday = load; 