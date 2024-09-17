import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "@/components/ui/bentoGrid";

const WayOfWork = () => {
  return (
    <section id="way-of-work">
      <h3 className="mt-60 p-10 border-[3px] border-black/[.5] shadow-xl shadow-black rounded-xl text-center uppercase tracking-[2rem] text-gray-500 text-2xl bg-[#10132E]">My Way of Work</h3>

      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default WayOfWork;
