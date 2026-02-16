"use client";

import React from "react";
import TestSeriesPlayer, { Question } from "@/components/dashboard/TestSeriesPlayer";

// --- DATA: Intensive Ecology Series ---
const QUESTIONS: Question[] = [
    // SECTION A: Concept Fusion MCQs
    {
        id: 1,
        type: "Concept Fusion",
        text: "In logistic growth, when the population size (N) equals half the carrying capacity (K/2), the growth rate (dN/dt) is:",
        options: ["Zero", "Maximum", "Minimum", "Equal to intrinsic rate (r)"],
        correctAnswer: 1, // B
        explanation: "Population growth rate dN/dt is maximum at the inflection point where N = K/2."
    },
    {
        id: 2,
        type: "Concept Fusion",
        text: "If a population is at carrying capacity (K), which of the following is TRUE?",
        options: ["Natality = Mortality", "Intrinsic rate of increase (r) = 0", "Growth rate (dN/dt) = 0", "All of the above"],
        correctAnswer: 3, // D
        explanation: "At carrying capacity, the population stabilizes because birth rate equals death rate, leading to zero net growth."
    },
    {
        id: 3,
        type: "Concept Fusion",
        text: "Which of the following ecological pyramids can be inverted?\n1. Pyramid of Energy\n2. Pyramid of Biomass (aquatic)\n3. Pyramid of Number (tree ecosystem)",
        options: ["1 only", "2 & 3", "1 & 2", "1, 2 & 3"],
        correctAnswer: 1, // B
        explanation: "Pyramid of Energy is ALWAYS upright. Aquatic biomass can be inverted (phytoplankton < zooplankton). Tree number pyramid is inverted (single tree, many insects)."
    },
    {
        id: 4,
        type: "Concept Fusion",
        text: "Match the following correctly:\n1. GPP (Gross Primary Productivity)\n2. NPP (Net Primary Productivity)\n3. Secondary productivity\n\na. Energy available to herbivores\nb. Total photosynthesis\nc. Biomass formed by consumers",
        options: ["1–b, 2–a, 3–c", "1–a, 2–b, 3–c", "1–c, 2–b, 3–a", "1–b, 2–c, 3–a"],
        correctAnswer: 0, // A
        explanation: "GPP is total photosynthesis. NPP (GPP-R) is available to herbivores. Secondary productivity is new biomass at consumer level."
    },
    {
        id: 5,
        type: "Concept Fusion",
        text: "If 1,000 J of energy is available at the producer level, the energy available to the tertiary consumer will be:",
        options: ["10 J", "1 J", "100 J", "0.1 J"],
        correctAnswer: 1, // B
        explanation: "Apply 10% law: Producers (1000) -> Primary (100) -> Secondary (10) -> Tertiary (1)."
    },
    {
        id: 6,
        type: "Concept Fusion",
        text: "Which of these are density-dependent factors regulating population?\n1. Predation\n2. Competition\n3. Flood\n4. Disease",
        options: ["1, 2, 4", "1, 2, 3", "2, 3, 4", "All"],
        correctAnswer: 0, // A
        explanation: "Predation, Competition, and Disease spread depend on population density. Floods are density-independent (abiotic)."
    },
    {
        id: 7,
        type: "Concept Fusion",
        text: "If immigration > emigration and natality = mortality, the population size will:",
        options: ["Decrease", "Remain Stable", "Increase", "Go Extinct"],
        correctAnswer: 2, // C
        explanation: "Population Change = (Natality + Immigration) - (Mortality + Emigration). If N=M, change depends on I - E. Since I > E, population increases."
    },
    {
        id: 8,
        type: "Concept Fusion",
        text: "Which nutrient cycle lacks a significant gaseous phase?",
        options: ["Nitrogen cycle", "Carbon cycle", "Phosphorus cycle", "Oxygen cycle"],
        correctAnswer: 2, // C
        explanation: "The Phosphorus cycle is a sedimentary cycle with no significant atmospheric component."
    },
    // SECTION B: Data + Numerical Intensive
    {
        id: 9,
        type: "Data & Numerical",
        text: "In a forest ecosystem:\nGPP = 25,000 kcal/m²/yr\nRespiration loss (R) = 10,000 kcal/m²/yr\nWhat does NPP equal?",
        options: ["15,000", "10,000", "35,000", "5,000"],
        correctAnswer: 0, // A
        explanation: "NPP = GPP - R. 25,000 - 10,000 = 15,000 kcal/m²/yr."
    },
    {
        id: 10,
        type: "Data & Numerical",
        text: "If the ecological efficiency of energy transfer becomes 5% instead of the usual 10%, the potential length of the food chain will:",
        options: ["Increase", "Decrease", "Remain same", "Double"],
        correctAnswer: 1, // B
        explanation: "Lower efficiency means less energy reaches higher levels, supporting fewer trophic levels, thus shortening the food chain."
    },
    {
        id: 11,
        type: "Data & Numerical",
        text: "If the Z-value (slope) in a species-area relationship increases (steepens), it indicates:",
        options: ["Lower slope/less diversity change", "Higher endemism / Richness increases faster with area", "Weak relationship", "No change"],
        correctAnswer: 1, // B
        explanation: "A steeper slope (higher Z) means species richness increases more rapidly as area increases, often seen in regions with high endemism (e.g., tropical forests)."
    },
    {
        id: 12,
        type: "Data & Numerical",
        text: "In exponential growth, if the intrinsic rate r = 0.3 and population N = 100, what is the growth rate dN/dt?",
        options: ["30", "100", "0.3", "300"],
        correctAnswer: 0, // A
        explanation: "Exponential growth equation: dN/dt = rN. 0.3 * 100 = 30."
    },
    {
        id: 13,
        type: "Data & Numerical",
        text: "If a population doubles every 5 years regardless of its size, the growth pattern is:",
        options: ["Logistic", "Exponential", "Linear", "Stable"],
        correctAnswer: 1, // B
        explanation: "Constant doubling time is a hallmark of unregulated exponential growth."
    },
    // SECTION C: Multi-Statement Trap
    {
        id: 14,
        type: "Multi-Statement",
        text: "Which statements are correct?\n1. Energy flow is unidirectional\n2. Nutrient cycle is cyclic\n3. Energy pyramid is always upright\n4. Biomass pyramid is always upright",
        options: ["1, 2, 3", "1, 2", "1, 2, 3, 4", "2, 3, 4"],
        correctAnswer: 0, // A
        explanation: "Statements 1, 2, and 3 are correct. Statement 4 is incorrect because aquatic biomass pyramids can be inverted."
    },
    {
        id: 15,
        type: "Multi-Statement",
        text: "The 'Edge Effect' in ecology generally leads to:\n1. Increased biodiversity at the boundary\n2. Increased predation risk\n3. Habitat fragmentation stress",
        options: ["1 only", "1 & 2", "1, 2, & 3", "2 only"],
        correctAnswer: 2, // C
        explanation: "Edge effect increases diversity (ecotone species) but also exposes interior species to predation and fragmentation stress."
    },
    {
        id: 16,
        type: "Multi-Statement",
        text: "During eutrophication of a water body:\n1. Biochemical Oxygen Demand (BOD) increases\n2. Dissolved Oxygen (DO) decreases\n3. Fish mortality increases",
        options: ["1 & 2", "2 & 3", "1, 2, & 3", "1 only"],
        correctAnswer: 2, // C
        explanation: "All consequences are linked: Algal bloom -> Death -> Decomposition (High BOD) -> Oxygen depletion (Low DO) -> Fish death."
    },
    {
        id: 17,
        type: "Multi-Statement",
        text: "To be designated as a Biodiversity Hotspot, a region must have:\n1. High endemism\n2. High threat level\n3. At least 1500 endemic vascular plants",
        options: ["1 & 2", "1 & 3", "1, 2, & 3", "2 & 3"],
        correctAnswer: 2, // C
        explanation: "Myers' criteria include strictly: >1500 endemic vascular plants (Endemism) and >70% habitat loss (Threat)."
    },
    // SECTION D: Case Intensive
    {
        id: 18,
        type: "Case Intensive",
        text: "In an experiment, when a top predator was removed, the prey population initially exploded and then crashed spectacularly. The crash was most likely due to:",
        options: ["Resource depletion / Starvation", "Spontaneous mutation", "Carrying capacity increase", "Migration"],
        correctAnswer: 0, // A
        explanation: "Unchecked growth leads to overshooting carrying capacity, exhausting resources, followed by a population crash."
    },
    {
        id: 19,
        type: "Case Intensive",
        text: "If secondary succession is occurring on abandoned farmland, the pioneer species are most likely:",
        options: ["Lichens", "Mosses", "Grasses/Weeds", "Phytoplankton"],
        correctAnswer: 2, // C
        explanation: "Secondary succession starts where soil exists (e.g., burnt forest, farm). Fast-growing grasses/weeds are typical pioneers here, unlike Lichens (Primary)."
    },
    {
        id: 20,
        type: "Case Intensive",
        text: "Which scenario demonstrates the Principle of Competitive Exclusion being active?",
        options: ["Two species competing for identical niche cannot coexist", "Resource partitioning allowing coexistence", "Mutualism", "Predation controlling prey"],
        correctAnswer: 0, // A
        explanation: "Gause's principle states that complete competitors cannot coexist; one will eventually exclude the other."
    },
    {
        id: 21,
        type: "Case Intensive",
        text: "As the population size N approaches the carrying capacity K, which term in the logistic equation approaches zero?",
        options: ["Intrinsic rate r", "Environmental resistance term (K − N)/K", "Population N", "Growth rate dN/dt"],
        correctAnswer: 1, // B
        explanation: "The term (K-N)/K represents the unutilized opportunity for growth. As N -> K, this term approaches zero, slowing growth."
    },
    {
        id: 22,
        type: "Case Intensive",
        text: "In a deep ocean ecosystem (hydrothermal vents) where sunlight is absent, the primary producers are:",
        options: ["Algae", "Phytoplankton", "Chemosynthetic bacteria", "Moss"],
        correctAnswer: 2, // C
        explanation: "Without light, photosynthesis is impossible. Producers use chemical energy (chemosynthesis) from vents."
    },
    // SECTION E: Ultra Concept Trap
    {
        id: 23,
        type: "Ultra Concept",
        text: "Biomagnification is strongest (most dangerous) in ecosystems with:",
        options: ["Short food chains", "Long food chains", "Single trophic level", "Producers only"],
        correctAnswer: 1, // B
        explanation: "The concentration of toxins increases at each level. Longer chains mean higher concentration in top predators."
    },
    {
        id: 24,
        type: "Ultra Concept",
        text: "Which ONE factor is the most significant cause of driving animals and plants to extinction ('The Evil Quartet')?",
        options: ["Alien species invasion", "Habitat loss and fragmentation", "Overexploitation", "Coextinction"],
        correctAnswer: 1, // B
        explanation: "Habitat loss and fragmentation is considered the primary driver of biodiversity loss globally."
    },
    {
        id: 25,
        type: "Ultra Concept",
        text: "If global temperatures increase, which ecosystem is ecologically most vulnerable to collapse?",
        options: ["Tropical rainforest", "Coral reefs", "Grassland", "Desert"],
        correctAnswer: 1, // B
        explanation: "Coral reefs are extremely sensitive to temperature changes (bleaching), making them highly vulnerable to warming."
    },
    {
        id: 26,
        type: "Ultra Concept",
        text: "Ecological succession stops when the community reaches:",
        options: ["Pioneer stage", "Climax community", "Secondary stage", "Shrub stage"],
        correctAnswer: 1, // B
        explanation: "Succession proceeds until a stable, equilibrium state called the Climax Community is reached."
    },
    {
        id: 27,
        type: "Ultra Concept",
        text: "Net Ecosystem Productivity (NEP) is positive when:",
        options: ["Respiration > GPP", "GPP > Total ecosystem respiration", "NPP = 0", "Consumers > Producers"],
        correctAnswer: 1, // B
        explanation: "NEP = GPP - (Total Respiration of Producers + Consumers + Decomposers). It's positive if the system is a carbon sink."
    },
    {
        id: 28,
        type: "Ultra Concept",
        text: "Which is a characteristic trait of K-selected species?",
        options: ["High fecundity", "Small body size", "Parental care", "Early maturity"],
        correctAnswer: 2, // C
        explanation: "K-selected species (like humans, elephants) invest in quality over quantity: few offspring, late maturity, high parental care."
    },
    {
        id: 29,
        type: "Ultra Concept",
        text: "The concept of 'Maximum Sustainable Yield' is most closely related to which population growth model?",
        options: ["Carrying capacity (K)", "Logistic growth (at K/2)", "Biodiversity hotspots", "Biomagnification"],
        correctAnswer: 1, // B
        explanation: "Maximum Sustainable Yield occurs where growth rate is highest, which is at N = K/2 in the logistic model."
    },
    {
        id: 30,
        type: "Ultra Concept",
        text: "If allele frequencies fluctuate randomly in a small population simply by chance, this evolutionary force is:",
        options: ["Migration", "Mutation", "Genetic Drift", "Environmental Resistance"],
        correctAnswer: 2, // C
        explanation: "Genetic Drift refers to random fluctuations in allele frequencies, which is most pronounced in small populations."
    }
];

export default function IntensiveEcologyPage() {
    return (
        <TestSeriesPlayer
            title="Intensive Ecology Series"
            description="Concept Fusion • Multi-Statement • Trap Based. A high-density assessment designed for students aiming for 680+ level in NEET."
            testSeriesId="intensive-ecology-series"
            questions={QUESTIONS}
            durationMins={45}
            totalMarks={120}
            subjects={["Concept Fusion", "Data & Numerical", "Multi-Statement", "Case Intensive", "Ultra Concept"]}
        />
    );
}
