import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <TransitionPage/>
      <div className="flex max-w-screen-xl min-h-screen justify-center items-center mx-auto px-4 ">
        <CoverParticles />
        <Introduction/>
        {/* <p>Introduction </p> */}    
      </div>
    </main>
  );
}
//flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover bg-red-900 