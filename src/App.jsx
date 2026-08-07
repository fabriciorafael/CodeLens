import { useState } from 'react';
import { analyzeCode } from './services/gemini';
import './App.css';
function App() {
  const [code, setCode] = useState('');
  const [loading, setloading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!code.trim()) return;
      
    setloading(true);
    setError("");
    setResult("");

      
    try {
    const analysis = await analyzeCode(code)
    console.log(analysis);
    setResult(analysis);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }finally {
      setloading(false);
    }

  };

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

        <button className="analyze-button" onClick={handleAnalyze} disabled={!code.trim() || loading}>
          {loading ? "Analisando código ..." : "Analisar Código"}
        </button>
  
        {error && <div className="error-message">{error}</div>}
          
        
      

       {result && (
        <div className="result-container">
          <h2 className="result-title">Análise o Código:</h2>
        

        <div className="result-content"> {result} </div>
        </div>
        )}
      </div>
    </main>
  );
}

export default App;
