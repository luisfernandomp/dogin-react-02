import "./styles.css";

export default function SobrePage() {
  return (
    <main>
      <div className="About">
        <h1>Sobre nós</h1>
        <p>
          Desenvolvido como exemplo de website para a disciplina de WebMobile do
          Prof. Joaquim Pessôa Filho. Os dados aqui utilizados foramr etirados
          de sites diversos. Segue a relação:
        </p>
        <ul>
          <li>https://love.doghero.com.br/racas-de-cachorro/</li>
          <li>https://site.amigonaosecompra.com.br/dicas-cuidar-cachorro/</li>
        </ul>

        <img src="../../assets/images/dogs.png" alt="cachorros" />
      </div>
    </main>
  );
}
