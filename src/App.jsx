import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import leaves1Url from "./resources/laves_1.png";
import Logo from "./resources/Logo.svg";
import openaiLogo from "./assets/openia.png";
import codeLogo from "./assets/opencode.png";
/* import antigravityLogo from "./assets/Google.png"; */
import "github-markdown-css/github-markdown-dark.css";
import ReactMarkdown from "react-markdown";
import prompts from "./resources/prompts.md?raw";

function App() {
  const [show, setShow] = useState(false);
  const promptRef = useRef(null);

  const handleTogglePrompt = () => {
    const nextShow = !show;
    setShow(nextShow);

    if (nextShow) {
      requestAnimationFrame(() => {
        promptRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  return (
    <>
      <header className="header">
        <div className="header_main">
          <div className="header_spinner2"></div>
          <div className="header_spinner_closer2"></div>
          <div className="header_spinner">
            <div className="innersphere innersphere1"></div>
            <div className="innersphere innersphere2"></div>
            <div className="innersphere innersphere3"></div>
            <div className="innersphere innersphere4"></div>
          </div>

          <section className="header_controlbox">
            <div className="authContainer">
              <span className="author">Sebastian sosa</span>
              <span className="subAuth">Creative Coding Adventures</span>
            </div>

          </section>
        </div>
      </header>
      <div className="main">
        <a className="item item-antigravity" href="https://animas-ss.github.io/Dolce_Vita_Noelia_AG" target="_blank" rel="noopener noreferrer">
          <img src={`${import.meta.env.BASE_URL}Google.png`} alt="Antigravity Logo" className="logos antigravity-logo" />
        </a>
        <div className="item item-openai" onClick={handleTogglePrompt}>
          <img src={openaiLogo} alt="OpenAI Logo" className="logos openai-logo" />
        </div>
        <a className="item item-opencode" href="https://animas-ss.github.io/Dolce_Vita_Noelia_OC" target="_blank" rel="noopener noreferrer">
          <img src={codeLogo} alt="Code Logo" className="logos code-logo" />
        </a>
      </div>
      <div ref={promptRef} className={show ? "promptContainerShow" : "promptContainer"}>
      <div className="markdownper">
        <ReactMarkdown>
           {prompts}
        </ReactMarkdown>
      </div>
      </div>
    </>
  );
}

export default App;
