import LightRays from './LightRays.jsx';
import "./LightRays.css"

export default function LightRaysUsage() {


    return (
        <div className="hero">
            <LightRays
                raysOrigin="bottom-center"
                raysColor="#ededed"
                raysSpeed={1.5}
                lightSpread={0.9}
                rayLength={1.2}
                followMouse
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="rays-bg"
            />

            {/* Section content */}
        </div>

    )
}