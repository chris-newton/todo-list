function setTabActive(button) {
    const tabs = document.querySelectorAll("#sidebar > ul> li");
    tabs.forEach((tab) => tab.classList.remove("active-tab"));
    
    const tab = button.parentElement;
    tab.classList.toggle("active-tab");
}

export const setActiveTab = setTabActive;