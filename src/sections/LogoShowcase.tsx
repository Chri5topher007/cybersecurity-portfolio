import { techStackIcons } from "../lib/constants";

const LogoItem = ({ icon }: { icon: { name: string; icon: string } }) => (
  <div className="flex-none flex-center marquee-item">
    <span className="text-5xl">{icon.icon}</span>
    <span className="text-white-50 text-sm ml-2">{icon.name}</span>
  </div>
);

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />
    <div className="marquee h-40">
      <div className="marquee-box md:gap-12 gap-5">
        {techStackIcons.map((icon, i) => (
          <LogoItem key={i} icon={icon} />
        ))}
        {techStackIcons.map((icon, i) => (
          <LogoItem key={`dup-${i}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
