
import React from "react";
import ProductList from "./components/ProductList";

const images = [
    "https://www.kivano.kg/images/product/161400/full/1767866172_09568300.jpg/id:1",
    "https://cdn1.technopark.ru/technopark/photos_resized/faq_top_image/1710_1112/1007/1_1007.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrX0PVVYCE6pyDmIOIFkdLjT1umSPWirTmB4a9yLpDMWsFdNT1aO9tRE&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAS9aSeqw9kDELBaUSIHN0liZV4uDzzQbTh9XJAJeFJVURo8DtfnGhNhqW&s=10",
    "https://www.kivano.kg/images/product/145671/full/1740740917_88805200.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3m_PDjjif7sBePEwWSlwGaLxQJoVhobDEyR_IQx4C1YjoOIlyCfAlRn0B&s=10",
];


// Массив товаров
const products = [
    { id: 1, name: "Смартфон" },
    { id: 2, name: "Ноутбук" },
    { id: 3, name: "Наушники" },
    { id: 4, name: "Клавиатура" },
    { id: 5, name: "Мышь" },
    { id: 6, name: "Монитор" },
];

function App() {
    return (
        <div className="app">
            <h1> Интернет-магазин</h1>
            <ProductList products={products} images={images} />
        </div>
    );
}

export default App;

