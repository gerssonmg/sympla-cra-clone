import { Box, Button, Typography } from '@mui/material';

const Description = () => {
  return (
    <Box mt={4} display="flex" flexDirection="column" alignItems="center">
      <img src="/imagens/show.jpg" alt="" />

      <Box bgcolor="#424242" p={4} borderRadius={8}>
        <Box display="flex" alignItems="center" mb={2}>
          <Button variant="contained" color="success">
            Comprar Ingresso
          </Button>
          <Typography sx={{ ml: 2 }}>R$197,90</Typography>
        </Box>

        <Typography sx={{ mb: 4 }}>
          JOTA QUEST | DIAS MELHORES RS: MÚSICA E SOLIDARIEDADE - 14/07/24
        </Typography>
        <Typography>Domingo às 20h00 14 de Julho</Typography>
        <Typography sx={{ mb: 2 }}>
          Araújo Vianna - Parque Farroupilha, 685, Porto Alegre - Rio Grande do
          Sul
        </Typography>
        <hr />
        <Typography sx={{ ml: 2, mt: 4, mb: 2 }}>
          DESCRIÇÃO DO EVENTO
        </Typography>
        <Typography sx={{ ml: 4 }} align="justify">
          Com intuito de arrecadar fundos para a reconstrução e para o apoio às
          vítimas das enchentes no Rio Grande do Sul, o Jota Quest vai retornar
          especialmente a Porto Alegre, nos dias 13 e 14 de julho, para dois
          espetáculos 100% beneficentes no Auditório Araújo Vianna. Em parceria
          com a Opinião Produtora, os shows fazem parte das ações do projeto
          RSNASCE e terão o apoio da Rádio Atlântida e da RBS TV. Há dois anos
          na estrada com sua turnê “JOTA25”, que celebra a sua trajetória de 25
          anos de sucesso, a banda teve sua última passagem pela capital gaúcha
          há exatamente um ano, quando realizou, no Estádio Beira-Rio, o maior
          show solo da sua carreira. O espetáculo memorável foi transmitido ao
          vivo para todo país, através do canal Multishow. “Seremos eternamente
          gratos a todo o carinho e apoio que sempre recebemos do povo gaúcho,
          desde o início de nossa caminhada até os dias de hoje. Não víamos a
          hora de poder fazer algo mais significativo em prol desta importante
          reconstrução já em curso em todo o Estado”, comenta Rogério Flausino,
          cantor e compositor. “Os shows solidários, em parceria com a Opinião
          Produtora, nossos amigos de longa data, serão também para que possamos
          nos rever, nos abraçar e cantar juntos por esses tão necessários ‘dias
          melhores’”, finaliza. Além dessas apresentações anunciadas agora em
          Porto Alegre, o grupo vem participando de outros encontros musicais
          solidários e também recolhendo donativos ao Rio Grande do Sul, com
          seus fãs, em dois grandes shows da turnê ‘JOTA25’ realizados
          recentemente – um em Belo Horizonte, no Estádio Mineirão; e outro em
          São Paulo, no Estádio Allianz Parque. A criação do “Ingresso Solidário
          RS” tem o objetivo de angariar alimentos não perecíveis e água mineral
          a serem enviadas ao Rio Grande do Sul. RSNASCE (@rsnasceoficial)
        </Typography>
      </Box>
    </Box>
  );
};

export default Description;
