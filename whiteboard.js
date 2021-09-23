const makeArt = () => {
    const tinyart = document.getElementById('tinyart')
    const context = tinyart.getContext('2d') // tinyart

    // 255 is max rgb
    for (let x = 0; x < 255; x++) {
        for (let y = 0; y < 255; y++) {
            // arbitrary math operation ^ is XOR
            if ((x ** y) % 255) {
                context.fillRect(x*4, y*4, 4, 4)
                context.fillStyle = `rgb(${x}, ${y}, ${(x**y) % 255})`
            }
        }
    }
}


makeArt()