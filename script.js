function _(id) {
    return document.getElementById(id);
}

function getRs() {
    let txt1 = _('txt1').value;
    let txt2 = _('txt2').value;
    let txt3 = _('txt3').value;
    const d = new Date();

    if (txt1.trim() || txt2.trim() || txt3.trim()) {
        _('rs').innerHTML += `<div class="entry">
            <p><strong>Bagaimana harimu?</strong><br>${txt1}</p>
            <p><strong>Apa saja kegiatanmu hari ini?</strong><br>${txt2}</p>
            <p><strong>Bagaimana perasaanmu hari ini?</strong><br>${txt3}</p>
            <small>${d.toLocaleTimeString()}, ${d.toLocaleDateString()}</small>
        </div>`;
        _('txt1').value = '';
        _('txt2').value = '';
        _('txt3').value = '';
    } else {
        alert('Please write something in the diary entry.');
    }
}

_('createBtn').addEventListener('click', getRs);

function editProfile() {
    let name = prompt("Masukkan nama lengkap:");
    let description = prompt("Masukkan deskripsi singkat:");
    let email = prompt("Masukkan email:");
    let phone = prompt("Masukkan nomor telepon:");

    if (name) {
        document.getElementById('name').textContent = name;
    }
    if (description) {
        document.getElementById('description').textContent = description;
    }
    if (email) {
        document.getElementById('email').textContent = email;
    }
    if (phone) {
        document.getElementById('phone').textContent = phone;
    }
}

function editProfile() {
    // Fungsionalitas untuk mengedit profil dapat ditambahkan di sini
    alert("Edit Profil diaktifkan!");
}