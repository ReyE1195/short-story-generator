import React, { useState, useMemo } from "react";
import { BookOpen } from "lucide-react";

import { BUILT_IN_STORIES } from "./data/stories";
import { BONUS_STORIES } from "./data/generatorPool";
import { pick, defaultValuesFor, randomValuesFor } from "./utils/storyHelpers";

import StoryText from "./components/StoryText";
import StoryPicker from "./components/StoryPicker";
import StoryControls from "./components/StoryControls";
import StoryBuilder from "./components/StoryBuilder";

export default function App() {
  const [customStories, setCustomStories] = useState([]);

  // Shown as pills in the picker: your 3 named stories + anything a user submits.
  const pickerStories = useMemo(() => [...BUILT_IN_STORIES, ...customStories], [customStories]);

  // The FULL pool Generate can draw from: named stories + the hidden bonus pool + submissions.
  const generationPool = useMemo(
      () => [...BUILT_IN_STORIES, ...BONUS_STORIES, ...customStories],
      [customStories]
  );

  const [selectedId, setSelectedId] = useState(BUILT_IN_STORIES[0].id);
  const [valuesByStory, setValuesByStory] = useState(() => {
    const map = {};
    BUILT_IN_STORIES.forEach((s) => (map[s.id] = defaultValuesFor(s)));
    return map;
  });

  const [showBuilder, setShowBuilder] = useState(false);

  // Look the active story up in the FULL pool, since Generate can land on a hidden one.
  const story = generationPool.find((s) => s.id === selectedId) || generationPool[0];
  const currentValues = valuesByStory[story.id] || defaultValuesFor(story);

  const cycleSlot = (slotName) => {
    const options = story.slots[slotName];
    const currentIdx = options.indexOf(currentValues[slotName]);
    const next = options[(currentIdx + 1) % options.length];
    setValuesByStory((prev) => ({
      ...prev,
      [story.id]: { ...currentValues, [slotName]: next },
    }));
  };

  const handleGenerate = () => {
    const others = generationPool.filter((s) => s.id !== story.id);
    const nextStory = others.length > 0 ? pick(others) : story;
    setSelectedId(nextStory.id);
    setValuesByStory((prev) => ({ ...prev, [nextStory.id]: randomValuesFor(nextStory) }));
  };

  const handleSelectStory = (id) => {
    setSelectedId(id);
    setValuesByStory((prev) =>
        prev[id] ? prev : { ...prev, [id]: defaultValuesFor(generationPool.find((s) => s.id === id)) }
    );
  };

  const handleAddCustomStory = (newStory) => {
    setCustomStories((prev) => [...prev, newStory]);
    setValuesByStory((prev) => ({ ...prev, [newStory.id]: defaultValuesFor(newStory) }));
    setSelectedId(newStory.id);
    setShowBuilder(false);
  };

  return (
      <div
          style={{
            minHeight: "100%",
            background: "#161a26",
            color: "#e9e6da",
            fontFamily: "'Iowan Old Style', Georgia, serif",
            padding: "28px 20px",
            boxSizing: "border-box",
          }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <BookOpen size={22} color="#c9a44c" />
            <h1 style={{ fontSize: 22, margin: 0, letterSpacing: 0.2 }}>Story Generator</h1>
          </div>
          <p
              style={{
                color: "#8890a6",
                fontSize: 14,
                marginTop: 4,
                marginBottom: 20,
                fontFamily: "system-ui, sans-serif",
              }}
          >
            Click any underlined word in the story to swap it, or hit Generate for a brand-new story.
          </p>

          <StoryPicker
              stories={pickerStories}
              selectedId={selectedId}
              onSelect={handleSelectStory}
              onOpenBuilder={() => setShowBuilder(true)}
          />

          {!showBuilder && (
              <>
                <div
                    style={{
                      background: "#20263a",
                      border: `1px solid ${story.accent}55`,
                      borderRadius: 14,
                      padding: "26px 28px",
                      fontSize: 17,
                      lineHeight: 1.75,
                      boxShadow: "inset 0 0 40px rgba(0,0,0,0.15)",
                    }}
                >
                  <div
                      style={{
                        fontSize: 12,
                        textTransform: "uppercase",
                        letterSpacing: 1.5,
                        color: story.accent,
                        marginBottom: 10,
                        fontFamily: "system-ui, sans-serif",
                        fontWeight: 700,
                      }}
                  >
                    {story.tag}
                  </div>
                  <StoryText story={story} values={currentValues} onCycle={cycleSlot} accent={story.accent} />
                </div>

                <StoryControls onGenerate={handleGenerate} />
                </>
          )}

          {showBuilder && (
              <div
                  style={{
                    background: "#20263a",
                    border: "1px solid #2c3346",
                    borderRadius: 14,
                    padding: 22,
                    fontFamily: "system-ui, sans-serif",
                  }}
              >
                <h2
                    style={{
                      fontSize: 16,
                      marginTop: 0,
                      marginBottom: 16,
                      fontFamily: "'Iowan Old Style', Georgia, serif",
                    }}
                >
                  Submit your own story
                </h2>
                <StoryBuilder onSubmit={handleAddCustomStory} onCancel={() => setShowBuilder(false)} />
              </div>
          )}
        </div>
      </div>
  );
}