import { createTw } from "react-pdf-tailwind";

const tw = createTw({
  theme: {
    colors: {
      text: "#000",
      background: "#fff",
      primary: "#db9b9b",
      secondary: "#2c7a6f",
      accent: "#6578c7",
    },
    extends: {
      fontSize: {
        xs: 9,
      },
    },
  },
});

export default tw;
