/**
 * Created by Lars on 10.03.2016.
 */


var ATTRIBUTES = {
    Strength: {
        name: "Strength",
        "tooltip": "How strong you are"
    },
    Stamina: {
        name: "Stamina",
        "tooltip": "How tough you are"
    },
    Accuracy: {
        name: "Accuracy",
        "tooltip": "How precise you are"
    },
    Dexterity: {
        name: "Dexterity",
        "tooltip": "How agile you are"
    },
    Willpower: {
        name: "Willpower",
        "tooltip": "How strong your mind is"
    },
    Intelligence: {
        name: "Intelligence",
        "tooltip": "How fast you understand things"
    },
    Charisma: {
        name: "Charisma",
        "tooltip": "How charming you are"
    },
    Perception: {
        name: "Perception",
        "tooltip": "How aware you are of your surroundings"
    }
};

var SKILLS = {
    Pistols: {
        name: "Pistols",
        tooltip: "Your skill with pistols",
        attr: ATTRIBUTES.Accuracy
    },
    Automatic: {
        name: "Automatic",
        tooltip: "Your skill with automatic weapons like assault-rifles",
        attr: ATTRIBUTES.Accuracy
    },
    Sniper: {
        name: "Sniper",
        tooltip: "Your skill with long range weapons like rifles",
        attr: ATTRIBUTES.Accuracy
    },
    Heavy: {
        name: "Heavy",
        tootlip: "Your skill with heavy weapons like MG or rocket-Launcher",
        attr: ATTRIBUTES.Strength
    },

    Weaponless: {
        name: "Weaponless",
        tooltip: "Your skill with punching, kicking and biting",
        attr: ATTRIBUTES.Strength
    },
    Long: {
        name: "Long weapons",
        tooltip: "Your skill with hammers, swords, sticks and such",
        attr: ATTRIBUTES.Dexterity
    },
    Short: {
        name: "Short weapons",
        tooltip: "Your skill with daggers, knives, broken bottles and such",
        attr: ATTRIBUTES.Accuracy
    },

    Intimidation: {
        name: "Intimidation",
        tooltip: "How easily you can make people fear you",
        attr: ATTRIBUTES.Strength
    },
    Flirting: {
        name: "Flirting",
        tooltip: "How easily you can make people like you",
        attr: ATTRIBUTES.Charisma
    },
    Lying: {
        name: "Lying",
        tooltip: "How easily you can lie to others without getting caught",
        attr: ATTRIBUTES.Charisma
    },
    Bargaining: {
        name: "Bargaining",
        tooltip: "How easily you can get a good deal",
        attr: ATTRIBUTES.Perception
    },

    Technology:{
        name: "Technology",
        tooltip: "How good you are in using and building technology",
        attr: ATTRIBUTES.Intelligence
    },
    Piloting:{
        name: "Piloting",
        tooltip: "How good you can pilot aircraft",
        attr: ATTRIBUTES.Accuracy
    },
    Medicine:{
        name: "Medicine",
        tooltip: "How much you know about the human body and how to heal it",
        attr: ATTRIBUTES.Intelligence
    },
    Acrobatics:{
        name: "Acrobatics",
        tooltip: "How swift you can climb or walk on edges",
        attr: ATTRIBUTES.Dexterity
    },
    Hacking:{
        name: "Hacking",
        tooltip: "How good you can hack and use software in general",
        attr: ATTRIBUTES.Intelligence
    },
    Stealth:{
        name: "Stealth",
        tooltip: "How good you can move without beeing noticed",
        attr: ATTRIBUTES.Dexterity
    },
    Nature:{
        name: "Nature",
        tooltip: "How much you know about nature",
        attr: ATTRIBUTES.Intelligence
    },
    Arcana:{
        name: "Arcana",
        tooltip: "How good you can sense magic",
        attr: ATTRIBUTES.Perception
    },

    Energy:{
        name: "Energy",
        tooltip: "How good you can control energy like heat or electricity",
        attr: ATTRIBUTES.Willpower
    },
    Summoning:{
        name: "Summoning",
        tooltip: "How easy it is for you to summon things",
        attr: ATTRIBUTES.Willpower
    },
    Sensory:{
        name: "Sensory",
        tooltip: "How good you can create or detect illusions",
        attr: ATTRIBUTES.Intelligence
    },
    Manipulation:{
        name: "Manipulation",
        tooltip: "How good you are at manipulating things around you",
        attr: ATTRIBUTES.Intelligence
    }
};

var SKILL_GROUPS = {
    Firearms: [
        SKILLS.Automatic,
        SKILLS.Heavy,
        SKILLS.Pistols,
        SKILLS.Sniper
    ],
    Meele: [
        SKILLS.Long,
        SKILLS.Short,
        SKILLS.Weaponless
    ],
    Magic:[
        SKILLS.Energy,
        SKILLS.Manipulation,
        SKILLS.Sensory,
        SKILLS.Manipulation
    ],
    Social: [
        SKILLS.Bargaining,
        SKILLS.Flirting,
        SKILLS.Intimidation,
        SKILLS.Lying
    ],
    Other:[
        SKILLS.Acrobatics,
        SKILLS.Arcana,
        SKILLS.Hacking,
        SKILLS.Medicine,
        SKILLS.Nature,
        SKILLS.Stealth,
        SKILLS.Technology,
        SKILLS.Piloting
    ]
};


module.exports = {
    ATTRIBUTES:ATTRIBUTES,
    SKILLS: SKILLS,
    SKILL_GROUPS: SKILL_GROUPS
};