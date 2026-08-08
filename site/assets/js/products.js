/* Product catalogue data for The Aurum Peptide Co.
   Pricing: items matching the supplier price list (Pricing/Price List.odt) are set to
   (list price x 0.5) + 10% margin. Remaining items are indicative AUD placeholder pricing —
   update with real pricing/stock before launch.
   All copy is framed around in-vitro / laboratory research use only. No human dosing instructions. */
window.AURUM_CATEGORIES = [
  { key:'weight-loss',      label:'Weight Loss & Metabolic' },
  { key:'growth-recovery',  label:'Growth Hormone & Recovery' },
  { key:'skin-antiaging',   label:'Skin, Hair & Anti-Aging' },
  { key:'cognitive-sleep',  label:'Cognitive, Mood & Sleep' },
  { key:'hormonal',         label:'Hormonal Support' },
  { key:'specialty',        label:'Specialty' },
  { key:'capsules',         label:'Oral Capsules' }
];

window.AURUM_PRODUCTS = [
  {
    slug:'bpc-157', name:'BPC-157', form:'Injectable', category:'growth-recovery', badge:'Best Seller', purity:'99%+ HPLC',
    shortDesc:'Body-protective compound studied for gut, tendon and soft-tissue repair models.',
    description:[
      "BPC-157 (Body Protection Compound-157) is a synthetic pentadecapeptide derived from a naturally occurring protective protein found in gastric juice. It is one of the most widely referenced peptides in soft-tissue and gastrointestinal repair literature.",
      "In laboratory models, BPC-157 has been studied for its role in angiogenesis (new blood vessel formation), fibroblast migration and modulation of the nitric oxide pathway — mechanisms of interest to researchers investigating tendon, ligament and mucosal tissue repair."
    ],
    researchApplications:['Gastrointestinal mucosal repair models','Tendon & ligament healing studies','Angiogenesis & nitric-oxide pathway research','Anti-inflammatory mechanism studies'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water; gently swirl, do not shake', storage:'Lyophilised: 2-8°C, dark. Reconstituted: 2-8°C, use within 14 days. Do not freeze.' },
    options:[ {label:'5mg vial', price:59.95}, {label:'10mg vial', price:49.50} ]
  },
  {
    slug:'tb-500', name:'TB-500', form:'Injectable', category:'growth-recovery', badge:null, purity:'99%+ HPLC',
    shortDesc:'Thymosin Beta-4 fragment studied for angiogenesis and cell-migration research.',
    description:[
      "TB-500 is a synthetic fragment of Thymosin Beta-4, a naturally occurring peptide involved in actin regulation and cell migration. It is a core reference compound in tissue-repair and regenerative research literature.",
      "Research models frequently pair TB-500 with BPC-157 to examine synergistic effects on microvascular formation, wound-healing kinetics and extracellular matrix remodeling."
    ],
    researchApplications:['Cell migration & actin regulation studies','Angiogenesis / microvascular research','Wound-healing kinetics models','Combination studies with BPC-157'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water; gentle roll, avoid vigorous shaking', storage:'Lyophilised: 2-8°C, dark. Reconstituted: 2-8°C, use within 14 days. Do not freeze.' },
    options:[ {label:'5mg vial', price:69.95}, {label:'10mg vial', price:49.50} ]
  },
  {
    slug:'cjc-1295', name:'CJC-1295 (No DAC)', form:'Injectable', category:'growth-recovery', badge:null, purity:'99%+ HPLC',
    shortDesc:'GHRH analogue studied for pulsatile growth-hormone secretion research.',
    description:[
      "CJC-1295 without DAC (also referenced as Mod GRF 1-29) is a synthetic analogue of growth hormone-releasing hormone (GHRH). Its short half-life makes it a common reference compound for studying pulsatile GH release patterns.",
      "It is frequently paired with a GHRP such as Ipamorelin in comparative endocrinology research to examine synergistic GH and IGF-1 axis activity in vitro."
    ],
    researchApplications:['GHRH receptor activity studies','Pulsatile GH secretion modelling','Combination studies with GHRP analogues','IGF-1 axis research'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'Lyophilised: 2-8°C, dark. Reconstituted: 2-8°C, use within 28 days. Do not freeze.' },
    options:[ {label:'2mg vial', price:44.95}, {label:'5mg vial', price:59.95} ]
  },
  {
    slug:'ipamorelin', name:'Ipamorelin', form:'Injectable', category:'growth-recovery', badge:null, purity:'99%+ HPLC',
    shortDesc:'Selective GHRP studied for its clean ghrelin-receptor agonism profile.',
    description:[
      "Ipamorelin is a pentapeptide ghrelin-receptor agonist (GHRP) noted in the literature for a highly selective GH-secretagogue profile with minimal reported cross-reactivity at cortisol or prolactin receptors, making it a popular reference compound for selectivity studies.",
      "Commonly modelled alongside CJC-1295 to investigate synergistic pulsatile growth-hormone release."
    ],
    researchApplications:['Ghrelin receptor selectivity studies','GH secretagogue comparative research','Combination protocol modelling with GHRH analogues'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'Lyophilised: 2-8°C, dark. Reconstituted: 2-8°C, use within 28 days. Do not freeze.' },
    options:[ {label:'2mg vial', price:44.95}, {label:'5mg vial', price:59.95} ]
  },
  {
    slug:'cjc-ipa-blend', name:'CJC-1295 + Ipamorelin Blend', form:'Injectable', category:'growth-recovery', badge:'Popular', purity:'99%+ HPLC',
    shortDesc:'Pre-blended GHRH/GHRP combination for comparative GH-axis research.',
    description:[
      "A pre-mixed 1:1 blend of CJC-1295 (No DAC) and Ipamorelin, formulated for researchers studying combined GHRH/GHRP receptor activity without separately reconstituting two vials.",
      "Used extensively in published in-vitro literature examining synergistic growth-hormone pulse amplitude versus either compound in isolation."
    ],
    researchApplications:['Synergistic GHRH + GHRP modelling','Growth hormone pulse-amplitude comparison studies'],
    specs:{ appearance:'White lyophilised powder blend', reconstitution:'Bacteriostatic water', storage:'Lyophilised: 2-8°C, dark. Reconstituted: 2-8°C, use within 28 days. Do not freeze.' },
    options:[ {label:'5mg+5mg vial', price:88}, {label:'10mg+10mg vial', price:129.95} ]
  },
  {
    slug:'tesamorelin', name:'Tesamorelin (TSM)', form:'Injectable', category:'weight-loss', badge:null, purity:'99%+ HPLC',
    shortDesc:'44-amino-acid GHRH analogue studied for visceral-fat and IGF-1 research.',
    description:[
      "Tesamorelin is a stabilised 44-amino-acid analogue of growth hormone-releasing hormone. It is the most extensively published GHRH analogue in visceral adipose tissue research literature.",
      "Laboratory models have examined Tesamorelin's role in stimulating pulsatile endogenous GH release, downstream IGF-1 elevation, and associated effects on lipid metabolism markers."
    ],
    researchApplications:['Visceral adipose tissue research models','IGF-1 axis studies','Lipid metabolism marker research'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'Lyophilised: 2-8°C, dark. Reconstituted: 2-8°C, use within 20 days. Do not freeze.' },
    options:[ {label:'5mg vial', price:99.95}, {label:'10mg vial', price:71.50} ]
  },
  {
    slug:'hgh', name:'HGH (Somatropin)', form:'Injectable', category:'growth-recovery', badge:null, purity:'≥99% Biological Activity',
    shortDesc:'Recombinant human growth hormone reference standard for endocrine research.',
    description:[
      "Recombinant HGH (somatropin) is a reference-grade 191-amino-acid protein identical in sequence to endogenous human growth hormone, widely used as a comparator standard in endocrinology and cell-proliferation assays.",
      "Supplied as lyophilised powder for laboratory reconstitution and controlled in-vitro dosing series."
    ],
    researchApplications:['Cell proliferation & IGF-1 assays','Comparator standard for GH-secretagogue studies','Metabolic marker research'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'Lyophilised: 2-8°C, dark. Reconstituted: 2-8°C, use within 14 days. Do not freeze.' },
    options:[ {label:'10IU vial', price:64.95}, {label:'100IU kit (10 vials)', price:165} ]
  },
  {
    slug:'hcg', name:'HCG', form:'Injectable', category:'hormonal', badge:null, purity:'≥99% Biological Activity',
    shortDesc:'Human chorionic gonadotropin reference standard for gonadal-axis research.',
    description:[
      "Human Chorionic Gonadotropin (HCG) is a glycoprotein hormone widely used as a reference standard in reproductive endocrinology research, including gonadal-axis signalling and steroidogenesis pathway studies.",
      "Supplied lyophilised for precise laboratory reconstitution to researcher-defined concentrations."
    ],
    researchApplications:['Gonadal-axis signalling studies','Steroidogenesis pathway research','Fertility-model laboratory studies'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'Lyophilised: 2-8°C, dark. Reconstituted: 2-8°C, use within 14 days. Do not freeze.' },
    options:[ {label:'5000IU vial', price:69.95} ]
  },
  {
    slug:'retatrutide', name:'Retatrutide (RETA)', form:'Injectable', category:'weight-loss', badge:'Popular', purity:'99%+ HPLC',
    shortDesc:'Triple GIP/GLP-1/glucagon receptor agonist — leading metabolic research compound.',
    description:[
      "Retatrutide is a triple receptor agonist engaging GIP, GLP-1 and glucagon receptors simultaneously, and is currently one of the most cited compounds in metabolic and obesity-model research literature.",
      "Its extended half-life (~6 days in published models) supports once-weekly research dosing schedules in animal and in-vitro studies examining appetite signalling, energy expenditure and hepatic lipid markers."
    ],
    researchApplications:['Triple-receptor agonism studies','Energy expenditure & appetite-signalling models','Hepatic lipid marker research'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'Lyophilised: 2-8°C, dark. Reconstituted: 2-8°C, use within 28 days. Do not freeze.' },
    options:[ {label:'10mg vial', price:143}, {label:'30mg vial', price:399.95} ]
  },
  {
    slug:'tirzepatide', name:'Tirzepatide', form:'Injectable', category:'weight-loss', badge:'Popular', purity:'99%+ HPLC',
    shortDesc:'Dual GIP/GLP-1 receptor agonist reference standard for metabolic studies.',
    description:[
      "Tirzepatide is a dual GIP/GLP-1 receptor agonist widely referenced in incretin-pathway and glycaemic-control research literature.",
      "Supplied as high-purity lyophilised powder suitable for researcher-controlled in-vitro dose-response series."
    ],
    researchApplications:['Incretin receptor pathway studies','Glycaemic control marker research','Dose-response modelling'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'Lyophilised: 2-8°C, dark. Reconstituted: 2-8°C, use within 28 days. Do not freeze.' },
    options:[ {label:'30mg vial', price:299.95}, {label:'60mg vial', price:499.95} ]
  },
  {
    slug:'liraglutide', name:'Liraglutide', form:'Injectable', category:'weight-loss', badge:null, purity:'99%+ HPLC',
    shortDesc:'Long-acting GLP-1 receptor agonist reference compound.',
    description:[
      "Liraglutide is a long-acting GLP-1 receptor agonist commonly referenced as a comparator standard in appetite-regulation and glycaemic research.",
      "Its well-characterised pharmacokinetic profile makes it a frequent benchmark against newer multi-agonist compounds in comparative studies."
    ],
    researchApplications:['GLP-1 receptor comparator studies','Appetite-regulation pathway research'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'Lyophilised: 2-8°C, dark. Reconstituted: 2-8°C, use within 28 days. Do not freeze.' },
    options:[ {label:'10mg vial', price:149.95} ]
  },
  {
    slug:'mots-c', name:'MOTS-c', form:'Injectable', category:'weight-loss', badge:null, purity:'99%+ HPLC',
    shortDesc:'Mitochondrial-derived peptide studied for AMPK pathway & metabolic research.',
    description:[
      "MOTS-c is a 16-amino-acid mitochondrial-derived peptide identified from the mitochondrial genome, extensively referenced in AMPK-pathway and metabolic homeostasis literature.",
      "Research models suggest a role in regulating insulin sensitivity markers and mitochondrial biogenesis, making it a compound of ongoing interest in exercise-physiology and longevity research."
    ],
    researchApplications:['AMPK pathway activation studies','Mitochondrial biogenesis research','Insulin-sensitivity marker modelling'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'Lyophilised: -20°C, dark. Reconstituted: 2-8°C, use within 7 days. Do not freeze.' },
    options:[ {label:'5mg vial', price:69.95}, {label:'10mg vial', price:99} ]
  },
  {
    slug:'lc120', name:'LC120 Lipotropic Blend', form:'Injectable', category:'weight-loss', badge:null, purity:'Research Blend',
    shortDesc:'B12-free lipotropic compound blend for hepatic lipid-metabolism research.',
    description:[
      "LC120 is a lipotropic reference blend (L-Carnitine / Methionine / Inositol / Choline-class compounds) formulated without B12 for researchers studying hepatic lipid mobilisation pathways without a cobalamin confound.",
      "Frequently used alongside GLP-1 class compounds in comparative metabolic research designs."
    ],
    researchApplications:['Hepatic lipid mobilisation studies','Comparative metabolic research designs'],
    specs:{ appearance:'Clear to pale yellow solution / lyophilised blend', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Use within 14 days of reconstitution. Do not freeze.' },
    options:[ {label:'10mg vial', price:49.95} ]
  },
  {
    slug:'mic', name:'MIC (Lipo-C + B12)', form:'Injectable', category:'weight-loss', badge:null, purity:'Research Blend',
    shortDesc:'Methionine/Inositol/Choline lipotropic blend with B12 for metabolic research.',
    description:[
      "MIC combines Methionine, Inositol and Choline with vitamin B12 (cyanocobalamin), a classic lipotropic reference blend used in hepatic fat-metabolism and energy-marker research designs.",
      "Included in many comparative studies examining lipotropic support alongside GLP-1/GIP receptor agonist research protocols."
    ],
    researchApplications:['Hepatic fat metabolism studies','Energy marker & cobalamin pathway research'],
    specs:{ appearance:'Clear solution', reconstitution:'Ready-mixed / bacteriostatic water depending on batch', storage:'2-8°C, dark. Use within 14 days of reconstitution. Do not freeze.' },
    options:[ {label:'10mg vial', price:54.95} ]
  },
  {
    slug:'ghk-cu', name:'GHK-Cu Copper Peptide', form:'Injectable', category:'skin-antiaging', badge:'Best Seller', purity:'99%+ HPLC',
    shortDesc:'Copper tripeptide widely referenced in collagen synthesis & wound-repair studies.',
    description:[
      "GHK-Cu (Copper Tripeptide-1) is a naturally occurring copper-binding peptide extensively cited in dermal research literature for its role in collagen and elastin synthesis, and anti-inflammatory signalling.",
      "It is a foundational reference compound in skin-remodelling, hair-follicle and wound-healing research models, and a component of several proprietary research blends."
    ],
    researchApplications:['Collagen/elastin synthesis studies','Dermal remodelling & wound-healing models','Hair follicle (Wnt pathway) research'],
    specs:{ appearance:'Blue lyophilised powder / pale blue solution once reconstituted', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 10-20 days. Do not freeze.' },
    options:[ {label:'50mg vial', price:77}, {label:'100mg vial', price:110} ]
  },
  {
    slug:'glutathione', name:'Glutathione', form:'Injectable', category:'skin-antiaging', badge:null, purity:'99%+ HPLC',
    shortDesc:'Master antioxidant tripeptide studied for oxidative-stress and pigmentation research.',
    description:[
      "Glutathione is the body's principal endogenous antioxidant tripeptide, referenced widely in oxidative-stress, hepatic-detoxification and melanogenesis research.",
      "Laboratory literature has examined its interaction with tyrosinase activity as a model for pigmentation-pathway research."
    ],
    researchApplications:['Oxidative stress marker studies','Tyrosinase / melanogenesis pathway research','Hepatic antioxidant research'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 14 days. Do not freeze.' },
    options:[ {label:'600mg vial', price:38.50} ]
  },
  {
    slug:'kpv', name:'KPV Tripeptide', form:'Injectable', category:'skin-antiaging', badge:null, purity:'99%+ HPLC',
    shortDesc:'Anti-inflammatory tripeptide fragment of alpha-MSH studied in cytokine research.',
    description:[
      "KPV is a C-terminal tripeptide fragment of alpha-MSH, referenced in the literature for potent inhibition of pro-inflammatory cytokines including TNF-alpha and IL-6.",
      "Frequently studied in combination with GHK-Cu in dermal-inflammation and barrier-repair research models."
    ],
    researchApplications:['Cytokine inhibition studies (TNF-α, IL-6)','Dermal inflammation & barrier research'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 14 days. Do not freeze.' },
    options:[ {label:'10mg vial', price:49.50} ]
  },
  {
    slug:'bbg70', name:'BBG70 Complex', form:'Injectable', category:'skin-antiaging', badge:'New', purity:'Research Blend',
    shortDesc:'GHK-Cu + BPC-157 + TB-500 complex for combined dermal-repair research.',
    description:[
      "BBG70 is a pre-blended 70mg complex (GHK-Cu 50mg, BPC-157 10mg, TB-500 10mg) formulated for researchers studying combined dermal-remodelling and tissue-repair pathways in a single reference solution.",
      "Reduces the need to separately reconstitute three individual compounds for combination-protocol research designs."
    ],
    researchApplications:['Combined dermal remodelling studies','Multi-pathway tissue repair research'],
    specs:{ appearance:'Pale blue lyophilised powder', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 14 days. Do not freeze.' },
    options:[ {label:'70mg vial', price:139.95} ]
  },
  {
    slug:'klow', name:'KLOW Blend', form:'Injectable', category:'skin-antiaging', badge:'New', purity:'Research Blend',
    shortDesc:'BPC-157 + GHK-Cu + TB-500 + KPV four-compound skin & repair research blend.',
    description:[
      "KLOW combines BPC-157, GHK-Cu, TB-500 and KPV in a single 80mg reference vial, formulated for researchers examining combined tissue-repair, anti-inflammatory and dermal-remodelling pathways.",
      "One of our most requested pre-blended formulations for laboratory comparison studies against single-compound protocols."
    ],
    researchApplications:['Multi-compound tissue repair research','Combined anti-inflammatory & dermal remodelling studies'],
    specs:{ appearance:'Pale blue lyophilised powder', reconstitution:'Bacteriostatic water (2.5-3.0mL)', storage:'-20°C unopened; reconstituted 2-8°C, use within 10-20 days. Do not freeze after mixing.' },
    options:[ {label:'80mg vial', price:93.50} ]
  },
  {
    slug:'pt-141', name:'PT-141 (Bremelanotide)', form:'Injectable', category:'specialty', badge:null, purity:'99%+ HPLC',
    shortDesc:'Melanocortin receptor agonist studied in central nervous system research.',
    description:[
      "PT-141 (Bremelanotide) is a synthetic melanocortin receptor agonist referenced in CNS and melanocortin-pathway research literature for its receptor-binding characteristics at MC3R/MC4R.",
      "A widely cited reference standard for melanocortin receptor-agonism comparative studies."
    ],
    researchApplications:['Melanocortin receptor (MC3R/MC4R) studies','CNS receptor-binding research'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 14 days. Do not freeze.' },
    options:[ {label:'10mg vial', price:38.50} ]
  },
  {
    slug:'selank', name:'Selank', form:'Injectable', category:'cognitive-sleep', badge:null, purity:'99%+ HPLC',
    shortDesc:'Heptapeptide studied for GABAergic and HPA-axis stress-response research.',
    description:[
      "Selank is a synthetic heptapeptide developed from the immunomodulatory peptide tuftsin, referenced in anxiolytic and neuroprotective research literature for modulation of GABA and monoamine pathways.",
      "Widely cited in HPA-axis stress-response studies exploring cortisol regulation mechanisms."
    ],
    researchApplications:['GABAergic pathway studies','HPA-axis / cortisol regulation research','Neuroprotective mechanism studies'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 14 days. Do not freeze.' },
    options:[ {label:'5mg vial', price:59.95}, {label:'10mg vial', price:33} ]
  },
  {
    slug:'dsip', name:'DSIP (Delta Sleep Inducing Peptide)', form:'Injectable', category:'cognitive-sleep', badge:null, purity:'99%+ HPLC',
    shortDesc:'Neuropeptide studied for delta-wave sleep architecture research.',
    description:[
      "DSIP is a naturally occurring neuropeptide first isolated from rabbit cerebral venous blood, referenced in sleep-architecture research for its association with delta-wave (slow-wave) sleep generation.",
      "A key reference compound in CNS sleep-cycle and neuroendocrine rhythm research models."
    ],
    researchApplications:['Delta-wave sleep architecture studies','Neuroendocrine rhythm research'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 14 days. Do not freeze.' },
    options:[ {label:'5mg vial', price:59.95}, {label:'10mg vial', price:69.95} ]
  },
  {
    slug:'epithalon', name:'Epithalon', form:'Injectable', category:'cognitive-sleep', badge:null, purity:'99%+ HPLC',
    shortDesc:'Synthetic tetrapeptide studied in telomerase-activity & pineal-gland research.',
    description:[
      "Epithalon (Epitalon) is a synthetic tetrapeptide analogue of the naturally occurring peptide epithalamin, one of the most cited compounds in longevity and telomerase-activity research literature.",
      "Studied in pineal-gland function models exploring circadian regulation and cellular senescence markers."
    ],
    researchApplications:['Telomerase activity studies','Pineal gland / circadian rhythm research','Cellular senescence marker research'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 20 days. Do not freeze.' },
    options:[ {label:'10mg vial', price:69.95}, {label:'50mg vial', price:159.95} ]
  },
  {
    slug:'semax', name:'Semax', form:'Injectable', category:'cognitive-sleep', badge:null, purity:'99%+ HPLC',
    shortDesc:'ACTH-derived nootropic peptide studied for BDNF and cognitive research.',
    description:[
      "Semax is a synthetic heptapeptide derived from ACTH(4-10), extensively referenced in nootropic and neurotrophic-factor research literature for its association with elevated BDNF expression.",
      "A benchmark reference compound in hippocampal and cognitive-performance research models."
    ],
    researchApplications:['BDNF expression studies','Hippocampal function research','Cognitive performance marker studies'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 14 days. Do not freeze.' },
    options:[ {label:'10mg vial', price:69.95} ]
  },

  /* ---------------- Oral Capsule Range ---------------- */
  {
    slug:'bpc-157-capsules', name:'BPC-157 Capsules', form:'Capsule', category:'capsules', badge:'Best Seller', purity:'99%+ HPLC',
    shortDesc:'Oral capsule format of our reference-standard BPC-157 for gut-repair research.',
    description:[
      "Our BPC-157 capsules deliver the same reference-standard, third-party tested BPC-157 in a convenient oral research format, formulated for researchers studying gastrointestinal-tract exposure models without reconstitution.",
      "Each capsule batch is tested for identity and purity, with results available in our CoA Library."
    ],
    researchApplications:['Oral bioavailability research','Gastrointestinal exposure modelling'],
    specs:{ appearance:'Opaque research capsule', reconstitution:'N/A — oral capsule format', storage:'Store below 25°C, away from light and moisture.' },
    options:[ {label:'30 capsules / 500mcg', price:79.95}, {label:'60 capsules / 500mcg', price:139.95} ]
  },
  {
    slug:'tb-500-capsules', name:'TB-500 Capsules', form:'Capsule', category:'capsules', badge:null, purity:'99%+ HPLC',
    shortDesc:'Oral capsule format of TB-500 for tissue-repair research.',
    description:[
      "TB-500 capsules provide an oral research format of our reference-standard Thymosin Beta-4 fragment, for researchers examining gut-stable delivery and comparative bioavailability models."
    ],
    researchApplications:['Oral delivery / bioavailability comparison studies'],
    specs:{ appearance:'Opaque research capsule', reconstitution:'N/A — oral capsule format', storage:'Store below 25°C, away from light and moisture.' },
    options:[ {label:'30 capsules / 500mcg', price:99.95} ]
  },
  {
    slug:'bpc-tb-blend-capsules', name:'BPC-157 / TB-500 Blend Capsules', form:'Capsule', category:'capsules', badge:'Popular', purity:'Research Blend',
    shortDesc:'Combined BPC-157 + TB-500 oral capsule for tissue-repair research.',
    description:[
      "A combined oral formulation of BPC-157 and TB-500, formulated for researchers studying the two compounds' proposed synergistic activity in tissue-repair pathway models without preparing two separate solutions."
    ],
    researchApplications:['Combined tissue-repair pathway studies'],
    specs:{ appearance:'Opaque research capsule', reconstitution:'N/A — oral capsule format', storage:'Store below 25°C, away from light and moisture.' },
    options:[ {label:'30 capsules', price:97.50}, {label:'60 capsules', price:169.95} ]
  },
  {
    slug:'sermorelin-capsules', name:'Sermorelin Capsules', form:'Capsule', category:'capsules', badge:null, purity:'99%+ HPLC',
    shortDesc:'Oral GHRH-fragment capsule for growth-hormone axis research.',
    description:[
      "Sermorelin is a truncated GHRH(1-29) analogue; our capsule format supports oral-route research designs into GH-axis stimulation comparative to injectable reference standards."
    ],
    researchApplications:['GHRH receptor / GH-axis research','Oral vs injectable comparative studies'],
    specs:{ appearance:'Opaque research capsule', reconstitution:'N/A — oral capsule format', storage:'Store below 25°C, away from light and moisture.' },
    options:[ {label:'30 capsules', price:99.95} ]
  },
  {
    slug:'epithalon-capsules', name:'Epithalon Capsules', form:'Capsule', category:'capsules', badge:null, purity:'99%+ HPLC',
    shortDesc:'Oral capsule format of Epithalon for longevity research.',
    description:[
      "Epithalon capsules provide an oral research format of our reference-standard tetrapeptide for telomerase-activity and circadian research designs."
    ],
    researchApplications:['Telomerase activity studies','Circadian rhythm research'],
    specs:{ appearance:'Opaque research capsule', reconstitution:'N/A — oral capsule format', storage:'Store below 25°C, away from light and moisture.' },
    options:[ {label:'30 capsules / 10mg', price:99.95} ]
  },
  {
    slug:'mk-677-capsules', name:'MK-677 (Ibutamoren) Capsules', form:'Capsule', category:'capsules', badge:'Popular', purity:'99%+ HPLC',
    shortDesc:'Orally-active ghrelin receptor agonist reference standard.',
    description:[
      "MK-677 (Ibutamoren) is a non-peptide, orally-active ghrelin receptor agonist widely referenced in GH/IGF-1 axis research literature as a comparator to injectable GHRP compounds."
    ],
    researchApplications:['Ghrelin receptor agonism studies','GH/IGF-1 axis comparator research'],
    specs:{ appearance:'Opaque research capsule', reconstitution:'N/A — oral capsule format', storage:'Store below 25°C, away from light and moisture.' },
    options:[ {label:'30 capsules / 10mg', price:89.95}, {label:'60 capsules / 25mg', price:149.95} ]
  },
  {
    slug:'methylene-blue-capsules', name:'Methylene Blue Capsules', form:'Capsule', category:'capsules', badge:null, purity:'USP Grade',
    shortDesc:'Mitochondrial redox agent studied in cellular energy research.',
    description:[
      "Pharmaceutical-grade Methylene Blue in oral capsule format, referenced in mitochondrial electron-transport-chain and cellular redox research literature."
    ],
    researchApplications:['Mitochondrial redox / electron transport chain studies','Cellular energy marker research'],
    specs:{ appearance:'Blue research capsule', reconstitution:'N/A — oral capsule format', storage:'Store below 25°C, away from light and moisture.' },
    options:[ {label:'30 capsules / 15mg', price:79.95} ]
  },
  {
    slug:'tesofensine-capsules', name:'Tesofensine Capsules', form:'Capsule', category:'capsules', badge:null, purity:'99%+ HPLC',
    shortDesc:'Triple monoamine reuptake inhibitor reference compound for metabolic research.',
    description:[
      "Tesofensine is a triple monoamine reuptake inhibitor referenced in appetite-regulation and central nervous system metabolic research literature."
    ],
    researchApplications:['Monoamine reuptake inhibition studies','Appetite-regulation CNS research'],
    specs:{ appearance:'Opaque research capsule', reconstitution:'N/A — oral capsule format', storage:'Store below 25°C, away from light and moisture.' },
    options:[ {label:'30 capsules / 0.5mg', price:99.95} ]
  },
  {
    slug:'klow-capsules', name:'KLOW Blend Capsules', form:'Capsule', category:'capsules', badge:'New', purity:'Research Blend',
    shortDesc:'Oral capsule format of our BPC-157 + GHK-Cu + TB-500 + KPV blend.',
    description:[
      "The oral capsule format of our popular KLOW research blend, combining BPC-157, GHK-Cu, TB-500 and KPV for researchers studying oral-route combination protocols."
    ],
    researchApplications:['Multi-compound oral delivery research'],
    specs:{ appearance:'Opaque research capsule', reconstitution:'N/A — oral capsule format', storage:'Store below 25°C, away from light and moisture.' },
    options:[ {label:'30 capsules', price:112.50}, {label:'60 capsules', price:189.95} ]
  },
  {
    slug:'glow-capsules', name:'GLOW Blend Capsules', form:'Capsule', category:'capsules', badge:'New', purity:'Research Blend',
    shortDesc:'Glutathione-forward oral blend capsule for skin & antioxidant research.',
    description:[
      "GLOW capsules combine Glutathione with complementary dermal-research peptides in oral format, formulated for researchers studying oxidative-stress and pigmentation pathway markers via the oral route."
    ],
    researchApplications:['Oxidative stress marker studies','Oral-route pigmentation pathway research'],
    specs:{ appearance:'Opaque research capsule', reconstitution:'N/A — oral capsule format', storage:'Store below 25°C, away from light and moisture.' },
    options:[ {label:'30 capsules', price:129.95} ]
  },
  {
    slug:'nootropic-nad-capsules', name:'Dihexa / Selank / Semax / NAD+ Capsules', form:'Capsule', category:'capsules', badge:null, purity:'Research Blend',
    shortDesc:'Combined nootropic + NAD+ oral blend for cognitive research.',
    description:[
      "A combined oral formulation blending Dihexa, Selank, Semax and NAD+ precursor compounds, designed for researchers studying combined neurotrophic and cellular-energy pathway markers."
    ],
    researchApplications:['Neurotrophic pathway (BDNF) studies','Cellular NAD+ metabolism research'],
    specs:{ appearance:'Opaque research capsule', reconstitution:'N/A — oral capsule format', storage:'Store below 25°C, away from light and moisture.' },
    options:[ {label:'30 capsules', price:112.50}, {label:'60 capsules', price:179.95} ]
  }
];

/* Helpers */
window.AURUM_getProduct = function(slug){
  return window.AURUM_PRODUCTS.find(function(p){ return p.slug === slug; });
};
window.AURUM_getCategoryLabel = function(key){
  var c = window.AURUM_CATEGORIES.find(function(c){ return c.key === key; });
  return c ? c.label : key;
};
window.AURUM_minPrice = function(p){
  return Math.min.apply(null, p.options.map(function(o){ return o.price; }));
};
