import CharacterEditor from "./components";
import {sceneService} from "./services";
import LoadingOverlayCircularStatic from "./components/LoadingOverlay"
import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#de2a5e",
    },
  },
});
const selector = await setupWalletSelector({
  network: "testnet",
  modules: [setupNearWallet()],
});

const modal = setupModal(selector, {
  contractId: "test.testnet",
});

modal.show();

export {
  CharacterEditor,
  sceneService,
  defaultTheme,
  LoadingOverlayCircularStatic,
}