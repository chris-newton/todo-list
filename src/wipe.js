
function wipe() {
    const content = document.querySelector("#content");
    content.replaceChildren();
}

export const wipeContent = wipe;