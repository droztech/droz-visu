import * as Component from "@styles/index";
import { Text } from "./library";

function App() {
  return (
    <Component.Main>
      <Component.Container>
        {/* ========================= TEST AREA ========================= */}

        <Text size="2xl" colored="primary400" underline>
          Hello World
        </Text>

        {/* ========================= TEST AREA ========================= */}
      </Component.Container>
    </Component.Main>
  );
}

export default App;
