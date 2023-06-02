const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function () {
  if (searchBox.style.top == '72px') {
    searchBox.style.top = '24px';
    searchBox.style.pointerEvents = 'none';
  } else {
    searchBox.style.top = '72px';
    searchBox.style.pointerEvents = 'auto';
  }
});

menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})
$(document).ready(function() {
  $('#boton').click(function(e) {
    e.preventDefault();
    var doc = new jsPDF();
    var descripcion = $('#descripcion').val();
    var tipo = $('#tipo').val();
    doc.text(20, 20, 'Tipo de Queja: ' + tipo);
    doc.text(20, 30, 'Descripción: ' + descripcion);
    doc.save('Queja.pdf');
    var formData = new FormData($('#form')[0]);
    $.ajax({
      type: 'POST',
      url: 'send_email.php',
      data: formData,
      processData: false,
      contentType: false,
      success: function(response) {
        alert('Tu queja ha sido enviada por correo electrónico.');
      }
    });
  });
});