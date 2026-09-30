// A larger hidden pool of stories used only by the "Generate" button.
// These do NOT appear as pills in the story picker — they exist purely to
// make Generate feel like it's producing endless variety.

export const BONUS_STORIES = [
    {
        id: 4,
        title: "The Last Umbrella in Port Callow",
        tag: "Noir",
        accent: "#7a8bb0",
        template:
            "It hadn't stopped raining in {timeSpan}, and detective {heroName} was the only one in Port Callow still carrying an umbrella. A {adjective} stranger walked into the office asking about {macguffin}, and something about their voice didn't sit right. {heroName} took the case anyway — rent doesn't pay itself, and neither does {vice}.",
        slots: {
            timeSpan: ["six days", "a fortnight", "as long as anyone could remember"],
            heroName: ["Marlowe Finch", "Dez Okafor", "Ruth Calloway"],
            adjective: ["soaked", "nervous", "too well-dressed"],
            macguffin: ["a missing key", "a locket", "a name no one would say out loud"],
            vice: ["curiosity", "bad coffee", "old habits"],
        },
    },
    {
        id: 5,
        title: "The Duel at Dustbowl Pass",
        tag: "Western",
        accent: "#b08a4d",
        template:
            "The sun hadn't cleared the ridge when {heroName} rode into {townName}, {adjective} and out of {resource}. The sheriff said there'd be no trouble if {heroName} kept moving, but the {villainName} gang had other plans. By noon, it was just {heroName}, a {weapon}, and a very long shadow down Main Street.",
        slots: {
            heroName: ["Cass Rourke", "Silas Vane", "Ada Marchetti"],
            townName: ["Dustbowl Pass", "Redwater Junction", "Coldstep"],
            adjective: ["dust-covered", "half-starved", "quiet as a held breath"],
            resource: ["water", "luck", "patience"],
            villainName: ["Blackthorn", "Coyote", "Rill"],
            weapon: ["revolver", "rifle", "steady hand"],
        },
    },
    {
        id: 6,
        title: "The Ledger of Captain Vray",
        tag: "Pirate",
        accent: "#4d8a7a",
        template:
            "Captain {heroName} kept a ledger of every debt owed across the {oceanName}, written in {ink}. When the {shipName} sank a merchant vessel carrying {cargo}, the ledger gained one more line — and one more enemy sworn to burn it. {heroName} only smiled. Paper doesn't float, but neither do grudges.",
        slots: {
            heroName: ["Vray", "Odalys", "Bram Kestrel"],
            oceanName: ["Salt Wound Sea", "the Gray Fathoms", "the Widow's Strait"],
            ink: ["squid ink", "blood, allegedly", "something no one asked about"],
            shipName: ["Nightless Gull", "Iron Marrow", "Second Mourning"],
            cargo: ["stolen maps", "royal silver", "a caged singer"],
        },
    },
    {
        id: 7,
        title: "The Stepsister Who Refused",
        tag: "Fairy Tale",
        accent: "#a0699c",
        template:
            "Everyone assumed {heroName} would take the crown once the {adjective} spell broke, since that's how these stories go. Instead {heroName} handed it to {allyName} and walked into the {place} to become something the old tales hadn't written yet. The fairy godmother was, frankly, {reaction}.",
        slots: {
            heroName: ["Isolde", "Perpetua", "Wren"],
            adjective: ["century-old", "thorn-bound", "moth-eaten"],
            allyName: ["the miller's daughter", "her younger sister", "the talking fox"],
            place: ["forest", "mountains", "old library nobody else could find"],
            reaction: ["delighted", "utterly scandalized", "quietly relieved"],
        },
    },
    {
        id: 8,
        title: "Neon Debt",
        tag: "Cyberpunk",
        accent: "#c94d8a",
        template:
            "In {cityName}, memories could be repossessed like a car, and {heroName} owed three years' worth. A {adjective} fixer offered a way to wipe the debt — one {job} in the {corpName} tower, no questions. {heroName} took the job. {heroName} always took the job.",
        slots: {
            cityName: ["New Halcyon", "Vantablack City", "Low Kowloon"],
            heroName: ["Reeve", "Ixchel", "Boone"],
            adjective: ["chrome-toothed", "unreasonably calm", "twitchy"],
            job: ["data heist", "delivery", "assassination that wasn't supposed to be one"],
            corpName: ["Aegis-Nine", "Ouroboros Systems", "Halcyon Dynamics"],
        },
    },
    {
        id: 9,
        title: "The Seed Vault",
        tag: "Post-Apocalyptic",
        accent: "#6a9c5e",
        template:
            "Ten years after {eventName}, {heroName} still walked the {distance} to the old seed vault every spring, just to check the locks held. This year the locks were broken, and {adjective} footprints led inside. {heroName} followed them, half hoping for {hope}, half bracing for {fear}.",
        slots: {
            eventName: ["the Long Winter", "the Collapse", "the last harvest"],
            heroName: ["Odalis", "Teodor", "Wren Ashby"],
            distance: ["nine miles", "two ridgelines", "the whole dead highway"],
            adjective: ["small", "bare", "unfamiliar"],
            hope: ["company", "proof someone else made it", "good news for once"],
            fear: ["scavengers", "worse", "an empty vault"],
        },
    },
    {
        id: 10,
        title: "The Tenant in Room 4B",
        tag: "Ghost Story",
        accent: "#8f8fbf",
        template:
            "{heroName} took the {adjective} apartment because the rent was impossibly low, and ignored the landlord's odd insistence on leaving Room 4B's light on at all hours. Three nights in, {heroName} heard {sound} through the wall, right on schedule, right at {timeOfNight}. By the fourth night, {heroName} started leaving out {offering}, just in case.",
        slots: {
            heroName: ["Marisol", "Devon", "Priya"],
            adjective: ["suspiciously cheap", "drafty", "narrow"],
            sound: ["a radio tuned to static", "someone humming", "a second set of footsteps"],
            timeOfNight: ["3:14 a.m.", "the stroke of midnight", "just after the streetlights buzzed on"],
            offering: ["a cup of tea", "a lit candle", "the window cracked open"],
        },
    },
    {
        id: 11,
        title: "Sidekick Union, Local 12",
        tag: "Superhero Comedy",
        accent: "#c9a44c",
        template:
            "{heroName}, professional sidekick to the {adjective} hero {mentorName}, was tired of the pay, the capes-only health plan, and getting thrown through exactly one (1) wall per week. So {heroName} did the reasonable thing: filed for a union. Turns out {mentorName} was terrified of paperwork, {villainName} was oddly supportive, and the real final boss this arc was HR.",
        slots: {
            heroName: ["Pinwheel", "The Understudy", "Codex"],
            adjective: ["dashing but forgetful", "well-meaning", "chronically late"],
            mentorName: ["Captain Solstice", "The Gray Falcon", "Meridian"],
            villainName: ["Doctor Malaise", "The Undersell", "Grievance"],
        },
    },
    {
        id: 12,
        title: "The Vault Beneath the Opera",
        tag: "Heist",
        accent: "#c97b6a",
        template:
            "The plan was simple: while {distraction} played to a packed house, {heroName} and {partnerName} had eleven minutes to crack the vault beneath the opera house before the {device} reset. It went sideways in the way these things always go sideways — {complication} — and eleven minutes became one very long, very loud four.",
        slots: {
            distraction: ["the final act", "a fake bomb scare", "the mezzo-soprano's encore"],
            heroName: ["Odile", "Marchetti", "Six"],
            partnerName: ["her brother", "a nervous locksmith", "someone she didn't fully trust yet"],
            device: ["pressure plates", "laser grid", "guard rotation"],
            complication: ["the safe had a second lock nobody knew about", "the guard rotation changed that week", "the soprano went off-script"],
        },
    },
    {
        id: 13,
        title: "Two Left Shoes",
        tag: "Romance",
        accent: "#c96a9c",
        template:
            "{heroName} met {loveInterest} at {place}, both of them wearing two left shoes after a shipping mix-up neither could explain. It should have been mortifying. Instead it became a running joke, then a standing {tradition}, then — somewhere around the third {season} — something neither of them wanted to name too quickly, in case it scared it off.",
        slots: {
            heroName: ["Junie", "Theo", "Amara"],
            loveInterest: ["a bike courier", "the new barista", "someone from three floors up"],
            place: ["a laundromat at 1 a.m.", "a very slow DMV line", "a bookstore's poetry aisle"],
            tradition: ["Tuesday coffee", "walk home", "bad-movie night"],
            season: ["winter", "long summer", "rainy season"],
        },
    },
    {
        id: 14,
        title: "The Thing in the Crawlspace",
        tag: "Spooky",
        accent: "#6a6a8f",
        template:
            "{heroName} bought the old house for the {feature}, and figured the {adjective} scratching in the crawlspace was raccoons. It wasn't raccoons. It also, oddly, seemed to be house-trained, mostly nocturnal, and — based on the neatly stacked {object} it kept leaving by the vent — trying, in its own way, to be a good tenant.",
        slots: {
            heroName: ["Aster", "Callum", "Noor"],
            feature: ["wraparound porch", "low price", "big kitchen"],
            adjective: ["polite", "rhythmic", "oddly patient"],
            object: ["acorns", "bottle caps", "buttons"],
        },
    },
    {
        id: 15,
        title: "The Map That Ate Itself",
        tag: "Adventure",
        accent: "#4d9bc9",
        template:
            "The map {heroName} inherited redrew itself every time someone lied near it, which made it either the world's worst navigation tool or its most honest one. Chasing {treasure} across {terrain}, {heroName} and {partnerName} learned to watch the ink more than the compass — because the moment a route vanished mid-sentence, someone nearby was about to betray them.",
        slots: {
            heroName: ["Petra", "Osei", "Fenwick"],
            treasure: ["a sunken bell said to sing", "the last honest cartographer's notes", "a debt owed in gold"],
            terrain: ["the Salt Reaches", "three border kingdoms", "a jungle that ate three prior expeditions"],
            partnerName: ["a reformed smuggler", "her skeptical cousin", "a guide who'd read the map wrong on purpose"],
        },
    },
];