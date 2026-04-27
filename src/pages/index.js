import Head from "next/head";
import estilos from "@/styles/Home.module.css";
import { Topo } from "@/componentes";
import Rodape from "@/componentes/Rodape";

export default function Home() {
  return (
    <>
      <Head>
        <title>Óticas Vida - Loja de óculos</title>
        <meta
          name="description"
          content="Óticas Vida - preços baixos em óculos de grau, sol e transition."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topo />
      <main className={estilos.principal}>
        <section className={estilos.capa} id="inicio">
          <div className={estilos.sobreposicaoCapa} />
          <div className={estilos.conteudoCapa}>
            <span className={estilos.subtituloCapa}>Preços baixos em</span>
            <h1>Óculos de grau e de sol</h1>
            <p>Você só encontra aqui</p>
          </div>
        </section>

        <section className={estilos.secao} id="produtos">
          <div className={estilos.cabecalhoSecao}>
            <span className={estilos.rotuloSecao}>NOSSOS PRODUTOS</span>
            <p>
              Trabalhamos com óculos de grau, óculos de sol, lentes transition nos
              modelos masculino, feminino e infantil.
            </p>
            <p>
              Todos os nossos preços são acessíveis e contam com a melhor qualidade
              do mercado.
            </p>
          </div>

          <div className={estilos.gradeProdutos}>
            <article className={estilos.cardProduto}>
              <img src="/oculos01.png" alt="Óculos de grau" />
              <h3>Óculos de grau</h3>
              <span>R$ 500,00</span>
            </article>
            <article className={estilos.cardProduto}>
              <img src="/oculos04.png" alt="Óculos transition" />
              <h3>Óculos transition</h3>
              <span>R$ 750,00</span>
            </article>
            <article className={estilos.cardProduto}>
              <img src="/oculos02.png" alt="Óculos de sol" />
              <h3>Óculos de sol</h3>
              <span>R$ 700,00</span>
            </article>
            <article className={estilos.cardProduto}>
              <img src="/oculos03.png" alt="Óculos infantil" />
              <h3>Óculos infantil</h3>
              <span>R$ 500,00</span>
            </article>
          </div>

          <div className={estilos.infoProduto}>
            <span>Todos os nossos produtos incluem:</span>
            <ul>
              <li>Garantia de 1 ano</li>
              <li>Manutenção preventiva</li>
              <li>Descontos especiais na compra da segunda unidade</li>
              <li>Flexibilidade de pagamento</li>
            </ul>
          </div>
        </section>

        <section className={estilos.secao} id="sobre">
          <div className={estilos.cabecalhoSecao}>
            <span className={estilos.rotuloSecao}>QUEM SOMOS NÓS?</span>
            <p>
              Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas Vida
              iniciou suas atividades focada no atendimento ao público de renda
              mais baixa, sempre com o objetivo de proporcionar ao cliente bom
              atendimento, qualidade e preço baixo.
            </p>
          </div>

          <div className={estilos.gradeSobre}>
            <div className={estilos.imagemSobre}>
              <img src="/atendimento.png" alt="Atendimento flexível" />
            </div>
            <div className={estilos.cardSobre}>
              <h3>NOSSAS FILIAIS</h3>
              <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
            </div>
            <div className={estilos.cardSobre}>
              <h3>ATENDIMENTO FLEXÍVEL</h3>
              <p>Nossa equipe possui é treinada para te atender</p>
            </div>
            <div className={estilos.imagemSobre}>
              <img src="/loja.png" alt="Nossa loja" />
            </div>
          </div>
        </section>

        <section className={estilos.contato} id="contato">
          <h2>FALE CONOSCO</h2>
          <p>
            Não perca tempo, venha conhecer uma de nossas lojas ou entre em
            contato através de nossas redes sociais ou da central de atendimento.
          </p>

          <div className={estilos.gradeContato}>
            <div className={estilos.cartaoContato}>
              <h3>Contato</h3>
              <p><img src="/local.png" alt="local" className={estilos.icone} />Nova Iguaçu, RJ</p>
              <p><img src="/telefone.png" alt="telefone" className={estilos.icone} />(21) 9999-9999</p>
              <p><img src="/email.png" alt="email" className={estilos.icone} />contato@oticavida.com</p>
            </div>
            <div className={estilos.cartaoContato}>
              <h3>Nossas Redes Sociais</h3>
              <p><img src="/fb.png" alt="facebook" className={estilos.icone} />/OticaVida</p>
              <p><img src="/ig.png" alt="instagram" className={estilos.icone} />@oticavidarj</p>
              <p><img src="/tt.png" alt="twitter" className={estilos.icone} />@oticavidarj</p>
            </div>
          </div>
        </section>
      </main>
      <Rodape />
    </>
  );
}
