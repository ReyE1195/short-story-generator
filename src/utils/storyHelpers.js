// Matches {slotName} placeholders inside a story template.
export const SLOT_REGEX = /\{(\w+)}/g;

// Picks one random item from an array.
export function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Returns a story's slot values set to the first option in each word bank.
// Used when a story is first selected, so it renders predictably rather than randomly.
export function defaultValuesFor(story) {
    const values = {};
    Object.entries(story.slots || {}).forEach(([slot, options]) => {
        values[slot] = options[0];
    });
    return values;
}

// Returns a story's slot values with a random option chosen from each word bank.
// Used by the "Generate" button to fill a story with fresh random words.
export function randomValuesFor(story) {
    const values = {};
    Object.entries(story.slots || {}).forEach(([slot, options]) => {
        values[slot] = pick(options);
    });
    return values;
}

// Finds every {slotName} used inside a template string, returned as a Set.
export function extractSlotNames(template) {
    const names = new Set();
    let match;
    const regex = new RegExp(SLOT_REGEX);
    while ((match = regex.exec(template)) !== null) {
        names.add(match[1]);
    }
    return names;
}