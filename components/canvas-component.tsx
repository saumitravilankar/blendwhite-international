import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Tetrapack from '@/components/Tetrapack'

const CanvasComponent = () => {
    return (
        <>
            <Canvas>
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Tetrapack />
            </Canvas>
        </>
    )
}

export default CanvasComponent;