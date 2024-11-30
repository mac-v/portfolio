import React from 'react';
import Header from './Header';

import TechStack from './TechStack';
import MyProjects from './MyProjects';

import ProfileCard from './HeroSection';
import CardSection from './CardSection';
import MyForm from './MyForm';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <ProfileCard></ProfileCard>
      <CardSection></CardSection>
      <TechStack></TechStack>
      <MyProjects></MyProjects>
      <MyForm></MyForm>
      <Footer></Footer>
    </div>
  );
};

export default App;
