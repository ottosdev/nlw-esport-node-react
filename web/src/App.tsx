import "./styles/main.css";
import logo from "./assets/logo.svg";
import { MagnifyingGlassPlus } from "phosphor-react";
export function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logo} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradiant bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16 ">
        <a className="relative rounded-lg overflow-hidden">
          <img src="/image1.png" alt="" />

          <div className="w-full pt-16 px-4 pb-4 bg-game-gradient absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
        <a className="relative rounded-lg">
          <img src="/image2.png" alt="" />

          <div className="w-full pt-16 px-4 pb-4 bg-game-gradient absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
        <a className="relative rounded-lg">
          <img src="/image3.png" alt="" />

          <div className="w-full pt-16 px-4 pb-4 bg-game-gradient absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
        <a className="relative rounded-lg">
          <img src="/image5.png" alt="" />

          <div className="w-full pt-16 px-4 pb-4 bg-game-gradient absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
        <a className="relative rounded-lg">
          <img src="/image6.png" alt="" />

          <div className="w-full pt-16 px-4 pb-4 bg-game-gradient absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
        <a className="relative rounded-lg">
          <img src="/image7.png" alt="" />

          <div className="w-full pt-16 px-4 pb-4 bg-game-gradient absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 bg-nlw-gradiant self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2a2634] px-8 py-4 flex justify-between items-center">
          <div>
            <strong className="font-2xl text-white font-black block">
              Não encontrou seu duo?{" "}
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar anuncio
          </button>
        </div>
      </div>
    </div>
  );
}
