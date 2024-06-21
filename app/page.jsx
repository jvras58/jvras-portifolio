import Photo from "@/components/Photo";
import Rede from "@/components/Rede";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
      {/* texto */}
      <div className="text-center xl:text-left order-2 xl:order-none">
        <span className="text-xl">Engenheiro de Software</span>
        <h1 className="h1 mb-6">
          Olá Eu sou <br/> <span className="text-accent">Jonathas Vinicius</span>
        </h1>
        <p className="max-w-[500px] mb-9 text-white/80"> 
        Sou Desenvolvedor Full Stack, Monitor de Engenharia de Software e Bolsista de Inovação e Tecnologia no STI-LABS. Participo de um projeto voluntário na @SouJunior Labs.
        </p>
        {/* botão e redes Rede */}
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <Button
          variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2"
          >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Button>
          <div className="mb-8 xl:mb-0">
            <Rede containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:text-primary hover:transition-all duration-500"/>
          </div>
        </div>
      </div>
      {/* foto */}
      <div className="order-1 xl:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
      </div>
      </div>
      <Stats />
    </section>
  );
}
export default Home;