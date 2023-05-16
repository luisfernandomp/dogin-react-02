import "./styles.css";

export default function HomePage() {
  return (
    <main>
      <div className="Home">
        <div className="sliceRight">
          <div>
            <h1>Adaptação do cachorro</h1>
            <p>
              Quando receber um novo cãozinho em sua casa, prepare um lugar
              quentinho e confortável, que pode ser uma caixa ou uma caminha. Se
              puder, coloque objetos com o cheiro do lugar em que ele estava
              anteriormente, como um paninho, para que ele não estranhe muito o
              local. E se for um filhote, coloque um relógio enrolado em um
              tecido, pois o tic-tac vai imitar o coração da mãe dele,
              deixando-o mais calmo. Uma garrafa com água morna (MORNA, não
              quente !) envolta em uma toalha também ajuda.
            </p>
          </div>
          <img src="../../assets/images/dog1.png" alt="cachorro" />
        </div>

        <div className="sliceLeft">
          <img src="../../assets/images/food.png" alt="comida de cachorro" />
          <div>
            <h1>Alimentação</h1>
            <p>
              Deixe sempre água fresca para seu cachorro e longe do sol. Evite
              dar restos de comida, pois só a ração tem os nutrientes de que seu
              cão precisa em uma dosagem equilibrada. A ração não precisa ser
              misturada com água, leite nem comida. Para saber a quantidade
              certa, confira na embalagem da ração. Em todos os casos, não deixe
              a ração disponível por mais de uma hora, mesmo que o cão não tenha
              comido tudo. Se o cão não quiser comer, retire a comida, mas
              leve-o ao veterinário caso ele recuse três refeições seguidas.
            </p>
          </div>
        </div>

        <div className="sliceRight">
          <div>
            <h1>Higiene</h1>
            <p>
              Escove os pelos do seu cachorro diariamente. Nos casos dos cães de
              pelos longos, considere tosá-los, principalmente no verão. Dê
              banhos apenas quando ele estiver sujo, pois banho em excesso pode
              ressecar sua pele e pelagem. Use sempre produtos próprios para
              cães, de preferência sem cheiro ou com cheiro suave, pois o odor
              forte incomoda e prejudica o faro dos peludos.
            </p>
          </div>
          <img src="../../assets/images/dog2.png" alt="cachorro" />
        </div>
      </div>
    </main>
  );
}
