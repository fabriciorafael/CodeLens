import { useState } from 'react'
import './App.css'
function App() {
  const[code, setCode] = useState('');

  const handleAnalyze = () => {

  }

  return (
    <main>
       <div className="container">
        <h1 className="title">
          Analisador de código com IA
        </h1>
        <h3 className='subtitle'>
          Cole seu código e descubra como melhorá-lo
        </h3>

        <div className="input-group">
          <textarea 
            className="code-textarea" 
            placeholder="Cole seu código aqui(javaScript, HTML,CSS, etc ...)" 
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
        </div>

        <button className="analyze-button" onClick={handleAnalyze} disabled={!code.trim()  ||loading}>
          Analisar Código
        </button>

        <div className="error-message">
          deu erro
        </div>

        <div className="result-container">
          <h2 className="result-title">Análise do ódigo</h2>
        </div>

        <div className="result-content">
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </div>



       </div>
    </main>
  )
}

export default App
