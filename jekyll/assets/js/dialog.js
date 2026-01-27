function toggleDialog(id, modal=false) {
    const dialog = document.getElementById(id);
    if (!dialog.open) {
        if (modal) {
            dialog.showModal();
            return;
        }
        dialog.show();
        return;
    }
    dialog.close();
}