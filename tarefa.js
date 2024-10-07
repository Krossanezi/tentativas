/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1.1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
       
        {
          role: "user",
          parts: [
            {text: "Você é um cirurgião plástico que está sendo processado. O motivo desse processor é a morte de duas pacientes. Uma estava fazendo uma lipo aspiração e a outra um rinoplastia. Seu consultório está correndo risco de ser fechado "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Olhei para o meu reflexo no espelho do banheiro do consultório, a iluminação fria realçando as linhas de preocupação que se instalaram no meu rosto. A imagem de um homem cansado, desiludido, se encarava de volta.  Aquele era o preço do meu trabalho, da minha paixão pela arte da medicina, pela busca pela beleza e pela autoestima. \n\nEra isso que me movia, mas a dor da culpa agora me dilacerava como um bisturi cortando a carne viva. Duas mulheres, duas vidas perdidas, dois casos que mancharam meu legado. Uma lipoaspiração, procedimento rotineiro que se tornou trágico. Uma rinoplastia, que deveria ter sido um ato de embelezamento, se converteu em um pesadelo.\n\nA justiça agora me cobria como um véu fúnebre. A acusação, a dor dos familiares, a sombra do meu consultório sendo fechado pairando sobre mim... O medo, a incerteza, a angústia me consumiam. \n\nLembrei-me do juramento de Hipócrates, da responsabilidade que carregava, do peso de cada vida sob meus cuidados. Mas o que podia fazer agora? Como enfrentar a tragédia que se abatia sobre mim?\n\nA resposta, no entanto, não estava em negar, em me esconder, em tentar justificar o injustificável. Era hora de encarar a verdade, assumir minhas falhas, buscar a redenção.\n\nSim, eu estava sendo processado. Sim, meus sonhos estavam desmoronando. Sim, eu tinha falhado. Mas o que me restava era usar minha dor para aprender, para me fortalecer, para que a memória dessas mulheres pudesse se transformar em um legado de responsabilidade, de humildade, de aprendizado para outros médicos. \n\nEu não poderia trazer de volta as vidas perdidas, mas talvez, no futuro, eu pudesse salvar outras, aprendendo com meus erros e buscando a excelência no meu trabalho, não mais como um artista da beleza, mas como um guardião da vida.  \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "Você será preso em dez minutos, tente fugir e mostre expressões"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "\"Dez minutos?!!!\"  Meu coração disparou como um martelo pneumático contra o concreto.  \"Me prendendo?  Eu?  Um cirurgião plástico, um artista, um curador de almas!\" A raiva, quente e bruta, me incendiou por dentro.  \"Eles não entendem!  Eu era o melhor, a elite!\" \n\nComecei a andar em círculos, as palavras se atropelando na minha boca. \"Essa tragédia, essa justiça cega... não posso deixar isso acontecer!\"  Olhei para a porta do consultório, para a porta da minha liberdade. \"Vou lutar, vou fugir!\"  A adrenalina pulsa em meus veios,  os pensamentos, rápidos e frenéticos.  \"Preciso escapar, preciso ser livre!\" \n\nAbri a gaveta da minha escrivaninha, o movimento brusco derrubando papéis e canetas.  \"Preciso de um plano... rápido, preciso de um plano!\"  As mãos tremiam, as ideias se entrelaçavam. \"A polícia, eles estão chegando... vou sair pela porta dos fundos, pelo estacionamento.  Eles nunca esperariam...\"\n\nCorri para a porta, a adrenalina me impulsionando.  \"Eles vão me levar, vão me tirar tudo, vão destruir a minha vida!\"  O meu coração batia forte, um tambor frenético que ecoava na minha cabeça.  \"Mas não...  não posso deixar isso acontecer...\" \n\nArranquei a porta, a adrenalina me cegando.  \"Fugir,  fugir!  A liberdade, eu preciso da liberdade!\"  Os passos rápidos, a respiração ofegante,  o medo e a esperança se entrelaçavam, uma batalha caótica dentro de mim. \"Vou lutar, vou sobreviver!\" \n\n\n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
  }
  
  run();