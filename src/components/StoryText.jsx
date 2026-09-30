import React from "react";
import { SLOT_REGEX } from "../utils/storyHelpers";

// Renders story.template as plain text, except each {slotName} becomes a
// clickable button showing the current value. Clicking it calls onCycle(slotName).
export default function StoryText({ story, values, onCycle, accent }) {
    const parts = [];
    let lastIndex = 0;
    let match;
    const regex = new RegExp(SLOT_REGEX);
    let key = 0;

    while ((match = regex.exec(story.template)) !== null) {
        if (match.index > lastIndex) {
            parts.push(
                <span key={`t-${key++}`}>{story.template.slice(lastIndex, match.index)}</span>
            );
        }
        const slotName = match[1];
        const options = story.slots[slotName] || [];
        parts.push(
            <button
                key={`s-${key++}`}
                onClick={() => onCycle(slotName)}
                title="Click to cycle this word"
                style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: `2px dashed ${accent}`,
                    color: accent,
                    font: "inherit",
                    fontWeight: 600,
                    padding: "0 2px",
                    cursor: options.length > 1 ? "pointer" : "default",
                }}
            >
                {values[slotName]}
            </button>
        );
        lastIndex = regex.lastIndex;
    }
    if (lastIndex < story.template.length) {
        parts.push(<span key={`t-${key++}`}>{story.template.slice(lastIndex)}</span>);
    }
    return <>{parts}</>;
}