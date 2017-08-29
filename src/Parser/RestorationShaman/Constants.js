import SPELLS from 'common/SPELLS';

export const ABILITIES_AFFECTED_BY_HEALING_INCREASES = [
  SPELLS.HEALING_WAVE.id,
  SPELLS.CHAIN_HEAL.id,
  SPELLS.HEALING_SURGE_RESTORATION.id,
  SPELLS.HEALING_STREAM_TOTEM_HEAL.id,
  SPELLS.HEALING_TIDE_TOTEM_HEAL.id,
  SPELLS.RIPTIDE.id,
  SPELLS.QUEENS_DECREE.id,
  SPELLS.TIDAL_TOTEM.id,
  SPELLS.GIFT_OF_THE_QUEEN.id,
  SPELLS.HEALING_RAIN_HEAL.id,
  SPELLS.WELLSPRING.id,
  // While the following spells don't double dip in healing increases, they gain the same percentual bonus from the transfer
  SPELLS.ANCESTRAL_GUIDANCE_HEAL.id,
  SPELLS.CLOUDBURST_TOTEM_HEAL.id,
  SPELLS.ASCENDANCE_HEAL.id,
  SPELLS.LEECH.id,
];

export const ABILITIES_AFFECTED_BY_MASTERY = [
  SPELLS.WELLSPRING.id,
  SPELLS.CHAIN_HEAL.id,
  SPELLS.HEALING_WAVE.id,
  SPELLS.RIPTIDE.id,
  SPELLS.HEALING_SURGE_RESTORATION.id,
  SPELLS.GIFT_OF_THE_QUEEN.id,
  SPELLS.HEALING_TIDE_TOTEM_HEAL.id,
  SPELLS.QUEENS_DECREE.id,
  SPELLS.TIDAL_TOTEM.id,
  SPELLS.HEALING_STREAM_TOTEM_HEAL.id,
  // While the following spells don't double dip in healing increases, they gain the same percentual bonus from the transfer
  SPELLS.ANCESTRAL_GUIDANCE_HEAL.id,
  SPELLS.CLOUDBURST_TOTEM_HEAL.id,
  SPELLS.LEECH.id,
];

export const ABILITIES_NOT_FEEDING_INTO_CBT = [
  SPELLS.CLOUDBURST_TOTEM_HEAL.id,
  SPELLS.HEALING_TIDE_TOTEM_HEAL.id,
  SPELLS.HEALING_STREAM_TOTEM_HEAL.id,
  SPELLS.TIDAL_TOTEM.id,
  SPELLS.SPIRIT_LINK_TOTEM_REDISTRIBUTE.id,
  SPELLS.LEECH.id,
  235967, // Velen's Future Sight overheal redistribution
];

export const ABILITIES_NOT_FEEDING_INTO_AG = [
  SPELLS.HEALING_TIDE_TOTEM_HEAL.id,
  SPELLS.HEALING_STREAM_TOTEM_HEAL.id,
  SPELLS.TIDAL_TOTEM.id,
  SPELLS.SPIRIT_LINK_TOTEM_REDISTRIBUTE.id,
  SPELLS.LEECH.id,
  235967, // Velen's Future Sight overheal redistribution
  SPELLS.ANCESTRAL_GUIDANCE_HEAL.id,
];

export const ABILITIES_NOT_FEEDING_INTO_ASCENDANCE = [
  SPELLS.HEALING_TIDE_TOTEM_HEAL.id,
  SPELLS.HEALING_STREAM_TOTEM_HEAL.id,
  SPELLS.TIDAL_TOTEM.id,
  SPELLS.SPIRIT_LINK_TOTEM_REDISTRIBUTE.id,
  SPELLS.LEECH.id,
  235967, // Velen's Future Sight overheal redistribution
  SPELLS.ANCESTRAL_GUIDANCE_HEAL.id,
  SPELLS.ASCENDANCE_HEAL.id,
  SPELLS.CLOUDBURST_TOTEM_HEAL.id,
];
