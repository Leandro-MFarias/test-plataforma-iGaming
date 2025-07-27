import styles from "./footer.module.css";
import logo from "../../assets/uxbet-footer.png";
import pix from "../../assets/pix.png";
import insta from "../../assets/insta.png";
import msg from "../../assets/mensage.png";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo da uxbet" className={styles.logo} />
      
      <div className={styles.line} />

      <div className={styles.informations}>
        <div className={styles.about}>
          <p>
            A ux.bet.br é operada pela Reals Brasil LTDA, uma empresa registrada
            sob o CNPJ nº 56.197.912/0001-50, licenciada - em nível federal -
            pela Secretaria de Prêmios e Apostas do Ministério da Fazenda
            (“SPA/MF”) no Brasil com o número de Autorização SPA/MF n° 2.104 - 7
            datada de 30 de Dezembro de 2024 (publicada em 31/12/2024).
          </p>

          <div>
            <span>Ouvidoria: Telefone: 0800 591 9481</span>
            <span>suporte@uxbet.com.br</span>
            <span>Segunda a sexta, das 9:00 às 18:00h, exceto feriados</span>
          </div>
        </div>

        <div className={styles.institutional}>
          <h3>Institucional</h3>
          <p>Quem somos</p>
          <p>Instalar APP Cliente</p>
          <p>Regras</p>
          <p>Política de privacidade</p>
          <p>Política AML</p>
          <p>Jogo responsável</p>
          <p>Termos e condições</p>
        </div>

        <div className={styles.paymentAndSocial}>
          <div>
            <h3>Métodos de pagamento</h3>
            <img src={pix} alt="picon do pix" className={styles.pix} />
          </div>

          <div>
            <h3>Siga nossas redes sociais</h3>
            <img src={insta} alt="ícone do instagram" className={styles.insta} />
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>2025 © UX. Todos os direitos reservados.</p>
        <p>Versão 2.23</p>
      </div>

      <div className={styles.msg}>
        <img src={msg} alt="Envie uma mensagem" />
      </div>
    </footer>
  );
}
