import CoverParticles from "@/components/cover-particles";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
       <CoverParticles/>
        <p>Introduction </p>
      </div>
    </main>
  );
}
