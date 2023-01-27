import * as Component from "@styles/index";
import { Input } from "@library";
import { Eye, EyeSlash, Info } from "phosphor-react";
import { useState } from "react";

function App() {
  const [isShowingPassword, setIsShowingPassword] = useState(false);

  return (
    <Component.Main>
      <Component.Container>
        {/* ========================= TEST AREA ========================= */}

        <Input.Root>
          <Input.Icon
            onClick={() => setIsShowingPassword(!isShowingPassword)}
            position="left"
          >
            {isShowingPassword ? <Eye /> : <EyeSlash />}
          </Input.Icon>
          <Input.Icon position="right">
            <Info />
          </Input.Icon>
          <Input.Input
            type={isShowingPassword ? "text" : "password"}
            placeholder="Digite sua senha aqui"
          />
        </Input.Root>

        {/* ========================= TEST AREA ========================= */}
      </Component.Container>
    </Component.Main>
  );
}

export default App;
