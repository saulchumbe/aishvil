import Image from "next/image";

type MediaTileProps = {
  label?: string;
  color?: string;
  photo?: string;
  className?: string;
};

export default function MediaTile({ label, color = "#5c5850", photo, className = "" }: MediaTileProps) {
  return (
    <div className={"media-tile relative overflow-hidden " + className}>
      {photo ? (
        <Image
          src={photo}
          alt={label ?? ""}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0" style={{ background: "radial-gradient(120% 100% at 20% 0%, " + color + "e6 0%, " + color + "80 35%, #16150f 85%)" }} />
      )}
      <div className="media-tile-scrim" />
      <div className="media-tile-grain" />
      {label && <span className="media-tile-label">{label}</span>}
    </div>
  );
}