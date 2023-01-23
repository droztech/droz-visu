import * as Component from "@styles/index";
import { Text } from "./library";

function App() {
  return (
    <Component.Main>
      <Component.Container>
        {/* ========================= TEST AREA ========================= */}

        <Text size="lg" color="primary400" link="primary" underline>
          Hello World
        </Text>

        {/* ========================= TEST AREA ========================= */}
      </Component.Container>
    </Component.Main>
  );
}

export default App;
