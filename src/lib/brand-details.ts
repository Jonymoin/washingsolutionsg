import { BRANDS } from "./site-data";
import { slugify } from "./slug";

export interface BrandDetail {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  problems: string[];
  errorCodes: string;
  repairs: string[];
  whyUs: string[];
}

const DATA: Record<string, Omit<BrandDetail, "slug" | "name">> = {
  Samsung: {
    tagline: "EcoBubble, AddWash and Digital Inverter models serviced island-wide",
    intro:
      "Samsung is the best-selling washing machine brand in Singapore, and EcoBubble front loaders are in thousands of HDB and condo homes. We service Digital Inverter motors, AddWash doors and Samsung's full error-code range.",
    problems: [
      "4E / 4C fill errors from a blocked inlet mesh filter",
      "5E drain errors caused by a clogged pump filter",
      "UE / UB unbalanced load errors from worn suspension",
      "DC / DE door lock faults on AddWash models",
      "Noisy spin from worn drum bearings on older EcoBubble units",
    ],
    errorCodes: "4E, 4C, 5E, 5C, UE, UB, DC, DE, LE, 3E, HE",
    repairs: [
      "Digital Inverter motor and hall sensor testing",
      "Main PCB and sub-PCB diagnostics or replacement",
      "Drum bearing, spider and shock absorber replacement",
      "Door lock, AddWash hatch and boot seal replacement",
      "Drain pump, inlet valve and hose service",
    ],
    whyUs: [
      "Regularly work on EcoBubble, AddWash and QuickDrive series",
      "Genuine or manufacturer-approved Samsung parts",
      "Error code read and explained before quoting",
    ],
  },
  LG: {
    tagline: "Direct Drive, TurboWash and TWINWash repair specialists",
    intro:
      "LG's Direct Drive motor removes the belt, but the rotor, hall sensor and stator still fail with age. We handle LG front loaders, top loaders and TWINWash mini units across Singapore.",
    problems: [
      "OE drain errors from a blocked pump or drain hose",
      "IE fill errors from restricted inlet valves",
      "UE imbalance and violent shaking during spin",
      "LE motor lock errors on Direct Drive models",
      "Rotor bolt loosening causing a knocking noise",
    ],
    errorCodes: "OE, IE, UE, LE, dE, PE, FE, tE, CL",
    repairs: [
      "Direct Drive rotor, stator and hall sensor replacement",
      "Main control board and display board repair",
      "Door lock switch and boot seal replacement",
      "Drain pump, inlet valve and pressure switch service",
      "Tub bearing and shock absorber replacement",
    ],
    whyUs: [
      "Direct Drive specific diagnostics, not guesswork",
      "10-year motor warranty models handled correctly",
      "Same-day appointments island-wide",
    ],
  },
  Bosch: {
    tagline: "German-engineered Serie 4, 6 and 8 machines repaired properly",
    intro:
      "Bosch machines are built to last, but their electronics and drain systems are sensitive to Singapore's water and power conditions. We repair Serie 2 through Serie 8 front loaders and washer-dryers.",
    problems: [
      "E18 drain pump error — the most common Bosch fault in Singapore",
      "E23 leakage sensor tripping from a hidden drip",
      "F21 motor or tacho errors",
      "Door lock failure leaving laundry trapped inside",
      "Slow filling from a clogged Aquastop inlet hose",
    ],
    errorCodes: "E18, E23, F16, F17, F18, F21, F23, F43, F63",
    repairs: [
      "Drain pump and non-return valve replacement",
      "Aquastop inlet hose and leakage sensor service",
      "Motor carbon brush and tacho coil replacement",
      "Main module reprogramming or replacement",
      "Door interlock and hinge repair",
    ],
    whyUs: [
      "Familiar with Bosch's module-based fault codes",
      "Original Bosch-compatible parts sourced quickly",
      "Honest advice on repair vs replacement for older units",
    ],
  },
  Electrolux: {
    tagline: "UltimateCare and front load Electrolux repair across Singapore",
    intro:
      "Electrolux front loaders are popular in Singapore condos. Their door locks, drain pumps and control boards are the parts we replace most often, and we usually complete the repair in one visit.",
    problems: [
      "E20 drain fault from a blocked pump or filter",
      "E10 water fill fault from a restricted inlet",
      "Door not unlocking after a completed cycle",
      "Excessive vibration from worn dampers",
      "Programme freezing part way through the cycle",
    ],
    errorCodes: "E10, E20, E40, EF0, EH0, E51, E91",
    repairs: [
      "Drain pump, filter and hose replacement",
      "Inlet valve and flow meter service",
      "Door lock module and boot seal replacement",
      "Control board diagnostics and reset",
      "Damper, spring and bearing replacement",
    ],
    whyUs: [
      "Frequent Electrolux part stock for one-visit repairs",
      "Technicians trained on UltimateCare series controls",
      "Weekend and public holiday service at no extra charge",
    ],
  },
  Panasonic: {
    tagline: "Panasonic top load and front load washer service",
    intro:
      "Panasonic machines are known for reliable motors and simple electronics. Most Panasonic call-outs in Singapore involve drainage, lid switches or water level sensors rather than major mechanical failure.",
    problems: [
      "U11 drain error from a clogged drain hose",
      "U12 lid open error on top load models",
      "H01 / H series control faults",
      "Water level sensor giving incorrect fill",
      "Slow or weak spin from a worn clutch",
    ],
    errorCodes: "U11, U12, U13, U14, H01, H27, H32",
    repairs: [
      "Drain pump and hose clearing or replacement",
      "Lid switch and safety interlock replacement",
      "Water level pressure sensor calibration",
      "Clutch, gearbox and belt service",
      "Control board and wiring harness repair",
    ],
    whyUs: [
      "Straightforward, affordable repairs on reliable Panasonic units",
      "Parts sourced for both current and discontinued models",
      "Clear quotation before any work begins",
    ],
  },
  Toshiba: {
    tagline: "Toshiba inverter top load and front load repair",
    intro:
      "Toshiba's large-capacity top loaders are common in Singapore family homes. Their inverter motors are durable, while drain pumps, lid locks and pressure sensors are the usual service points.",
    problems: [
      "E2 / E23 drainage faults",
      "E7 unbalanced load detection stopping the spin",
      "Lid lock not engaging on inverter top loaders",
      "Water not filling due to a blocked inlet filter",
      "Loud humming without drum rotation",
    ],
    errorCodes: "E1, E2, E7, E9, E23, EC1",
    repairs: [
      "Inverter motor and driver board testing",
      "Drain pump and filter service",
      "Lid lock and hinge replacement",
      "Pressure sensor and air tube inspection",
      "Bearing and drum shaft repair",
    ],
    whyUs: [
      "Experience with large-capacity Toshiba top loaders",
      "Inverter board level diagnostics",
      "Same-day service across the island",
    ],
  },
  Hitachi: {
    tagline: "Hitachi Beat Wave and inverter washer repair",
    intro:
      "Hitachi machines, especially the Beat Wave top loaders, are long-lasting workhorses. After several years the pulsator, clutch and drain valve typically need attention — all repairs we perform on-site.",
    problems: [
      "Drain valve motor failure leaving water in the tub",
      "Pulsator worn or loose causing poor wash results",
      "C series control errors on inverter models",
      "Spin cycle stopping early from an imbalance sensor",
      "Water inlet valve sticking closed",
    ],
    errorCodes: "C1, C2, C4, C7, C8, F1",
    repairs: [
      "Drain valve motor and linkage replacement",
      "Pulsator, clutch and gearbox service",
      "Inverter board and motor testing",
      "Imbalance sensor and suspension rod replacement",
      "Inlet valve and filter cleaning",
    ],
    whyUs: [
      "Deep familiarity with Hitachi's drain valve design",
      "Parts available for older Japanese-made models",
      "Honest, warranty backed workmanship",
    ],
  },
  Whirlpool: {
    tagline: "Whirlpool top load and front load repair in Singapore",
    intro:
      "Whirlpool machines combine American design with straightforward mechanics. Drive couplings, lid switches and control boards are the parts we replace most often on Whirlpool units in Singapore.",
    problems: [
      "Drum agitating but not spinning from a broken drive coupling",
      "Lid switch failure halting the cycle",
      "F series control board errors",
      "Water leaking from the tub seal",
      "Slow drain from a lint-blocked pump",
    ],
    errorCodes: "F01, F05, F06, F08, F21, FH, LF",
    repairs: [
      "Drive coupling, clutch and motor replacement",
      "Lid switch and door lock replacement",
      "Control board diagnostics and repair",
      "Tub seal and bearing replacement",
      "Drain pump and hose clearing",
    ],
    whyUs: [
      "Regular Whirlpool part supply for quick turnaround",
      "Both US-spec and Asia-spec models supported",
      "Fixed quotes with an inspection fee waived on repair",
    ],
  },
  Sharp: {
    tagline: "Sharp semi-automatic and fully automatic washer service",
    intro:
      "Sharp is a value favourite in Singapore, especially in twin-tub and simple fully automatic form. Motors, capacitors and timers are the usual repair items and are affordable to replace.",
    problems: [
      "Spin motor humming without rotation (capacitor failure)",
      "Timer knob not advancing on semi-automatic units",
      "Drain valve leaking during the wash",
      "E series errors on fully automatic models",
      "Weak spin from worn brake pads",
    ],
    errorCodes: "E1, E2, E3, E4, EC",
    repairs: [
      "Wash and spin motor replacement",
      "Capacitor and timer replacement",
      "Drain valve and seal service",
      "Control board and selector switch repair",
      "Spinner brake and gearbox service",
    ],
    whyUs: [
      "Cost-effective repairs that make sense for value machines",
      "Twin-tub parts kept in stock",
      "Straight answer if replacement is the better option",
    ],
  },
  Midea: {
    tagline: "Midea front load and top load washing machine repair",
    intro:
      "Midea machines offer strong value and are increasingly common in Singapore rentals and new homes. Their inlet valves, drain pumps and display boards are the most frequently serviced parts.",
    problems: [
      "E11 / E12 fill and overflow errors",
      "E21 drainage faults from a blocked filter",
      "Door lock failing to release",
      "Display panel unresponsive or flickering",
      "Excessive vibration on spin from loose transit bolts",
    ],
    errorCodes: "E11, E12, E21, E30, E31, F3",
    repairs: [
      "Inlet valve and pressure switch replacement",
      "Drain pump and filter service",
      "Door lock and boot seal replacement",
      "Display and main board repair",
      "Levelling, damper and suspension correction",
    ],
    whyUs: [
      "Affordable repairs matched to the value of the machine",
      "Fast access to Midea spare parts",
      "Same-day slots seven days a week",
    ],
  },
  Beko: {
    tagline: "Beko front load washer and washer-dryer repair",
    intro:
      "Beko front loaders are energy efficient and popular with young Singapore households. Pump filters, door locks and heater elements are the usual service points, and repairs are typically quick.",
    problems: [
      "E01 door lock error",
      "E02 low water pressure or fill fault",
      "E03 drainage error from a clogged pump",
      "Heater failure leaving washes cold",
      "Loud spin from worn bearings",
    ],
    errorCodes: "E01, E02, E03, E04, E05, E07, E08",
    repairs: [
      "Door lock and hinge replacement",
      "Inlet valve, filter and pressure sensor service",
      "Drain pump and hose replacement",
      "Heating element and NTC sensor replacement",
      "Bearing, damper and belt replacement",
    ],
    whyUs: [
      "Well versed in Beko's simple error-code system",
      "Parts sourced quickly for current Beko models",
      "Warranty on every completed repair",
    ],
  },
  Miele: {
    tagline: "Premium Miele washing machine servicing and repair",
    intro:
      "Miele machines are engineered for decades of use, and they deserve careful, correct servicing. We handle diagnostics, drain and heater faults, and electronics repair on Miele W series washers in Singapore.",
    problems: [
      "F codes relating to drain and inlet faults",
      "Heater element scaling in hard-water conditions",
      "Door lock module wear after many years of use",
      "Electronic module faults after power surges",
      "Slow drain from a partially blocked pump",
    ],
    errorCodes: "F10, F11, F15, F19, F53, F63",
    repairs: [
      "Drain pump and heater element replacement",
      "Electronic module diagnosis and repair",
      "Door lock and seal servicing",
      "Bearing and drum inspection",
      "Full descaling and preventive maintenance",
    ],
    whyUs: [
      "Careful handling appropriate to a premium appliance",
      "Only quality parts used on Miele units",
      "Preventive maintenance advice to protect long service life",
    ],
  },
  Siemens: {
    tagline: "Siemens iQ series washer and washer-dryer repair",
    intro:
      "Siemens shares much of its engineering with Bosch, so the fault patterns are similar: drain pump blockages, leak sensors and module faults. We repair iQ100 through iQ700 models in Singapore.",
    problems: [
      "E18 drain pump blockage",
      "E23 leak protection triggered",
      "F21 motor control fault",
      "Door lock not releasing after a cycle",
      "Long cycle times from a weak heater",
    ],
    errorCodes: "E18, E23, F16, F17, F18, F21, F23",
    repairs: [
      "Drain pump and non-return valve service",
      "Leak sensor and base tray drying",
      "Motor brush, tacho and module repair",
      "Door interlock replacement",
      "Heating element and NTC replacement",
    ],
    whyUs: [
      "Same expertise applied to Bosch and Siemens platforms",
      "Module-level diagnosis avoids unnecessary part changes",
      "Firm quote before repair, warranty after",
    ],
  },
  "Fisher & Paykel": {
    tagline: "Fisher & Paykel SmartDrive top load repair",
    intro:
      "Fisher & Paykel's SmartDrive direct-drive top loaders are unique, and diagnosing them needs brand-specific knowledge. We service rotor, stator and motor control modules on F&P machines in Singapore.",
    problems: [
      "Rotor or stator failure stopping agitation",
      "Motor control module fault after a power surge",
      "Pump not draining from a lint blockage",
      "Out-of-balance detection stopping the spin",
      "Water valve failing to fill correctly",
    ],
    errorCodes: "Fault beeps 11, 20, 37, 130, 140, 226",
    repairs: [
      "SmartDrive rotor and stator replacement",
      "Motor control module diagnostics and replacement",
      "Pump and drain hose service",
      "Out-of-balance sensor and suspension repair",
      "Inlet valve and flow control service",
    ],
    whyUs: [
      "Genuine SmartDrive experience, not general guesswork",
      "Diagnostic mode used to read fault beep codes",
      "Repairs completed on-site wherever possible",
    ],
  },
  EuropAce: {
    tagline: "EuropAce washing machine repair for Singapore homes",
    intro:
      "EuropAce is a Singapore-based brand widely used in HDB flats and rental units. Repairs are usually straightforward and affordable, focusing on pumps, valves and control boards.",
    problems: [
      "Machine not draining from a clogged pump filter",
      "Fill errors from a blocked inlet mesh",
      "Door lock not engaging on front load units",
      "Spin failure from a worn belt or motor",
      "Control panel unresponsive",
    ],
    errorCodes: "E1, E2, E3, E4, F1, F2",
    repairs: [
      "Drain pump and filter clearing or replacement",
      "Inlet valve and hose replacement",
      "Door lock and boot seal service",
      "Belt, motor and capacitor replacement",
      "Control board and panel repair",
    ],
    whyUs: [
      "Local brand support with quick parts access",
      "Budget-friendly repair pricing",
      "Same-day service across all HDB estates",
    ],
  },
  Mitsubishi: {
    tagline: "Mitsubishi washing machine service and repair",
    intro:
      "Mitsubishi washers are built for durability and are common in older Singapore homes. Most faults after long service involve the drain valve, pulsator and timer or control board.",
    problems: [
      "Drain valve stuck closed leaving water in the tub",
      "Pulsator worn causing poor washing",
      "Timer or control board not advancing",
      "Loud noise from a worn gearbox",
      "Water inlet valve leaking",
    ],
    errorCodes: "E1, E2, E5, EA, EC",
    repairs: [
      "Drain valve and actuator replacement",
      "Pulsator, clutch and gearbox service",
      "Timer and control board repair",
      "Bearing and shaft replacement",
      "Inlet valve and hose replacement",
    ],
    whyUs: [
      "Parts sourced for older and discontinued models",
      "Repair-first approach that keeps solid machines running",
      "Warranty backed work by trained technicians",
    ],
  },
};

export const BRAND_DETAILS: BrandDetail[] = BRANDS.map((name) => ({
  slug: slugify(name),
  name,
  ...DATA[name]!,
}));

export function getBrandBySlug(slug: string): BrandDetail | undefined {
  return BRAND_DETAILS.find((b) => b.slug === slug);
}
