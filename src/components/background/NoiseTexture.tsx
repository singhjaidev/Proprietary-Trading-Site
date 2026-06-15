export default function NoiseTexture() {
  return (
    <div
      className="
      pointer-events-none
      fixed
      inset-0
      z-[-1]
      opacity-[0.03]
      "
      style={{
        backgroundImage: "url('/noise.png')",
      }}
    />
  );
}