function showDialog(id, modal=false) {
    const dialog = document.getElementById(id);
    if (modal) {
        dialog.showModal();
        return;
    }
    dialog.show();
}