import { useRef, ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

const GlowCard = ({ children, index = 0, className = "" }: GlowCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", String(angle + 60));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`card card-border rounded-xl p-10 mb-5 break-inside-avoid-column ${className}`}
    >
      <div className="glow" />
      {children}
    </div>
  );
};

export default GlowCard;
