document.querySelector('.button_back').addEventListener('click', function() {
    window.location.href = '../pages/home.html';
});

const barcodeSvg = document.querySelector("#barcode");
const container = document.querySelector(".barcode-container");

function updateBarcodeSize() {
    // Asegurarse de que la altura y el ancho del contenedor se estén calculando correctamente
    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;
    
    // Verificar si las dimensiones del contenedor son correctas en la consola
    console.log("Container dimensions:", containerWidth, containerHeight);
    
    // Si el contenedor tiene un tamaño válido, actualiza el tamaño del código de barras
    if (containerHeight && containerWidth) {
        barcodeSvg.setAttribute("width", containerWidth);
        barcodeSvg.setAttribute("height", containerHeight);

        // Generar el código de barras con la altura del contenedor
        JsBarcode("#barcode", "123456789012", {
            format: "CODE128",
            lineColor: "#000",
            width: 6,
            height: containerHeight,  // La altura del código de barras debe coincidir con la altura del contenedor
            displayValue: true,
            fontSize: 25
        });
    }
}

// Llama a la función cuando la página se cargue
updateBarcodeSize();

// Usa ResizeObserver para detectar cambios en el tamaño del contenedor y actualizar el código de barras
const resizeObserver = new ResizeObserver(updateBarcodeSize);
resizeObserver.observe(container);
