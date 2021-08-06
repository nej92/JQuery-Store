///////////////////
//FILTRO MARCA
///////////////////
$("#marca-A340").on('click', function (){
    if ($('#marca-A340').prop ("checked")){
      let soloA340 = grupoPC.filter(PC => PC.marca === "A340");
      for (p of soloA340){
        $('#cont-general').append(
        `<div class="marca-A340-cont estilo-cont">
          <img class="seccion-PC-imgs" src="${p.img}">
          <p>${p.marca}</p>
          <p>$${p.precio}</p>
          <p>${p.so}</p>
          <p>${p.procesador}</p>
        </div>`);
      } 
    }else{
      $('.marca-A340-cont').remove();
    }
  });

  $("#marca-3iAIO").on('click', function (){
    if ($('#marca-3iAIO').prop ("checked")){
      let solo3iAIO = grupoPC.filter(PC => PC.marca === "3i AIO");
      for (p of solo3iAIO){
        $('#cont-general').append(
        `<div class="marca-3iAIO-cont estilo-cont">
          <img class="seccion-PC-imgs" src="${p.img}">
          <p>${p.marca}</p>
          <p>$${p.precio}</p>
          <p>${p.so}</p>
          <p>${p.procesador}</p>
        </div>`);
      } 
    }else{
      $('.marca-3iAIO-cont').remove();
    }
  });

  $("#marca-330AIO").on('click', function (){
    if ($('#marca-330AIO').prop ("checked")){
      let solo330AIO = grupoPC.filter(PC => PC.marca === "330 AIO");
      for (p of solo330AIO){
        $('#cont-general').append(
        `<div class="marca-330AIO-cont estilo-cont">
          <img class="seccion-PC-imgs" src="${p.img}">
          <p>${p.marca}</p>
          <p>$${p.precio}</p>
          <p>${p.so}</p>
          <p>${p.procesador}</p>
        </div>`);
      } 
    }else{
      $('.marca-330AIO-cont').remove();
    }
  });

  $("#marca-V50aAIO").on('click', function (){
    if ($('#marca-V50aAIO').prop ("checked")){
      let soloV50aAIO = grupoPC.filter(PC => PC.marca === "V50a AIO");
      for (p of soloV50aAIO){
        $('#cont-general').append(
        `<div class="marca-V50aAIO-cont estilo-cont">
          <img class="seccion-PC-imgs" src="${p.img}">
          <p>${p.marca}</p>
          <p>$${p.precio}</p>
          <p>${p.so}</p>
          <p>${p.procesador}</p>
        </div>`);
      } 
    }else{
      $('.marca-V50aAIO-cont').remove();
    }
  });