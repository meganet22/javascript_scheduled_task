// buton 1 tıklandığında olay tetikleyici ekle
document.querySelector('#buton1').addEventListener( 'click', function(event) {
    alert("Buton 1 tıklandı");
} );

// buton 1 arka plan rengi değiştir
document.querySelector("#buton1").style.border = "2px solid black";