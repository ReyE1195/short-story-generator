import React from "react";
import { Plus } from "lucide-react";

// The row of pill buttons for choosing which story is active,
// plus the "Submit your own" button that opens the builder.
export default function StoryPicker({ stories, selectedId, onSelect, onOpenBuilder }) {
    return (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
            {stories.map((s) => (
                <button
                    key={s.id}
                    onClick={() => onSelect(s.id)}
                    style={{
                        background: s.id === selectedId ? "#20263a" : "transparent",
                        border: `1px solid ${s.id === selectedId ? s.accent : "#2c3346"}`,
                        color: s.id === selectedId ? s.accent : "#b7bccb",
                        borderRadius: 20,
                        padding: "6px 14px",
                        fontSize: 12.5,
                        cursor: "pointer",
                        fontFamily: "system-ui, sans-serif",
                        fontWeight: 600,
                    }}
                >
                    {s.title} · {s.tag}
                </button>
            ))}
            <button
                onClick={onOpenBuilder}
                style={{
                    background: "transparent",
                    border: "1px dashed #2c3346",
                    color: "#8890a6",
                    borderRadius: 20,
                    padding: "6px 14px",
                    fontSize: 12.5,
                    cursor: "pointer",
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                }}
            >
                <Plus size={13} /> Submit your own
            </button>
        </div>
    );
}