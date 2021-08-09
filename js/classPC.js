class PC{
    constructor(marca, precio, so, procesador, img, id){

    this.marca = marca;
    this.precio = precio;  
    this.so = so;
    this.procesador = procesador;
    this.img = img;
    this.id = id;
    }
  
}
const grupoPC = [];


grupoPC.push (new PC ("A340", 84999, "Windows", "Intel Core", "https://http2.mlstatic.com/D_NQ_NP_890555-MLA45214026360_032021-O.webp", "01"));
grupoPC.push (new PC (`3i AIO`, 92999, "Windows", "AMD", "https://http2.mlstatic.com/D_NQ_NP_633295-MLA45427889836_042021-O.webp", "02"));
grupoPC.push (new PC (`330 AIO`, 141999, "Linux", "Intel Core", "https://http2.mlstatic.com/D_NQ_NP_897408-MLA42519127507_072020-O.webp", "03"));
grupoPC.push (new PC (`V50a AIO`, 71999, "Linux", "Intel Core", "https://http2.mlstatic.com/D_NQ_NP_695537-MLA43532086179_092020-O.webp", "04"));
grupoPC.push (new PC (`V50a AIO`, 182998, "Linux", "AMD", "https://http2.mlstatic.com/D_NQ_NP_907778-MLA31644833198_072019-O.webp", "05"));
grupoPC.push (new PC (`V50a AIO`, 80999, "Windows", "Intel Core", "https://http2.mlstatic.com/D_NQ_NP_722163-MLA43037594729_082020-O.webp", "06"));
grupoPC.push (new PC ("A340", 111999, "Windows", "Intel Core", "https://http2.mlstatic.com/D_NQ_NP_725597-MLA43372753028_092020-O.webp", "07"));
grupoPC.push (new PC (`V50a AIO`, 173999, "Windows", "AMD", "https://http2.mlstatic.com/D_NQ_NP_892085-MLA43438720722_092020-O.webp", "08"));
grupoPC.push (new PC (`330 AIO`, 149999, "Windows", "AMD", "https://http2.mlstatic.com/D_NQ_NP_711170-MLA31113816812_062019-O.webp", "09"));
grupoPC.push (new PC (`3i AIO`, 80999, "Mac", "Intel Core", "https://http2.mlstatic.com/D_NQ_NP_954497-MLA31040520147_062019-O.webp", "10"));

