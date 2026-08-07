import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function analyzeCode(code) {
    const prompt = `
     Analise o seguinte código e forneça sugestões de melhorias de forma didática e clara:
   
    ${code}
   
    Por favor, avalie:
    1. Possíveis bugs ou erros
    2. Melhorias de performance
    3. Boas práticas de código
    4. Legibilidade e manutenibilidade
    5. Sugestões específicas de otimização
   
    IMPORTANTE:
    - Explique o problema e solução como se eu fosse um iniciante em programação
    - Seja claro e didático em português

    Seja CONCISO. Retorne apenas:
    
    ❌ PRINCIPAL PROBLEMA:
    [1 problema mais crítico]
    
    ✅ SOLUÇÃO RÁPIDA:
    [1 sugestão principal]
    
    Máximo 3 frases. Direto ao ponto.
  `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Erro ao analisar código", error);
        throw new Error("Erro ao conectar com a IA. Verifique sua chave de API.");
    }
}