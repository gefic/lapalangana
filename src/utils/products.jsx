import Pozole_rojo from "../assets/Pozole_rojo.jpg";
import tacos from "../assets/tacos.jpg";
import tamales from "../assets/tamales.jpg";
import gordas from "../assets/gordas.jpg";


const productsMx = [
    {
        id: 1,
        name: 'Pozole Rojo',
        price: '8 USD',
        category: 'food',
        img: Pozole_rojo,
        stock: 9,
        description: 'Caldo con maíz, cerdo suave y una sabrosa salsa hecha con chile pasilla ancho y chile guajillo'

    },
    {
        id: 2,
        name: 'Tacos',
        price: '6 USD',
        category: 'food',
        img: tacos,
        stock: 14,
        description: 'Consiste en carne, generalmente de res o de pollo, cocinada junto a tomate y después introducida dentro de una Tortilla, generalmente de maíz, que se dobla o se enrolla. Finalmente se adereza con pico de gallo, una salsa típica mexicana. Un plato con mucha personalidad y que sin duda sabe a méxico.'

    },
    {
        id: 3,
        name: 'Tamales',
        price: '6 USD',
        category: 'food',
        img: tamales,
        stock: 10,
        description: 'Masa de maíz o de arroz rellena de carnes, vegetales, salsas y otros ingredientes.'

    },
    {
        id: 4,
        name: 'Gordas Pellizcadas',
        price: '5 USD',
        category: 'food',
        img: gordas,
        stock: 12,
        description: 'Llevan frijoles, salsa y queso, también pueden llevar guisados de distintos tipos.'

    }
]

export default productsMx;