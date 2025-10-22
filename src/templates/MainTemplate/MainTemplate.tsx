import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";

type MainTemplateProps = {
	children: React.ReactNode;
};

export default function MainTemplate({ children }: MainTemplateProps) {
	return( 
        <main>
            <>
            <Container>
                <Logo />
            </Container>

            <Container>
               <Menu />
            </Container>  

            { children}   

            <Container>
               <Footer />
            </Container>  
        </>
        </main>
                      
);
}