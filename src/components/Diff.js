function Diff() {
    return (
        // Contenedor que centra el componente en la pantalla y aplica el fondo.
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 p-8">
            <figure 
                // Clases del código que te funciona (con estilos de diseño añadidos)
                className="diff aspect-[190/140] w-1/2 rounded-xl shadow-2xl transition-all duration-300 hover:scale-[1.05]" 
                tabIndex={0}
            >
                <div className="diff-item-1" role="img" tabIndex={0}>
                    <img alt="daisy" src="/vlad2.jpg" />
                </div>
                <div className="diff-item-2" role="img">
                    <img
                        alt="Mi foto de comparación"
                        src="/vlad.jpg" 
                        // Mantenemos la clase original object-left-top
                        className="object-left-top"
                    />
                </div>
                {/* Estilizamos el resizer para que se vea con el nuevo diseño, pero sin romper el diff */}
                <div className="diff-resizer bg-primary opacity-80 hover:opacity-100"></div>
            </figure>
        </div>
    );
}

export default Diff;



