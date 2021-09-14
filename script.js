


function sextantClick(div) {
    div.classList.toggle("selected");
}

var mods = []
mods.push(["Unique Bosses drop 1 additional Unique Item", 500]);
mods.push(["Rogue Exiles deal 20% increased Damage\nRogue Exiles in Areas have 20% increased Maximum Life\nRogue Exiles drop 2 additional Jewels\nAreas are inhabited by 2 additional Rogue Exiles", 500]);
mods.push(["Quality bonus of Maps also applies to Rarity of Items found\nUnique Bosses have 20% increased Life", 500]);
mods.push(["Players and their Minions cannot take Reflected Damage\nAreas contain 3 additional Packs with Mirrored Rare Monsters", 1000]);
mods.push(["Player's Life and Mana Recovery from Flasks are instant\nAreas contain 4 additional packs of Monsters that Heal", 1000]);
mods.push(["Maps have 20% Quality\nUnique Bosses deal 20% increased Damage", 500]);
mods.push(["Magic Maps contain 3 additional packs of Magic Monsters\nRare Maps contain 3 additional Rare Monster packs\nNormal Maps contain 3 additional packs of Normal Monsters", 1000]);
mods.push(["Areas contain an additional Tormented Graverobber\nThe First 3 Possessed Monsters drop an additional Unique Item", 250]);
mods.push(["Areas contain an additional Tormented Betrayer\nThe First 3 Possessed Monsters drop an additional Rusted Scarab", 250]);
mods.push(["Areas contain 15 additional Clusters of Mysterious Barrels", 50]);
mods.push(["Areas contain 15 additional Clusters of Mysterious Barrels", 250]);
mods.push(["Areas contain 4 additional packs of Monsters that deal Physical Damage\nPlayers and Monsters take 8% increased Physical Damage", 1000]);
mods.push(["Areas contain 4 additional packs of Monsters that deal Lightning Damage\nPlayers and Monsters take 8% increased Lightning Damage", 1000]);
mods.push(["Areas contain 4 additional packs of Monsters that deal Fire Damage\nPlayers and Monsters take 8% increased Fire Damage", 1000]);
mods.push(["Areas contain 4 additional packs of Monsters that deal Cold Damage\nPlayers and Monsters take 8% increased Cold Damage", 1000]);
mods.push(["Areas contain 4 additional packs of Monsters that deal Chaos Damage\nPlayers and Monsters take 8% increased Chaos Damage", 1000]);
mods.push(["Areas contain 4 additional packs of Monsters that Convert when Killed", 1000]);
mods.push(["Areas are inhabited by an additional Invasion Boss", 500]);
mods.push(["Areas are Alluring", 10]);
mods.push(["Area contains 4 additional packs of Corrupted Vaal Monsters\nPlayers' Vaal Skills do not apply Soul Gain Prevention", 250]);
mods.push(["Area contains 4 additional packs of Corrupted Vaal Monsters\nPlayers gain an additional Vaal Soul on Kill", 250]);
mods.push(["Area contains 4 additional packs of Corrupted Vaal Monsters\nArea has 50% chance to contain Gifts of the Sacrificed per Sacrifice Fragment used\nArea has 50% chance to contain Gifts of the Red Queen per Mortal Fragment used", 250]);
mods.push(["20% increased Quantity of Items found in Unidentified Maps\nFound Items drop Identified in Identified Maps\n9% increased Pack Size in Unidentified Maps", 250]);
mods.push(["20% increased Magic Pack Size", 500]);

console.info(mods);

var tableBody = document.getElementById('simple_sextant_table_body');

mods.forEach((mod) => {

    const entry = document.createElement("tr");
    const description = document.createElement("td")
    const weight = document.createElement("td");

    description.appendChild(document.createTextNode(mod[0]));
    weight.appendChild(document.createTextNode(mod[1]));

    entry.classList.add("entry");
    weight.classList.add("weight");

    entry.appendChild(description);
    entry.appendChild(weight);

    tableBody.appendChild(entry);
})