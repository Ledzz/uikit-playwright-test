import './App.css'
import {Fullscreen, Image, Text} from "@react-three/uikit";
import {Canvas} from "@react-three/fiber";

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
      </Canvas>
  )
}

export default App
