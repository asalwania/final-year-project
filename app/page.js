import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-around h-screen bg-blue-300">
      <h1 className="text-white text-4xl font-extrabold">
        Guru Kripa Institution
      </h1>
      <div className="h-[80vh] w-[50vw] bg-white">
        <div className="flex h-1/2">
          <div className="flex-1">1</div>
          <div className="flex-1">2</div>
          <div className="flex-1">3</div>
        </div>
        <div className="flex h-1/2">
          <div className="flex-1">1</div>
          <div className="flex-1">2</div>
          <div className="flex-1">3</div>
        </div>
      </div>
    </main>
  );
}
