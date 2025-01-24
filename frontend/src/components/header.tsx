import Image from "next/image"

export default function Header() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image src="/rocket.svg" alt="Logo" width={21.99} height={36.01} />
      <p className="text-5xl">
        <span className="font-black text-[#4EA8DE]">Todo</span>{" "}
        <span className="font-black text-[#5E60CE]">App</span>
      </p>
    </div>
  )
}
