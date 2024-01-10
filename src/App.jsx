import { FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa'
import './App.css';
import Header from './components/Header';
import { Section } from './components/Section';
import { ListItem } from './components/ListItem';



const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/category/league-of-legends",
    ImageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    ImageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",alt: "Imagem do jogo Valorant",
  },
         
  {
    url: "https://www.twitch.tv/directory/game/Fortnite",
    ImageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
    alt: "Imagem do jogo Fortnite",
  },
    
  {
    url: "https://www.twitch.tv/directory/category/red-dead-redemption-2",
    ImageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/493959_IGDB-285x380.jpg",
    alt:"Imagem do jogo Red Dead Redemption 2",
  },
]

const channelListData = [
  {
    url:"https://www.twitch.tv/casimito",
    ImageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-70x70.png",
    alt:"Imagem de Casimiro",
},


  {  url:"https://www.twitch.tv/alanzoka",
    ImageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-150x150.png",
    alt:"Imagem de Alanzoka"
  },

  {
    url:"https://www.twitch.tv/pinkwardlol",
    ImageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/728b6989-ba75-438a-9b7f-f4073d97a479-profile_image-70x70.png",
    alt:"Imagem de PinkWard"
  },
]


function App() {
  return (
    <div className="App">
      <header>
        <a href='/'>
        <Header />
        </a>
      </header>

      <main>

        <Section
          Title="Meus Jogos"
          Subtitle="Os games que eu mais curto jogar"
        >

          {/* itens da lista  */}
        {
          gamesListData.map(item => {
            return(
            <ListItem 
            Url={item.url}
            ImageUrl={item.ImageUrl}
            alt={item.alt}
            
            />) 
          })
        } 

        </Section>

        <Section
          Title="Canais e Streamers"
          Subtitle="Lista de canais e transmissões que gosto">
            
            {
              channelListData.map(item => {
                return(
                  <ListItem 
                  Url={item.url}
                  ImageUrl={item.ImageUrl}
                  alt={item.alt}
                  />)
              })
            }
        </Section>

        <Section

          Title="Minhas redes"
          Subtitle="Caso queira falar comigo">
          <div className="redesArea">
            <a href="https://github.com/ThalysonPin" target="_blank" rel="noreferrer" className="redes">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/ww.thalyson/" target="_blank" className="redes"><FaInstagram/></a>
            <a href="https://api.whatsapp.com/send?phone=5567984732575" className="redes">
              <FaWhatsapp />
            </a>
          </div>

        </Section>
      </main>
    </div>
  );
}

export default App;
