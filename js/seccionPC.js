///////////////////
//FILTRO MARCA
///////////////////
$("#marca-A340").on('click', function (){
    if ($('#marca-A340').prop ("checked")){
      console.log('checked')
      let soloIdeaPad = grupoPC.filter(PC => PC.marca === "A340");
      for (n of soloIdeaPad){
        $('#PC-cont-general').append(
        `<div class="marca-IdeaPad-cont estilo-cont">
          <img class="seccion-imgs" src="${n.img}">
          <p>${n.marca}</p>
          <p>$${n.precio}</p>
          <p>${n.disco}</p>
          <p>${n.procesador}</p>
        </div>`);
      } 
    }else{
      console.log('no checked');
      $('.marca-IdeaPad-cont').remove();
    }
  });

  $("#marca-Yoga").on('click', function (){
    if ($('#marca-Yoga').prop ("checked")){
      console.log('checked')
      let soloYoga = grupoNotebooks.filter(Notebook => Notebook.marca === "Yoga");
      for (n of soloYoga){
        $('#notebook-cont-general').append(
        `<div class="marca-Yoga-cont estilo-cont">
          <img class="seccion-imgs" src="${n.img}">
          <p>${n.marca}</p>
          <p>$${n.precio}</p>
          <p>${n.disco}</p>
          <p>${n.procesador}</p>
        </div>`);
      } 
    }else{
      console.log('no checked');
      $('.marca-Yoga-cont').remove();
    }
  });

  $("#marca-ThinkBook").on('click', function (){
    if ($('#marca-ThinkBook').prop ("checked")){
      console.log('checked')
      let soloThinkBook = grupoNotebooks.filter(Notebook => Notebook.marca === "ThinkBook");
      for (n of soloThinkBook){
        $('#notebook-cont-general').append(
        `<div class="marca-ThinkBook-cont estilo-cont">
          <img class="seccion-imgs" src="${n.img}">
          <p>${n.marca}</p>
          <p>$${n.precio}</p>
          <p>${n.disco}</p>
          <p>${n.procesador}</p>
        </div>`);
      } 
    }else{
      console.log('no checked');
      $('.marca-ThinkBook-cont').remove();
    }
  });