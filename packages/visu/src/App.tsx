import * as Component from "@styles/index";
import { Input, Text } from "@library";
import { Envelope } from "phosphor-react";

function App() {
  return (
    <Component.Main>
      <Component.Container>
        {/* ========================= TEST AREA ========================= */}

        <Input.Root>
          <Input.Icon>
            <Envelope />
          </Input.Icon>
          <Input.Input type="email" placeholder="Escreva seu email aqui" />
        </Input.Root>

        {/* ========================= TEST AREA ========================= */}
      </Component.Container>
    </Component.Main>
  );
}

export default App;
