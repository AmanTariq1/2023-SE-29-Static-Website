function showMessage() {
    const messageEl = document.getElementById("message");
    const messages = [
        "🎉 JavaScript is working perfectly!",
        "🚀 Your site is live on Netlify!",
        "✨ Deployed via GitHub + Netlify!",
        "💜 Cloud Computing Lab Task 04 complete!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageEl.textContent = randomMessage;
    messageEl.classList.add("show");

    setTimeout(() => {
        messageEl.classList.remove("show");
    }, 3000);
}

// Add entrance animation to info items
window.addEventListener("load", () => {
    const items = document.querySelectorAll(".info-item");
    items.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateX(-20px)";
        setTimeout(() => {
            item.style.transition = "all 0.5s ease";
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
        }, 300 + index * 150);
    });
});
