import React from "react";
import { Sparkles, Lock, Unlock } from "lucide-react";
import { primaryBtnStyle, ghostBtnStyle } from "../styles/shared";

// Generate button + the two lock toggles ("Keep story", "Keep words").
export default function StoryControls({
                                          onGenerate,
                                          lockStory,
                                          onToggleLockStory,
                                          lockWords,
                                          onToggleLockWords,
                                      }) {
    return (
        <div
            style={{
                display: "flex",
                gap: 10,
                marginTop: 18,
                alignItems: "center",
                flexWrap: "wrap",
                fontFamily: "system-ui, sans-serif",
            }}
        >
            <button onClick={onGenerate} style={primaryBtnStyle}>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Sparkles size={15} /> Generate
        </span>
            </button>

            <button
                onClick={onToggleLockStory}
                style={{
                    ...ghostBtnStyle,
                    color: lockStory ? "#c9a44c" : "#b7bccb",
                    borderColor: lockStory ? "#c9a44c" : "#2c3346",
                }}
            >
                {lockStory ? <Lock size={14} /> : <Unlock size={14} />} Keep story
            </button>

            <button
                onClick={onToggleLockWords}
                style={{
                    ...ghostBtnStyle,
                    color: lockWords ? "#c9a44c" : "#b7bccb",
                    borderColor: lockWords ? "#c9a44c" : "#2c3346",
                }}
            >
                {lockWords ? <Lock size={14} /> : <Unlock size={14} />} Keep words
            </button>
        </div>
    );
}