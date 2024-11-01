import { FileKey } from "lucide-react";

export const JwtDecoderConfig = {
  title: "JWT Decoder",
  description: "Decode a JSON Web Token (JWT) to see its payload.",
  icon: FileKey,
  inputTitle: "Input",
  sample: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0dDIxOTM5NSIsIm5hbWUiOiJUdXNoZW5uZSIsImVtYWlsIjoidHVzaGVubmVAdGVzdC5jb20ifQ.1Q2w3e4r5t6y7u8i9o0p`,
  outputTitle: "Output",
  keywords: ["jwt", "decoder", "json"],
  content: "",
  onSetSample: () => {
    console.log("Set sample");
  },
  onParse: (input: string) => {
    // decode and return result here
  },
};
