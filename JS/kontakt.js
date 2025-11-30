document.getElementById('validateForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let emri = document.getElementById("emri").value.trim();
    let email = document.getElementById("email").value.trim();
    let mesazhi = document.getElementById("mesazhi").value.trim();

    let mesazhiAlert = document.getElementById("mesazhiAlert");
    mesazhiAlert.innerHTML = "";

    if (emri.length < 3) {
      mesazhiAlert.innerHTML = "<div class='alert alert-warning'>Emri duhet të jetë së paku 3 karaktere.</div>";
      return;
    }
    if (!email.includes("@")) {
      mesazhiAlert.innerHTML = "<div class='alert alert-warning'>Email-i duhet të përmbajë '@'.</div>";
      return;
    }
    if (mesazhi.length < 10) {
      mesazhiAlert.innerHTML = "<div class='alert alert-warning'>Mesazhi duhet të jetë së paku 10 karaktere.</div>";
      return;
    }

    mesazhiAlert.innerHTML = "<div class='alert alert-success'>Forma u dërgua me sukses!</div>";
    this.reset();
  });