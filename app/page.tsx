"use client";
import { useState, type CSSProperties } from "react";

const frameworks = [
  {
    title: "React.JS",
    logo: "/react-logo-xs.png",
    alt: "React Logo",
    description: "usando a biblioteca React para renderizar UI",

    theme: {
      background: "#181c1f",
      surface: "#282f33",
      surfaceLight: "#2d3942",
      primary: "#48d9f3",
      primaryLight: "#82c2ce",
      text: "#e0eff1",
      textSoft: "#bdd1d4",
    },

    tabs: [
      {
        title: "Porque React?",
        content: [
          "O React é extremamente popular",
          "Ele torna a criação de interfaces complexas e interativas muito mais fácil",
          "É poderoso e flexível",
          "Possui um ecossistema muito ativo e versátil",
        ],
      },

      {
        title: "Conceitos Fundamentais",
        content: [
          "Componentes, JSX e Props",
          "Estado",
          "Hooks (ex: useEffect())",
          "Renderização dinâmica",
        ],
      },

      {
        title: "Recursos e Ecossistema",
        content: [
          "Página oficial (react.dev)",
          "Next.js (framework fullstack)",
          "React Native (crie aplicativos mobile nativos com React)",
        ],
      },

      {
        title: "Programação Declarativa",
        content: [
          "JavaScript puro exige programação imperativa",
          "Programação imperativa: você define todos os passos necessários para alcançar um resultado",
          "Já o React adota programação declarativa",
          "Com React, você define o objetivo e o React descobre como chegar lá",
        ],
      },
    ],
  },

  {
    title: "Vue.js",
    logo: "/vue-logo-xs.png",
    alt: "Vue Logo",
    description: "usando o framework Vue para renderizar UI",

    theme: {
      background: "#0f1720",
      surface: "#1b2a34",
      surfaceLight: "#243744",
      primary: "#42b883",
      primaryLight: "#7ad8af",
      text: "#ecf8f3",
      textSoft: "#b7d6cb",
    },

    tabs: [
      {
        title: "Porque Vue?",
        content: [
          "O Vue é extremamente popular",
          "É simples de aprender",
          "Possui ótima performance",
          "Tem um ecossistema moderno e flexível",
        ],
      },

      {
        title: "Conceitos Fundamentais",
        content: [
          "Componentes",
          "Diretivas",
          "Reatividade",
          "Computed Properties",
        ],
      },

      {
        title: "Recursos e Ecossistema",
        content: [
          "Página oficial (vuejs.org)",
          "Nuxt.js (framework fullstack)",
          "Pinia (gerenciamento de estado)",
        ],
      },

      {
        title: "Programação Declarativa",
        content: [
          "Vue também utiliza programação declarativa",
          "Você descreve a UI",
          "O Vue atualiza o DOM automaticamente",
          "Menos manipulação manual do DOM",
        ],
      },
    ],
  },

  {
    title: "Angular",
    logo: "/angular-logo-xs.png",
    alt: "Angular Logo",
    description: "usando o framework Angular para renderizar UI",

    theme: {
      background: "#111217",
      surface: "#1d212b",
      surfaceLight: "#2a3040",
      primary: "#c3002f",
      primaryLight: "#ff6b8a",
      text: "#f5f7fa",
      textSoft: "#b8c1cc",
    },

    tabs: [
      {
        title: "Porque Angular?",
        content: [
          "Angular é um framework completo e robusto",
          "Ele é mantido pelo Google e tem uma grande comunidade de desenvolvedores",
          "Oferece uma estrutura sólida para desenvolvimento de aplicações complexas",
          "Possui uma ampla gama de recursos integrados, como roteamento, formulários e comunicação com APIs",
        ],
      },

      {
        title: "Conceitos Fundamentais",
        content: [
          "Componentes e Templates",
          "Diretivas",
          "Injeção de Dependência",
          "RxJS e Programação Reativa",
        ],
      },

      {
        title: "Recursos e Ecossistema",
        content: [
          "Página oficial (angular.io)",
          "Angular Material (biblioteca de componentes UI)",
          "NgRx (gerenciamento de estado)",
        ],
      },

      {
        title: "Programação Declarativa",
        content: [
          "Angular também adota programação declarativa",
          "Você define a estrutura da UI usando templates",
          "O Angular cuida da atualização do DOM automaticamente",
          "Menos manipulação manual do DOM",
        ],
      },
    ],
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [frameworkAtual, setFrameworkAtual] = useState(0);

  const framework = frameworks[frameworkAtual];
  const proximoFramework = frameworks[(frameworkAtual + 1) % frameworks.length];
  const style = {
    backgroundColor: framework.theme.background,
    color: framework.theme.textSoft,
    minHeight: "100vh",
    padding: "2rem",

    "--color-surface": framework.theme.surface,
    "--color-surface-light": framework.theme.surfaceLight,
    "--color-primary": framework.theme.primary,
    "--color-primary-light": framework.theme.primaryLight,
    "--color-text": framework.theme.text,
    "--color-text-soft": framework.theme.textSoft,
  } as CSSProperties & Record<string, string>;

  return (
    <div style={style}>
      <header>
        <img src={framework.logo} alt={framework.alt} />

        <div>
          <h1>{framework.title}</h1>

          <p>i.e., {framework.description}</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          {framework.tabs.map((tab, index) => (
            <button
              key={tab.title}
              onClick={() => setCurrentIndex(index)}
              className={index === currentIndex ? "active" : ""}
            >
              {tab.title}
            </button>
          ))}
        </menu>

        <div id="tab-content">
          <ul>
            {framework.tabs[currentIndex].content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <button
          className="switch-framework"
          onClick={() => {
            setFrameworkAtual((prev) => (prev + 1) % frameworks.length);
            setCurrentIndex(0);
          }}
        >
          Certo, mas agora vamos ver sobre {proximoFramework.title}!
        </button>
      </div>
    </div>
  );
}
