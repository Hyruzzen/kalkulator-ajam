


$(function() {
  let input1 = ""; // Inisialisasi input1
  let input2 = ""; // Inisialisasi input2
  let operasiSelected = null;

  $(".tombol-angka").click(function() {
    let angka = $(this).text();

    // Cek jika sudah ada operasi yang dipilih
    if (operasiSelected == null) {
      // Operasi masih kosong --> isi input1
      let angkaSebelumnya = $("#input1").text();
      if (angkaSebelumnya === "...") angkaSebelumnya = "";
      input1 = angkaSebelumnya + angka;
      $("#input1").text(input1);
    } else {
      // Sudah ada operasi yang dipilih
      let angkaSebelumnya = $("#input2").text();
      if (angkaSebelumnya === "...") angkaSebelumnya = "";
      input2 = angkaSebelumnya + angka;
      $("#input2").text(input2);
    }
  });


  $(".tombol-operasi").click(function () {
    let operasiSebelumnya = $("#operasi-selected").text();
    let newOperasi = $(this).text();
    if (operasiSebelumnya == "...") {
        operasiSelected = newOperasi;
        $("#operasi-selected").text(operasiSelected);
    }
});

$(".tombol-clear").click(function () {
  input1 = "";
  input2 = "";
  operasiSelected = null;
  $("#input1").text("...");
  $("#input2").text("...");
  $("#operasi-selected").text("...");
  $("#hasil").text("hasil");
});


  $("#btn-hitung").click(function() {
    input1 = parseFloat($("#input1").text());
    input2 = parseFloat($("#input2").text());
    let hasil;
    
    if (operasiSelected == "+") {
      hasil = input1 + input2;  
    } else if (operasiSelected == "-") {
      hasil = input1 - input2; 
    } else if (operasiSelected == "x") {
      hasil = input1 * input2; 
    } else if (operasiSelected == "/") {
      hasil = input1 / input2; 
    } else if (operasiSelected == "^") {
      hasil = input1 ** input2; 
    } else if (operasiSelected == "%") {
      hasil = input1 % input2; 

   
      
    

      
    }
    function cleardisplay() {
      currentinput = '';
      operator = '';
      firstOperand = null;
      updateDisplay();
    }  $("#hasil").text(hasil);
            
    // Reset untuk kalkulasi berikutnya
    input1 = hasil;
    $("#input1").text(input1);
    input2 = "";
    $("#input2").text("...");
    operasiSelected = null;
    $("#operasi-selected").text("...");

  

  })

  $(".toggle-negatif").click(function () {
    if (operasiSelected == null && input1) {
        input1 = -parseFloat(input1);
        $("#input1").text(input1);
    } else if (operasiSelected && input2) {
        input2 = -parseFloat(input2);
        $("#input2").text(input2);
    }
});
$(".tombol-faktorial").click(function () {
  if (operasiSelected == null && input1) {
      let num = parseInt(input1);
      if (num >= 0) {
          let hasil = 1;
          for (let i = 2; i <= num; i++) {
              hasil *= i;
          }
          $("#hasil").text(hasil);
      }
  }
});
$(".decimal").click(function () {
  if (operasiSelected == null) {
      if (input1 && !input1.includes('.')) {
          input1 += '.';
          $("#input1").text(input1);
      } else if (!input1) {
          input1 = '0.';
          $("#hasil").text("hasil");
      }
  } else {
      if (input2 && !input2.includes('.')) {
          input2 += '.';
          $("#input2").text(input2);
      } else if (!input2) {
          input2 = '0.';
          $("#input2").text(input2);
      }
  }
});
});