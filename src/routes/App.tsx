import ButtonNormal from "../components/ButtonNormal";
import CardVagas from "../components/CardVagas";
import { Link } from "react-router-dom";
import IconCheck from '../assets/icon-check.png';
import { getVagas } from "../data";
import Carrousel from "../components/Carrousel";
import "../css/main.css"

export default function App() {

  const lastVacancys = getVagas().slice(-3)

  return (
    <div>
      <header className="content-header-banner">
        <div className="content-banner">
          <h1>
            OPORTUNIDADES PARA <br />
            PROGRAMADR <span> FRONTEND </span>
          </h1>

          <div>
            <Link to="/vagas">
              <ButtonNormal textButton="VER NOSSAS VAGAS" />
            </Link>
          </div>

          <div>
            <p>
              Tenha acesso a diversas oportunidades para desenvolvedores. <br />
              Encontre a vaga para programador(a) Front-End, Back-End, Mobile ou Full Stack que você estava procurando.
            </p>
          </div>
        </div>
      </header>

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
            <ButtonNormal textButton="VER TODAS AS VAGAS" />
          </Link>
        </div>


        <div className="content-depoiment">
          <h1>Depoimentos Desenlvolvedores</h1>
          <Carrousel />
        </div>
      </section>
    </div>
  )
}


