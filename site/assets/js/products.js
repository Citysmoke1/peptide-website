/* Product catalogue data for The Aurum Peptide Co.
   Pricing: items matching a spec in Pricing/Price list 2026 peptide.pdf (USD wholesale cost per
   box of 10 vials, FOB Shenzhen) are set to (box price / 10) x 1.5 [USD->AUD] x 8 [margin].
   Items with no matching spec/size in that list keep their prior indicative AUD placeholder price —
   update once real cost data for that size is available.
   All copy is framed around in-vitro / laboratory research use only. No human dosing instructions. */
window.AURUM_CATEGORIES = [
  { key:'weight-loss',      label:'Weight Loss & Metabolic' },
  { key:'growth-recovery',  label:'Growth Hormone & Recovery' },
  { key:'skin-antiaging',   label:'Skin, Hair & Anti-Aging' },
  { key:'cognitive-sleep',  label:'Cognitive, Mood & Sleep' },
  { key:'hormonal',         label:'Hormonal Support' },
  { key:'specialty',        label:'Specialty' }
];

window.AURUM_PRODUCTS = [
  {
    slug:'bpc-157', name:'BPC-157', form:'Injectable', category:'growth-recovery', badge:'Best Seller', purity:'99%+ HPLC',
    photo:'assets/img/products/bpc-157.jpeg',
    shortDesc:'Body-protective compound studied for gut, tendon and soft-tissue repair models.',
    description:[
      "BPC-157 (Body Protection Compound-157) is a synthetic pentadecapeptide derived from a naturally occurring protective protein found in gastric juice. It is one of the most widely referenced peptides in soft-tissue and gastrointestinal repair literature.",
      "In laboratory models, BPC-157 has been studied for its role in angiogenesis (new blood vessel formation), fibroblast migration and modulation of the nitric oxide pathway — mechanisms of interest to researchers investigating tendon, ligament and mucosal tissue repair."
    ],
    researchApplications:['Gastrointestinal mucosal repair models','Tendon & ligament healing studies','Angiogenesis & nitric-oxide pathway research','Anti-inflammatory mechanism studies'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water; gently swirl, do not shake', storage:'Lyophilised: 2-8°C, dark. Reconstituted: 2-8°C, use within 14 days. Do not freeze.' },
    options:[ {label:'5mg vial', price:45.60}, {label:'10mg vial', price:79.20} ]
  },
  {
    slug:'tb-500', name:'TB-500', form:'Injectable', category:'growth-recovery', badge:null, purity:'99%+ HPLC',
    photo:'assets/img/products/tb-500.jpeg',
    shortDesc:'Thymosin Beta-4 fragment studied for angiogenesis and cell-migration research.',
    description:[
      "TB-500 is a synthetic fragment of Thymosin Beta-4, a naturally occurring peptide involved in actin regulation and cell migration. It is a core reference compound in tissue-repair and regenerative research literature.",
      "Research models frequently pair TB-500 with BPC-157 to examine synergistic effects on microvascular formation, wound-healing kinetics and extracellular matrix remodeling."
    ],
    researchApplications:['Cell migration & actin regulation studies','Angiogenesis / microvascular research','Wound-healing kinetics models','Combination studies with BPC-157'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water; gentle roll, avoid vigorous shaking', storage:'Lyophilised: 2-8°C, dark. Reconstituted: 2-8°C, use within 14 days. Do not freeze.' },
    options:[ {label:'10mg vial', price:110.00} ]
  },
  {
    slug:'retatrutide', name:'Retatrutide (RETA)', form:'Injectable', category:'weight-loss', badge:'Popular', purity:'99%+ HPLC',
    photo:'assets/img/products/retatrutide.jpeg',
    shortDesc:'Triple GIP/GLP-1/glucagon receptor agonist — leading metabolic research compound.',
    description:[
      "Retatrutide is a triple receptor agonist engaging GIP, GLP-1 and glucagon receptors simultaneously, and is currently one of the most cited compounds in metabolic and obesity-model research literature.",
      "Its extended half-life (~6 days in published models) supports once-weekly research dosing schedules in animal and in-vitro studies examining appetite signalling, energy expenditure and hepatic lipid markers."
    ],
    researchApplications:['Triple-receptor agonism studies','Energy expenditure & appetite-signalling models','Hepatic lipid marker research'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'Lyophilised: 2-8°C, dark. Reconstituted: 2-8°C, use within 28 days. Do not freeze.' },
    options:[ {label:'10mg vial', price:110.40}, {label:'30mg vial', price:237.60} ]
  },
  {
    slug:'mots-c', name:'MOTS-c', form:'Injectable', category:'weight-loss', badge:null, purity:'99%+ HPLC',
    photo:'assets/img/products/mots-c.jpeg',
    shortDesc:'Mitochondrial-derived peptide studied for AMPK pathway & metabolic research.',
    description:[
      "MOTS-c is a 16-amino-acid mitochondrial-derived peptide identified from the mitochondrial genome, extensively referenced in AMPK-pathway and metabolic homeostasis literature.",
      "Research models suggest a role in regulating insulin sensitivity markers and mitochondrial biogenesis, making it a compound of ongoing interest in exercise-physiology and longevity research."
    ],
    researchApplications:['AMPK pathway activation studies','Mitochondrial biogenesis research','Insulin-sensitivity marker modelling'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'Lyophilised: -20°C, dark. Reconstituted: 2-8°C, use within 7 days. Do not freeze.' },
    options:[ {label:'10mg vial', price:110.00} ]
  },
  {
    slug:'ghk-cu', name:'GHK-Cu Copper Peptide', form:'Injectable', category:'skin-antiaging', badge:'Best Seller', purity:'99%+ HPLC',
    photo:'assets/img/products/ghk-cu.jpeg',
    shortDesc:'Copper tripeptide widely referenced in collagen synthesis & wound-repair studies.',
    description:[
      "GHK-Cu (Copper Tripeptide-1) is a naturally occurring copper-binding peptide extensively cited in dermal research literature for its role in collagen and elastin synthesis, and anti-inflammatory signalling.",
      "It is a foundational reference compound in skin-remodelling, hair-follicle and wound-healing research models, and a component of several proprietary research blends."
    ],
    researchApplications:['Collagen/elastin synthesis studies','Dermal remodelling & wound-healing models','Hair follicle (Wnt pathway) research'],
    specs:{ appearance:'Blue lyophilised powder / pale blue solution once reconstituted', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 10-20 days. Do not freeze.' },
    options:[ {label:'50mg vial', price:45.60}, {label:'100mg vial', price:60.00} ]
  },
  {
    slug:'pt-141', name:'PT-141 (Bremelanotide)', form:'Injectable', category:'specialty', badge:null, purity:'99%+ HPLC',
    photo:'assets/img/products/pt-141.jpeg',
    shortDesc:'Melanocortin receptor agonist studied in central nervous system research.',
    description:[
      "PT-141 (Bremelanotide) is a synthetic melanocortin receptor agonist referenced in CNS and melanocortin-pathway research literature for its receptor-binding characteristics at MC3R/MC4R.",
      "A widely cited reference standard for melanocortin receptor-agonism comparative studies."
    ],
    researchApplications:['Melanocortin receptor (MC3R/MC4R) studies','CNS receptor-binding research'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 14 days. Do not freeze.' },
    options:[ {label:'10mg vial', price:72.00} ]
  },
  {
    slug:'selank', name:'Selank', form:'Injectable', category:'cognitive-sleep', badge:null, purity:'99%+ HPLC',
    photo:'assets/img/products/selank.jpeg',
    shortDesc:'Heptapeptide studied for GABAergic and HPA-axis stress-response research.',
    description:[
      "Selank is a synthetic heptapeptide developed from the immunomodulatory peptide tuftsin, referenced in anxiolytic and neuroprotective research literature for modulation of GABA and monoamine pathways.",
      "Widely cited in HPA-axis stress-response studies exploring cortisol regulation mechanisms."
    ],
    researchApplications:['GABAergic pathway studies','HPA-axis / cortisol regulation research','Neuroprotective mechanism studies'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 14 days. Do not freeze.' },
    options:[ {label:'10mg vial', price:60.00} ]
  },
  {
    slug:'ahk-cu', name:'AHK-Cu Copper Peptide', form:'Injectable', category:'skin-antiaging', badge:'New', purity:'99%+ HPLC',
    photo:'assets/img/products/ahk-cu.jpeg',
    shortDesc:'Copper tripeptide studied for hair-follicle and dermal-regeneration research, distinct from GHK-Cu.',
    description:[
      "AHK-Cu (Alanyl-Histidyl-Lysine copper complex) is a copper-binding tripeptide structurally related to GHK-Cu, referenced in dermal research literature for a distinct amino-acid sequence and receptor-binding profile.",
      "Laboratory literature has examined AHK-Cu's association with VEGF expression and dermal papilla cell proliferation, making it a compound of interest in comparative hair-follicle and skin-remodelling research alongside GHK-Cu."
    ],
    researchApplications:['Hair follicle / VEGF pathway studies','Dermal papilla cell proliferation research','Comparative copper-peptide research vs GHK-Cu'],
    specs:{ appearance:'White to pale blue lyophilised powder', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 10-20 days. Do not freeze.' },
    options:[ {label:'100mg vial', price:60.00} ]
  },
  {
    slug:'ara-290', name:'ARA-290 (Cibinetide)', form:'Injectable', category:'specialty', badge:'New', purity:'99%+ HPLC',
    photo:'assets/img/products/ara-290.jpeg',
    shortDesc:'Non-hematopoietic EPO-derived peptide studied for neuropathic pain and tissue-protective pathway research.',
    description:[
      "ARA-290 (Cibinetide) is a synthetic 11-amino-acid peptide derived from the erythropoietin (EPO) sequence, engineered to engage the innate repair receptor (IRR) without the erythropoietic activity of native EPO.",
      "Referenced in neuropathic pain, corneal nerve regeneration and anti-inflammatory cytokine research literature as a tissue-protective signalling reference compound."
    ],
    researchApplications:['Innate repair receptor (IRR) signalling studies','Neuropathic pain pathway research','Corneal nerve regeneration models','Anti-inflammatory cytokine research'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 14 days. Do not freeze.' },
    options:[ {label:'10mg vial', price:60.00} ]
  },
  {
    slug:'snap-8', name:'SNAP-8', form:'Injectable', category:'skin-antiaging', badge:'New', purity:'99%+ HPLC',
    photo:'assets/img/products/snap-8.jpeg',
    shortDesc:'Octapeptide studied for SNARE-complex inhibition and expression-line research.',
    description:[
      "SNAP-8 (Acetyl Octapeptide-3) is a synthetic octapeptide analogue of the SNAP-25 protein N-terminus, referenced in dermal research literature for its proposed inhibition of SNARE-complex assembly involved in neurotransmitter-mediated muscle-contraction signalling.",
      "An extended-chain analogue of Acetyl Hexapeptide-8, frequently studied as a comparative topical-model reference compound in expression-line research."
    ],
    researchApplications:['SNARE-complex inhibition studies','Neuromuscular signalling research','Comparative research vs Acetyl Hexapeptide-8'],
    specs:{ appearance:'White lyophilised powder', reconstitution:'Bacteriostatic water', storage:'2-8°C, dark. Reconstituted: use within 14 days. Do not freeze.' },
    options:[ {label:'10mg vial', price:45.00} ]
  },
  {
    slug:'bac-water', name:'Bacteriostatic Water', form:'Injectable', category:'specialty', badge:null, purity:'USP Grade',
    photo:'assets/img/products/bac-water.jpeg',
    shortDesc:'Sterile 0.9% benzyl-alcohol diluent for laboratory reconstitution of lyophilised peptides.',
    description:[
      "Bacteriostatic Water for reconstitution is a sterile, USP-grade diluent containing 0.9% benzyl alcohol as a bacteriostatic preservative, used for reconstituting lyophilised peptide powders prior to laboratory use.",
      "Multi-use vial format allows repeated withdrawal across a single reconstitution series while reducing contamination risk relative to single-use sterile water."
    ],
    researchApplications:['Peptide reconstitution','Multi-use laboratory diluent'],
    specs:{ appearance:'Clear sterile solution', reconstitution:'Supplied ready to use', storage:'Room temperature or 2-8°C. Use within 28 days of first puncture.' },
    options:[ {label:'3mg vial', price:1.00}, {label:'10mg vial', price:30.00} ]
  },
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
