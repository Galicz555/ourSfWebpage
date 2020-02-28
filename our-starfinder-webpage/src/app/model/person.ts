class person {
  private id: number;
  private charName: string;
  private sfSocitey: string;
  private class: string;
  private level: number;
  private race: string;
  private theme: string;
  private size: string;
  private speed: number;
  private gender: string;
  private homeWorld: string;
  private aligment: string;
  private diety: string;
  private player: string;
  private str: number;
  private dex: number;
  private con: number;
  private int: number;
  private wis: number;
  private cha: number;
  private strMod: number;
  private dexMod: number;
  private conMod: number;
  private intMod: number;
  private wisMod: number;
  private chaMod: number;
  private strUpg: number;
  private dexUpg: number;
  private conUpg: number;
  private intUpg: number;
  private wisUpg: number;
  private chaUpg: number;
  private strUpgMod: number;
  private dexUpgMod: number;
  private conUpgMod: number;
  private intUpgMod: number;
  private wisUpgMod: number;
  private chaUpgMod: number;
  private initiativeMiscMod: number;
  private totalStamina: number;
  private actStamina: number;
  private totalHealth: number;
  private actHealth: number;
  private totalResPoints: number;
  private actResPoints: number;
  private totalEAC: number;
  private totalKAC: number;
  private armBonEAC: number;
  private armBonKAC: number;
  private armDexMOD: number;
  private miscModEAC: number;
  private miscModKAC: number;
  private acroTotal: number;
  private acroRanks: number;
  private acroClassBon: number;
  private acroAbMod: number;
  private acVsCombMan: number;
  private damageRed: number;
  private resistances: string;
  private totalFortSave: number;
  private baseFortSave: number;
  private abiFortSave: number;
  private miscFortSave: number;
  private totalReflSave: number;
  private baseReflSave: number;
  private abiReflSave: number;
  private miscReflSave: number;
  private totalWillSave: number;
  private baseWillSave: number;
  private abiWillSave: number;
  private miscWillSave: number;
  private saveModifiers: string;
  private meleeThrowTotalATK: number;
  private BAB: number;
  private meleeThrowSTRMod: number;
  private meleeThrowMiscMod: number;
  private rangedTotalATK: number;
  private rangedDEXMod: number;
  private rangedMiscMod: number;
  private acroInsightBon: number;
  private acroMiscMod: number;
  private athleTotal: number;
  private athleRanks: number;
  private athleClassBon: number;
  private athleAbMod: number;
  private athleInsightBon: number;
  private athleMiscMod: number;
  private bluffTotal: number;
  private bluffRanks: number;
  private bluffClassBon: number;
  private bluffAbMod: number;
  private bluffInsightBon: number;
  private bluffMiscMod: number;
  private compTotal: number;
  private compRanks: number;
  private compClassBon: number;
  private compAbMod: number;
  private compInsightBon: number;
  private compMiscMod: number;
  private cultTotal: number;
  private cultRanks: number;
  private cultClassBon: number;
  private cultAbMod: number;
  private cultInsightBon: number;
  private cultMiscMod: number;
  private dipoTotal: number;
  private dipoRanks: number;
  private dipoClassBon: number;
  private dipoAbMod: number;
  private dipoInsightBon: number;
  private dipoMiscMod: number;
  private disgTotal: number;
  private disgRanks: number;
  private disgClassBon: number;
  private disgAbMod: number;
  private disgInsightBon: number;
  private disgMiscMod: number;
  private engTotal: number;
  private engRanks: number;
  private engClassBon: number;
  private engAbMod: number;
  private engInsightBon: number;
  private engMiscMod: number;
  private intiTotal: number;
  private intiRanks: number;
  private intiClassBon: number;
  private intiAbMod: number;
  private intiInsightBon: number;
  private intiMiscMod: number;
  private lifeSTotal: number;
  private lifeSRanks: number;
  private lifeSClassBon: number;
  private lifeSAbMod: number;
  private lifeSInsightBon: number;
  private lifeSMiscMod: number;
  private mediTotal: number;
  private mediRanks: number;
  private mediClassBon: number;
  private mediAbMod: number;
  private mediInsightBon: number;
  private mediMiscMod: number;
  private mystTotal: number;
  private mystRanks: number;
  private mystClassBon: number;
  private mystAbMod: number;
  private mystInsightBon: number;
  private mystMiscMod: number;
  private percTotal: number;
  private percRanks: number;
  private percClassBon: number;
  private percAbMod: number;
  private percInsightBon: number;
  private percMiscMod: number;
  private pysSTotal: number;
  private pysSRanks: number;
  private pysSClassBon: number;
  private pysSAbMod: number;
  private pysSInsightBon: number;
  private pysSMiscMod: number;
  private piloTotal: number;
  private piloRanks: number;
  private piloClassBon: number;
  private piloAbMod: number;
  private piloInsightBon: number;
  private piloMiscMod: number;
  private profTotal: number;
  private profRanks: number;
  private profClassBon: number;
  private profAbMod: number;
  private profInsightBon: number;
  private profMiscMod: number;
  private prof2Total: number;
  private prof2Ranks: number;
  private prof2ClassBon: number;
  private prof2AbMod: number;
  private prof2InsightBon: number;
  private prof2MiscMod: number;
  private senseMTotal: number;
  private senseMRanks: number;
  private senseMClassBon: number;
  private senseMAbMod: number;
  private senseMInsightBon: number;
  private senseMMiscMod: number;
  private sleightOHTotal: number;
  private sleightOHRanks: number;
  private sleightOHClassBon: number;
  private sleightOHAbMod: number;
  private sleightOHInsightBon: number;
  private sleightOHMiscMod: number;
  private stealthTotal: number;
  private stealthRanks: number;
  private stealthClassBon: number;
  private stealthAbMod: number;
  private stealthInsightBon: number;
  private stealthMiscMod: number;
  private survTotal: number;
  private survRanks: number;
  private survClassBon: number;
  private survAbMod: number;
  private survInsightBon: number;
  private survMiscMod: number;

  constructor(
    $id: number,
    $charName: string,
    $sfSocitey: string,
    $class: string,
    $level: number,
    $race: string,
    $theme: string,
    $size: string,
    $speed: number,
    $gender: string,
    $homeWorld: string,
    $aligment: string,
    $diety: string,
    $player: string,
    $str: number,
    $dex: number,
    $con: number,
    $int: number,
    $wis: number,
    $cha: number,
    $strUpg: number,
    $dexUpg: number,
    $conUpg: number,
    $intUpg: number,
    $wisUpg: number,
    $chaUpg: number,
    $initiativeMiscMod: number,
    $totalStamina: number,
    $actStamina: number,
    $totalHealth: number,
    $actHealth: number,
    $totalResPoints: number,
    $actResPoints: number,
    $totalEAC: number,
    $totalKAC: number,
    $armBonEAC: number,
    $armBonKAC: number,
    $armDexMOD: number,
    $miscModEAC: number,
    $miscModKAC: number,
    $acroTotal: number,
    $acroRanks: number,
    $acroClassBon: number,
    $acroAbMod: number,
    $acVsCombMan: number,
    $damageRed: number,
    $resistances: string,
    $totalFortSave: number,
    $baseFortSave: number,
    $abiFortSave: number,
    $miscFortSave: number,
    $totalReflSave: number,
    $baseReflSave: number,
    $abiReflSave: number,
    $miscReflSave: number,
    $totalWillSave: number,
    $baseWillSave: number,
    $abiWillSave: number,
    $miscWillSave: number,
    $saveModifiers: string,
    $meleeThrowTotalATK: number,
    $BAB: number,
    $meleeThrowSTRMod: number,
    $meleeThrowMiscMod: number,
    $rangedTotalATK: number,
    $rangedDEXMod: number,
    $rangedMiscMod: number,
    $acroInsightBon: number,
    $acroMiscMod: number,
    $athleTotal: number,
    $athleRanks: number,
    $athleClassBon: number,
    $athleAbMod: number,
    $athleInsightBon: number,
    $athleMiscMod: number,
    $bluffTotal: number,
    $bluffRanks: number,
    $bluffClassBon: number,
    $bluffAbMod: number,
    $bluffInsightBon: number,
    $bluffMiscMod: number,
    $compTotal: number,
    $compRanks: number,
    $compClassBon: number,
    $compAbMod: number,
    $compInsightBon: number,
    $compMiscMod: number,
    $cultTotal: number,
    $cultRanks: number,
    $cultClassBon: number,
    $cultAbMod: number,
    $cultInsightBon: number,
    $cultMiscMod: number,
    $dipoTotal: number,
    $dipoRanks: number,
    $dipoClassBon: number,
    $dipoAbMod: number,
    $dipoInsightBon: number,
    $dipoMiscMod: number,
    $disgTotal: number,
    $disgRanks: number,
    $disgClassBon: number,
    $disgAbMod: number,
    $disgInsightBon: number,
    $disgMiscMod: number,
    $engTotal: number,
    $engRanks: number,
    $engClassBon: number,
    $engAbMod: number,
    $engInsightBon: number,
    $engMiscMod: number,
    $intiTotal: number,
    $intiRanks: number,
    $intiClassBon: number,
    $intiAbMod: number,
    $intiInsightBon: number,
    $intiMiscMod: number,
    $lifeSTotal: number,
    $lifeSRanks: number,
    $lifeSClassBon: number,
    $lifeSAbMod: number,
    $lifeSInsightBon: number,
    $lifeSMiscMod: number,
    $mediTotal: number,
    $mediRanks: number,
    $mediClassBon: number,
    $mediAbMod: number,
    $mediInsightBon: number,
    $mediMiscMod: number,
    $mystTotal: number,
    $mystRanks: number,
    $mystClassBon: number,
    $mystAbMod: number,
    $mystInsightBon: number,
    $mystMiscMod: number,
    $percTotal: number,
    $percRanks: number,
    $percClassBon: number,
    $percAbMod: number,
    $percInsightBon: number,
    $percMiscMod: number,
    $pysSTotal: number,
    $pysSRanks: number,
    $pysSClassBon: number,
    $pysSAbMod: number,
    $pysSInsightBon: number,
    $pysSMiscMod: number,
    $piloTotal: number,
    $piloRanks: number,
    $piloClassBon: number,
    $piloAbMod: number,
    $piloInsightBon: number,
    $piloMiscMod: number,
    $profTotal: number,
    $profRanks: number,
    $profClassBon: number,
    $profAbMod: number,
    $profInsightBon: number,
    $profMiscMod: number,
    $prof2Total: number,
    $prof2Ranks: number,
    $prof2ClassBon: number,
    $prof2AbMod: number,
    $prof2InsightBon: number,
    $prof2MiscMod: number,
    $senseMTotal: number,
    $senseMRanks: number,
    $senseMClassBon: number,
    $senseMAbMod: number,
    $senseMInsightBon: number,
    $senseMMiscMod: number,
    $sleightOHTotal: number,
    $sleightOHRanks: number,
    $sleightOHClassBon: number,
    $sleightOHAbMod: number,
    $sleightOHInsightBon: number,
    $sleightOHMiscMod: number,
    $stealthTotal: number,
    $stealthRanks: number,
    $stealthClassBon: number,
    $stealthAbMod: number,
    $stealthInsightBon: number,
    $stealthMiscMod: number,
    $survTotal: number,
    $survRanks: number,
    $survClassBon: number,
    $survAbMod: number,
    $survInsightBon: number,
    $survMiscMod: number
  ) {
    this.id = $id;
    this.charName = $charName;
    this.sfSocitey = $sfSocitey;
    this.class = $class;
    this.level = $level;
    this.race = $race;
    this.theme = $theme;
    this.size = $size;
    this.speed = $speed;
    this.gender = $gender;
    this.homeWorld = $homeWorld;
    this.aligment = $aligment;
    this.diety = $diety;
    this.player = $player;
    this.str = $str;
    this.dex = $dex;
    this.con = $con;
    this.int = $int;
    this.wis = $wis;
    this.cha = $cha;
    this.strMod = Math.floor((this.str - 10) / 2);
    this.dexMod = Math.floor((this.dex - 10) / 2);
    this.conMod = Math.floor((this.con - 10) / 2);
    this.intMod = Math.floor((this.int - 10) / 2);
    this.wisMod = Math.floor((this.wis - 10) / 2);
    this.chaMod = Math.floor((this.cha - 10) / 2);
    this.strUpg = $strUpg;
    this.dexUpg = $dexUpg;
    this.conUpg = $conUpg;
    this.intUpg = $intUpg;
    this.wisUpg = $wisUpg;
    this.chaUpg = $chaUpg;
    this.strUpgMod = Math.floor((this.strUpg - 10) / 2);
    this.dexUpgMod = Math.floor((this.dexUpg - 10) / 2);
    this.conUpgMod = Math.floor((this.conUpg - 10) / 2);
    this.intUpgMod = Math.floor((this.intUpg - 10) / 2);
    this.wisUpgMod = Math.floor((this.wisUpg - 10) / 2);
    this.chaUpgMod = Math.floor((this.chaUpg - 10) / 2);
    this.initiativeMiscMod = $initiativeMiscMod;
    this.totalStamina = this.level * (6 + this.conUpgMod);
    this.actStamina = $actStamina;
    this.totalHealth = 4 + this.level * 6;
    this.actHealth = $actHealth;
    this.totalResPoints = this.level / +this.wisUpgMod;
    this.actResPoints = $actResPoints;
    this.totalEAC = this.armBonEAC + this.dexUpgMod + this.miscModEAC;
    this.totalKAC = this.armBonKAC + this.dexUpgMod + this.miscModKAC;
    this.armBonEAC = $armBonEAC;
    this.armBonKAC = $armBonKAC;
    this.armDexMOD = $armDexMOD;
    this.miscModEAC = $miscModEAC;
    this.miscModKAC = $miscModKAC;
    this.acVsCombMan = this.totalKAC + 8;
    this.damageRed = $damageRed;
    this.resistances = $resistances;
    this.totalFortSave =
      this.baseFortSave + this.abiFortSave + this.miscFortSave;
    this.baseFortSave = Math.floor(this.level / 3);
    this.abiFortSave = this.conUpgMod;
    this.miscFortSave = $miscFortSave;
    this.totalReflSave =
      this.baseReflSave + this.abiReflSave + this.miscReflSave;
    this.baseReflSave = Math.floor(this.level / 3);
    this.abiReflSave = this.dexUpgMod;
    this.miscReflSave = $miscReflSave;
    this.totalWillSave =
      this.baseWillSave + this.abiWillSave + this.miscWillSave;
    this.baseWillSave = Math.floor(this.level / 2) + 2;
    this.abiWillSave = this.wisUpgMod;
    this.miscWillSave = $miscWillSave;
    this.saveModifiers = $saveModifiers;
    this.meleeThrowTotalATK =
      this.BAB + this.meleeThrowSTRMod + this.meleeThrowMiscMod;
    this.BAB = this.babCalc();
    this.meleeThrowSTRMod = this.strUpgMod;
    this.meleeThrowMiscMod = $meleeThrowMiscMod;
    this.rangedTotalATK = this.BAB + this.rangedDEXMod + this.rangedMiscMod;
    this.rangedDEXMod = this.dexUpgMod;
    this.rangedMiscMod = $rangedMiscMod;
    this.acroTotal =
      this.acroRanks +
      this.acroClassBon +
      this.acroAbMod +
      this.acroInsightBon +
      this.acroMiscMod;
    this.acroRanks = $acroRanks;
    this.acroClassBon = $acroClassBon;
    this.acroAbMod = this.dexUpgMod;
    this.acroInsightBon = $acroInsightBon;
    this.acroMiscMod = $acroMiscMod;
    this.athleTotal =
      this.athleRanks +
      this.athleClassBon +
      this.athleAbMod +
      this.athleInsightBon +
      this.athleMiscMod;
    this.athleRanks = $athleRanks;
    this.athleClassBon = $athleClassBon;
    this.athleAbMod = this.strUpgMod;
    this.athleInsightBon = $athleInsightBon;
    this.athleMiscMod = $athleMiscMod;
    this.bluffTotal =
      this.bluffRanks +
      this.bluffClassBon +
      this.bluffAbMod +
      this.bluffInsightBon +
      this.bluffMiscMod;
    this.bluffRanks = $bluffRanks;
    this.bluffClassBon = $bluffClassBon;
    this.bluffAbMod = this.chaUpgMod;
    this.bluffInsightBon = $bluffInsightBon;
    this.bluffMiscMod = $bluffMiscMod;
    this.compTotal =
      this.compRanks +
      this.compClassBon +
      this.compAbMod +
      this.compInsightBon +
      this.compMiscMod;
    this.compRanks = $compRanks;
    this.compClassBon = $compClassBon;
    this.compAbMod = this.intUpgMod;
    this.compInsightBon = $compInsightBon;
    this.compMiscMod = $compMiscMod;
    this.cultTotal =
      this.cultRanks +
      this.cultClassBon +
      this.cultAbMod +
      this.cultInsightBon +
      this.cultMiscMod;
    this.cultRanks = $cultRanks;
    this.cultClassBon = $cultClassBon;
    this.cultAbMod = this.intUpgMod;
    this.cultInsightBon = $cultInsightBon;
    this.cultMiscMod = $cultMiscMod;
    this.dipoTotal =
      this.dipoRanks +
      this.dipoClassBon +
      this.dipoAbMod +
      this.dipoInsightBon +
      this.dipoMiscMod;
    this.dipoRanks = $dipoRanks;
    this.dipoClassBon = $dipoClassBon;
    this.dipoAbMod = this.chaUpgMod;
    this.dipoInsightBon = $dipoInsightBon;
    this.dipoMiscMod = $dipoMiscMod;
    this.disgTotal =
      this.disgRanks +
      this.disgClassBon +
      this.disgAbMod +
      this.disgInsightBon +
      this.disgMiscMod;
    this.disgRanks = $disgRanks;
    this.disgClassBon = $disgClassBon;
    this.disgAbMod = this.chaUpgMod;
    this.disgInsightBon = $disgInsightBon;
    this.disgMiscMod = $disgMiscMod;
    this.engTotal =
      this.engRanks +
      this.engClassBon +
      this.engAbMod +
      this.engInsightBon +
      this.engMiscMod;
    this.engRanks = $engRanks;
    this.engClassBon = $engClassBon;
    this.engAbMod = this.intUpgMod;
    this.engInsightBon = $engInsightBon;
    this.engMiscMod = $engMiscMod;
    this.intiTotal =
      this.intiRanks +
      this.intiClassBon +
      this.intiAbMod +
      this.intiInsightBon +
      this.intiMiscMod;
    this.intiRanks = $intiRanks;
    this.intiClassBon = $intiClassBon;
    this.intiAbMod = this.chaUpgMod;
    this.intiInsightBon = $intiInsightBon;
    this.intiMiscMod = $intiMiscMod;
    this.lifeSTotal =
      this.lifeSRanks +
      this.lifeSClassBon +
      this.lifeSAbMod +
      this.lifeSInsightBon +
      this.lifeSMiscMod;
    this.lifeSRanks = $lifeSRanks;
    this.lifeSClassBon = $lifeSClassBon;
    this.lifeSAbMod = this.intUpgMod;
    this.lifeSInsightBon = $lifeSInsightBon;
    this.lifeSMiscMod = $lifeSMiscMod;
    this.mediTotal =
      this.mediRanks +
      this.mediClassBon +
      this.mediAbMod +
      this.mediInsightBon +
      this.mediMiscMod;
    this.mediRanks = $mediRanks;
    this.mediClassBon = $mediClassBon;
    this.mediAbMod = this.intUpgMod;
    this.mediInsightBon = $mediInsightBon;
    this.mediMiscMod = $mediMiscMod;
    this.mystTotal =
      this.mystRanks +
      this.mystClassBon +
      this.mystAbMod +
      this.mystInsightBon +
      this.mystMiscMod;
    this.mystRanks = $mystRanks;
    this.mystClassBon = $mystClassBon;
    this.mystAbMod = this.wisUpgMod;
    this.mystInsightBon = $mystInsightBon;
    this.mystMiscMod = $mystMiscMod;
    this.percTotal =
      this.percRanks +
      this.percClassBon +
      this.percAbMod +
      this.percInsightBon +
      this.percMiscMod;
    this.percRanks = $percRanks;
    this.percClassBon = $percClassBon;
    this.percAbMod = this.wisUpgMod;
    this.percInsightBon = $percInsightBon;
    this.percMiscMod = $percMiscMod;
    this.pysSTotal =
      this.pysSRanks +
      this.pysSClassBon +
      this.pysSAbMod +
      this.pysSInsightBon +
      this.pysSMiscMod;
    this.pysSRanks = $pysSRanks;
    this.pysSClassBon = $pysSClassBon;
    this.pysSAbMod = this.intUpgMod;
    this.pysSInsightBon = $pysSInsightBon;
    this.pysSMiscMod = $pysSMiscMod;
    this.piloTotal =
      this.piloRanks +
      this.piloClassBon +
      this.piloAbMod +
      this.piloInsightBon +
      this.piloMiscMod;
    this.piloRanks = $piloRanks;
    this.piloClassBon = $piloClassBon;
    this.piloAbMod = this.dexUpgMod;
    this.piloInsightBon = $piloInsightBon;
    this.piloMiscMod = $piloMiscMod;
    this.profTotal =
      this.profRanks +
      this.profClassBon +
      this.profAbMod +
      this.profInsightBon +
      this.profMiscMod;
    this.profRanks = $profRanks;
    this.profClassBon = $profClassBon;
    this.profAbMod = this.wisUpgMod;
    this.profInsightBon = $profInsightBon;
    this.profMiscMod = $profMiscMod;
    this.prof2Total =
      this.prof2Ranks +
      this.prof2ClassBon +
      this.prof2AbMod +
      this.prof2InsightBon +
      this.prof2MiscMod;
    this.prof2Ranks = $prof2Ranks;
    this.prof2ClassBon = $prof2ClassBon;
    this.prof2AbMod = $prof2AbMod;
    this.prof2InsightBon = $prof2InsightBon;
    this.prof2MiscMod = $prof2MiscMod;
    this.senseMTotal =
      this.senseMRanks +
      this.senseMClassBon +
      this.senseMAbMod +
      this.senseMInsightBon +
      this.senseMMiscMod;
    this.senseMRanks = $senseMRanks;
    this.senseMClassBon = $senseMClassBon;
    this.senseMAbMod = this.wisUpgMod;
    this.senseMInsightBon = $senseMInsightBon;
    this.senseMMiscMod = $senseMMiscMod;
    this.sleightOHTotal =
      this.sleightOHRanks +
      this.sleightOHClassBon +
      this.sleightOHAbMod +
      this.sleightOHInsightBon +
      this.sleightOHMiscMod;
    this.sleightOHRanks = $sleightOHRanks;
    this.sleightOHClassBon = $sleightOHClassBon;
    this.sleightOHAbMod = this.dexUpgMod;
    this.sleightOHInsightBon = $sleightOHInsightBon;
    this.sleightOHMiscMod = $sleightOHMiscMod;
    this.stealthTotal =
      this.stealthRanks +
      this.stealthClassBon +
      this.stealthAbMod +
      this.stealthInsightBon +
      this.stealthMiscMod;
    this.stealthRanks = $stealthRanks;
    this.stealthClassBon = $stealthClassBon;
    this.stealthAbMod = this.dexUpgMod;
    this.stealthInsightBon = $stealthInsightBon;
    this.stealthMiscMod = $stealthMiscMod;
    this.survTotal =
      this.survRanks +
      this.survClassBon +
      this.survAbMod +
      this.survInsightBon +
      this.survMiscMod;
    this.survRanks = $survRanks;
    this.survClassBon = $survClassBon;
    this.survAbMod = this.wisUpgMod;
    this.survInsightBon = $survInsightBon;
    this.survMiscMod = $survMiscMod;
  }

  public babCalc(): number {
    if (this.level == 1) {
      return 0;
    } else if (this.level == 2) {
      return 1;
    } else if (this.level == 3) {
      return 2;
    } else if (this.level == 4 || this.level == 5) {
      return 3;
    } else if (this.level == 6) {
      return 4;
    } else if (this.level == 7) {
      return 5;
    } else if (this.level == 8 || this.level == 9) {
      return 6;
    } else if (this.level == 10) {
      return 7;
    } else if (this.level == 11) {
      return 8;
    } else if (this.level == 12 || this.level == 13) {
      return 9;
    } else if (this.level == 14) {
      return 10;
    } else if (this.level == 15) {
      return 11;
    } else if (this.level == 16 || this.level == 17) {
      return 12;
    } else if (this.level == 18) {
      return 13;
    } else if (this.level == 19) {
      return 14;
    } else if (this.level == 20) {
      return 15;
    }
  }
}
