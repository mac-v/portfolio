import Header from './Header';

import TechStack from './TechStack';
import MyProjects from './ProjectsSection';

import ProfileCard from './HeroSection';
import CardSection from './CardSection';
import MyForm from './Form';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />
      <ProfileCard />
      <CardSection />
      <TechStack />
      <MyProjects />
      <MyForm />
      <Footer />
    </>
  );
};

export default App;
