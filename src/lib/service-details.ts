import { SERVICES } from "./site-data";
import { slugify } from "./slug";

export interface ServiceDetail {
  slug: string;
  title: string;
  desc: string;
  img: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  causes: string[];
  symptoms: string[];
  checks: string[];
  whyUs: string[];
  info: { label: string; value: string }[];
}

const DETAILS: Record<
  string,
  Omit<ServiceDetail, "slug" | "title" | "desc" | "img">
> = {
  "front-load-repair": {
    metaTitle: "Front Load Washing Machine Repair Singapore | WashingSolutionSG",
    metaDescription:
      "Same-day front load washing machine repair in Singapore. Door lock faults, drum bearings, leaks, noisy spin and error codes fixed on-site with genuine parts.",
    intro:
      "Front load washers are the most common machines in Singapore HDB and condo homes, and they are also the most mechanically demanding. The horizontal drum runs on bearings and a rubber door boot that both wear out after years of humid Singapore laundry cycles. Our technicians repair front loaders on-site in most cases, so your machine does not have to leave your home.",
    causes: [
      "Worn drum bearings and spider arm corrosion after 5–8 years of use",
      "Damaged door boot seal from coins, underwire bras and detergent residue",
      "Failed PTC door interlock preventing the cycle from starting",
      "Blocked drain pump filter causing mid-cycle stoppage and error codes",
      "Worn or slipping drive belt leading to weak or no spin",
    ],
    symptoms: [
      "Loud grinding or rumbling noise during the spin cycle",
      "Water pooling under the machine or seeping from the door",
      "Door refuses to unlock at the end of the wash",
      "Clothes come out soaking wet after the final spin",
      "Machine displays an error code and stops mid-cycle",
    ],
    checks: [
      "Full electrical and control board diagnostic with error-code readout",
      "Drum bearing, shaft and spider arm inspection and replacement",
      "Door boot seal, hinge and interlock replacement",
      "Drain pump, filter and hose cleaning or replacement",
      "Belt, motor brush and shock absorber replacement, plus level calibration",
    ],
    whyUs: [
      "Most front load faults repaired in a single visit — no workshop trip",
      "Genuine or manufacturer-approved parts for all major brands",
      "Firm quote before any work starts, inspection fee waived on repair",
      "Service warranty on parts and labour",
    ],
    info: [
      { label: "Typical visit", value: "45–120 minutes" },
      { label: "Availability", value: "7 days a week, incl. public holidays" },
      { label: "Coverage", value: "All areas in Singapore" },
    ],
  },
  "top-load-repair": {
    metaTitle: "Top Load Washing Machine Repair Singapore | WashingSolutionSG",
    metaDescription:
      "Top load washer repair in Singapore — agitator faults, lid switch, drainage, timer and gearbox problems fixed same day, 7 days a week.",
    intro:
      "Top load machines are loved for their speed and simplicity, but the lid switch, agitator and gearbox take heavy punishment from large family loads. We repair both agitator and impeller-type top loaders from every brand sold in Singapore, usually within one visit.",
    causes: [
      "Failed lid switch or lid lock sensor stopping the spin cycle",
      "Worn agitator dogs or a stripped drive coupling",
      "Gearbox or transmission wear causing wash but no spin",
      "Clogged drain hose or pump from lint and detergent build-up",
      "Faulty water level pressure switch causing over- or under-filling",
    ],
    symptoms: [
      "Machine fills but the drum does not agitate",
      "Spin cycle never starts or stops as soon as the lid moves",
      "Water stays in the tub after the cycle finishes",
      "Clothes are twisted, tangled or barely cleaned",
      "Loud knocking during agitation",
    ],
    checks: [
      "Lid switch, lid lock and safety interlock testing and replacement",
      "Agitator dog, drive coupling and clutch assembly replacement",
      "Gearbox and transmission inspection with repair or swap",
      "Drain pump, hose and filter clearing",
      "Pressure switch and water level calibration",
    ],
    whyUs: [
      "Specialist experience with both agitator and impeller top loaders",
      "Common wear parts carried on the van for same-visit fixes",
      "Transparent, itemised pricing with no hidden call-out surprises",
      "Warranty backed repairs by trained, background-checked technicians",
    ],
    info: [
      { label: "Typical visit", value: "40–90 minutes" },
      { label: "Availability", value: "7 days a week, incl. public holidays" },
      { label: "Coverage", value: "All areas in Singapore" },
    ],
  },
  "semi-automatic-repair": {
    metaTitle: "Semi-Automatic Washing Machine Repair Singapore | WashingSolutionSG",
    metaDescription:
      "Twin-tub semi-automatic washing machine repair in Singapore. Motor, capacitor, spinner and gearbox replacement with same-day service, 7 days a week.",
    intro:
      "Twin-tub semi-automatic machines are still widely used in Singapore because they are affordable and easy to maintain. Most faults come down to the wash motor, spin motor, capacitor or the mechanical timer — all parts we stock and replace on-site at a fraction of the cost of a new machine.",
    causes: [
      "Burnt-out wash or spin motor from continuous heavy loads",
      "Weak or failed start capacitor",
      "Worn mechanical timer knob contacts",
      "Cracked spinner tub or worn spinner brake",
      "Perished drain valve and outlet hose seals",
    ],
    symptoms: [
      "Motor hums but the drum does not turn",
      "Spinner tub spins slowly or vibrates violently",
      "Timer knob does not advance or clicks without starting",
      "Water leaks from the drain valve during the wash",
      "Burning smell during operation",
    ],
    checks: [
      "Wash and spin motor testing, rewinding or replacement",
      "Capacitor testing and replacement",
      "Mechanical and electronic timer replacement",
      "Spinner tub, brake pad and gearbox service",
      "Drain valve, seals and hose replacement",
    ],
    whyUs: [
      "Repair costs kept sensible — we tell you honestly when replacement is smarter",
      "Common twin-tub parts carried in stock for immediate fixes",
      "Technicians experienced with older and imported twin-tub models",
      "Same-day booking with a service warranty",
    ],
    info: [
      { label: "Typical visit", value: "30–75 minutes" },
      { label: "Availability", value: "7 days a week, incl. public holidays" },
      { label: "Coverage", value: "All areas in Singapore" },
    ],
  },
  "fully-automatic-repair": {
    metaTitle: "Fully Automatic Washing Machine Repair Singapore | WashingSolutionSG",
    metaDescription:
      "Fully automatic washing machine repair in Singapore — PCB board diagnostics, sensor calibration, error code resets and inverter motor repair. Same-day service.",
    intro:
      "Fully automatic machines rely on a control board, sensors and software to run every cycle, so a single failed sensor can stop the whole machine. We carry proper diagnostic tools to read brand-specific error codes, isolate the failing module and repair or replace only what is actually faulty.",
    causes: [
      "Moisture or power-surge damage to the main PCB control board",
      "Failed water level, temperature or hall sensor feeding wrong data",
      "Inverter motor or motor driver module failure",
      "Faulty inlet solenoid valve causing fill timeouts",
      "Corroded wiring harness connectors in humid laundry areas",
    ],
    symptoms: [
      "Machine displays an error code and refuses to continue",
      "Programme resets, freezes or restarts randomly",
      "Buttons or touch panel unresponsive",
      "Cycle takes far longer than usual to finish",
      "Machine trips the household circuit breaker",
    ],
    checks: [
      "Full error-code diagnostic and control board repair or replacement",
      "Sensor testing and recalibration (water level, NTC, hall sensor)",
      "Inverter motor and driver module testing",
      "Inlet valve, flow meter and harness inspection",
      "Insulation and earth-leakage testing for breaker trips",
    ],
    whyUs: [
      "Board-level diagnostics instead of expensive blanket part swaps",
      "Experience across Samsung, LG, Bosch, Electrolux and every major brand",
      "Firm quote before repair — inspection fee waived when you proceed",
      "Warranty on parts and labour",
    ],
    info: [
      { label: "Typical visit", value: "45–120 minutes" },
      { label: "Availability", value: "7 days a week, incl. public holidays" },
      { label: "Coverage", value: "All areas in Singapore" },
    ],
  },
  "washer-dryer-combo": {
    metaTitle: "Washer Dryer Combo Repair Singapore | WashingSolutionSG",
    metaDescription:
      "Washer dryer combo repair in Singapore — dryer not heating, condenser blockage, long drying times and ventilation faults fixed on-site, 7 days a week.",
    intro:
      "Combo units do two jobs in one drum, which means twice the heat, lint and moisture stress. In Singapore's humidity, condenser channels clog quickly and drying performance drops long before the machine actually fails. We service both condenser and heat-pump combos.",
    causes: [
      "Blocked condenser channel or lint-choked air path",
      "Failed heating element or thermal cut-out fuse",
      "Faulty humidity/temperature sensor ending the cycle too early",
      "Worn drum belt or seized fan motor",
      "Cooling water valve failure on condenser-type dryers",
    ],
    symptoms: [
      "Clothes still damp after a full drying cycle",
      "Drying takes several hours or never completes",
      "Machine gets very hot or smells of burning lint",
      "Excess condensation or water on the floor during drying",
      "Dryer function stops but the washer still works",
    ],
    checks: [
      "Heating element, thermostat and thermal fuse testing and replacement",
      "Full condenser and air-duct deep clean",
      "Humidity and temperature sensor calibration",
      "Fan motor, belt and airflow inspection",
      "Cooling water valve and drain path service",
    ],
    whyUs: [
      "Dedicated combo experience — we treat washing and drying faults separately",
      "Deep-clean service that restores drying times, not just parts swapping",
      "Same-day appointments including weekends and public holidays",
      "Warranty covered repairs with genuine parts",
    ],
    info: [
      { label: "Typical visit", value: "60–120 minutes" },
      { label: "Availability", value: "7 days a week, incl. public holidays" },
      { label: "Coverage", value: "All areas in Singapore" },
    ],
  },
  "installation-and-relocation": {
    metaTitle: "Washing Machine Installation & Relocation Singapore | WashingSolutionSG",
    metaDescription:
      "Professional washing machine installation and relocation in Singapore. Safe uninstall, transport, re-installation, levelling and leak testing, 7 days a week.",
    intro:
      "A washing machine that is installed badly will vibrate, leak and wear out early. Our team handles the full move: transit bolts, hose connections, levelling on HDB and condo floors, and a full test cycle before we leave so you know everything is watertight.",
    causes: [
      "Transit bolts left in place after delivery causing drum damage",
      "Uneven flooring or missing anti-vibration feet",
      "Wrongly fitted inlet hose or missing washer causing drips",
      "Drain hose set at an incorrect height leading to siphoning",
      "Insufficient clearance for a built-in cabinet installation",
    ],
    symptoms: [
      "Machine walks or shakes across the floor during spin",
      "Drips at the tap or behind the machine",
      "Water drains away continuously during the wash",
      "Loud banging from the first spin after a move",
      "New machine showing fill or drain errors right after delivery",
    ],
    checks: [
      "Safe disconnection, transit bolt fitting and transport preparation",
      "Re-installation with correct inlet and drain connections",
      "Precision levelling and anti-vibration pad fitting",
      "Full leak and test cycle before handover",
      "Built-in and stacked-unit installation, including kit fitting",
    ],
    whyUs: [
      "Insured handling for HDB, condo and landed properties",
      "Correct hose, height and levelling standards — not a rushed drop-off",
      "Old-unit disposal assistance available on request",
      "Weekend and public holiday slots at no extra charge",
    ],
    info: [
      { label: "Typical visit", value: "30–90 minutes" },
      { label: "Availability", value: "7 days a week, incl. public holidays" },
      { label: "Coverage", value: "All areas in Singapore" },
    ],
  },
  "deep-cleaning-and-maintenance": {
    metaTitle: "Washing Machine Deep Cleaning & Maintenance Singapore | WashingSolutionSG",
    metaDescription:
      "Washing machine deep cleaning in Singapore — drum descaling, mould removal, filter cleaning and preventive maintenance to remove odour and extend lifespan.",
    intro:
      "Singapore's humidity makes washing machines a perfect home for mould and detergent scum. A yearly deep clean removes the black residue behind the door seal, clears the detergent drawer and drain filter, and keeps your laundry smelling fresh — while preventing the blockages that cause expensive breakdowns.",
    causes: [
      "Detergent and fabric softener build-up inside the drum and drawer",
      "Mould growth under the door boot seal in humid laundry areas",
      "Lint and hair clogging the drain pump filter",
      "Scale deposits on the heater and drum surfaces",
      "Consistent use of cold, short cycles that never flush the system",
    ],
    symptoms: [
      "Musty or sour smell from the drum or from clean laundry",
      "Black spots on the door seal or inside the detergent drawer",
      "Residue or white marks left on washed clothes",
      "Slower draining and longer cycle times",
      "Cloudy water or debris in the drum after a wash",
    ],
    checks: [
      "Full drum descaling and sanitisation treatment",
      "Door boot seal mould removal and disinfection",
      "Detergent drawer, dispenser and hose cleaning",
      "Drain pump filter and hose clearing",
      "Preventive inspection of belts, seals, hoses and bearings",
    ],
    whyUs: [
      "Food-safe, machine-safe cleaning agents — no drum damage",
      "Preventive check included, so small faults are caught early",
      "Recommended yearly plan that keeps warranty conditions intact",
      "Fixed, transparent pricing quoted before we start",
    ],
    info: [
      { label: "Typical visit", value: "60–90 minutes" },
      { label: "Recommended", value: "Once every 6–12 months" },
      { label: "Coverage", value: "All areas in Singapore" },
    ],
  },
  "water-inlet-and-drainage": {
    metaTitle: "Washing Machine Water Inlet & Drainage Repair Singapore | WashingSolutionSG",
    metaDescription:
      "Fix washing machine not filling or not draining in Singapore. Drain pump, inlet valve, blocked filter and leaking hose repairs — same-day, 7 days a week.",
    intro:
      "Fill and drain faults are the single most common reason Singapore households call us. The good news is that most of them — a blocked pump filter, a jammed inlet valve or a kinked drain hose — are quick, affordable fixes when handled before the water damage spreads.",
    causes: [
      "Coins, hairpins and lint jamming the drain pump impeller",
      "Blocked or scaled inlet solenoid valve restricting water flow",
      "Kinked, split or incorrectly positioned drain hose",
      "Clogged inlet filter mesh at the tap connection",
      "Faulty pressure switch giving false water level readings",
    ],
    symptoms: [
      "Machine does not fill or fills extremely slowly",
      "Water remains in the drum at the end of the cycle",
      "Drain error code displayed (E2, 5E, OE and similar)",
      "Water on the floor around or behind the machine",
      "Loud buzzing from the pump without any water movement",
    ],
    checks: [
      "Drain pump removal, impeller clearing and replacement",
      "Inlet solenoid valve and mesh filter cleaning or replacement",
      "Drain and inlet hose replacement with correct routing",
      "Pressure switch and air trap testing",
      "Full leak test across all connections before handover",
    ],
    whyUs: [
      "Fast response — water faults are treated as priority jobs",
      "Blockage causes explained so the same fault does not return",
      "Affordable fixed pricing for the most common blockages",
      "Warranty on every replaced part",
    ],
    info: [
      { label: "Typical visit", value: "30–75 minutes" },
      { label: "Availability", value: "7 days a week, incl. public holidays" },
      { label: "Coverage", value: "All areas in Singapore" },
    ],
  },
};

export const SERVICE_DETAILS: ServiceDetail[] = SERVICES.map((s) => {
  const slug = slugify(s.title);
  return { slug, title: s.title, desc: s.desc, img: s.img, ...DETAILS[slug]! };
});

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((s) => s.slug === slug);
}
