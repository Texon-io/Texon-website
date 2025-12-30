export function VideoCard({src}) {
    return (
        <div
            className="
        relative rounded-2xl overflow-hidden
         border border-white/20

      "
        >
            <img
                src={src}
                alt="video"
                className="w-full h-full object-cover rounded-xl"
            />

            {/* Optional subtle overlay */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none"/>
        </div>
    );
}
