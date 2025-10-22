import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import Container from "../../components/Container/Container";
import CountDown from "../../components/CountDown/CountDown";
import MainForm from "../../components/MainForm/MainForm";
import { useEffect } from "react";



export default function Home(){
  useEffect(() => {
    document.title = 'PomoClock - Foco e Produtividade com a Técnica Pomodoro';
  }, []);

	return( 
       <MainTemplate  >
         
         <Container>
            <CountDown />
        </Container> 

         <Container>
            <MainForm />
        </Container> 

       </MainTemplate>
                      
);
}