///////////////////
//FILTRO MARCA
///////////////////
$("#marca-IdeaPad").on('click', function (){
    if ($('#marca-IdeaPad').prop ("checked")){
      let soloIdeaPad = grupoNotebooks.filter(Notebook => Notebook.marca === "IdeaPad");
      for (n of soloIdeaPad){
        $('#cont-general').append(
        `<div class="marca-IdeaPad-cont estilo-cont">
          <img class="seccion-imgs" src="${n.img}">
          <p class="marca">${n.marca}</p>
          <p class="precio">$${n.precio}</p>
          <p>${n.disco}</p>
          <p>${n.procesador}</p>
          <p class="id-producto" id="${n.id}"><p>
          <button class="btn-carro-estilo agregar-carrito">Agregar al carrito</button>
        </div>`);
      } 
    }else{
      $('.marca-IdeaPad-cont').remove();
    }
  });

  $("#marca-Yoga").on('click', function (){
    if ($('#marca-Yoga').prop ("checked")){
      let soloYoga = grupoNotebooks.filter(Notebook => Notebook.marca === "Yoga");
      for (n of soloYoga){
        $('#cont-general').append(
        `<div class="marca-Yoga-cont estilo-cont">
          <img class="seccion-imgs" src="${n.img}">
          <p class="marca">${n.marca}</p>
          <p class="precio">$${n.precio}</p>
          <p>${n.disco}</p>
          <p>${n.procesador}</p>
          <p class="id-producto" id="${n.id}"><p>
          <button class="btn-carro-estilo agregar-carrito">Agregar al carrito</button>
        </div>`);
      } 
    }else{
      $('.marca-Yoga-cont').remove();
    }
  });

  $("#marca-ThinkBook").on('click', function (){
    if ($('#marca-ThinkBook').prop ("checked")){
      let soloThinkBook = grupoNotebooks.filter(Notebook => Notebook.marca === "ThinkBook");
      for (n of soloThinkBook){
        $('#cont-general').append(
        `<div class="marca-ThinkBook-cont estilo-cont">
          <img class="seccion-imgs" src="${n.img}">
          <p class="marca">${n.marca}</p>
          <p class="precio">$${n.precio}</p>
          <p>${n.disco}</p>
          <p>${n.procesador}</p>
          <p class="id-producto" id="${n.id}"><p>
          <button class="btn-carro-estilo agregar-carrito">Agregar al carrito</button>
        </div>`);
      } 
    }else{
      $('.marca-ThinkBook-cont').remove();
    }
  });