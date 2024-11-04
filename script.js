
// Função para fechar o pop-up
function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
    document.body.style.overflow = "auto"; // Permite o scroll após fechar o pop-up
}

// Exibe o pop-up automaticamente ao abrir o site
window.onload = function() {
    document.getElementById("popupOverlay").style.display = "flex";
};
