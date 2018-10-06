const SPELLS_LIST = [
    {
        "name": "Acid Arrow",
        "url": "http://www.dnd5eapi.co/api/spells/1"
    },
    {
        "name": "Acid Splash",
        "url": "http://www.dnd5eapi.co/api/spells/2"
    },
    {
        "name": "Aid",
        "url": "http://www.dnd5eapi.co/api/spells/3"
    },
    {
        "name": "Alarm",
        "url": "http://www.dnd5eapi.co/api/spells/4"
    },
    {
        "name": "Alter Self",
        "url": "http://www.dnd5eapi.co/api/spells/5"
    },
    {
        "name": "Animal Messenger",
        "url": "http://www.dnd5eapi.co/api/spells/6"
    },
    {
        "name": "Animal Shapes",
        "url": "http://www.dnd5eapi.co/api/spells/7"
    },
    {
        "name": "Animate Dead",
        "url": "http://www.dnd5eapi.co/api/spells/8"
    },
    {
        "name": "Animate Objects",
        "url": "http://www.dnd5eapi.co/api/spells/9"
    },
    {
        "name": "Antilife Shell",
        "url": "http://www.dnd5eapi.co/api/spells/10"
    },
    {
        "name": "Antimagic Field",
        "url": "http://www.dnd5eapi.co/api/spells/11"
    },
    {
        "name": "Antipathy/Sympathy",
        "url": "http://www.dnd5eapi.co/api/spells/12"
    },
    {
        "name": "Arcane Eye",
        "url": "http://www.dnd5eapi.co/api/spells/13"
    },
    {
        "name": "Arcane Hand",
        "url": "http://www.dnd5eapi.co/api/spells/14"
    },
    {
        "name": "Arcane Lock",
        "url": "http://www.dnd5eapi.co/api/spells/15"
    },
    {
        "name": "Arcane Sword",
        "url": "http://www.dnd5eapi.co/api/spells/16"
    },
    {
        "name": "Arcanist's Magic Aura",
        "url": "http://www.dnd5eapi.co/api/spells/17"
    },
    {
        "name": "Astral Projection",
        "url": "http://www.dnd5eapi.co/api/spells/18"
    },
    {
        "name": "Augury",
        "url": "http://www.dnd5eapi.co/api/spells/19"
    },
    {
        "name": "Awaken",
        "url": "http://www.dnd5eapi.co/api/spells/20"
    },
    {
        "name": "Bane",
        "url": "http://www.dnd5eapi.co/api/spells/21"
    },
    {
        "name": "Banishment",
        "url": "http://www.dnd5eapi.co/api/spells/22"
    },
    {
        "name": "Barkskin",
        "url": "http://www.dnd5eapi.co/api/spells/23"
    },
    {
        "name": "Beacon of Hope",
        "url": "http://www.dnd5eapi.co/api/spells/24"
    },
    {
        "name": "Bestow Curse",
        "url": "http://www.dnd5eapi.co/api/spells/25"
    },
    {
        "name": "Black Tentacles",
        "url": "http://www.dnd5eapi.co/api/spells/26"
    },
    {
        "name": "Blade Barrier",
        "url": "http://www.dnd5eapi.co/api/spells/27"
    },
    {
        "name": "Bless",
        "url": "http://www.dnd5eapi.co/api/spells/28"
    },
    {
        "name": "Blight",
        "url": "http://www.dnd5eapi.co/api/spells/29"
    },
    {
        "name": "Blindness/Deafness",
        "url": "http://www.dnd5eapi.co/api/spells/30"
    },
    {
        "name": "Blink",
        "url": "http://www.dnd5eapi.co/api/spells/31"
    },
    {
        "name": "Blur",
        "url": "http://www.dnd5eapi.co/api/spells/32"
    },
    {
        "name": "Burning Hands",
        "url": "http://www.dnd5eapi.co/api/spells/33"
    },
    {
        "name": "Call Lightning",
        "url": "http://www.dnd5eapi.co/api/spells/34"
    },
    {
        "name": "Calm Emotions",
        "url": "http://www.dnd5eapi.co/api/spells/35"
    },
    {
        "name": "Chain Lightning",
        "url": "http://www.dnd5eapi.co/api/spells/36"
    },
    {
        "name": "Charm Person",
        "url": "http://www.dnd5eapi.co/api/spells/37"
    },
    {
        "name": "Chill Touch",
        "url": "http://www.dnd5eapi.co/api/spells/38"
    },
    {
        "name": "Circle of Death",
        "url": "http://www.dnd5eapi.co/api/spells/39"
    },
    {
        "name": "Clairvoyance",
        "url": "http://www.dnd5eapi.co/api/spells/40"
    },
    {
        "name": "Clone",
        "url": "http://www.dnd5eapi.co/api/spells/41"
    },
    {
        "name": "Cloudkill",
        "url": "http://www.dnd5eapi.co/api/spells/42"
    },
    {
        "name": "Color Spray",
        "url": "http://www.dnd5eapi.co/api/spells/43"
    },
    {
        "name": "Command",
        "url": "http://www.dnd5eapi.co/api/spells/44"
    },
    {
        "name": "Commune",
        "url": "http://www.dnd5eapi.co/api/spells/45"
    },
    {
        "name": "Commune with Nature",
        "url": "http://www.dnd5eapi.co/api/spells/46"
    },
    {
        "name": "Comprehend Languages",
        "url": "http://www.dnd5eapi.co/api/spells/47"
    },
    {
        "name": "Cone of Cold",
        "url": "http://www.dnd5eapi.co/api/spells/48"
    },
    {
        "name": "Confusion",
        "url": "http://www.dnd5eapi.co/api/spells/49"
    },
    {
        "name": "Conjure Animals",
        "url": "http://www.dnd5eapi.co/api/spells/50"
    },
    {
        "name": "Conjure Celestial",
        "url": "http://www.dnd5eapi.co/api/spells/51"
    },
    {
        "name": "Conjure Elemental",
        "url": "http://www.dnd5eapi.co/api/spells/52"
    },
    {
        "name": "Conjure Fey",
        "url": "http://www.dnd5eapi.co/api/spells/53"
    },
    {
        "name": "Conjure Minor Elementals",
        "url": "http://www.dnd5eapi.co/api/spells/54"
    },
    {
        "name": "Conjure Woodland Beings",
        "url": "http://www.dnd5eapi.co/api/spells/55"
    },
    {
        "name": "Contact Other Plane",
        "url": "http://www.dnd5eapi.co/api/spells/56"
    },
    {
        "name": "Contagion",
        "url": "http://www.dnd5eapi.co/api/spells/57"
    },
    {
        "name": "Contingency",
        "url": "http://www.dnd5eapi.co/api/spells/58"
    },
    {
        "name": "Continual Flame",
        "url": "http://www.dnd5eapi.co/api/spells/59"
    },
    {
        "name": "Control Water",
        "url": "http://www.dnd5eapi.co/api/spells/60"
    },
    {
        "name": "Control Weather",
        "url": "http://www.dnd5eapi.co/api/spells/61"
    },
    {
        "name": "Create Food and Water",
        "url": "http://www.dnd5eapi.co/api/spells/62"
    },
    {
        "name": "Create or Destroy Water",
        "url": "http://www.dnd5eapi.co/api/spells/63"
    },
    {
        "name": "Create Undead",
        "url": "http://www.dnd5eapi.co/api/spells/64"
    },
    {
        "name": "Creation",
        "url": "http://www.dnd5eapi.co/api/spells/65"
    },
    {
        "name": "Cure Wounds",
        "url": "http://www.dnd5eapi.co/api/spells/66"
    },
    {
        "name": "Dancing Lights",
        "url": "http://www.dnd5eapi.co/api/spells/67"
    },
    {
        "name": "Darkness",
        "url": "http://www.dnd5eapi.co/api/spells/68"
    },
    {
        "name": "Darkvision",
        "url": "http://www.dnd5eapi.co/api/spells/69"
    },
    {
        "name": "Daylight",
        "url": "http://www.dnd5eapi.co/api/spells/70"
    },
    {
        "name": "Death Ward",
        "url": "http://www.dnd5eapi.co/api/spells/71"
    },
    {
        "name": "Delayed Blast Fireball",
        "url": "http://www.dnd5eapi.co/api/spells/72"
    },
    {
        "name": "Demiplane",
        "url": "http://www.dnd5eapi.co/api/spells/73"
    },
    {
        "name": "Detect Evil and Good",
        "url": "http://www.dnd5eapi.co/api/spells/74"
    },
    {
        "name": "Detect Magic",
        "url": "http://www.dnd5eapi.co/api/spells/75"
    },
    {
        "name": "Detect Poison and Disease",
        "url": "http://www.dnd5eapi.co/api/spells/76"
    },
    {
        "name": "Detect Thoughts",
        "url": "http://www.dnd5eapi.co/api/spells/77"
    },
    {
        "name": "Dimension Door",
        "url": "http://www.dnd5eapi.co/api/spells/78"
    },
    {
        "name": "Disguise Self",
        "url": "http://www.dnd5eapi.co/api/spells/79"
    },
    {
        "name": "Disintegrate",
        "url": "http://www.dnd5eapi.co/api/spells/80"
    },
    {
        "name": "Dispel Evil and Good",
        "url": "http://www.dnd5eapi.co/api/spells/81"
    },
    {
        "name": "Dispel Magic",
        "url": "http://www.dnd5eapi.co/api/spells/82"
    },
    {
        "name": "Divination",
        "url": "http://www.dnd5eapi.co/api/spells/83"
    },
    {
        "name": "Divine Favor",
        "url": "http://www.dnd5eapi.co/api/spells/84"
    },
    {
        "name": "Divine Word",
        "url": "http://www.dnd5eapi.co/api/spells/85"
    },
    {
        "name": "Dominate Beast",
        "url": "http://www.dnd5eapi.co/api/spells/86"
    },
    {
        "name": "Dominate Monster",
        "url": "http://www.dnd5eapi.co/api/spells/87"
    },
    {
        "name": "Dominate Person",
        "url": "http://www.dnd5eapi.co/api/spells/88"
    },
    {
        "name": "Dream",
        "url": "http://www.dnd5eapi.co/api/spells/89"
    },
    {
        "name": "Earthquake",
        "url": "http://www.dnd5eapi.co/api/spells/90"
    },
    {
        "name": "Eldritch Blast",
        "url": "http://www.dnd5eapi.co/api/spells/91"
    },
    {
        "name": "Enhance Ability",
        "url": "http://www.dnd5eapi.co/api/spells/92"
    },
    {
        "name": "Enlarge/Reduce",
        "url": "http://www.dnd5eapi.co/api/spells/93"
    },
    {
        "name": "Entangle",
        "url": "http://www.dnd5eapi.co/api/spells/94"
    },
    {
        "name": "Enthrall",
        "url": "http://www.dnd5eapi.co/api/spells/95"
    },
    {
        "name": "Etherealness",
        "url": "http://www.dnd5eapi.co/api/spells/96"
    },
    {
        "name": "Expeditious Retreat",
        "url": "http://www.dnd5eapi.co/api/spells/97"
    },
    {
        "name": "Eyebite",
        "url": "http://www.dnd5eapi.co/api/spells/98"
    },
    {
        "name": "Fabricate",
        "url": "http://www.dnd5eapi.co/api/spells/99"
    },
    {
        "name": "Faerie Fire",
        "url": "http://www.dnd5eapi.co/api/spells/100"
    },
    {
        "name": "Faithful Hound",
        "url": "http://www.dnd5eapi.co/api/spells/101"
    },
    {
        "name": "False Life",
        "url": "http://www.dnd5eapi.co/api/spells/102"
    },
    {
        "name": "Fear",
        "url": "http://www.dnd5eapi.co/api/spells/103"
    },
    {
        "name": "Feather Fall",
        "url": "http://www.dnd5eapi.co/api/spells/104"
    },
    {
        "name": "Feeblemind",
        "url": "http://www.dnd5eapi.co/api/spells/105"
    },
    {
        "name": "Find Steed",
        "url": "http://www.dnd5eapi.co/api/spells/106"
    },
    {
        "name": "Find the Path",
        "url": "http://www.dnd5eapi.co/api/spells/107"
    },
    {
        "name": "Find Traps",
        "url": "http://www.dnd5eapi.co/api/spells/108"
    },
    {
        "name": "Finger of Death",
        "url": "http://www.dnd5eapi.co/api/spells/109"
    },
    {
        "name": "Fireball",
        "url": "http://www.dnd5eapi.co/api/spells/110"
    },
    {
        "name": "Fire Shield",
        "url": "http://www.dnd5eapi.co/api/spells/111"
    },
    {
        "name": "Fire Storm",
        "url": "http://www.dnd5eapi.co/api/spells/112"
    },
    {
        "name": "Flame Blade",
        "url": "http://www.dnd5eapi.co/api/spells/113"
    },
    {
        "name": "Flame Strike",
        "url": "http://www.dnd5eapi.co/api/spells/114"
    },
    {
        "name": "Flaming Sphere",
        "url": "http://www.dnd5eapi.co/api/spells/115"
    },
    {
        "name": "Flesh to Stone",
        "url": "http://www.dnd5eapi.co/api/spells/116"
    },
    {
        "name": "Floating Disk",
        "url": "http://www.dnd5eapi.co/api/spells/117"
    },
    {
        "name": "Fly",
        "url": "http://www.dnd5eapi.co/api/spells/118"
    },
    {
        "name": "Fog Cloud",
        "url": "http://www.dnd5eapi.co/api/spells/119"
    },
    {
        "name": "Forbiddance",
        "url": "http://www.dnd5eapi.co/api/spells/120"
    },
    {
        "name": "Forcecage",
        "url": "http://www.dnd5eapi.co/api/spells/121"
    },
    {
        "name": "Foresight",
        "url": "http://www.dnd5eapi.co/api/spells/122"
    },
    {
        "name": "Freedom of Movement",
        "url": "http://www.dnd5eapi.co/api/spells/123"
    },
    {
        "name": "Freezing Sphere",
        "url": "http://www.dnd5eapi.co/api/spells/124"
    },
    {
        "name": "Gaseous Form",
        "url": "http://www.dnd5eapi.co/api/spells/125"
    },
    {
        "name": "Gate",
        "url": "http://www.dnd5eapi.co/api/spells/126"
    },
    {
        "name": "Geas",
        "url": "http://www.dnd5eapi.co/api/spells/127"
    },
    {
        "name": "Gentle Repose",
        "url": "http://www.dnd5eapi.co/api/spells/128"
    },
    {
        "name": "Giant Insect",
        "url": "http://www.dnd5eapi.co/api/spells/129"
    },
    {
        "name": "Glibness",
        "url": "http://www.dnd5eapi.co/api/spells/130"
    },
    {
        "name": "Globe of Invulnerability",
        "url": "http://www.dnd5eapi.co/api/spells/131"
    },
    {
        "name": "Glyph of Warding",
        "url": "http://www.dnd5eapi.co/api/spells/132"
    },
    {
        "name": "Grease",
        "url": "http://www.dnd5eapi.co/api/spells/133"
    },
    {
        "name": "Greater Invisibility",
        "url": "http://www.dnd5eapi.co/api/spells/134"
    },
    {
        "name": "Greater Restoration",
        "url": "http://www.dnd5eapi.co/api/spells/135"
    },
    {
        "name": "Guards and Wards",
        "url": "http://www.dnd5eapi.co/api/spells/136"
    },
    {
        "name": "Guidance",
        "url": "http://www.dnd5eapi.co/api/spells/137"
    },
    {
        "name": "Guiding Bolt",
        "url": "http://www.dnd5eapi.co/api/spells/138"
    },
    {
        "name": "Gust of Wind",
        "url": "http://www.dnd5eapi.co/api/spells/139"
    },
    {
        "name": "Hallow",
        "url": "http://www.dnd5eapi.co/api/spells/140"
    },
    {
        "name": "Hallucinatory Terrain",
        "url": "http://www.dnd5eapi.co/api/spells/141"
    },
    {
        "name": "Harm",
        "url": "http://www.dnd5eapi.co/api/spells/142"
    },
    {
        "name": "Haste",
        "url": "http://www.dnd5eapi.co/api/spells/143"
    },
    {
        "name": "Heal",
        "url": "http://www.dnd5eapi.co/api/spells/144"
    },
    {
        "name": "Healing Word",
        "url": "http://www.dnd5eapi.co/api/spells/145"
    },
    {
        "name": "Heat Metal",
        "url": "http://www.dnd5eapi.co/api/spells/146"
    },
    {
        "name": "Heroes' Feast",
        "url": "http://www.dnd5eapi.co/api/spells/147"
    },
    {
        "name": "Heroism",
        "url": "http://www.dnd5eapi.co/api/spells/148"
    },
    {
        "name": "Hideous Laughter",
        "url": "http://www.dnd5eapi.co/api/spells/149"
    },
    {
        "name": "Hold Monster",
        "url": "http://www.dnd5eapi.co/api/spells/150"
    },
    {
        "name": "Hold Person",
        "url": "http://www.dnd5eapi.co/api/spells/151"
    },
    {
        "name": "Holy Aura",
        "url": "http://www.dnd5eapi.co/api/spells/152"
    },
    {
        "name": "Hypnotic Pattern",
        "url": "http://www.dnd5eapi.co/api/spells/153"
    },
    {
        "name": "Ice Storm",
        "url": "http://www.dnd5eapi.co/api/spells/154"
    },
    {
        "name": "Identify",
        "url": "http://www.dnd5eapi.co/api/spells/155"
    },
    {
        "name": "Illusory Script",
        "url": "http://www.dnd5eapi.co/api/spells/156"
    },
    {
        "name": "Imprisonment",
        "url": "http://www.dnd5eapi.co/api/spells/157"
    },
    {
        "name": "Incendiary Cloud",
        "url": "http://www.dnd5eapi.co/api/spells/158"
    },
    {
        "name": "Inflict Wounds",
        "url": "http://www.dnd5eapi.co/api/spells/159"
    },
    {
        "name": "Insect Plague",
        "url": "http://www.dnd5eapi.co/api/spells/160"
    },
    {
        "name": "Instant Summons",
        "url": "http://www.dnd5eapi.co/api/spells/161"
    },
    {
        "name": "Invisibility",
        "url": "http://www.dnd5eapi.co/api/spells/162"
    },
    {
        "name": "Irresistible Dance",
        "url": "http://www.dnd5eapi.co/api/spells/163"
    },
    {
        "name": "Jump",
        "url": "http://www.dnd5eapi.co/api/spells/164"
    },
    {
        "name": "Knock",
        "url": "http://www.dnd5eapi.co/api/spells/165"
    },
    {
        "name": "Legend Lore",
        "url": "http://www.dnd5eapi.co/api/spells/166"
    },
    {
        "name": "Lesser Restoration",
        "url": "http://www.dnd5eapi.co/api/spells/167"
    },
    {
        "name": "Levitate",
        "url": "http://www.dnd5eapi.co/api/spells/168"
    },
    {
        "name": "Light",
        "url": "http://www.dnd5eapi.co/api/spells/169"
    },
    {
        "name": "Lightning Bolt",
        "url": "http://www.dnd5eapi.co/api/spells/170"
    },
    {
        "name": "Locate Animals or Plants",
        "url": "http://www.dnd5eapi.co/api/spells/171"
    },
    {
        "name": "Locate Creature",
        "url": "http://www.dnd5eapi.co/api/spells/172"
    },
    {
        "name": "Locate Object",
        "url": "http://www.dnd5eapi.co/api/spells/173"
    },
    {
        "name": "Longstrider",
        "url": "http://www.dnd5eapi.co/api/spells/174"
    },
    {
        "name": "Mage Armor",
        "url": "http://www.dnd5eapi.co/api/spells/175"
    },
    {
        "name": "Mage Hand",
        "url": "http://www.dnd5eapi.co/api/spells/176"
    },
    {
        "name": "Magic Circle",
        "url": "http://www.dnd5eapi.co/api/spells/177"
    },
    {
        "name": "Magic Jar",
        "url": "http://www.dnd5eapi.co/api/spells/178"
    },
    {
        "name": "Magic Missile",
        "url": "http://www.dnd5eapi.co/api/spells/179"
    },
    {
        "name": "Magic Mouth",
        "url": "http://www.dnd5eapi.co/api/spells/180"
    },
    {
        "name": "Magic Weapon",
        "url": "http://www.dnd5eapi.co/api/spells/181"
    },
    {
        "name": "Magnificent Mansion",
        "url": "http://www.dnd5eapi.co/api/spells/182"
    },
    {
        "name": "Major Image",
        "url": "http://www.dnd5eapi.co/api/spells/183"
    },
    {
        "name": "Mass Cure Wounds",
        "url": "http://www.dnd5eapi.co/api/spells/184"
    },
    {
        "name": "Mass Heal",
        "url": "http://www.dnd5eapi.co/api/spells/185"
    },
    {
        "name": "Mass Healing Word",
        "url": "http://www.dnd5eapi.co/api/spells/186"
    },
    {
        "name": "Mass Suggestion",
        "url": "http://www.dnd5eapi.co/api/spells/187"
    },
    {
        "name": "Maze",
        "url": "http://www.dnd5eapi.co/api/spells/188"
    },
    {
        "name": "Meld into Stone",
        "url": "http://www.dnd5eapi.co/api/spells/189"
    },
    {
        "name": "Mending",
        "url": "http://www.dnd5eapi.co/api/spells/190"
    },
    {
        "name": "Message",
        "url": "http://www.dnd5eapi.co/api/spells/191"
    },
    {
        "name": "Meteor Swarm",
        "url": "http://www.dnd5eapi.co/api/spells/192"
    },
    {
        "name": "Mind Blank",
        "url": "http://www.dnd5eapi.co/api/spells/193"
    },
    {
        "name": "Minor Illusion",
        "url": "http://www.dnd5eapi.co/api/spells/194"
    },
    {
        "name": "Mirage Arcane",
        "url": "http://www.dnd5eapi.co/api/spells/195"
    },
    {
        "name": "Mirror Image",
        "url": "http://www.dnd5eapi.co/api/spells/196"
    },
    {
        "name": "Mislead",
        "url": "http://www.dnd5eapi.co/api/spells/197"
    },
    {
        "name": "Misty Step",
        "url": "http://www.dnd5eapi.co/api/spells/198"
    },
    {
        "name": "Modify Memory",
        "url": "http://www.dnd5eapi.co/api/spells/199"
    },
    {
        "name": "Moonbeam",
        "url": "http://www.dnd5eapi.co/api/spells/200"
    },
    {
        "name": "Move Earth",
        "url": "http://www.dnd5eapi.co/api/spells/201"
    },
    {
        "name": "Nondetection",
        "url": "http://www.dnd5eapi.co/api/spells/202"
    },
    {
        "name": "Pass without Trace",
        "url": "http://www.dnd5eapi.co/api/spells/203"
    },
    {
        "name": "Passwall",
        "url": "http://www.dnd5eapi.co/api/spells/204"
    },
    {
        "name": "Phantasmal Killer",
        "url": "http://www.dnd5eapi.co/api/spells/205"
    },
    {
        "name": "Phantom Steed",
        "url": "http://www.dnd5eapi.co/api/spells/206"
    },
    {
        "name": "Planar Ally",
        "url": "http://www.dnd5eapi.co/api/spells/207"
    },
    {
        "name": "Planar Binding",
        "url": "http://www.dnd5eapi.co/api/spells/208"
    },
    {
        "name": "Plane Shift",
        "url": "http://www.dnd5eapi.co/api/spells/209"
    },
    {
        "name": "Plant Growth",
        "url": "http://www.dnd5eapi.co/api/spells/210"
    },
    {
        "name": "Polymorph",
        "url": "http://www.dnd5eapi.co/api/spells/211"
    },
    {
        "name": "Power Word Kill",
        "url": "http://www.dnd5eapi.co/api/spells/212"
    },
    {
        "name": "Power Word Stun",
        "url": "http://www.dnd5eapi.co/api/spells/213"
    },
    {
        "name": "Prayer of Healing",
        "url": "http://www.dnd5eapi.co/api/spells/214"
    },
    {
        "name": "Prestidigitation",
        "url": "http://www.dnd5eapi.co/api/spells/215"
    },
    {
        "name": "Prismatic Spray",
        "url": "http://www.dnd5eapi.co/api/spells/216"
    },
    {
        "name": "Prismatic Wall",
        "url": "http://www.dnd5eapi.co/api/spells/217"
    },
    {
        "name": "Private Sanctum",
        "url": "http://www.dnd5eapi.co/api/spells/218"
    },
    {
        "name": "Produce Flame",
        "url": "http://www.dnd5eapi.co/api/spells/219"
    },
    {
        "name": "Programmed Illusion",
        "url": "http://www.dnd5eapi.co/api/spells/220"
    },
    {
        "name": "Project Image",
        "url": "http://www.dnd5eapi.co/api/spells/221"
    },
    {
        "name": "Protection from Energy",
        "url": "http://www.dnd5eapi.co/api/spells/222"
    },
    {
        "name": "Protection from Evil and Good",
        "url": "http://www.dnd5eapi.co/api/spells/223"
    },
    {
        "name": "Protection from Poison",
        "url": "http://www.dnd5eapi.co/api/spells/224"
    },
    {
        "name": "Purify Food and Drink",
        "url": "http://www.dnd5eapi.co/api/spells/225"
    },
    {
        "name": "Raise Dead",
        "url": "http://www.dnd5eapi.co/api/spells/226"
    },
    {
        "name": "Ray of Enfeeblement",
        "url": "http://www.dnd5eapi.co/api/spells/227"
    },
    {
        "name": "Ray of Frost",
        "url": "http://www.dnd5eapi.co/api/spells/228"
    },
    {
        "name": "Regenerate",
        "url": "http://www.dnd5eapi.co/api/spells/229"
    },
    {
        "name": "Reincarnate",
        "url": "http://www.dnd5eapi.co/api/spells/230"
    },
    {
        "name": "Remove Curse",
        "url": "http://www.dnd5eapi.co/api/spells/231"
    },
    {
        "name": "Resilient Sphere",
        "url": "http://www.dnd5eapi.co/api/spells/232"
    },
    {
        "name": "Resistance",
        "url": "http://www.dnd5eapi.co/api/spells/233"
    },
    {
        "name": "Resurrection",
        "url": "http://www.dnd5eapi.co/api/spells/234"
    },
    {
        "name": "Reverse Gravity",
        "url": "http://www.dnd5eapi.co/api/spells/235"
    },
    {
        "name": "Revivify",
        "url": "http://www.dnd5eapi.co/api/spells/236"
    },
    {
        "name": "Rope Trick",
        "url": "http://www.dnd5eapi.co/api/spells/237"
    },
    {
        "name": "Sacred Flame",
        "url": "http://www.dnd5eapi.co/api/spells/238"
    },
    {
        "name": "Sanctuary",
        "url": "http://www.dnd5eapi.co/api/spells/239"
    },
    {
        "name": "Scorching Ray",
        "url": "http://www.dnd5eapi.co/api/spells/240"
    },
    {
        "name": "Scrying",
        "url": "http://www.dnd5eapi.co/api/spells/241"
    },
    {
        "name": "Secret Chest",
        "url": "http://www.dnd5eapi.co/api/spells/242"
    },
    {
        "name": "See Invisibility",
        "url": "http://www.dnd5eapi.co/api/spells/243"
    },
    {
        "name": "Seeming",
        "url": "http://www.dnd5eapi.co/api/spells/244"
    },
    {
        "name": "Sending",
        "url": "http://www.dnd5eapi.co/api/spells/245"
    },
    {
        "name": "Sequester",
        "url": "http://www.dnd5eapi.co/api/spells/246"
    },
    {
        "name": "Shapechange",
        "url": "http://www.dnd5eapi.co/api/spells/247"
    },
    {
        "name": "Shatter",
        "url": "http://www.dnd5eapi.co/api/spells/248"
    },
    {
        "name": "Shield",
        "url": "http://www.dnd5eapi.co/api/spells/249"
    },
    {
        "name": "Shield of Faith",
        "url": "http://www.dnd5eapi.co/api/spells/250"
    },
    {
        "name": "Shillelagh",
        "url": "http://www.dnd5eapi.co/api/spells/251"
    },
    {
        "name": "Shocking Grasp",
        "url": "http://www.dnd5eapi.co/api/spells/252"
    },
    {
        "name": "Silence",
        "url": "http://www.dnd5eapi.co/api/spells/253"
    },
    {
        "name": "Silent Image",
        "url": "http://www.dnd5eapi.co/api/spells/254"
    },
    {
        "name": "Simulacrum",
        "url": "http://www.dnd5eapi.co/api/spells/255"
    },
    {
        "name": "Sleep",
        "url": "http://www.dnd5eapi.co/api/spells/256"
    },
    {
        "name": "Sleet Storm",
        "url": "http://www.dnd5eapi.co/api/spells/257"
    },
    {
        "name": "Slow",
        "url": "http://www.dnd5eapi.co/api/spells/258"
    },
    {
        "name": "Speak with Animals",
        "url": "http://www.dnd5eapi.co/api/spells/259"
    },
    {
        "name": "Speak with Dead",
        "url": "http://www.dnd5eapi.co/api/spells/260"
    },
    {
        "name": "Speak with Plants",
        "url": "http://www.dnd5eapi.co/api/spells/261"
    },
    {
        "name": "Spider Climb",
        "url": "http://www.dnd5eapi.co/api/spells/262"
    },
    {
        "name": "Spike Growth",
        "url": "http://www.dnd5eapi.co/api/spells/263"
    },
    {
        "name": "Spirit Guardians",
        "url": "http://www.dnd5eapi.co/api/spells/264"
    },
    {
        "name": "Spiritual Weapon",
        "url": "http://www.dnd5eapi.co/api/spells/265"
    },
    {
        "name": "Stinking Cloud",
        "url": "http://www.dnd5eapi.co/api/spells/266"
    },
    {
        "name": "Stone Shape",
        "url": "http://www.dnd5eapi.co/api/spells/267"
    },
    {
        "name": "Stoneskin",
        "url": "http://www.dnd5eapi.co/api/spells/268"
    },
    {
        "name": "Storm of Vengeance",
        "url": "http://www.dnd5eapi.co/api/spells/269"
    },
    {
        "name": "Suggestion",
        "url": "http://www.dnd5eapi.co/api/spells/270"
    },
    {
        "name": "Sunbeam",
        "url": "http://www.dnd5eapi.co/api/spells/271"
    },
    {
        "name": "Sunburst",
        "url": "http://www.dnd5eapi.co/api/spells/272"
    },
    {
        "name": "Symbol",
        "url": "http://www.dnd5eapi.co/api/spells/273"
    },
    {
        "name": "Telekinesis",
        "url": "http://www.dnd5eapi.co/api/spells/274"
    },
    {
        "name": "Telepathic Bond",
        "url": "http://www.dnd5eapi.co/api/spells/275"
    },
    {
        "name": "Teleport",
        "url": "http://www.dnd5eapi.co/api/spells/276"
    },
    {
        "name": "Teleportation Circle",
        "url": "http://www.dnd5eapi.co/api/spells/277"
    },
    {
        "name": "Thaumaturgy",
        "url": "http://www.dnd5eapi.co/api/spells/278"
    },
    {
        "name": "Thunderwave",
        "url": "http://www.dnd5eapi.co/api/spells/279"
    },
    {
        "name": "Time Stop",
        "url": "http://www.dnd5eapi.co/api/spells/280"
    },
    {
        "name": "Tiny Hut",
        "url": "http://www.dnd5eapi.co/api/spells/281"
    },
    {
        "name": "Tongues",
        "url": "http://www.dnd5eapi.co/api/spells/282"
    },
    {
        "name": "Transport via Plants",
        "url": "http://www.dnd5eapi.co/api/spells/283"
    },
    {
        "name": "Tree Stride",
        "url": "http://www.dnd5eapi.co/api/spells/284"
    },
    {
        "name": "True Polymorph",
        "url": "http://www.dnd5eapi.co/api/spells/285"
    },
    {
        "name": "True Resurrection",
        "url": "http://www.dnd5eapi.co/api/spells/286"
    },
    {
        "name": "True Seeing",
        "url": "http://www.dnd5eapi.co/api/spells/287"
    },
    {
        "name": "True Strike",
        "url": "http://www.dnd5eapi.co/api/spells/288"
    },
    {
        "name": "Unseen Servant",
        "url": "http://www.dnd5eapi.co/api/spells/289"
    },
    {
        "name": "Vampiric Touch",
        "url": "http://www.dnd5eapi.co/api/spells/290"
    },
    {
        "name": "Wall of Fire",
        "url": "http://www.dnd5eapi.co/api/spells/291"
    },
    {
        "name": "Wall of Force",
        "url": "http://www.dnd5eapi.co/api/spells/292"
    },
    {
        "name": "Wall of Ice",
        "url": "http://www.dnd5eapi.co/api/spells/293"
    },
    {
        "name": "Wall of Stone",
        "url": "http://www.dnd5eapi.co/api/spells/294"
    },
    {
        "name": "Wall of Thorns",
        "url": "http://www.dnd5eapi.co/api/spells/295"
    },
    {
        "name": "Warding Bond",
        "url": "http://www.dnd5eapi.co/api/spells/296"
    },
    {
        "name": "Water Breathing",
        "url": "http://www.dnd5eapi.co/api/spells/297"
    },
    {
        "name": "Water Walk",
        "url": "http://www.dnd5eapi.co/api/spells/298"
    },
    {
        "name": "Web",
        "url": "http://www.dnd5eapi.co/api/spells/299"
    },
    {
        "name": "Weird",
        "url": "http://www.dnd5eapi.co/api/spells/300"
    },
    {
        "name": "Wind Walk",
        "url": "http://www.dnd5eapi.co/api/spells/301"
    },
    {
        "name": "Wind Wall",
        "url": "http://www.dnd5eapi.co/api/spells/302"
    },
    {
        "name": "Wish",
        "url": "http://www.dnd5eapi.co/api/spells/303"
    },
    {
        "name": "Word of Recall",
        "url": "http://www.dnd5eapi.co/api/spells/304"
    },
    {
        "name": "Zone of Truth",
        "url": "http://www.dnd5eapi.co/api/spells/305"
    }
]

export default SPELLS_LIST;