import { useEffect, useRef } from "react";

const skills = [
  { name: "Teamwork", value: 85, color: "hsl(var(--chart-1))" },
  { name: "Communication", value: 78, color: "hsl(var(--chart-2))" },
  { name: "Critical Thinking", value: 82, color: "hsl(var(--chart-3))" },
  { name: "Creativity", value: 75, color: "hsl(var(--chart-4))" },
  { name: "Collaboration", value: 88, color: "hsl(var(--chart-5))" },
  { name: "ICT Literacy", value: 80, color: "hsl(var(--chart-1))" },
];

export function RadarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 40;

    ctx.clearRect(0, 0, width, height);

    const angleStep = (Math.PI * 2) / skills.length;

    ctx.strokeStyle = "hsl(var(--border))";
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      const r = radius * ((i + 1) / 5);
      ctx.beginPath();
      for (let j = 0; j <= skills.length; j++) {
        const angle = j * angleStep - Math.PI / 2;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (j === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();
    }

    ctx.strokeStyle = "hsl(var(--border))";
    ctx.lineWidth = 1;
    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    ctx.fillStyle = "hsl(var(--primary) / 0.3)";
    ctx.strokeStyle = "hsl(var(--primary))";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= skills.length; i++) {
      const skill = skills[i % skills.length];
      const angle = (i % skills.length) * angleStep - Math.PI / 2;
      const value = skill.value / 100;
      const x = centerX + radius * value * Math.cos(angle);
      const y = centerY + radius * value * Math.sin(angle);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "hsl(var(--primary))";
    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i];
      const angle = i * angleStep - Math.PI / 2;
      const value = skill.value / 100;
      const x = centerX + radius * value * Math.cos(angle);
      const y = centerY + radius * value * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = "hsl(var(--foreground))";
    ctx.font = "11px var(--font-sans)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i];
      const angle = i * angleStep - Math.PI / 2;
      const labelRadius = radius + 25;
      const x = centerX + labelRadius * Math.cos(angle);
      const y = centerY + labelRadius * Math.sin(angle);
      
      const words = skill.name.split(" ");
      if (words.length > 1) {
        ctx.fillText(words[0], x, y - 6);
        ctx.fillText(words[1], x, y + 6);
      } else {
        ctx.fillText(skill.name, x, y);
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={300}
      className="w-full h-auto"
      aria-label="Radar chart showing 6 skill areas: Teamwork, Communication, Critical Thinking, Creativity, Collaboration, and ICT Literacy"
    />
  );
}
