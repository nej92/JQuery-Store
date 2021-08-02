class Monitor{
    constructor(desc, precio, marca, resolucion, tamaño){
      
      this.desc = desc;
      this.precio=precio;
      this.marca=marca;
      this.resolucion=resolucion;
      this.tamaño=tamaño;
    }
  
}
const grupoMonitores = [];

//agregado de monitores
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
1000, "Samsung", "1920x1080", "19''"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
3000, "Dell", "1680x1050", "22''"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
2000, "Lenovo", "1920x1080", "20''"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
1000, "Lenovo", "1680x1050", "19''"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
8000, "LG", "3840x2160","24''"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
4000, "LG", "1920x1080","22''"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
6000, "LG", "1920x1080","24''"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
6000, "Samsung", "3840x2160","24''"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
3000, "Samsung", "1680x1050","19''"));
grupoMonitores.push (new Monitor ("'Con una experiencia visual impresionante, el ThinkVision P44w-10 te permite ser más productivo todos los días. Gracias a la amplitud de la pantalla de 43,4″ y el gran ángulo de visión, podrás crear y consumir contenido en forma excepcional. Los versátiles puertos de conectividad expanden las capacidades del dispositivo al facilitar la conexión con otros periféricos. Repleto de características avanzadas, este monitor es el lienzo perfecto para ampliar la productividad.'",
3000, "Samsung", "1920x1080","22''"));
let preciosOrdenados = grupoMonitores.sort((a, b) => a.precio - b.precio);

