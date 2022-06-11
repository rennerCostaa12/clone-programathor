import ButtonNormal from "../components/ButtonNormal";
import CardVagas from "../components/CardVagas";
import { Link } from "react-router-dom";
import IconCheck from '../assets/icon-check.png';
import ImageVacancie from '../assets/vancancies-img.png';
import { getVagas } from "../data";
import Carrousel from "../components/Carrousel";
import "../css/main.css"
import "../css/responsive.css";

export default function App() {

  const lastVacancys = getVagas().slice(-3)

  return (
    <div>
      <section className="content-header-banner">
        <div className="content-banner">
          <h1>
            OPORTUNIDADES PARA <br />
            PROGRAMADR <span> FRONTEND </span>
          </h1>

          <div>
            <Link to="/vagas">
              <ButtonNormal textButton="VER NOSSAS VAGAS" colorBtn="#32b796" />
            </Link>
          </div>

          <div>
            <p>
              Tenha acesso a diversas oportunidades para desenvolvedores. <br />
              Encontre a vaga para programador(a) Front-End, Back-End, Mobile ou Full Stack que você estava procurando.
            </p>
          </div>
        </div>
      </section>

      <section className="content-merchan">
        <div>
          <div>
            <img src={IconCheck} alt="icon-check" />
            <h1>Só para programadores</h1>
          </div>
          <p>
            Somos uma plataforma 100% dedicada ao <span className="emphasis-text">recrutamento de programadores</span>
          </p>
        </div>

        <div>
          <div>
            <img src={IconCheck} alt="icon-check" />
            <h1>100% gratuito</h1>
          </div>
          <p>
            Basta se cadastrar e completar o perfil para se candidatar <span className="emphasis-text">gratuitamente</span> a qualquer
            vaga compatível com você.
          </p>
        </div>

        <div>
          <div>
            <img src={IconCheck} alt="icon-check" />
            <h1>Alertas de Matching</h1>
          </div>
          <p>
            Nosso sistema de matching permite que você <span className="emphasis-text">seja notificado</span> apenas em casos de
            compatibilidade com uma nova vaga.
          </p>
        </div>
      </section>

      <section className="content-last-vacancies">
        <h1 className="title-last-vacancies">Nossas últimas vagas</h1>
        <div className="content-cards-vacancy">
          {lastVacancys.map((value, key) => {
            return (
              <div className="cards-vacancy" key={key}>
                <CardVagas
                  nameVacancy={value.name}
                  typeVacancy={value.tipo}
                  levelVacancy={value.nivel}
                  wageVacancy={value.salario}
                  sourceImage={value.image}
                />
              </div>
            )
          })}
        </div>

        <div className="content-btn-all-vacancies">
          <Link to="/vagas">
            <ButtonNormal textButton="VER TODAS AS VAGAS" colorBtn="#32b796" />
          </Link>
        </div>

      </section>

      <section className="content-depoiment">
        <h1>Depoimentos Desenlvolvedores</h1>
        <Carrousel />
      </section>

      <section className="container-vacancies">
        <div className="content-vacancies">
          <div className="content-image-person">
            <img src={ImageVacancie} alt="image-person-jumping" />
          </div>

          <div className="content-description-vacancies">
            <h4>Descubra o salário médio para cada linguagem de programação.</h4>

            <p>
              Você gostaria de saber qual é o salário médio para cada linguagem de programação?
              A ProgramaThor coloca à sua disposição uma ferramenta que expõe a média salarial praticada
              no mercado em função da linguagem e do nível de experiência dos candidatos.
            </p>

            <ButtonNormal textButton="VER SALÁRIOS DE TI" colorBtn="#34495E" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <small>Clone do Programathor - https://programathor.com.br/</small>
        <div>
          <ul className="midia-socials">
            <li>
              <a href="https://github.com/rennerCostaa12"><i className="fab fa-github"></i></a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/renner-costa-098a101a0/"><i className="fab fa-linkedin"></i></a>
            </li>

            <li>
              <a href="https://www.instagram.com/rennercostaa/"><i className="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>

        <span>Desenvolvido por Renner Costa</span>
      </footer>
    </div >
  )
}


