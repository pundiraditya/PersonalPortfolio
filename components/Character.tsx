import Image from "next/image";

export default function Character() {
  return (
    <div className="relative flex justify-center items-center">

      {/* Main Glow */}
      <div className="absolute w-[420px] h-[420px] bg-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>

      {/* Secondary Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl"></div>

      <Image
        src="/hero-character.png"
        alt="Shambhavi"
        width={520}
        height={520}
        priority
        className="
          relative
          z-10
          object-contain
          drop-shadow-[0_0_35px_rgba(0,229,255,0.35)]
          animate-float
          hover:scale-105
          transition-all
          duration-500
        "
      />

      {/* Floating Badge */}
      <div
        className="
          absolute
          top-10
          right-0
          px-4
          py-2
          rounded-full
          bg-cyan-400
          text-black
          font-semibold
          text-sm
          shadow-lg
          animate-bounce
        "
      >
        AI Engineer
      </div>

      {/* Floating Badge 2 */}
      <div
        className="
          absolute
          bottom-12
          left-0
          px-4
          py-2
          rounded-full
          bg-purple-500
          text-white
          font-semibold
          text-sm
          shadow-lg
        "
      >
        Full Stack Dev
      </div>

    </div>
  );
}