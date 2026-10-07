const assetPathPrefix = "/assets";
const imgCones = `${assetPathPrefix}/f854c.png`;
const imgShakes = `${assetPathPrefix}/394be.png`;
const imgCakes = `${assetPathPrefix}/0fde6.png`;
const imgIceCream = `${assetPathPrefix}/fe94e.svg`;

const specialties = [
  {
    title: "Cones",
    image: imgCones,
    alt: "Three colorful ice cream cones held outside an ice cream shop",
    description: "The perfect way to keep your hands from getting sticky",
  },
  {
    title: "Shakes",
    image: imgShakes,
    alt: "A couple enjoying a creamy shake together",
    description: "What could be better than a delicious, creamy shake?",
  },
  {
    title: "Cakes",
    image: imgCakes,
    alt: "A white ice cream cake covered with rainbow sprinkles",
    description:
      "The best way to celebrate your favorite ice cream lover’s birthday!",
  },
];

export default function App() {
  return (
    <div className="min-h-dvh bg-[#e9dada] text-[#222435]">
      <header className="flex min-h-[126px] items-end justify-between gap-8 bg-[#ff36d7] px-4 py-4">
        <a
          href="#home"
          className="flex shrink-0 flex-col items-center text-[#fbe9e9]"
          aria-label="Scoops and Smiles home"
        >
          <img
            src={imgIceCream}
            alt=""
            className="h-[67px] w-[66.098px]"
          />
          <span
            className="font-dynapuff text-[24px] leading-normal font-semibold whitespace-nowrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Scoops &amp; Smiles
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="font-outfit flex items-center gap-10 text-[24px] leading-normal font-normal text-[#efdede] lg:gap-[40px]"
        >
          <a className="transition-colors hover:text-white" href="#about">
            About
          </a>
          <a className="transition-colors hover:text-white" href="#gallery">
            Gallery
          </a>
          <a className="transition-colors hover:text-white" href="#news">
            News
          </a>
          <a className="transition-colors hover:text-white" href="#contact">
            Contact
          </a>
          <a className="transition-colors hover:text-white" href="#shop">
            Shop
          </a>
        </nav>
      </header>

      <main id="home">
        <section
          id="about"
          className="flex min-h-[437.5px] scroll-mt-4 flex-col items-center bg-white px-6 pt-[61px] text-center"
        >
          <h1
            className="font-dynapuff text-[36px] leading-normal font-semibold text-[#ff36d7]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Scoops &amp; Smiles Ice Cream Parlor
          </h1>
          <p className="font-outfit mt-[5px] max-w-[540px] text-[28px] leading-normal font-normal">
            Scoops &amp; Smiles is a family-owned, locally sourced ice cream
            parlor in Buffalo, NY. We specialize in hand-crafted, all natural
            ingredients to make the best tasting ice cream treats you’ll find
            in the area.
          </p>
          <a
            href="#contact"
            className="font-outfit-bold mt-[17px] rounded-[8px] border-4 border-[#222435] bg-[#ffb8f1] px-[18px] py-[16px] text-[21px] leading-normal font-bold shadow-[0_4px_2px_rgba(0,0,0,0.31)] transition-transform hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#ff36d7]"
          >
            Meet the owners!
          </a>
        </section>

        <section
          id="gallery"
          className="scroll-mt-4 bg-[#e9dada] px-5 pt-[17px] pb-[10px]"
        >
          <h2 className="font-garamond text-center text-[44px] leading-normal font-semibold">
            Our Specialties
          </h2>
          <div className="mx-auto mt-[20px] grid max-w-[930px] grid-cols-3 gap-[37px]">
            {specialties.map((specialty) => (
              <article
                key={specialty.title}
                className="flex min-w-0 flex-col items-center gap-[10px] rounded-[12px] border-[7px] border-[#fd48d9] bg-[#222435] px-[11px] py-[10px] text-[#fbe9e9]"
              >
                <h3 className="font-garamond text-[36px] leading-normal font-semibold">
                  {specialty.title}
                </h3>
                <img
                  src={specialty.image}
                  alt={specialty.alt}
                  className="h-[202.273px] w-full rounded-[2px] object-cover"
                />
                <p className="font-outfit max-w-[263.087px] text-center text-[14px] leading-normal font-normal">
                  {specialty.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div id="news" className="sr-only">
          News
        </div>
        <div id="contact" className="sr-only">
          Contact
        </div>
        <div id="shop" className="sr-only">
          Shop
        </div>
      </main>

      <footer className="font-inter flex min-h-[50.318px] items-center justify-end bg-[#d0d3f1] px-6 text-[12px] leading-normal font-normal">
        ©2026 Scoops and Smiles Inc. All Rights Reserved
      </footer>
    </div>
  );
}
