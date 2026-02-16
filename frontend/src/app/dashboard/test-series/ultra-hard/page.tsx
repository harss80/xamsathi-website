"use client";

import React from "react";
import TestSeriesPlayer, { Question } from "@/components/dashboard/TestSeriesPlayer";

// --- ULTRA HARD SPECIAL SET QUESTIONS ---
const QUESTIONS: Question[] = [
    // SECTION A – GENETICS (Q1–20)
    {
        id: 1,
        type: "genetics",
        text: "In a cross AaBbCc × AaBbCc, probability of getting genotype AABBcc is:",
        options: ["1/64", "1/32", "1/16", "1/8"],
        correctAnswer: 0, // A
        explanation: "Probability of AA = 1/4, BB = 1/4, cc = 1/4. Total = 1/4 * 1/4 * 1/4 = 1/64."
    },
    {
        id: 2,
        type: "genetics",
        text: "If recombination frequency is 20%, genes are:",
        options: ["Completely linked", "20 map units apart", "80 map units apart", "Unlinked"],
        correctAnswer: 1, // B
        explanation: "1% Recombination Frequency = 1 Map Unit (Centimorgan). 20% = 20 MU."
    },
    {
        id: 3,
        type: "genetics",
        text: "A colour blind father and normal mother (carrier) produce daughters. Probability daughter is colour blind?",
        options: ["0%", "25%", "50%", "75%"],
        correctAnswer: 2, // C
        explanation: "Father (XcY), Mother (XcX). Daughters: XcX (Carrier), XcXc (Colour blind). Probability = 1/2 = 50%."
    },
    {
        id: 4,
        type: "genetics",
        text: "In ABO system, number of possible genotypes:",
        options: ["3", "4", "6", "8"],
        correctAnswer: 2, // C
        explanation: "Formula: n(n+1)/2 where n=3 alleles (IA, IB, i). 3(4)/2 = 6."
    },
    {
        id: 5,
        type: "genetics",
        text: "If frequency of recessive phenotype = 0.09, frequency of heterozygotes?",
        options: ["0.18", "0.42", "0.21", "0.49"],
        correctAnswer: 1, // B
        explanation: "q² = 0.09 => q = 0.3. p = 1 - 0.3 = 0.7. Heterozygotes 2pq = 2 * 0.7 * 0.3 = 0.42."
    },
    {
        id: 6,
        type: "genetics",
        text: "Which shows pleiotropy?",
        options: ["Polygenic trait", "Sickle cell anemia", "Incomplete dominance", "Codominance"],
        correctAnswer: 1, // B
        explanation: "Sickle cell anemia gene affects hemoglobin structure, shape of RBC, and susceptibility to malaria (multiple effects)."
    },
    {
        id: 7,
        type: "genetics",
        text: "In test cross, deviation from 1:1:1:1 indicates:",
        options: ["Mutation", "Linkage", "Polyploidy", "Epistasis"],
        correctAnswer: 1, // B
        explanation: "Independent assortment gives 1:1:1:1. Deviation suggests Linkage (parental combinations > recombinants)."
    },
    {
        id: 8,
        type: "genetics",
        text: "Genetic drift strongest in:",
        options: ["Large population", "Small population", "Equal population", "Migrating population"],
        correctAnswer: 1, // B
        explanation: "Genetic drift (random change in allele frequency) is most significant in small populations."
    },
    {
        id: 9,
        type: "genetics",
        text: "Number of gametes from genotype AaBbCCDdEe:",
        options: ["8", "16", "32", "64"],
        correctAnswer: 1, // B
        explanation: "Heterozygous loci: Aa, Bb, Dd, Ee (4). Homozygous: CC. Number of gametes = 2ⁿ = 2⁴ = 16."
    },
    {
        id: 10,
        type: "genetics",
        text: "DNA replication occurs in which phase?",
        options: ["G1", "S", "G2", "M"],
        correctAnswer: 1, // B
        explanation: "DNA replication (Synthesis) occurs exclusively in the S phase of the cell cycle."
    },
    {
        id: 11,
        type: "genetics",
        text: "Which enzyme joins Okazaki fragments?",
        options: ["Ligase", "Helicase", "Polymerase I", "Primase"],
        correctAnswer: 0, // A
        explanation: "DNA Ligase joins the discontinuous Okazaki fragments on the lagging strand."
    },
    {
        id: 12,
        type: "genetics",
        text: "If a gene has 4 alleles in population, max genotypes possible?",
        options: ["4", "10", "8", "16"],
        correctAnswer: 1, // B
        explanation: "Formula n(n+1)/2. 4(5)/2 = 10 genotypes."
    },
    {
        id: 13,
        type: "genetics",
        text: "Which violates Hardy–Weinberg?",
        options: ["Random mating", "No mutation", "Gene flow", "Large population"],
        correctAnswer: 2, // C
        explanation: "Gene flow (migration) introduces/removes alleles, changing frequencies and disturbing equilibrium."
    },
    {
        id: 14,
        type: "genetics",
        text: "Operon is example of:",
        options: ["Negative regulation", "Positive regulation", "Structural gene", "Translation control"],
        correctAnswer: 0, // A
        explanation: "The lac operon is primarily an example of negative regulation (repressor prevents transcription)."
    },
    {
        id: 15,
        type: "genetics",
        text: "Transversion mutation is:",
        options: ["Purine → Purine", "Pyrimidine → Pyrimidine", "Purine → Pyrimidine", "Deletion"],
        correctAnswer: 2, // C
        explanation: "Transversion is the substitution of a Purine by a Pyrimidine or vice versa. (Transition is Purine-Purine)."
    },
    {
        id: 16,
        type: "genetics",
        text: "Number of chromosomes in human secondary oocyte:",
        options: ["46", "23", "23 pairs", "92"],
        correctAnswer: 1, // B
        explanation: "Secondary oocyte is haploid (product of Meiosis I), containing 23 chromosomes (each with 2 chromatids)."
    },
    {
        id: 17,
        type: "genetics",
        text: "In meiosis, crossing over occurs in:",
        options: ["Leptotene", "Zygotene", "Pachytene", "Diplotene"],
        correctAnswer: 2, // C
        explanation: "Crossing over (recombination) occurs during the Pachytene stage of Prophase I."
    },
    {
        id: 18,
        type: "genetics",
        text: "Codon AUG codes for:",
        options: ["Stop", "Methionine", "Tryptophan", "Alanine"],
        correctAnswer: 1, // B
        explanation: "AUG is the Start codon and codes for Methionine."
    },
    {
        id: 19,
        type: "genetics",
        text: "Which shows multiple allelism?",
        options: ["Eye colour in Drosophila", "ABO", "Height", "Skin colour"],
        correctAnswer: 1, // B
        explanation: "ABO blood group system is controlled by gene I with 3 alleles: IA, IB, and i."
    },
    {
        id: 20,
        type: "genetics",
        text: "Mutation in germ cells leads to:",
        options: ["Somatic variation", "Heritable variation", "Cancer only", "None"],
        correctAnswer: 1, // B
        explanation: "Germline mutations are passed to the next generation, causing heritable variation."
    },
    // SECTION B – ECOLOGY (Q21–40)
    {
        id: 21,
        type: "ecology",
        text: "Pyramid of energy is always:",
        options: ["Inverted", "Upright", "Spindle", "Diamond"],
        correctAnswer: 1, // B
        explanation: "According to the 10% law, energy decreases at each trophic level, so the pyramid is always upright."
    },
    {
        id: 22,
        type: "ecology",
        text: "10% law given by:",
        options: ["Odum", "Lindeman", "Elton", "Darwin"],
        correctAnswer: 1, // B
        explanation: "Raymond Lindeman (1942) proposed the 10% law of energy transfer."
    },
    {
        id: 23,
        type: "ecology",
        text: "Primary productivity highest in:",
        options: ["Desert", "Tropical rainforest", "Tundra", "Ocean"],
        correctAnswer: 1, // B
        explanation: "Tropical Rainforests have the highest rate of primary productivity due to optimal sunlight and moisture."
    },
    {
        id: 24,
        type: "ecology",
        text: "Species richness highest in:",
        options: ["Poles", "Equator", "Temperate", "Desert"],
        correctAnswer: 1, // B
        explanation: "Biodiversity latitudinal gradient: Species richness increases from Poles towards the Equator."
    },
    {
        id: 25,
        type: "ecology",
        text: "Edge effect refers to:",
        options: ["Increase biodiversity at boundary", "Decrease biodiversity", "Extinction", "Pollution"],
        correctAnswer: 0, // A
        explanation: "Edge effect is the phenomenon of increased variety and density of species at the boundary (ecotone) between two ecosystems."
    },
    {
        id: 26,
        type: "ecology",
        text: "Gause’s principle states:",
        options: ["Coexistence", "Competitive exclusion", "Mutualism", "Predation"],
        correctAnswer: 1, // B
        explanation: "Gause's Competitive Exclusion Principle states that two species competing for the same limiting resources cannot coexist indefinitely."
    },
    {
        id: 27,
        type: "ecology",
        text: "r-selected species show:",
        options: ["Late maturity", "Fewer offspring", "High reproductive rate", "Long lifespan"],
        correctAnswer: 2, // C
        explanation: "r-selected species respond to unstable environments with rapid reproduction (high growth rate r)."
    },
    {
        id: 28,
        type: "ecology",
        text: "Biomagnification mainly affects:",
        options: ["Producers", "Herbivores", "Top carnivores", "Decomposers"],
        correctAnswer: 2, // C
        explanation: "Toxins concentrate at each trophic level, reaching highest concentrations in top carnivores."
    },
    {
        id: 29,
        type: "ecology",
        text: "BOD increases due to:",
        options: ["Clean water", "Organic waste", "Oxygenation", "Less microbes"],
        correctAnswer: 1, // B
        explanation: "High Organic waste supports more decomposers, which consume oxygen, increasing Biological Oxygen Demand."
    },
    {
        id: 30,
        type: "ecology",
        text: "Ozone depletion due to:",
        options: ["CO2", "SO2", "CFC", "CO"],
        correctAnswer: 2, // C
        explanation: "Chlorofluorocarbons (CFCs) release Chlorine atoms in stratosphere which catalyze the breakdown of Ozone."
    },
    {
        id: 31,
        type: "ecology",
        text: "Which is keystone species?",
        options: ["Tiger", "Elephant", "Sea star", "All"],
        correctAnswer: 3, // D
        explanation: "All listed (Tiger, Elephant, Pisaster Sea Star) act as keystone species in their respective ecosystems."
    },
    {
        id: 32,
        type: "ecology",
        text: "Ecotone means:",
        options: ["Desert", "Transition zone", "Grassland", "Tundra"],
        correctAnswer: 1, // B
        explanation: "Ecotone is the transition area between two biological communities (e.g., forest and grassland)."
    },
    {
        id: 33,
        type: "ecology",
        text: "Population density depends on:",
        options: ["Natality", "Mortality", "Immigration", "All"],
        correctAnswer: 3, // D
        explanation: "Population density is affected by Births (Natality), Deaths (Mortality), Immigration, and Emigration."
    },
    {
        id: 34,
        type: "ecology",
        text: "Which curve is logistic growth?",
        options: ["J-shaped", "S-shaped", "Linear", "Exponential"],
        correctAnswer: 1, // B
        explanation: "Logistic growth (Verhulst-Pearl) produces a sigmoid (S-shaped) curve due to limited resources."
    },
    {
        id: 35,
        type: "ecology",
        text: "Carrying capacity denoted by:",
        options: ["r", "K", "N", "B"],
        correctAnswer: 1, // B
        explanation: "K represents Carrying Capacity (maximum population size environment can sustain)."
    },
    {
        id: 36,
        type: "ecology",
        text: "Mutualism example:",
        options: ["Mycorrhiza", "Tapeworm", "Cuscuta", "Tiger-deer"],
        correctAnswer: 0, // A
        explanation: "Mycorrhiza is a mutualistic association between fungi and roots of higher plants. (Others are Parasitism/Predation)."
    },
    {
        id: 37,
        type: "ecology",
        text: "Which cycle has no atmospheric phase?",
        options: ["Carbon", "Nitrogen", "Phosphorus", "Oxygen"],
        correctAnswer: 2, // C
        explanation: "Phosphorus cycle is a sedimentary cycle; it does not have a significant gaseous/atmospheric phase."
    },
    {
        id: 38,
        type: "ecology",
        text: "Hotspots have:",
        options: ["Low diversity", "High endemism", "Low threat", "Arctic species"],
        correctAnswer: 1, // B
        explanation: "Biodiversity Hotspots are characterized by high species richness and high endemism (species found nowhere else)."
    },
    {
        id: 39,
        type: "ecology",
        text: "Secondary succession begins on:",
        options: ["Bare rock", "Lava", "Previously inhabited area", "Water"],
        correctAnswer: 2, // C
        explanation: "Secondary succession occurs in areas where a community previously existed but was destroyed (e.g., burned forest)."
    },
    {
        id: 40,
        type: "ecology",
        text: "NPP equals:",
        options: ["GPP", "GPP – Respiration", "Respiration", "Biomass only"],
        correctAnswer: 1, // B
        explanation: "Net Primary Productivity (NPP) = Gross Primary Productivity (GPP) - Respiration Loss (R)."
    }
];

export default function UltraHardPage() {
    return (
        <TestSeriesPlayer
            title="Ultra Hard Special Set"
            description="Genetics & Ecology • Topper's Selection. High difficulty mock test designed for advanced students."
            testSeriesId="ultra-hard-set"
            questions={QUESTIONS}
            durationMins={60}
            totalMarks={160}
            subjects={["Genetics", "Ecology"]}
        />
    );
}
