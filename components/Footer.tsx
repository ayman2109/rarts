interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Shadcnblocks.com",
    url: "https://www.shadcnblocks.com",
  },
  tagline = "We craft premium sign boards & commercial branding.",
  menuItems = [
    {
      title: "Services",
      links: [
        { text: "ACP Cladding", url: "/acp-cladding" },
        { text: "Sign Boards", url: "/sign-boards" },
        { text: "Glass Work", url: "/glass-work" },
        { text: "Interior Branding", url: "/interior-branding" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", url: "/about" },
        { text: "Portfolio", url: "/portfolio" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Call: +91 83091 89670", url: "tel:+918309189670" },
        {
          text: "Address: 785/16, H.3-5, G/4, Hyderguda-Basheerbagh Rd, Shergate, Hyderabad, Telangana 500001",
          url: "https://maps.google.com/?q=785/16,Hyderguda-Basheerbagh,Rd,Hyderabad",
        },
        {
          text: "Email: raichuricommercialarts@gmail.com",
          url: "mailto:raichuricommercialarts@gmail.com",
        }
        
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Instagram", url: "https://www.instagram.com/raichuriarts/" },
        { text: "Facebook", url: "https://www.facebook.com/raichuriartsindia/" },
        { text: "WhatsApp", url: "https://wa.me/918309189670" },
      ],
    },
  ],
  copyright = "© 2025 Raichuri Commercial Arts. All rights reserved.",
  bottomLinks = [
    { text: "Terms & Conditions", url: "/terms" },
    { text: "Privacy Policy", url: "/privacy" },
  ],
}: Footer2Props) => {
  return (
    <section className="py-32 px-20 mt-4 bg-black text-white">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            {/* LOGO & TAGLINE */}
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={logo.url}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-20 h-auto object-contain"
                  />
                </a>
              </div>
              <p className="mt-4 font-serif">{tagline}</p>
            </div>

            {/* MENU SECTIONS */}
            {menuItems.map((section, idx) => (
              <div key={idx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-gray-400 space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i} className="hover:text-white font-medium">
                      <a  target="_blank" href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* BOTTOM BAR */}
          <div className="text-gray-400 mt-24 flex flex-col justify-between gap-4 border-t border-gray-700 pt-8 text-sm font-medium md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, i) => (
                <li key={i}  className="hover:text-white underline">
                  <a target="_blank" href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
