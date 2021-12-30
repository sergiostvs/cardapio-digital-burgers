import { useState } from "react";

import {
  Routes,
  Route,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

import { GlobalStyle } from "./styles/global";

import {
  Container,
  BurguerContent,
  OptionsContent,
  SaladContent,
  EspecialsContent,
  DrinksContent,
} from "./styles/global";

import logo from "./assets/logo.svg";

export default function App() {
  return (
    <Container className="App">
      <div className="header-content">
        <div className="header">
          <img src={logo} alt="Logo Burguers" />
        </div>
        <nav>
          <CustomLink className="link" to="/">
            Lançamentos
          </CustomLink>
          <CustomLink className="link" to="/combos">
            Combos
          </CustomLink>
          <CustomLink className="link" to="/hamburgueres">
            Hambúrgueres
          </CustomLink>
          <CustomLink className="link" to="/bebidas">
            Bebidas
          </CustomLink>
          <CustomLink className="link" to="/porcoes">
            Porções
          </CustomLink>
          <CustomLink className="link" to="/saladas">
            Saladas
          </CustomLink>
          <CustomLink className="link" to="/molhos">
            Molhos extras
          </CustomLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="combos" element={<Combos />} />
        <Route path="hamburgueres" element={<Hamburgueres />} />
        <Route path="bebidas" element={<Bebidas />} />
        <Route path="porcoes" element={<Porcoes />} />
        <Route path="saladas" element={<Saladas />} />
        <Route path="molhos" element={<Molhos />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
      <GlobalStyle />
    </Container>
  );
}

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          background: match ? "#D33438" : "transparent",
          color: match ? "#fff" : "#955a5c",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

const burguersNews = [
  {
    id: 1,
    title: "Favorito Burguer",
    price: "R$ 27",
    img: "https://cdn.neemo.com.br/uploads/item/photo/524070/favoritohamburguer.jpg",
    description: "Pão de Pretzel, Hamburguer Bovino 120gr, Queijo Cheddar, Bacon, Queijo Provolone Empanado, Molho Especial.",
  },
  {
    id: 2,
    title: "Favorito Combo",
    price: "R$ 32",
    img: "https://cdn.neemo.com.br/uploads/item/photo/1121019/favorito.jpg",
    description: "Pão de Pretzel, Hamburguer Bovino 120gr, Queijo Cheddar, Bacon, Queijo Provolone Empanado, Molho Especial. Acompanha Batata Frita + Refrigerante Lata.",
  },
];

const burguersCombo = [
  {
    id: 1,
    title: "Combo One Burguer",
    price: "R$ 25",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123454/OneCombo.jpg",
    description: "Pão artesanal, hambúrguer 120g, queijo cheddar, bacon, cebola, roxa grelhada ao molho barbecue, alface e tomate. Acompanha Batata Frita + Refrigerante Lata.",
  },
  {
    id: 2,
    title: "Combo Duplo Burguer",
    price: "R$ 29",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123455/DuploCombo.jpg",
    description: "Pão artesanal, 2 hambúrgueres de 120g, duplo queijo cheddar, bacon, cebola roxa grelhada ao molho barbecue, alface e tomate. Acompanha Batata Frita + Refrigerante Lata.",
  },
  {
    id: 3,
    title: "Combo Insano Burguer",
    price: "R$ 34",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123456/InsanoCombo.jpg",
    description: "Pão artesanal, 3 hambúrgueres de 120g, 3 queijos cheddar, bacon, cebola roxa grelhada ao molho barbecue, alface e tomate. Acompanha Batata Frita + Refrigerante Lata.",
  },
  {
    id: 4,
    title: "Combo Mix Burguer",
    price: "R$ 35",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123460/MixCombo.jpg",
    description: "Pão artesanal, hambúrguer 120g, filé de frango 120g, cream cheese, queijo cheddar, bacon, cebola roxa grelhada ao molho barbecue, alface e tomate. Acompanha Batata Frita + Refrigerante Lata.",
  },
  {
    id: 5,
    title: "Combo Double Smash Burguer",
    price: "R$ 27",
    img: "https://cdn.neemo.com.br/uploads/item/photo/336916/WhatsApp_Image_2020-06-26_at_18.54.57.jpeg",
    description: "Pão Brioche, 02 Smash 70 gramas, American Cheese, Queijo Provolone, Incrível Molho UMAMI. Acompanha Batata Frita + Refrigerante Lata.",
  },
  {
    id: 6,
    title: "Combo Karijó Burguer",
    price: "R$ 25",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123458/KarijoCombo.jpg",
    description: "Pão artesanal, hambúrguer de 120g, queijo cheddar, bacon, ovo, cebola roxa grelhada ao molho barbecue, alface e tomate. Acompanha Batata Frita + Refrigerante Lata.",
  },
  {
    id: 7,
    title: "Combo Frangolino Burguer",
    price: "R$ 31",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123461/FrangolinoCombo.jpg",
    description: "Pão artesanal, filé de frango 120g, cream cheese, queijo cheddar, bacon, cebola roxa grelhada ao molho barbecue, alface, tomate. Acompanha Batata Frita + Refrigerante Lata.",
  },
  {
    id: 8,
    title: "Combo Everest",
    price: "R$ 34",
    img: "https://cdn.neemo.com.br/uploads/item/photo/144858/Combo_Everest.jpg",
    description: "Pão artesanal, duplo hambúrguer 120g, duplo queijo cheddar, UMA MONTANHA DE BACON, cebola roxa, alface, tomate. Acompanha Batata Frita + Refrigerante Lata.",
  },
  {
    id: 9,
    title: "Combo Alhocinante",
    price: "R$ 28",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123539/alhocinantecombo.jpg",
    description: "Pão artesanal, hambúrguer 120g, queijo coalho, cebola roxa,  alface, tomate e um creme de alho com especiairias. Acompanha Batata Frita + Refrigerante Lata.",
  },
  {
    id: 10,
    title: "Combo Vegetariano",
    price: "R$ 27",
    img: "https://cdn.neemo.com.br/uploads/item/photo/144860/VegetarianoCombo.jpg",
    description: "Pão artesanal, 120g de queijo coalho empanado, queijo cheddar, molho com ervas finas, cebola roxa, alface, tomate. Acompanha Batata Frita + Refrigerante Lata.",
  },
  {
    id: 11,
    title: "Combo Poderoso Burguer",
    price: "R$ 30",
    img: "https://cdn.neemo.com.br/uploads/item/photo/157571/IMG-20190202-WA0030.jpg",
    description: "Pão Artesanal, Hambúrguer 120g RECHEADO COM QUEIJO PARMESÃO, MOLHO DEFUMADO, Queijo Cheddar, Alface e Tomate. Acompanha Batata Frita + Refrigerante Lata.",
  },
  {
    id: 12,
    title: "Combo Kids Burguer",
    price: "R$ 25",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123463/KidsBurguer.jpg",
    description: "Pão artesanal, hambúrguer 120g, queijo cheddar, bacon, alface e tomate. Acompanha Batata Frita + Refrigerante Lata.",
  },
  {
    id: 13,
    title: "Combo Kids Frango",
    price: "R$ 25",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123465/KidsFrango.jpg",
    description: "Pão artesanal, filé de frango, queijo cheddar, bacon, alface e tomate. Acompanha Batata Frita + Refrigerante Lata.",
  }
];

const burguersSingle = [
  {
    id: 1,
    title: "One Burguer",
    price: "R$ 19",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123424/OneBurguer.jpg",
    description: "Pão artesanal, hambúrguer 120g, queijo cheddar, bacon, cebola, roxa grelhada ao molho barbecue, alface e tomate.",
  },
  {
    id: 2,
    title: "Duplo Burguer",
    price: "R$ 23",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123442/DuploBurguer.jpg",
    description: "Pão artesanal, 2 hambúrgueres de 120g, duplo queijo cheddar, bacon, cebola roxa grelhada ao molho barbecue, alface e tomate.",
  },
  {
    id: 3,
    title: "Insano Burguer",
    price: "R$ 28",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123443/InsanoBurguer.jpg",
    description: "Pão artesanal, 3 hambúrgueres de 120g, 3 queijos cheddar, bacon, cebola roxa grelhada ao molho barbecue, alface e tomate.",
  },
  {
    id: 4,
    title: "Double Smash Burguer",
    price: "R$ 21",
    img: "https://cdn.neemo.com.br/uploads/item/photo/336910/WhatsApp_Image_2020-06-26_at_18.54.57.jpeg",
    description: "Pão Brioche, 02 Smash 70g, American Cheese, Queijo Provolone, Incrível Molho UMAMI.",
  },
  {
    id: 5,
    title: "Karijo Burguer",
    price: "R$ 21",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123446/karijoburguer.jpg",
    description: "Pão artesanal, hambúrguer de 120g, queijo cheddar, bacon, ovo, cebola roxa grelhada ao molho barbecue, alface e tomate.",
  },
  {
    id: 6,
    title: "Mix Burguer",
    price: "R$ 29",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123448/MixBurguer.jpg",
    description: "Pão artesanal, hambúrguer 120g, filé de frango 120g, cream cheese, queijo cheddar, bacon, cebola roxa grelhada ao molho barbecue, alface e tomate.",
  },
  {
    id: 7,
    title: "Frangolino Burguer",
    price: "R$ 25",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123450/FrangolinoBurguer.jpg",
    description: "Pão artesanal, filé de frango 120g, cream cheese, queijo cheddar, bacon, cebola roxa grelhada ao molho barbecue, alface, tomate.",
  },
  {
    id: 8,
    title: "Everest",
    price: "R$ 28",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123536/Everest.jpg",
    description: "Pão artesanal, duplo hambúrguer 120g, duplo queijo cheddar, UMA MONTANHA DE BACON, cebola roxa, alface, tomate.",
  },
  {
    id: 9,
    title: "Alhocinante",
    price: "R$ 22",
    img: "https://cdn.neemo.com.br/uploads/item/photo/144859/alhocinante.jpg",
    description: "Pão artesanal, hambúrguer 120g, queijo coalho, cebola roxa, alface, tomate e um creme de alho com especiairias.",
  },
  {
    id: 10,
    title: "Vegetariano",
    price: "R$ 21",
    img: "https://cdn.neemo.com.br/uploads/item/photo/144861/Vegetariano.jpg",
    description: "Pão artesanal, 120g de queijo coalho empanado, queijo cheddar, molho com ervas finas, cebola roxa, alface, tomate.",
  },
  {
    id: 11,
    title: "Poderoso Burguer",
    price: "R$ 24",
    img: "https://cdn.neemo.com.br/uploads/item/photo/157573/IMG-20190202-WA0029.jpg",
    description: "Pão Artesanal, Hamburguer 120G, RECHEADO COM QUEIJO PARMESÃO, MOLHO DEFUMADO, Queijo Cheddar, Alface e Tomate.",
  }
];

const drinks = [
    {
      id: 1,
      title: "Água Mineral",
      price: "A partir de R$ 3",
      img: "https://cdn.neemo.com.br/uploads/item/photo/123529/com_gas_e_sem.jpg"
    },
    {
      id: 2,
      title: "H2O Limoneto",
      price: "R$ 6",
      img: "https://cdn.neemo.com.br/uploads/item/photo/123531/H20h_Limoneto.jpg"
    },
    {
      id: 3,
      title: "Refrigerantes (Lata)",
      price: "A partir de R$ 5",
      img: "https://cdn.neemo.com.br/uploads/item/photo/123530/lata.jpg"
    },
    {
      id: 4,
      title: "Refrigerantes (Lata)",
      price: "A partir de R$ 7",
      img: "https://cdn.neemo.com.br/uploads/item/photo/123528/cervejas.jpg"
    }
];

const portions = [
  {
    id: 1,
    title: "Barca Burguer",
    price: "R$ 82",
    description: "Fritas com Cheddar, 5 Tipos de Molho, Anéis de Cebola, 2 One Burguer, 2 bebidas à escolha",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123519/barca_burguer.jpg"
  },
  {
    id: 2,
    title: "Batata Frita",
    price: "A partir de R$ 12",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123521/BatataSimples.jpg"
  },
  {
    id: 3,
    title: "Batata Frita com Cheddar",
    price: "A partir de R$ 10",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123523/Batatacheddar.jpg"
  },
  {
    id: 4,
    title: "Batata Frita Smiles",
    price: "A partir de R$ 8",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123525/BatataSmile.jpg"
  },
  {
    id: 5,
    title: "Aneis de Cebola",
    price: "A partir de R$ 12",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123524/Aneis.jpg"
  },
  {
    id: 6,
    title: "Tilápia em Cubos Empanada",
    price: "A partir de R$ 25",
    description: "Acompanha molho tártaro",
    img: "https://cdn.neemo.com.br/uploads/item/photo/123526/tilapia.jpg"
  }
];

const salads = [
  {
    id: 1,
    title: "Salada",
    price: "A partir de R$ 19",
    description: "Ingredientes: Alface, Tomate, Mussarela em cubos, Presunto em cubos, Azeitonas, Palmito e Molho Especial.",
    img: "https://cdn.neemo.com.br/uploads/item/photo/128328/salada.jpg"
  }
];

const sauces = [
  {
    id: 1,
    title: "Barbecue",
    description: '100ml',
    price: "R$ 5",
    img: "https://cdn.neemo.com.br/uploads/item/photo/132355/barbecue.jpg"
  },
  {
    id: 2,
    title: "Maionese com Ervas",
    description: '100ml',
    price: "R$ 5",
    img: "https://cdn.neemo.com.br/uploads/item/photo/132356/Ervas.jpg"
  },
  {
    id: 3,
    title: "Ketchup",
    description: '100ml',
    price: "R$ 5",
    img: "https://cdn.neemo.com.br/uploads/item/photo/132357/katchup.jpg"
  },
  {
    id: 4,
    title: "Mostarda e Mel",
    description: '100ml',
    price: "R$ 5",
    img: "https://cdn.neemo.com.br/uploads/item/photo/132447/Marron.jpg"
  },
  {
    id: 5,
    title: "Maionese Tradicional",
    description: '100ml',
    price: "R$ 5",
    img: "https://cdn.neemo.com.br/uploads/item/photo/132509/Screenshot_20180820-105457_2.png"
  },
  {
    id: 6,
    title: "Molho Defumado",
    description: '100ml',
    price: "R$ 5",
    img: "https://cdn.neemo.com.br/uploads/item/photo/132509/Screenshot_20180820-105457_2.png"
  },
  {
    id: 7,
    title: "Molho de Alho",
    description: '100ml',
    price: "R$ 5",
    img: "https://cdn.neemo.com.br/uploads/item/photo/132509/Screenshot_20180820-105457_2.png"
  }
];

function News() {

  const [search, setSearch] = useState('');

  const lowerSearch = search.toLowerCase();

  const burguerSearch = burguersNews.filter((burguer) => burguer.title.toLowerCase().includes(lowerSearch))

  return (
    <>
      <BurguerContent>
        <input
          className="search"
          placeholder="Buscar"
          type="text"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <ul>
          {burguerSearch.map((burguer) => (
            <li key={burguer.id}>
              <div className="front">
                <div className="price-container">
                  <div className="price-ok">
                    <p>null</p>
                  </div>
                  <div className="price">
                    <p>{burguer.price}</p>
                  </div>
                </div>
                <img src={burguer.img} alt="" />
                <div className="text">
                  <div className="title">
                    <h3>{burguer.title}</h3>
                  </div>
                  <p className="description">
                    {burguer.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </BurguerContent>
    </>
  );
}

function Combos() {

  const [search, setSearch] = useState('');

  const lowerSearch = search.toLowerCase();

  const burguerSearch = burguersCombo.filter((burguer) => burguer.title.toLowerCase().includes(lowerSearch))

  return (
    <>
      <BurguerContent>
        <input
          className="search"
          placeholder="Buscar"
          type="text"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <ul>
          {burguerSearch.map((burguer) => (
            <li key={burguer.id}>
              <div className="front">
                <div className="price-container">
                  <div className="price-ok">
                    <p>null</p>
                  </div>
                  <div className="price">
                    <p>{burguer.price}</p>
                  </div>
                </div>
                <img src={burguer.img} alt="" />
                <div className="text">
                  <div className="title">
                    <h3>{burguer.title}</h3>
                  </div>
                  <p className="description">
                    {burguer.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </BurguerContent>
    </>
  );
}

function Hamburgueres() {
  const [search, setSearch] = useState('');

  const lowerSearch = search.toLowerCase();

  const burguerSearch = burguersSingle.filter((burguer) => burguer.title.toLowerCase().includes(lowerSearch))

  return (
    <>
      <BurguerContent>
        <input
          className="search"
          placeholder="Buscar"
          type="text"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <ul>
          {burguerSearch.map((burguer) => (
            <li key={burguer.id}>
              <div className="front">
                <div className="price-container">
                  <div className="price-ok">
                    <p>null</p>
                  </div>
                  <div className="price">
                    <p>{burguer.price}</p>
                  </div>
                </div>
                <img src={burguer.img} alt="" />
                <div className="text">
                  <div className="title">
                    <h3>{burguer.title}</h3>
                  </div>
                  <p className="description">
                    {burguer.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </BurguerContent>
    </>
  );
}

function Bebidas() {
  const [search, setSearch] = useState('');

  const lowerSearch = search.toLowerCase();

  const burguerSearch = drinks.filter((burguer) => burguer.title.toLowerCase().includes(lowerSearch))

  return (
    <>
      <BurguerContent>
        <input
          className="search"
          placeholder="Buscar"
          type="text"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <ul>
          {burguerSearch.map((burguer) => (
            <li key={burguer.id}>
              <div className="front">
                <div className="price-container">
                  <div className="price-ok">
                    <p>null</p>
                  </div>
                  <div className="price">
                    <p>{burguer.price}</p>
                  </div>
                </div>
                <img src={burguer.img} alt="" />
                <div className="text">
                  <div className="title">
                    <h3>{burguer.title}</h3>
                  </div>
                  <p className="description">
                    {burguer.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </BurguerContent>
    </>
  );
}

function Porcoes() {
  const [search, setSearch] = useState('');

  const lowerSearch = search.toLowerCase();

  const burguerSearch = portions.filter((burguer) => burguer.title.toLowerCase().includes(lowerSearch))

  return (
    <>
      <BurguerContent>
        <input
          className="search"
          placeholder="Buscar"
          type="text"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <ul>
          {burguerSearch.map((burguer) => (
            <li key={burguer.id}>
              <div className="front">
                <div className="price-container">
                  <div className="price-ok">
                    <p>null</p>
                  </div>
                  <div className="price">
                    <p>{burguer.price}</p>
                  </div>
                </div>
                <img src={burguer.img} alt="" />
                <div className="text">
                  <div className="title">
                    <h3>{burguer.title}</h3>
                  </div>
                  <p className="description">
                    {burguer.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </BurguerContent>
    </>
  );
}

function Saladas() {
  const [search, setSearch] = useState('');

  const lowerSearch = search.toLowerCase();

  const burguerSearch = salads.filter((burguer) => burguer.title.toLowerCase().includes(lowerSearch))

  return (
    <>
      <BurguerContent>
        <input
          className="search"
          placeholder="Buscar"
          type="text"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <ul>
          {burguerSearch.map((burguer) => (
            <li key={burguer.id}>
              <div className="front">
                <div className="price-container">
                  <div className="price-ok">
                    <p>null</p>
                  </div>
                  <div className="price">
                    <p>{burguer.price}</p>
                  </div>
                </div>
                <img src={burguer.img} alt="" />
                <div className="text">
                  <div className="title">
                    <h3>{burguer.title}</h3>
                  </div>
                  <p className="description">
                    {burguer.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </BurguerContent>
    </>
  );
}

function Molhos() {
  const [search, setSearch] = useState('');

  const lowerSearch = search.toLowerCase();

  const burguerSearch = sauces.filter((burguer) => burguer.title.toLowerCase().includes(lowerSearch))

  return (
    <>
      <BurguerContent>
        <input
          className="search"
          placeholder="Buscar"
          type="text"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <ul>
          {burguerSearch.map((burguer) => (
            <li key={burguer.id}>
              <div className="front">
                <div className="price-container">
                  <div className="price-ok">
                    <p>null</p>
                  </div>
                  <div className="price">
                    <p>{burguer.price}</p>
                  </div>
                </div>
                <img src={burguer.img} alt="" />
                <div className="text">
                  <div className="title">
                    <h3>{burguer.title}</h3>
                  </div>
                  <p className="description">
                    {burguer.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </BurguerContent>
    </>
  );
}