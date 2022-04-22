var countNum=0;
const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById('card3')
const card4 = document.getElementById("card4")
const card5 = document.getElementById("card5")
document.getElementById("countNum").innerHTML = 'Not Open Pack';

const cardInbox =[
    {
        number : 'DIFO-JP001',
        name : 'Performapal Gentrude' ,
        rarity : 'Common',
        category : 'Effect Pendulum Monster',
        img : '<img class="card" src="/img/PerformapalGentrude-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP002',
        name : 'Performapal Lady Ange' ,
        rarity : 'Rare',
        category : 'Effect Pendulum Monster',
        img : '<img class="card" src="/img/PerformapalLadyAnge-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP003',
        name : `Therions' "Bulls" Ein` ,
        rarity : 'Common',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/TherionsBullsEin-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP004',
        name : `Therions' "Leaper" Fam"` ,
        rarity : 'Rare',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/TherionsLeaperFam-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP005',
        name : `Therions' "Duke" Jule` ,
        rarity : 'Common',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/TherionsDukeJule-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP006',
        name : `Therions' "Lily" Borea` ,
        rarity : 'Super Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/TherionsLilyBorea-DIFO-JP-SR.png" alt="">',
    },
    {
        number : 'DIFO-JP007',
        name : `Therions' "King" Regulus` ,
        rarity : 'Ultra Rare Ultimate Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/TherionsKingRegulus-DIFO-JP-UR.png" alt="">',
    },
    {
        number : 'DIFO-JP008',
        name : `Visas Starfrost"` ,
        rarity : 'Super Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Tuner monster',
        img : '<img class="card" src="/img/VisasStarfrost-DIFO-JP-SR.png" alt="">',
    },
    {
        number : 'DIFO-JP009',
        name : `Scareclaw Astra` ,
        rarity : 'Common',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/ScareclawAstra-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP010',
        name : `Scareclaw Veronea` ,
        rarity : 'Common',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/ScareclawVeronea-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP011',
        name : `Scareclaw Acroa` ,
        rarity : 'Common',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/ScareclawAcroa-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP012',
        name : `Scareclaw Reich Heart` ,
        rarity : 'Super Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/ScareclawReichHeart-DIFO-JP-SR.png" alt="">',
    },
    {
        number : 'DIFO-JP013',
        name : `Crazy Clown` ,
        rarity : 'Rare',
        category : 'Effect Tuner monster',
        img : '<img class="card" src="/img/CrazyClown-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP014',
        name : `Al Ghoul Mazera"` ,
        rarity : 'Common',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/AlGhoulMazera-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP015',
        name : `Heroic Challenger - Knuckle Knife` ,
        rarity : 'Common',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/HeroicChallengerKnuckleKnife-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP016',
        name : `Heroic Challenger - Morning Star` ,
        rarity : 'Rare',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/HeroicChallengerMorningStar-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP017',
        name : `Predaplant Byblisp` ,
        rarity : 'Rare',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/PredaplantByblisp-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP018',
        name : `Predaplant Bufollicula` ,
        rarity : 'Common',
        category : 'Effect Pendulum Monster',
        img : '<img class="card" src="/img/PredaplantBufollicula-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP019',
        name : `Predaplant Triantis` ,
        rarity : 'Common',
        category : 'Effect Pendulum Monster',
        img : '<img class="card" src="/img/PredaplantTriantis-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP020',
        name : `Symphonic Warrior Guitaris` ,
        rarity : 'Common',
        category : 'Effect Tuner Pendulum Monster',
        img : '<img class="card" src="/img/SymphonicWarriorGuitaris-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP021',
        name : `Symphonic Warrior Deejays` ,
        rarity : 'Common',
        category : 'Effect Pendulum Monster',
        img : '<img class="card" src="/img/SymphonicWarriorDeejays-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP022',
        name : `Noh-P.U.N.K. Dia Note` ,
        rarity : 'Super Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/NohPUNKDiaNote-DIFO-JP-SR.png" alt="">',
    },
    {
        number : 'DIFO-JP023',
        name : `Illegal Knight` ,
        rarity : 'Super Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/IllegalKnight-DIFO-JP-SR.png" alt="">',
    },
    {
        number : 'DIFO-JP024',
        name : `Ancient Warriors - Tyrannical Dong Ying"` ,
        rarity : 'Common',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/AncientWarriorsTyrannicalDongYing-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP025',
        name : `Battleguard #0` ,
        rarity : 'Common',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/Battleguard0-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP026',
        name : `Light Law Medium` ,
        rarity : 'Common',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/LightLawMedium-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP027',
        name : `Divine Dragon Titanomakhia` ,
        rarity : 'Common',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/DivineDragonTitanomakhia-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP028',
        name : `Midday Sentinel` ,
        rarity : 'Common',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/MiddaySentinel-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP029',
        name : `Amphibious Bugroth MK-11` ,
        rarity : 'Common',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/AmphibiousBugrothMK11-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP030',
        name : `Mare of the Shore` ,
        rarity : 'Rare',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/MareoftheShore-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP031',
        name : `Flip Jar` ,
        rarity : 'Common',
        category : 'Flip monster',
        img : '<img class="card" src="/img/FlipJar-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP032',
        name : `Yamatako Orochi` ,
        rarity : 'Common',
        category : 'Effect Tuner monster',
        img : '<img class="card" src="/img/YamatakoOrochi-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP033',
        name : `Entombing Casket Sarcophagus` ,
        rarity : 'Normal Rare',
        category : 'Effect Monster',
        img : '<img class="card" src="/img/EntombingCasketSarcophagus-DIFO-JP-NR.png" alt="">',
    },
    {
        number : 'DIFO-JP034',
        name : `Odd-Eyes Pendulumgraph Dragon` ,
        rarity : 'Ultra Rare Ultimate Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Ritual Pendulum Monster',
        img : '<img class="card" src="/img/OddEyesPendulumgraphDragon-DIFO-JP-UR.png" alt="">',
    },
    {
        number : 'DIFO-JP035',
        name : `Abyssal Dragon Alba Renatus` ,
        rarity : 'Ultra Rare Ultimate Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Fusion Monster',
        img : '<img class="card" src="/img/AbyssalDragonAlbaRenatus-DIFO-JP-UR.png" alt="">',
    },
    {
        number : 'DIFO-JP036',
        name : `Starving Venom Predator Fusion Dragon` ,
        rarity : 'Ultra Rare Ultimate Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Fusion Monster',
        img : '<img class="card" src="/img/StarvingVenomPredatorFusionDragon-DIFO-JP-UR.png" alt="">',
    },
    {
        number : 'DIFO-JP037',
        name : `Predaplant Ambulomelioides` ,
        rarity : 'Rare',
        category : 'Effect Fusion Monster',
        img : '<img class="card" src="/img/PredaplantAmbulomelioides-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP038',
        name : `Dinomorphia Rexsturm"` ,
        rarity : 'Super Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Fusion Monster',
        img : '<img class="card" src="/img/DinomorphiaRexsturm-DIFO-JP-SR.png" alt="">',
    },
    {
        number : 'DIFO-JP039',
        name : `Red-Eyes Zombie Dragon Lord` ,
        rarity : 'Ultra Rare Ultimate Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Synchro Monster',
        img : '<img class="card" src="/img/RedEyesZombieDragonLord-DIFO-JP-UR.png" alt="">',
    },
    {
        number : 'DIFO-JP040',
        name : `Corpse Dragon Lord Felgrand` ,
        rarity : 'Rare',
        category : 'Effect Synchro Monster',
        img : '<img class="card" src="/img/CorpseDragonLordFelgrand-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP041',
        name : `Immortal Dragon"` ,
        rarity : 'Rare',
        category : 'Effect Tuner Synchro Monster',
        img : '<img class="card" src="/img/ImmortalDragon-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP042',
        name : `Symphonic Warrior Rocks` ,
        rarity : 'Rare',
        category : 'Effect Synchro Pendulum Monster',
        img : '<img class="card" src="/img/SymphonicWarriorRocks-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP043',
        name : `Psychic End Punisher` ,
        rarity : 'Ultra Rare Ultimate Rare Secret Rare Prismatic Secret Rare Holographic Rare',
        category : 'Effect Synchro Monster',
        img : '<img class="card" src="/img/CorpseDragonLordFelgrand-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP044',
        name : `Heroic Champion - Claiomh Solais` ,
        rarity : 'Super Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Xyz Monster',
        img : '<img class="card" src="/img/HeroicChampionClaiomhSolais-DIFO-JP-SR.png" alt="">',
    },
    {
        number : 'DIFO-JP045',
        name : `Heroic Champion - Jarngreipr` ,
        rarity : 'Common',
        category : 'Effect Xyz Monster',
        img : '<img class="card" src="/img/HeroicChampionJarngreipr-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP046',
        name : `Exosisters Magnifica` ,
        rarity : 'Ultra Rare Ultimate Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Xyz Monster',
        img : '<img class="card" src="/img/ExosistersMagnifica-DIFO-JP-UR.png" alt="">',
    },
    {
        number : 'DIFO-JP047',
        name : `Sekitori - Musomaru` ,
        rarity : 'Normal Rare',
        category : 'Effect Xyz Monster',
        img : '<img class="card" src="/img/SekitoriMusomaru-DIFO-JP-NR.png" alt="">',
    },
    {
        number : 'DIFO-JP048',
        name : `Beyond the Pendulum` ,
        rarity : 'Super Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Link Monster',
        img : '<img class="card" src="/img/BeyondthePendulum-DIFO-JP-SR.png" alt="">',
    },
    {
        number : 'DIFO-JP049',
        name : `Scareclaw Trich Heart` ,
        rarity : 'Ultra Rare Ultimate Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Link Monster',
        img : '<img class="card" src="/img/ScareclawTrichHeart-DIFO-JP-UR.png" alt="">',
    },
    {
        number : 'DIFO-JP050',
        name : `The Weather Painter Moonbow` ,
        rarity : 'Super Rare Secret Rare Prismatic Secret Rare',
        category : 'Effect Link Monster',
        img : '<img class="card" src="/img/TheWeatherPainterMoonbow-DIFO-JP-SR.png" alt="">',
    },
    {
        number : 'DIFO-JP051',
        name : `Pione, the Sylvan Dancer"` ,
        rarity : 'Rare',
        category : 'Effect Link Monster',
        img : '<img class="card" src="/img/PionetheSylvanDancer-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP052',
        name : `Extra Pendulum"` ,
        rarity : 'Rare',
        category : 'Normal Spell',
        img : '<img class="card" src="/img/ExtraPendulum-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP053',
        name : `Therions' Ring, the Colosseum Saucer` ,
        rarity : 'Super Rare Secret Rare Prismatic Secret Rare',
        category : 'Field Spell',
        img : '<img class="card" src="/img/TherionsRingtheColosseumSaucer-DIFO-JP-SR.png" alt="">',
    },
    {
        number : 'DIFO-JP054',
        name : `Perpetual Engine Argyro System` ,
        rarity : 'Rare',
        category : 'Normal Spell',
        img : '<img class="card" src="/img/PerpetualEngineArgyroSystem-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP055',
        name : `Therions' Charge` ,
        rarity : 'Common',
        category : 'Normal Spell',
        img : '<img class="card" src="/img/TherionsCharge-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP056',
        name : `Icejade Curse` ,
        rarity : 'Common',
        category : 'Continuous Spell',
        img : '<img class="card" src="/img/IcejadeCurse-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP057',
        name : `Branded Forfeiture` ,
        rarity : 'Common',
        category : 'Normal Spell',
        img : '<img class="card" src="/img/BrandedForfeiture-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP058',
        name : `Lifobia, the Wanton and Willful World of Desire` ,
        rarity : 'Rare',
        category : 'Field Spell',
        img : '<img class="card" src="/img/LifobiatheWantonandWillfulWorldofDesire-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP059',
        name : `Scareclaw Nova` ,
        rarity : 'Common',
        category : 'Normal Spell',
        img : '<img class="card" src="/img/ScareclawNova-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP060',
        name : `Zombie Reborn` ,
        rarity : 'Common',
        category : 'Normal Spell',
        img : '<img class="card" src="/img/ZombieReborn-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP061',
        name : `Heroic Envoy"` ,
        rarity : 'Common',
        category : 'Normal Spell',
        img : '<img class="card" src="/img/HeroicEnvoy-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP062',
        name : `Dress Rehearsal` ,
        rarity : 'Common',
        category : 'Continuous Spell',
        img : '<img class="card" src="/img/DressRehearsal-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP063',
        name : `The Weather Forecast` ,
        rarity : 'Rare',
        category : 'Field Spell',
        img : '<img class="card" src="/img/TheWeatherForecast-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP064',
        name : `Ancient Warriors Saga - Deception and Betrayal` ,
        rarity : 'Common',
        category : 'Continuous Spell',
        img : '<img class="card" src="/img/AncientWarriorsSagaDeceptionandBetrayal-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP065',
        name : `War Rock Medium` ,
        rarity : 'Common',
        category : 'Continuous Spell',
        img : '<img class="card" src="/img/WarRockMedium-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP066',
        name : `Materiactor Annulus` ,
        rarity : 'Common',
        category : 'Normal Spell',
        img : '<img class="card" src="/img/MateriactorAnnulus-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP067',
        name : `Dream Pillow Parasomnia` ,
        rarity : 'Common',
        category : 'Equip Spell',
        img : '<img class="card" src="/img/DreamPillowParasomnia-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP068',
        name : `Surprise Chain` ,
        rarity : 'Normal Rare',
        category : 'Quick-Play Spell',
        img : '<img class="card" src="/img/SurpriseChain-DIFO-JP-NR.png" alt="">',
    },
    {
        number : 'DIFO-JP069',
        name : `Pendulum Scale` ,
        rarity : 'Common',
        category : 'Normal Trap',
        img : '<img class="card" src="/img/PendulumScale-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP070',
        name : `Therions' Cross` ,
        rarity : 'Common',
        category : 'Normal Trap',
        img : '<img class="card" src="/img/TherionsCross-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP071',
        name : `Therions' Standup` ,
        rarity : 'Common',
        category : 'Normal Trap',
        img : '<img class="card" src="/img/TherionsStandup-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP072',
        name : `Branded Exile` ,
        rarity : 'Rare',
        category : 'Normal Trap',
        img : '<img class="card" src="/img/BrandedExile-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP073',
        name : `Dogmatikaturgy` ,
        rarity : 'Common',
        category : 'Normal Trap',
        img : '<img class="card" src="/img/Dogmatikaturgy-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP074',
        name : `Scareclaw Sclash` ,
        rarity : 'Common',
        category : 'Continuous Trap',
        img : '<img class="card" src="/img/ScareclawSclash-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP075',
        name : `Scareclaw Alternative` ,
        rarity : 'Common',
        category : 'Normal Trap',
        img : '<img class="card" src="/img/ScareclawAlternative-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP076',
        name : `Haunted Zombie` ,
        rarity : 'Common',
        category : 'Normal Trap',
        img : '<img class="card" src="/img/HauntedZombie-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP077',
        name : `Dinomorphia Frenzy` ,
        rarity : 'Rare',
        category : 'Normal Trap',
        img : '<img class="card" src="/img/DinomorphiaFrenzy-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP078',
        name : `Pawnshop Ledgerbook` ,
        rarity : 'Common',
        category : 'Normal Trap',
        img : '<img class="card" src="/img/PawnshopLedgerbook-DIFO-JP-C.png" alt="">',
    },
    {
        number : 'DIFO-JP079',
        name : `Cross X-Clusion` ,
        rarity : 'Rare',
        category : 'Counter Trap',
        img : '<img class="card" src="/img/CrossXClusion-DIFO-JP-R.png" alt="">',
    },
    {
        number : 'DIFO-JP080',
        name : `Vivid Tail` ,
        rarity : 'Normal Rare',
        category : 'Normal Trap',
        img : '<img class="card" src="/img/VividTail-DIFO-JP-NR.png" alt="">',
    },

    ]

function randomNumber() {
    const rNum = Math.floor(Math.random()*79)
    return rNum
} 
function randomCard(){
    const card = cardInbox[randomNumber()];
    console.log(card)
    return card
}  
function openPackcard(){
    card1.innerHTML = randomCard().img;
    card2.innerHTML = randomCard().img;
    card3.innerHTML = randomCard().img;
    card4.innerHTML = randomCard().img;
    card5.innerHTML = randomCard().img;
    countNum=countNum+1;
    console.log(`Open ${countNum} Pack`)
    document.getElementById("countNum").innerHTML = `Open ${countNum} Pack`
}

