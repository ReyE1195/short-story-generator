import React, { useState } from "react";
import { Plus, X, AlertTriangle } from "lucide-react";
import { extractSlotNames } from "../utils/storyHelpers";
import {
    labelStyle,
    inputStyle,
    primaryBtnStyle,
    ghostBtnStyle,
    iconBtnStyle,
} from "../styles/shared";

// Lets a user submit their own story: a title, template text (with optional
// {slotName} placeholders), and a word bank for each slot used. A template
// with no {slots} at all is accepted too — that's the "static story" case.
export default
    function StoryBuilder({ onSubmit, onCancel }) {
    const [title, setTitle] = useState("");
    const [template, setTemplate] = useState("");
    const [slotRows, setSlotRows] = useState([{ name: "", values: "" }]);
    const [error, setError] = useState("");

    const addRow = () => setSlotRows([...slotRows, { name: "", values: "" }]);
        const updateRow = (i, field, val) => {
            const next = [...slotRows];
            next[i] = { ...next[i], [field]: val };
            setSlotRows(next);
        };
    const removeRow = (i) => setSlotRows(slotRows.filter((_, idx) => idx !== i));

    const handleSubmit = () => {
        setError("");
        if (!title.trim()) return setError("Give your story a title.");
        if (!template.trim()) return setError("Write your story text.");

        const templateSlots = extractSlotNames(template);

        const slots = {};
        for (const row of slotRows) {
            const name = row.name.trim();
            if (!name) continue;
            const values = row.values
                .split(",")
                .map((v) => v.trim())
                .filter(Boolean);
            if (values.length === 0) return setError(`"${name}" needs at least one word.`);
            slots[name] = values;
        }

        const definedNames = new Set(Object.keys(slots));
        const missing = [...templateSlots].filter((s) => !definedNames.has(s));
        if (missing.length > 0) {
            return setError(
                `Your story uses {${missing.join("}, {")}} but there's no word bank defined for ${
                    missing.length > 1 ? "them" : "it"
                }.`
            );
        }
        const unused = [...definedNames].filter((s) => !templateSlots.has(s));
        if (unused.length > 0) {
            return setError(
                `You defined a word bank for "${unused.join(
                    '", "'
                )}" but it isn't used anywhere in the story text.`
            );
        }

        onSubmit({
            id: Date.now(),
            title: title.trim(),
            tag: templateSlots.size > 0 ? "Community" : "Community · Static",
            accent: "#8890a6",
            template: template.trim(),
            slots,
        });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
                <label style={labelStyle}>Title</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="The Bakery at the End of Time"
                    style={inputStyle}
                />
            </div>
            <div>
                <label style={labelStyle}>
                    Story text{" "}
                    <span style={{ color: "#8890a6", fontWeight: 400 }}>
            (use {"{wordName}"} for anything swappable, or leave it plain for a static story)
          </span>
                </label>
                <textarea
                    value={template}
                    onChange={(e) => setTemplate(e.target.value)}
                    rows={5}
                    placeholder="A {adjective} baker named {heroName} discovers the oven runs on stolen minutes..."
                    style={{ ...inputStyle, fontFamily: "ui-monospace, monospace", resize: "vertical" }}
                />
            </div>

            {slotRows.length > 0 && (
                <div>
                    <label style={labelStyle}>Word banks</label>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {slotRows.map((row, i) => (
                            <div key={i} style={{ display: "flex", gap: 8 }}>
                                <input
                                    value={row.name}
                                    onChange={(e) => updateRow(i, "name", e.target.value)}
                                    placeholder="wordName"
                                    style={{ ...inputStyle, flex: "0 0 130px", fontFamily: "ui-monospace, monospace" }}
                                />
                                <input
                                    value={row.values}
                                    onChange={(e) => updateRow(i, "values", e.target.value)}
                                    placeholder="option one, option two, option three"
                                    style={{ ...inputStyle, flex: 1 }}
                                />
                                <button onClick={() => removeRow(i)} style={iconBtnStyle} title="Remove">
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <button onClick={addRow} style={{ ...ghostBtnStyle, alignSelf: "flex-start" }}>
                <Plus size={14} /> Add word bank
            </button>

            {error && (
                <div style={{ display: "flex", gap: 8, color: "#e0a458", fontSize: 13, alignItems: "flex-start" }}>
                    <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{error}</span>
                </div>
            )}

            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                <button onClick={handleSubmit} style={primaryBtnStyle}>
                    Submit story
                </button>
                <button onClick={onCancel} style={ghostBtnStyle}>
                    Cancel
                </button>
            </div>
        </div>
    );
}