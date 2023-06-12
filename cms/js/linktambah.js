const url = window.location.href;
const urlParams = new URLSearchParams(new URL(url).search);
const idProduk = urlParams.get("id");


$(document).ready(function() {
    $('#myForm').submit(function(e) {
      e.preventDefault(); // Mencegah pengiriman formulir secara normal
      
      var formData = $(this).serialize(); // Mengambil data formulir
      
      $.ajax({
        type: 'POST',
        url: `https://www.dfunstation.com/api4/android/index.php/product/tambahlink/${idProduk}`, // Ganti dengan URL yang sesuai dengan script PHP Anda
        data: formData,
        success: function(response) {
          alert('Data berhasil ditambahkan!'); // Menampilkan pesan sukses
          location.reload();
          // Lakukan tindakan tambahan setelah data ditambahkan, jika diperlukan
        },
        error: function() {
          alert('Terjadi kesalahan. Data gagal ditambahkan.'); // Menampilkan pesan kesalahan
        }
      });
    });
  });