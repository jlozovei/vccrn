import { Reset, StyledPage, StyledContent } from '@/styled';
import { Header, Footer } from '@/components';
import { LoginForm } from '@/containers';

function App() {
  return (
    <StyledPage>
      <Reset />
      <Header />

      <StyledContent>
        <LoginForm />
      </StyledContent>

      <Footer />
    </StyledPage>
  );
}

export default App;
