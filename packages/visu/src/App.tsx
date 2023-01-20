import * as Component from "@styles/index";
import { Button } from "@library";
import { CheckCircle } from "phosphor-react";

function App() {
  return (
    <Component.Main>
      <Component.Container>
        <Button.Root>
          <Button.Icon>
            <CheckCircle />
          </Button.Icon>
          Clique aqui
        </Button.Root>
      </Component.Container>
    </Component.Main>
  );
}

export default App;
