function openApp(appId) {
  location.href = appId + ".html";
}

const appIcons = document.querySelectorAll(".app-icon");
appIcons.forEach(icon => icon.addEventListener("click", () => openApp(icon.textContent.toLowerCase())));
