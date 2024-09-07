let campeoes = [
    {
        nome: "Blitzcrank",
        descricao: "Blitzcrank é um golem de vapor criado por um cientista yordle para proteger Zaun. Com uma força bruta e uma inteligência artificial em constante evolução, Blitzcrank desenvolveu uma fascinação pela sociedade humana. Seu gancho mecânico, além de ser uma arma letal, serve para puxar seus inimigos para perto. Apesar de sua aparência intimidante, Blitzcrank busca a conexão com os outros e sonha em entender o significado da amizade.",
        link: "https://universe.leagueoflegends.com/pt_BR/champion/blitzcrank/"
    },
    {
        nome: "Lux",
        descricao: "Lux é uma jovem magíca de Demacia que luta para conciliar seus poderes com as tradições rígidas de sua cidade. Dominando a luz como ninguém, ela utiliza seus feitiços para proteger seus aliados e incapacitar seus inimigos. Apesar de sua natureza gentil, Lux não hesita em defender o que acredita ser justo, mesmo que isso signifique desafiar as autoridades. Com sua inteligência e beleza, Lux é uma das campeãs mais populares de Runeterra.",
        link: "https://universe.leagueoflegends.com/pt_BR/champion/lux/"
    },
    {
        nome: "Riven",
        descricao: "Riven, a Exilada, é uma campeã icônica de League of Legends que carrega consigo uma história rica e complexa. Uma vez uma espadachim leal e habilidosa nas forças armadas de Noxus, sua fé na nação foi abalada durante a invasão de Ionia. Após um ato trágico e impensável, Riven se exilou, buscando redenção em um mundo que ela ajudou a devastar. Sua lâmina rúnica, quebrada em três pedaços, é um lembrete constante de seu passado e da culpa que a assombra. Com maestria e agilidade, Riven domina a arte da espada, utilizando sua raiva e dor como combustível para suas habilidades devastadoras. Sua jornada é marcada pela busca por identidade e pelo desejo de superar seus próprios demônios.",
        link: "https://universe.leagueoflegends.com/pt_BR/champion/riven/"
    },
];

/*
const axios = require('axios');

const API_KEY = 'RGAPI-31b27904-3685-4b8b-8824-cb379005f810'; // Substitua pela sua chave de API
const URL = `https://euw1.api.riotgames.com/lol/static-data/v3/champions?dataById=true&api_key=${API_KEY}`;

axios.get(URL)
  .then(response => {
    const champions = response.data.data;

    // Iterando sobre os campeões e imprimindo nome e descrição
    for (const championId in champions) {
      const champion = champions[championId];
      console.log(`Nome: ${champion.name}`);
      console.log(`Descrição: ${champion.title}`);
      console.log('--------------------');
    }
  })
  .catch(error => {
    console.error(error);
  });
*/