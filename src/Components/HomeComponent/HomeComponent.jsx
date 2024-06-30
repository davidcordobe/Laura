import CardsComponent from "../CardsComponents/CardsComponent"
import CarruselComponent from "../CarruselComponent/CarruselComponent"

import './HomeComponent.css'
function HomeComponent() {
    return (
        <>
            <div className="presentacion ">
                <h3 className="col-12">Un poco sobre mi</h3>
                <p>Hola bellas !!! Soy Laura creadora de Lia Nails Manicura .  Nací en el interior de Córdoba en Villa Dolores.
                    Actualmente vivo en Córdoba Capital 🏠. Soy mamá de Catalina y pareja de Carlos ellos son mis sostén y
                    mi bella familia 💞. Gracias a ellos por el apoyo y el aguante nada sería posible.
                    Comencé en el mundo de las uñas 💅🏻 unos meses antes de la famosa pandemia,
                    cuyo curso termina en forma virtual 😢😢 , pasaron cosas en el medio  y no
                    le dedicaba el 100% ya q trabajaba de niñera, atendiendo en casa dedicando media jornada
                    y así por un tiempo más, hasta que con el apoyo de Mi pareja que tanto me insistió me decidí y me
                    anime en octubre del 2023 dejar de trabajar de niñera y enfocarme al 100% a las uñas💅🏻.
                    Entre medio hubo mudanza de casa con una gran alegría 💞 y  la búsqueda de un nuevo espacio para Lia Nails 💅🏻.
                    Un 2024 con muchos cambio y por crecimiento por delante 💪🏻
                </p>

            </div>
            <h3>Mis Servicios</h3>
            <div className="Cards">
                <CardsComponent titulo={'Esmaltado Semipermanete'} img={'../../../../public/img/EsmaltadoSemi.jpg'}
                    descrip={'Es un tipo de manicura que se hace cada 2-3 semanas; a diferencia de los esmaltes clásicos, la manicura semipermanente no requiere que se retire y se vuelva a poner de nuevo con tanta frecuencia, todo es gracias a su durabilidad.'} />

                <CardsComponent titulo={'Capping'} img={'../../../../public/img/capping.jpg'}
                    descrip={'Técnica de manicuría que consiste en aplicar una fina capa de acrílico o gel fortificador sobre la uña que actúa como una barrera protectora. Este baño en gel kapping no alarga la uña natural sino que acompaña el crecimiento de la misma.'} />

                <CardsComponent titulo={'Soft Gel'} img={'../../../../public/img/SoftGel.jpg'}
                    descrip={'  Nueva técnica que consiste en un método de extensión de uñas mediante tips que se adhieren directamente a la superficie de la uña natural. Los tips están hechos de plástico flexible y se han ganado su popularidad por tratarse de una técnica rápida, cómoda y efectiva.'} />

                <CardsComponent titulo={'Diseños Extras'} img={'../../../../public/img/NailArt.jpg'}
                    descrip={'Nail Art (o arte de uñas) es una forma creativa de esmaltar, decorar y embellecer las uñas. El abanico de ideas que forma esta tendencia es muy amplio, ya que no solo se juega con los colores, sino también las formas, los estampados, los materiales y mucho más... '} />

            </div>

            <h3>Mis trabajos</h3>

            <CarruselComponent />

        </>
    )
}
export default HomeComponent