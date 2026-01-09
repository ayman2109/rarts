const NeonText = () => {
  return (
    <h2 className="relative inline-block text-center text-6xl font-extrabold tracking-wide">
      {/* Main text */}
      <span
        className="
          relative z-10
          bg-gradient-to-r from-yellow-400 via-red-500 to-white
          bg-[length:200%_200%]
          bg-clip-text text-transparent
          animate-neon-shine
        "
      >
        Let&apos;s Work together
      </span>

      {/* Glow */}
      <span
        className="
          absolute inset-0
          bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500
          blur-xl opacity-70
          animate-neon-shine
        "
        aria-hidden
      >
        Let&apos;s Have a Chat
      </span>
    </h2>
  );
};

export default NeonText;
