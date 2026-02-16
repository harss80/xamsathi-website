"use client";

import React from "react";
import TestSeriesPlayer, { Question } from "@/components/dashboard/TestSeriesPlayer";

// --- DATA: Graph Cases (Flattened for TestSeriesPlayer) ---
const QUESTIONS: Question[] = [
    // --- 1. Logistic vs Exponential Growth ---
    {
        id: 1,
        type: "Growth Curves",
        text: "Curve A (J-shaped) represents which type of growth?",
        image: "/assets/graphs/logistic_exponential.svg",
        options: ["Logistic growth", "Exponential growth", "Decline phase", "Zero growth"],
        correctAnswer: 1, // B
        explanation: "A J-shaped curve is characteristic of exponential growth, occurring when resources are unlimited."
    },
    {
        id: 2,
        type: "Growth Curves",
        text: "The plateau reached by Curve B at 500 individuals represents:",
        image: "/assets/graphs/logistic_exponential.svg",
        options: ["Natality rate", "Carrying capacity (K)", "Mutation rate", "Immigration rate"],
        correctAnswer: 1, // B
        explanation: "The plateau in a logistic curve represents the Carrying Capacity (K), the maximum stable population size the environment can support."
    },
    {
        id: 3,
        type: "Growth Curves",
        text: "If K = 500 and current population N = 100, the growth rate (dN/dt) is conceptually:",
        image: "/assets/graphs/logistic_exponential.svg",
        options: ["Minimum", "Maximum/High", "Zero", "Negative"],
        correctAnswer: 1, // B
        explanation: "Growth is fastest when N is far below K (specifically at K/2). At N=100 (which is < K/2=250), growth is accelerating."
    },
    {
        id: 4,
        type: "Growth Curves",
        text: "Environmental resistance (represented by (K-N)/K) increases significantly when:",
        image: "/assets/graphs/logistic_exponential.svg",
        options: ["N is very small", "N approaches K", "N is zero", "K increases"],
        correctAnswer: 1, // B
        explanation: "As N gets closer to K, the term (K-N)/K becomes smaller, effectively slowing down growth due to increased resistance (competition/resources)."
    },
    {
        id: 5,
        type: "Growth Curves",
        text: "The equation representing logistic growth (Curve B) is:",
        image: "/assets/graphs/logistic_exponential.svg",
        options: ["dN/dt = rN", "dN/dt = rN((K-N)/K)", "N = rN", "K = rN"],
        correctAnswer: 1, // B
        explanation: "The Verhulst-Pearl Logistic Growth equation is dN/dt = rN((K-N)/K)."
    },
    // --- 2. Species–Area Relationship (Log Scale) ---
    {
        id: 6,
        type: "Species-Area",
        text: "The relationship described by the straight line on a logarithmic scale is:",
        image: "/assets/graphs/species_area.svg",
        options: ["Linear on normal scale", "Rectangular hyperbola on normal scale", "Logarithmic on normal scale", "Exponential on normal scale"],
        correctAnswer: 2, // C
        explanation: "On a log-log scale, the relationship log S = log C + Z log A is linear. (The original relationship S=CA^Z is a rectangular hyperbola)."
    },
    {
        id: 7,
        type: "Species-Area",
        text: "The value of Z = 0.15 typically indicates:",
        image: "/assets/graphs/species_area.svg",
        options: ["Very steep slope (continents)", "Shallow slope typical of small areas", "No relationship", "Rapid extinction"],
        correctAnswer: 1, // B
        explanation: "Z values generally lie between 0.1 to 0.2 for changing species richness across small to medium regions."
    },
    {
        id: 8,
        type: "Species-Area",
        text: "According to the relationship (Z < 1), if area doubles, species richness will:",
        image: "/assets/graphs/species_area.svg",
        options: ["Double exactly", "Increase but not double", "Decrease", "Remain same"],
        correctAnswer: 1, // B
        explanation: "Since Z is usually < 1 (0.15 here), the relationship is non-linear. Doubling area increases species, but less than double."
    },
    {
        id: 9,
        type: "Species-Area",
        text: "In very large areas like entire continents, the Z value typically steepens to:",
        image: "/assets/graphs/species_area.svg",
        options: ["0.1 – 0.2", "0.6 – 1.2", "0.01", "2.0"],
        correctAnswer: 1, // B
        explanation: "For very large areas (continents), the slope (Z) is steeper, typically ranging from 0.6 to 1.2."
    },
    {
        id: 10,
        type: "Species-Area",
        text: "The equation for the Species-Area relationship is:",
        image: "/assets/graphs/species_area.svg",
        options: ["S = CA^Z", "S = rN", "dN/dt", "GPP – R"],
        correctAnswer: 0, // A
        explanation: "The standard equation is S = CA^Z, where S is species richness, A is area, Z is slope, C is Y-intercept."
    },
    // --- 3. Pyramid of Energy Flow ---
    {
        id: 11,
        type: "Energy Flow",
        text: "This graph directly depicts which ecological law?",
        image: "/assets/graphs/energy_pyramid.svg",
        options: ["Competitive exclusion", "Lindeman's 10% Law", "Hardy–Weinberg Principle", "Logistic growth model"],
        correctAnswer: 1, // B
        explanation: "Trace the energy: 10000 -> 1000 -> 100 -> 10. Exactly 10% is transferred to each subsequent level."
    },
    {
        id: 12,
        type: "Energy Flow",
        text: "The 90% energy loss at each step mainly occurs as:",
        image: "/assets/graphs/energy_pyramid.svg",
        options: ["Biomass accumulation", "Heat (Respiration/Metabolism)", "Nitrogen waste", "Genetic mutation"],
        correctAnswer: 1, // B
        explanation: "Most energy is lost to the environment as heat due to respiration and metabolic activities."
    },
    {
        id: 13,
        type: "Energy Flow",
        text: "If Producers increase their energy capture to 20,000 kcal, Primary Consumers would theoretically have:",
        image: "/assets/graphs/energy_pyramid.svg",
        options: ["2,000 kcal", "5,000 kcal", "10,000 kcal", "1,000 kcal"],
        correctAnswer: 0, // A
        explanation: "Applying the 10% law: 10% of 20,000 kcal = 2,000 kcal."
    },
    {
        id: 14,
        type: "Energy Flow",
        text: "Unlike biomass or number pyramids, the Pyramid of Energy is ALWAYS:",
        image: "/assets/graphs/energy_pyramid.svg",
        options: ["Inverted", "Upright", "Spindle-shaped", "Variable"],
        correctAnswer: 1, // B
        explanation: "Energy flow is unidirectional and loss occurs at every step, so the pyramid is always upright."
    },
    {
        id: 15,
        type: "Energy Flow",
        text: "Net Primary Productivity (NPP), available to the next level, is defined as:",
        image: "/assets/graphs/energy_pyramid.svg",
        options: ["Total solar energy", "GPP – Respiration", "Respiration only", "Energy lost as heat"],
        correctAnswer: 1, // B
        explanation: "NPP = Gross Primary Productivity (GPP) minus Respiration loss (R)."
    },
    // --- 4. Dissolved Oxygen (DO) vs Pollution ---
    {
        id: 16,
        type: "DO & BOD",
        text: "A high peak in the BOD curve indicates:",
        image: "/assets/graphs/do_bod.svg",
        options: ["Very clean water", "High dissolved oxygen", "High microbial decomposition activity", "Low nutrient content"],
        correctAnswer: 2, // C
        explanation: "High BOD means microorganisms are consuming vast amounts of oxygen to break down organic matter."
    },
    {
        id: 17,
        type: "DO & BOD",
        text: "The point of minimum Dissolved Oxygen (DO) usually coincides with:",
        image: "/assets/graphs/do_bod.svg",
        options: ["Rapid fish growth", "Fish mortality", "Algal death only", "Clear water"],
        correctAnswer: 1, // B
        explanation: "When DO drops below critical levels (hypoxia), aquatic organisms like fish asphyxiate and die."
    },
    {
        id: 18,
        type: "DO & BOD",
        text: "This condition (high nutrient/waste load) typically results in:",
        image: "/assets/graphs/do_bod.svg",
        options: ["Oligotrophic lake", "Eutrophic lake", "Desertification", "Glacial formation"],
        correctAnswer: 1, // B
        explanation: "Nutrient enrichment leading to high biological productivity (and potential hypoxia) defines Eutrophication."
    },
    {
        id: 19,
        type: "DO & BOD",
        text: "The primary cause of the sharp drop in Dissolved Oxygen is:",
        image: "/assets/graphs/do_bod.svg",
        options: ["Increased photosynthesis", "Microbial Decomposition consuming O2", "Nitrogen fixation", "Decreased respiration"],
        correctAnswer: 1, // B
        explanation: "Aerobic bacteria decompose the organic waste, using up the dissolved oxygen in the process."
    },
    {
        id: 20,
        type: "DO & BOD",
        text: "If sewage treatment is improved (reducing organic load), the BOD of the discharge will:",
        image: "/assets/graphs/do_bod.svg",
        options: ["Increase", "Decrease", "Remain same", "Double"],
        correctAnswer: 1, // B
        explanation: "Effective treatment removes organic matter, thereby lowering the oxygen demand (BOD) of the effluent."
    },
    // --- 5. Predator–Prey Oscillation Cycles ---
    {
        id: 21,
        type: "Predator-Prey",
        text: "This classic interaction graph represents:",
        image: "/assets/graphs/predator_prey.svg",
        options: ["Mutualism", "Parasitism", "Predation", "Commensalism"],
        correctAnswer: 2, // C
        explanation: "The coupled oscillation with a lag phase is the hallmark of Predator-Prey dynamics (Lotka-Volterra)."
    },
    {
        id: 22,
        type: "Predator-Prey",
        text: "Why does the Predator peak typically follow the Prey peak?",
        image: "/assets/graphs/predator_prey.svg",
        options: ["Predator eats plants", "Abundant prey increases predator survival/reproduction", "Random mutation", "Migration patterns"],
        correctAnswer: 1, // B
        explanation: "More prey (food) allows the predator population to grow; this takes time (gestation/maturation), causing the lag."
    },
    {
        id: 23,
        type: "Predator-Prey",
        text: "If the Prey population drastically decreases (e.g., disease), the Predator population will subsequently:",
        image: "/assets/graphs/predator_prey.svg",
        options: ["Increase", "Remain same", "Decrease", "Switch to being producers"],
        correctAnswer: 2, // C
        explanation: "With food scarcity, the predator population will decline due to starvation and reduced reproduction."
    },
    {
        id: 24,
        type: "Predator-Prey",
        text: "This population control pattern is an example of:",
        image: "/assets/graphs/predator_prey.svg",
        options: ["Density-independent factor", "Density-dependent regulation", "Genetic drift", "Hardy–Weinberg equilibrium"],
        correctAnswer: 1, // B
        explanation: "Available food (prey) and predation pressure are density-dependent factors regulating population size."
    },
    {
        id: 25,
        type: "Predator-Prey",
        text: "If the Predator is completely removed, the Prey population will initially:",
        image: "/assets/graphs/predator_prey.svg",
        options: ["Decrease", "Stabilise immediately", "Increase rapidly (explode)", "Go extinct"],
        correctAnswer: 2, // C
        explanation: "Released from predation pressure, the prey population will grow rapidly (exponentially) until another factor limits it."
    }
];

export default function EcologyGraphsPage() {
    return (
        <TestSeriesPlayer
            title="Ecology Graphs"
            description="New NEET Pattern • Graph Based Ecology. Master the visual data interpretation skills required for top NEET scores."
            testSeriesId="ecology-graphs"
            questions={QUESTIONS}
            durationMins={40}
            totalMarks={100}
            subjects={["Growth Curves", "Species-Area", "Energy Flow", "DO & BOD", "Predator-Prey"]}
        />
    );
}
