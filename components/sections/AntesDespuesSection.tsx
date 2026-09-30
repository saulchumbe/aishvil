import CompareSlider from "@/components/ui/CompareSlider";

export default function AntesDespuesSection() {
  return (
    <section id="transformaciones" className="border-cement-800 bg-cement-800 border-t px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <span className="text-rex-red font-mono text-xs tracking-widest uppercase">Transformaciones</span>
        <h2 className="font-display mt-3 text-3xl tracking-tight uppercase sm:text-4xl">Antes y despues</h2>
        <p className="text-steel-300 mt-3 max-w-xl">Arrastra la linea para ver la transformacion real de cada superficie.</p>
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <CompareSlider
            label="Pulido de concreto"
            color="#55707c"
            beforePhoto="/images/pulido/pulido-antes-nave2-horizontal.jpg"
            afterPhoto="/images/pulido/pulido-despues-nave2-wide.jpg"
          />
          <CompareSlider
            label="Uretano y resinas"
            color="#3f6b5c"
            beforePhoto="/images/uretano/uretano-antes.jpg"
            afterPhoto="/images/uretano/uretano-despues.jpg"
          />
        </div>
      </div>
    </section>
  );
}
