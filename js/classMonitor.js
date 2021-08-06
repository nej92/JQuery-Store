class Monitor{
    constructor(desc, precio, marca, resolucion, tamaño, img, id){
      
    this.desc = desc;
    this.precio = precio;
    this.marca = marca;
    this.resolucion = resolucion;
    this.tamaño = tamaño;
    this.img = img;
    this.id = id;
    }
  
}
const grupoMonitores = [];

//agregado de monitores
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
98999, "Samsung", "1920x1080", "19''", "https://www.lenovo.com/medias/P44W-feature-4.png?context=bWFzdGVyfC9lbWVhL2ltYWdlcy9hY2Nlc3Nvcmllcy9tb25pdG9ycy98ODg4NzV8aW1hZ2UvcG5nfC9lbWVhL2ltYWdlcy9hY2Nlc3Nvcmllcy9tb25pdG9ycy9oNjgvaDIzLzk5MDE2MTg4ODg3MzQucG5nfDEyMzlmMjQxNzExZGU4OWQ3ZTJiYWE2ZWFmNTRlODg4MDU1YjYxMDMwOTc1ODkxYzMxMGFiNmMyZWNiZmYyMWQ", "01"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
149999, "Dell", "1680x1050", "22''", "https://static.lenovo.com/mea/campaign/newmonitors/images/Listingpage/S24q-10%20_200.png", "02"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
98799, "Lenovo", "1920x1080", "20''", "https://static.lenovo.com/mea/campaign/newmonitors/images/t-series/T27p-10/T27p-10-1.png", "03"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
132999, "Lenovo", "1680x1050", "19''", "https://static.lenovo.com/mea/campaign/newmonitors/images/Thinkvision/ThinkVision-Creator/Thinkvision_Creator%20Extreme%20500-1.png", "04"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
146998, "LG", "3840x2160","24''", "https://static.lenovo.com/mea/campaign/newmonitors/images/Thinkvision/S-series/S28u-10/S28U-1.png", "05"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
146998, "LG", "1920x1080","22''", "https://static.lenovo.com/mea/campaign/newmonitors/images/Thinkvision/P-series/P27h-20/P27h-1.png", "06"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
111999, "LG", "1920x1080","24''", "https://static.lenovo.com/mea/campaign/newmonitors/images/T27i/T27i-1.png", "07"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
123999, "Samsung", "3840x2160","24''", "https://www.lenovo.com/medias/Y44FW-gallery-1-back.png?context=bWFzdGVyfC9lbWVhL2ltYWdlcy9hY2Nlc3Nvcmllcy9tb25pdG9ycy98MTA2NDAzfGltYWdlL3BuZ3wvZW1lYS9pbWFnZXMvYWNjZXNzb3JpZXMvbW9uaXRvcnMvaDgwL2g5Mi85OTAxNjE3OTA1Njk0LnBuZ3w1MjI4NDY4MWE5Y2M1Yjk5ODJhYzg2ZmNjNjYzZGVkYTIwODQ0Y2E1YWM0ZGJkZjhkZDBmYWFhZTRhOTAzYjNj", "08"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
94999, "Samsung", "1680x1050","19''", "https://static.lenovo.com/mea/campaign/newmonitors/images/Thinkvision/T-series/T34w-20/T34w-1.png", "09"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
98998, "Samsung", "1920x1080","22''", "https://static.lenovo.com/mea/campaign/newmonitors/images/Thinkvision/P-series/P32p-20/P32p-1.png", "10"));

let preciosOrdenados = grupoMonitores.sort((a, b) => a.precio - b.precio);