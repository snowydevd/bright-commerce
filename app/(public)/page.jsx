import Image from "next/image";
import Logo from "../../public/logo.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="w-8/12  mt-32 flex flex-col justify-center items-center">
        <div className="dark:bg-white dark:text-black w-fit p-3 rounded-lg text-center">
          <h1 className=" font-brasika text-6xl lg:text-9xl gradiente">Nous</h1>
          <h2 className=" font-brasika text-5xl lg:text-8xl gradiente">
            Visions
          </h2>
        </div>
        <div className="text-2xl text-right mt-3 font-light font-brasika">
          <p>Visión Clara, Compras Sencillas.</p>
        </div>
      </section>
    </main>
  );
}
