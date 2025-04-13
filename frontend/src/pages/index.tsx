import Header from "@/components/Header";
import ProfileCard from "@/components/HeroSection";
import CardSection from "@/components/CardSection";
import TechStack from "@/components/TechStack";
import MyProjects from "@/components/ProjectsSection";
import MyForm from "@/components/Form";
import Footer from "@/components/Footer";


export default function Home() {
    return (
        <>
            <Header/>
            <ProfileCard/>
            <CardSection/>
            <TechStack/>
            <MyProjects/>
            <MyForm/>
            <Footer/>
        </>
    );
}