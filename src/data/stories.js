// The built-in stories that ship with the app.
// User-submitted stories (from StoryBuilder) get added alongside these at runtime,
// in App.jsx — they are NOT stored in this file.

export const BUILT_IN_STORIES = [
    {
        id: 1,
        title: "The Cursed Kingdom",
        tag: "Medieval Fantasy",
        accent: "#c9a44c",
        template:
            "In the kingdom of {kingdom}, which never saw daylight, there lived a {adjective}, handsome prince named {heroName}. His duty was to rescue his people from the evil wizard {villainName}, who had cursed the kingdom. Prince {heroName} would have to {verb} the evil wizard {villainName} to break the curse and free his kingdom from the shadows.",
        slots: {
            kingdom: ["Orindoth", "Veldrun", "Astherion"],
            adjective: ["fierce", "noble", "battle-worn"],
            heroName: ["Deon", "Bruce", "Zion"],
            villainName: ["Malzeth", "Morghast", "Sarvok"],
            verb: ["slay", "outwit", "banish"],
        },
    },
    {
        id: 2,
        title: "The Lighthouse Keeper of Veyra",
        tag: "Mystery",
        accent: "#5fb3a3",
        template:
            "Far below the ice moon Veyra, a lighthouse keeper named {heroName} tends the last lamp in a drowned city. Every night she winds the great {material} mechanism, though no ship has passed in {timeSpan}. One evening the lamp answers back — a second light, blinking from the dark water, spelling her name. {heroName} must decide: signal the {stranger} to the surface, or let the city keep its {secret}.",
        slots: {
            heroName: ["Ilsa", "Maren", "Colette"],
            material: ["brass", "iron", "glass"],
            timeSpan: ["a hundred years", "three lifetimes", "an age"],
            stranger: ["stranger", "wanderer", "diver"],
            secret: ["final secret", "last silence", "oldest sorrow"],
        },
    },
    {
        id: 3,
        title: "The Janitor and the Space Whale",
        tag: "Comedy Sci-Fi",
        accent: "#c97b6a",
        template:
            "Aboard the starship {shipName}, {adjective} janitor named {heroName} is the last one awake when the ship's AI announces it has taken a wrong turn — right into the mouth of {adjective2} space whale. {heroName} grabs the nearest {object} and must {verb} their way to the bridge before the whale finishes its {meal}. The captain, still in a bathrobe, insists this is fine, actually, and asks {heroName} to fetch coffee first.",
        slots: {
            shipName: ["Wobbly Comet", "USS Overdue", "Nightly Biscuit"],
            adjective: ["a sleep-deprived", "an overconfident", "a mildly cursed"],
            heroName: ["Quill", "Bex", "Toran"],
            adjective2: ["a peckish", "an enormous", "an oddly polite"],
            object: ["mop", "spatula", "fire extinguisher"],
            verb: ["waltz", "sprint", "cartwheel"],
            meal: ["snack", "midnight buffet", "appetizer"],
        },
    },
];
