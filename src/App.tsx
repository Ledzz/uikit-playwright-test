import './App.css'
import {Fullscreen, Image, Text} from "@react-three/uikit";
import {Canvas} from "@react-three/fiber";
import {Text as DreiText} from "@react-three/drei";

function App() {

  return (
      <Canvas>
          <Fullscreen flexDirection="row" padding={100} gap={100}>
              <Image src="https://picsum.photos/id/13/200/300" alignItems={"center"} justifyContent={"center"}>
                  <Text fontSize={24} backgroundColor={0} color={0xffff}>
                      Hello world
                  </Text>
              </Image>
          </Fullscreen>

          <DreiText color={0xffff00} anchorX="center" anchorY="middle"  renderOrder={10}>
              Hello drei
          </DreiText>
      </Canvas>
  )
}

export default App
