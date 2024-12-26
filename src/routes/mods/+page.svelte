<script>
    import Nav from "../navbar.svelte"
    import { Heading, P, A, Accordion, AccordionItem } from 'flowbite-svelte';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from 'flowbite-svelte';
    import Footer from "../footer.svelte"

</script>

<Nav />
<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl mb-50">Gilbert Server Mods</Heading>
<p class="text-lightParagraph dark:text-paragraph my-10">The minecraft server has many mods that change the terrain generation, add custom items, stuctures and more. All the mods are server-sided so you do not need to install any on your own client. This page shows a description of the features added in each mod.</p>
<hr class="my-12 h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10" />
<Accordion multiple>
    <AccordionItem open class="dark:bg-zinc-900">
      <span slot="header" class="text-4xl">Terralith</span>
      <img src="https://wsrv.nl/?url=https%3A%2F%2Fuser-images.githubusercontent.com%2F63272345%2F224816673-7f074733-da85-4673-a7b0-3362651c4dbd.png&n=-1" width="100%" height="auto" class="mb-4 rounded" alt="Terralith" loading="lazy">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Terralith adds over 95 brand new biomes, as well as updating almost every vanilla biome with new and improved features. There are also new terrain types: canyons, shattered biomes, floating islands, deep ocean trenches, and much, much more. Terralith's main focus is terrain, but after adding and overhauling Vanilla terrain with new features and shaping, the next step was to paint that terrain with new biomes, each with their own block palette, trees, foliage, colors, features, mobs and structures.</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400 font-bold">New biomes</p>
      <p class="text-gray-500 dark:text-gray-400">
        Check out <a href="https://stardustlabs.miraheze.org/wiki/Terralith#Biomes" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> Terralith wiki </a> for a full list of new biomes.
      </p>
      <br>
      <a href="https://modrinth.com/datapack/terralith" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline text-2xl">https://modrinth.com/datapack/terralith</a>
    </AccordionItem>
    <AccordionItem open class="dark:bg-zinc-900">
        <span slot="header" class="text-4xl">Incedium</span>
        <img src="https://wsrv.nl/?url=https%3A%2F%2Fuser-images.githubusercontent.com%2F63272345%2F224804955-2c8a39b1-d015-462b-a28c-dde27f747c90.png&n=-1" width="100%" height="auto" class="mb-4 rounded" alt="Incendium" loading="lazy">
        <p class="mb-2 text-gray-500 dark:text-gray-400">Incendium is a datapack that completely revamps the nether, way more than what Minecraft did in the 1.16 Nether Update.</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400 font-bold">Biomes</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Incendium adds 8 unique biomes to the nether. Do you bravely venture through the perilous Quartz Flats, wander the mysterious Withered Forest, or battle your way through the steep Infernal Dunes? Each biome has a unique personality and story to tell. With unique block themes in each biomes, opportunities for new farms for technical players, 3D biomes, and stunning terrain, there is truly something for everyone.</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400 font-bold">Structures</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">To complement the lovely biomes, there are 9+ structures for you to explore and conquer. In the Ash Barrens, the Forbidden Castle stands forebodingly, with courageous Piglins defending its treasured loot - one of the largest and complex random structures in Minecraft! Alternatively, you can conquer the ominous Sanctum with its illagers defending dark secrets and strong weapons. The skeleton chef Torte defends his Quartz Kitchen, and the Withered Director his Nether Reactor. What will you conquer first?</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400 font-bold">Items</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Every mob you defeat and structure you conquer has its reward - Incendium pays you handsomely with rich loot and custom weapons! Defeating the Hovering Inferno could earn you the Trailblazer - a flame-spewing bow. A high damage, but taxing Greatsword of Sacrifice hides within the Forbidden Castle's walls, along with the helpful Hefty Pickaxe. Or maybe you prefer to find the Hazmat Suit to protect you from all types of poisonous attacks. There are over 25 items to forge your own playstyle with!</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400 font-bold">Mobs</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">No datapack would be complete without its own mobs to fight you. The Toxic Heap is home of the agile Toxic Slimes, and the Withered Forest is haunted by the Restless Spirits. On the other hand, you could go on a rescue mission to save the Ghastling from the Abandoned Tower - in return, it will defend you from Ghasts. If none of this is challenging, you can summon the all-powerful Hovering Inferno boss for a difficult and dirty battle.</p>
        <br>
        <a href="https://modrinth.com/datapack/incendium" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline text-2xl">https://modrinth.com/datapack/incendium</a>
      </AccordionItem>
    <AccordionItem open class="dark:bg-zinc-900">
        <span slot="header" class="text-4xl">Dungeons and Taverns</span>
        <img src="https://cdn.modrinth.com/data/tpehi7ww/images/41218bb765900f0b879a749799c13992d2d733fb.png" width="100%" height="auto" class="mb-4 rounded" alt="Dungeons and Taverns" loading="lazy">    
        <p class="mb-2 text-gray-500 dark:text-gray-400">This datapacks adds vanilla like structures that are supposed to blend in with the rest of the game and feel like they belong there. going from environmental additions like fire watch towers and taverns to dungeons like badland minder outpost and illager hideout.</p>
        <div class="grid grid-cols-2 gap-4">
        <ul>
            <li class="text-gray-500 dark:text-gray-400 font-2xl"><b>End Lighthouse</b> - Structures spawning in the End acting as Ends version of Taverns. you can find maps here for End Castles and obtain End Ship Keys</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Nether Skeleton Camps</b> - Small structure spawning in the nether with biome variants holding a few skeletons and a loot chest. you can find Skeleton Tower maps here</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Wells</b> - why should the desert be the only place to have unnecessary wells?</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>End Castle</b> - Ends version of a Stronghold and Endcity Hybrid. you can find Gravity, Wax Wings, End Ship Keys, End Crystals and other things here. can be found either with an End Castle Map or Eyes of Ender</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Jungle Ruins</b> - You aren't a fan of the small Jungle temple? maybe search for Jungle ruins then. Bogged spawn here and you can find the Photosynthesis Enchantment here</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Swamp Villages</b> - Find villages in swamp with... witches? seems like getting that mending librarian isn't going to be that easy.</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>End Ships</b> - Lone Endships spawning within the end containing a vault needing an End Ship Vault Key. Those vaults always hold Elytra. Maybe even enchanted with Wax Wings</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Toxic Lair</b> - Swamp Structure found in swamp biomes. Surface area has ruins with suspicious gravel but the inside leads to an underground structure with a miniboss and several trial spawner/vaults and ominous vaults. you can find Antidote, Piercing/Multishot bows here</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Triden Trail Monument</b> - Giant Prismarine structure not spawning guardians naturally but from trial spawner here, you can obtain tridents, heart of the sea and other goodies here</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Piglin Camps</b> - Spawning in the nether they act as smaller structures with 1 Piglin Brute and a loot chest. You can find Hamlet maps here</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Jungle Villages</b> - Spawning in Jungles are now jungle villages</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Shrines</b> - Shrines leading down to 1-5 themed combat arenas that all follow 1 theme per shrine, amound of copper bulbs indicate how many rooms there are. you can find Shrine Keys, Ominous Shrine keys and Traveler here. Ominous vaults are only in lv 5 shrines</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Hamlet</b> - Nether Village for the Piglins. this structure is fortified and filled to the brim with Piglins but exploring it might hold some treasure. You can find maps for Piglin Outstations here</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Illager Hideout</b> - A rare underground Dungeon that is filled with Illagers. a challenge for late game player who seek a challenge</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Stray Fort</b> - This fort generates in cold biomes and is infested with strays and guard towers</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Piglin Donjon</b> - The Donjon is a Megastructure spawning rarely in crimson forest biomes containing several room types of the various bastion remnants and container crates filled with gold. also look out for hidden vault rooms. Ontop is a Coloseum for Vault keys</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Taverns</b> - Taverns are places where you find beds and a Trader selling maps to some of the dungeons or ruins of this datapack. you need to trade with the trader once for them to unlock the Map Trades</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Ruined Towns</b> - Ruined Towns are ruins from the past with rubble everywhere with suspicious gravel holding mostly just junk but maybe some sherds and other tressures</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Nether Keep</b> - This Mega Structure is an giant tower spawning inside the nether, containing 3 blaze spawner rooms with their own treasure chests. bridges hold trial Spawner and arenas to obtain keys for the vault inside. you can obtain Ghasted and Wither Coated here</li>
        </ul>
        <ul>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Remnants</b> - Remnants are rare enviromental ruins, not different from wild ruins but MUCH MUCH rarer. one of them is a classic village that is abandoned</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Bunker</b> - A somewhat rare structure that resembles surface exposed strongholds, they have a bigger room variety and dont have an end portal chamber</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Desert Ruins</b> - Desert ruins are an archeology structure with an custom desert village spawning around it containing more archeology. you can obtain Outreach here</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Undead Crypts</b> - Another underground Dungeon with alot of bones, skulls and other stuff with 1 spawner room</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Creeping Crypt</b> - Creeping Crypts are an structure found in taiga biomes, filled with creeper, gunpowder, suspicious gravel and if you are lucky, even an creeper spawner alongside the other trial spawner spawning creepr and undead</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Illager Camps</b> - The Illager are on the move and set up camps all over the world! those small structures are a small challenge you can interact with on your travels. you can find Illager Structure Maps here</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Firewatch towers</b> - They are atmospheric builds to make the world feel more lived in. you can use them as a small base or just to find a nights rest</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Piglin Outstation</b> - This Outstation has Piglins spawning all the times and contains a secret vault guarded by piglin brutes. You can find maps for Piglin Donjons here</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Nether Port</b> - Nether Port are a middle sized structure spawning at lava level with a crimson plank walkway around the main Port structure containing 1 blaze spawner and some treasure rooms</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Mangrove Swamp Hut</b> - the witches moved into the mangrove swamp with 3 different hut styles</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Witch Villa</b> - Spawning in swamp biomes and Mangrove Swamps those structure act as witches woodland mansion with their own experiments and own backyard</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Conduit ruin</b> - A way to teach player how to build a conduit with hints in the chest in the prismarine ring as well as being an archeological site</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Underground House</b> - 'tis but a terraria reference</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Nether Skeleton Tower</b> - An tower structure inside the Nether generating with an loot chest and some smaller structures around, guarded by skeletons. You can find Nether Keep or Nether Port maps here</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Wild Ruins</b> - Under wild ruins fall things like small camps, huts and dead redstone golems, they are environmental and supposed to add to making the world feel more lived in</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Illager Manor</b> - Grand Illager Structure replacing 50% of all Woodland mansions, filled with Evokers, Vindicators, Pillager and Witches, but also jailed Iron Golem, Villager and Allays. You can find Illagers Bane here</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Badlands Miner Outpost</b> - This unique Outpost is more about the mining operations in Badlands. a good way to get gold and tnt</li>
            <li class="mb-2 text-gray-500 dark:text-gray-400 font-2xl"><b>Lone Citadel</b> - Probably Dungeons and Taverns biggest structure yet. Recreating the Lone Fortress from Minecraft Dungeons and bringing it to vanilla. Breezes and Strays are at home here. you can obtain Power Crossbows from here</li>
        </ul>
    </div>
    <a href="https://modrinth.com/datapack/dungeons-and-taverns" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline text-2xl">https://modrinth.com/datapack/dungeons-and-taverns</a>
    </AccordionItem>
    <AccordionItem open class="dark:bg-zinc-900">
        <span slot="header" class="text-4xl">Nullscape</span>
        <img src="https://wsrv.nl/?url=https%3A%2F%2Fuser-images.githubusercontent.com%2F63272345%2F224808975-6d3866c1-a968-4fa1-a1c1-6d9318e42ed9.png&n=-1" width="100%" height="auto" class="mb-4 rounded" alt="Nullscape" loading="lazy">
        <p class="mb-2 text-gray-500 dark:text-gray-400">Nullscape will make you feel tiny and alone in the vast expanse of the End. You against the void - nothing more than that. Nullscape boosts the End's height to 384 blocks, and makes full use of 1.18's modern features to generate incredibly varied terrain. You'll find everything from shattered islands, to floating valleys, to crystallized peaks! Different regions of the End - on very large scales - have different properties and feelings to allow for almost infinite variation in terrain shapes. From sponge-like porous terrain, to stretched alien landscapes, to stacked rounded islands; you'll find new and interesting terrain no matter how far you go.</p>
        <br>
        <a href="https://modrinth.com/datapack/nullscape" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline text-2xl">https://modrinth.com/datapack/nullscape</a>
      </AccordionItem>
    <AccordionItem open class="dark:bg-zinc-900">
        <span slot="header" class="text-4xl">Enchantments Encore</span>
        <img src="https://wsrv.nl/?url=https%3A%2F%2Fexplorerseden.eu%2Fenchtants_title.png&n=-1" width="100%" height="auto" class="mb-4" alt="Enchantments Encore" loading="lazy">
        <p class="mb-2 text-gray-500 dark:text-gray-400">Enchantments Encore adds 150+ enchantments to the game which can be obtained in any vanilla way. Some are obtainable in loot chests or in an enchanting table, others are tradable at villager. Even mobs can spawn with some of the new enchantments on their equipment.</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400 font-bold">List of Enchantments</p>
        <iframe src="https://explorerseden.eu/tables/enchantment_list.html" width="100%" height=1000rem frameborder="0">
        </iframe>
        <br>
        <a href="https://modrinth.com/datapack/enchantments-encore" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline text-2xl">https://modrinth.com/datapack/enchantments-encore</a>
      </AccordionItem>
  </Accordion>
<Footer />