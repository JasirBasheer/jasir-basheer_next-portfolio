'use client'


import React, { useState } from "react";
import NovelEditor from "@/components/me/editor/novel.editor";

export default function App() {
  const [content, setContent] = useState<string | undefined>("enter your blog");

  return (
    <div className="">
      <NovelEditor
        content={content}
        setContent={setContent}
        title="Product Content"
      />
    </div>
  );
}