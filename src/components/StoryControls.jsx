import React from "react";
import { Sparkles } from "lucide-react";
import { primaryBtnStyle } from "../styles/shared";

// The Generate button: rolls a new random story with random words.
export default function StoryControls({ onGenerate }) {
    return (
        <div style={{ marginTop: 18, fontFamily: "system-ui, sans-serif" }}>
            <button onClick={onGenerate} style={primaryBtnStyle}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Sparkles size={15} /> Generate
                </span>
            </button>
        </div>
    );
}