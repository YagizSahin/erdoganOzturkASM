export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-[#8a1d3d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
        {subtitle && <p className="mt-2 text-white/80 text-sm md:text-base">{subtitle}</p>}
      </div>
    </div>
  )
}
