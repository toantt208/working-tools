import { useTheme } from "next-themes";
import Editor from "@monaco-editor/react";
import React, { useEffect } from "react";

interface Props {
  title: string;
  content: string;
}

export default function View({ content, title }: Props) {
  const { theme } = useTheme();
  const [isDark, setIsDark] = React.useState(theme === "dark");

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex w-full items-center">
        <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
      </div>

      <div className="flex h-full w-full flex-col lg:flex-row">
        <div className="h-full">
          <h3 className="text-lg font-semibold">Input</h3>
        </div>
        <div className="mb-4 h-full w-full border border-solid border-gray-300">
          <Editor
            className="h-full"
            defaultLanguage=""
            defaultValue={content}
            theme={isDark ? "vs-dark" : "vs-light"}
            options={{
              minimap: { enabled: false },
              overviewRulerLanes: 0,
              scrollBar: {
                vertical: "hidden",
              },
            }}
          />
        </div>
        <div className="mx-4 hidden w-[1px] bg-gray-300 lg:block"></div>
        <div className="mb-4 h-full w-full border border-solid border-gray-300">
          <Editor
            className="h-full"
            defaultLanguage=""
            defaultValue={content}
            theme={isDark ? "vs-dark" : "vs-light"}
            options={{
              minimap: { enabled: false },
              overviewRulerLanes: 0,
              readOnly: true,
              scrollBar: {
                vertical: "hidden",
              },
              onDidAttemptReadOnlyEdit: () => {
                alert("This editor is read-only");
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
