import { Font } from "@react-pdf/renderer";
import JetBrainsMonoBold from "../fonts/JetBrainsMono-Bold.ttf";
import JetBrainsMonoRegular from "../fonts/JetBrainsMono-Regular.ttf";
import JetBrainsMonoLight from "../fonts/JetBrainsMono-Light.ttf";
import JetBrainsMonoMedium from "../fonts/JetBrainsMono-Medium.ttf";
import JetBrainsMonoExtraBold from "../fonts/JetBrainsMono-ExtraBold.ttf";
import JetBrainsMonoSemiBold from "../fonts/JetBrainsMono-SemiBold.ttf";
import JetBrainsMonoThin from "../fonts/JetBrainsMono-Thin.ttf";
import JetBrainsMonoExtraLight from "../fonts/JetBrainsMono-ExtraLight.ttf";

Font.register({
  family: "JetBrains Mono",
  format: "truetype",
  fonts: [
    { src: JetBrainsMonoThin, fontWeight: "thin" },
    { src: JetBrainsMonoExtraLight, fontWeight: "ultralight" },
    { src: JetBrainsMonoLight, fontWeight: "light" },
    { src: JetBrainsMonoRegular, fontWeight: "normal" },
    { src: JetBrainsMonoMedium, fontWeight: "medium" },
    { src: JetBrainsMonoSemiBold, fontWeight: "semibold" },
    { src: JetBrainsMonoBold, fontWeight: "bold" },
    { src: JetBrainsMonoExtraBold, fontWeight: "ultrabold" },
  ],
});
