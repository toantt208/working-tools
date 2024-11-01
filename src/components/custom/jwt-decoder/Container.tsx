import View from "./View";
import { JwtDecoderConfig } from "@/configs/jwt-decoder";
import { useState } from "react";

export default function Container() {
  const [content, setContent] = useState();
  const config = JwtDecoderConfig;

  const onSetContent = (content: string) => {
    setContent(content);
  };

  return <View title={config.title} content={""} />;
}
