"use client";

import React from "react";
import TestSeriesPlayer, { Question } from "@/components/dashboard/TestSeriesPlayer";

// --- DATA: Case Studies (Flattened for TestSeriesPlayer) ---
const QUESTIONS: Question[] = [
    // Case Study 1: Eutrophication & Lake Ecosystem
    {
        id: 1,
        type: "Lake Ecosystem",
        context: "A freshwater lake near an urban settlement began receiving untreated sewage effluent. Over a period of five years, residents noticed significant changes: water clarity decreased due to massive algal blooms, foul odors emerged during summers, and mass fish mortality events became frequent. Analysis of the lake sediment revealed a shift towards dominance by anaerobic bacteria.",
        text: "The primary driver for the excessive algal growth described is an increase in:",
        options: ["Heavy metal accumulation", "Thermal pollution", "Nutrient enrichment (N & P)", "Ozone depletion"],
        correctAnswer: 2, // C
        explanation: "Nutrient enrichment (Nitrates and Phosphates) from sewage stimulates rapid algal growth, a process known as cultural eutrophication."
    },
    {
        id: 2,
        type: "Lake Ecosystem",
        context: "A freshwater lake near an urban settlement began receiving untreated sewage effluent. Over a period of five years, residents noticed significant changes: water clarity decreased due to massive algal blooms, foul odors emerged during summers, and mass fish mortality events became frequent. Analysis of the lake sediment revealed a shift towards dominance by anaerobic bacteria.",
        text: "The specific biological process leading to the lake's degradation is termed:",
        options: ["Biomagnification", "Eutrophication", "Hydrarch Succession", "Desertification"],
        correctAnswer: 1, // B
        explanation: "Eutrophication refers to the natural or artificial enrichment of a water body with nutrients, leading to algal blooms and subsequent oxygen depletion."
    },
    {
        id: 3,
        type: "Lake Ecosystem",
        context: "A freshwater lake near an urban settlement began receiving untreated sewage effluent. Over a period of five years, residents noticed significant changes: water clarity decreased due to massive algal blooms, foul odors emerged during summers, and mass fish mortality events became frequent. Analysis of the lake sediment revealed a shift towards dominance by anaerobic bacteria.",
        text: "The sharp decrease in dissolved oxygen (DO) responsible for fish mortality is primarily caused by:",
        options: ["Cessation of photosynthesis", "Microbial decomposition of dead algae", "Excessive oxygen consumption by fish", "Drop in water temperature"],
        correctAnswer: 1, // B
        explanation: "When the massive algal blooms die, decomposers (bacteria) consume vast amounts of oxygen to break down the organic matter, creating hypoxic conditions."
    },
    {
        id: 4,
        type: "Lake Ecosystem",
        context: "A freshwater lake near an urban settlement began receiving untreated sewage effluent. Over a period of five years, residents noticed significant changes: water clarity decreased due to massive algal blooms, foul odors emerged during summers, and mass fish mortality events became frequent. Analysis of the lake sediment revealed a shift towards dominance by anaerobic bacteria.",
        text: "The dominance of anaerobic bacteria in the sediment indicates which condition?",
        options: ["Oligotrophic state", "Mesotrophic state", "Severe Hypoxic/Anoxic condition", "High primary productivity"],
        correctAnswer: 2, // C
        explanation: "Anaerobe dominance signals a lack of oxygen (hypoxia/anoxia) in the benthic zone due to high BOD."
    },
    {
        id: 5,
        type: "Lake Ecosystem",
        context: "A freshwater lake near an urban settlement began receiving untreated sewage effluent. Over a period of five years, residents noticed significant changes: water clarity decreased due to massive algal blooms, foul odors emerged during summers, and mass fish mortality events became frequent. Analysis of the lake sediment revealed a shift towards dominance by anaerobic bacteria.",
        text: "The Biochemical Oxygen Demand (BOD) of this lake water would be:",
        options: ["Extremely Low", "Zero", "Significantly High", "Constant"],
        correctAnswer: 2, // C
        explanation: " polluted water with high organic matter load has a very high BOD, as microbes need more oxygen to degrade the waste."
    },
    // Case Study 2: Island Biogeography
    {
        id: 6,
        type: "Island Biogeography",
        context: "A newly formed volcanic island, initially devoid of life, was gradually colonised by wind-blown seeds, rafting insects, and migratory birds. Ecologists monitored the island for decades. They observed that species richness increased rapidly at first but eventually stabilised at a dynamic equilibrium.",
        text: "According to the Theory of Island Biogeography, the stabilisation of species number represents a balance between:",
        options: ["Natality & Mortality", "Immigration & Extinction rates", "Mutation & Genetic Drift", "Photosynthesis & Respiration"],
        correctAnswer: 1, // B
        explanation: "MacArthur and Wilson proposed that species richness equilibrium is reached when the rate of immigration of new species equals the rate of extinction of existing ones."
    },
    {
        id: 7,
        type: "Island Biogeography",
        context: "A newly formed volcanic island, initially devoid of life, was gradually colonised by wind-blown seeds, rafting insects, and migratory birds. Ecologists monitored the island for decades. They observed that species richness increased rapidly at first but eventually stabilised at a dynamic equilibrium.",
        text: "Based on this theory, species richness would be predicted to be HIGHEST on an island that is:",
        options: ["Small and Distant from mainland", "Large and Near the mainland", "Small and Near the mainland", "Large and Distant from mainland"],
        correctAnswer: 1, // B
        explanation: "Large islands support more species (lower extinction, more niches) and being near the mainland allows higher immigration rates."
    },
    {
        id: 8,
        type: "Island Biogeography",
        context: "A newly formed volcanic island, initially devoid of life, was gradually colonised by wind-blown seeds, rafting insects, and migratory birds. Ecologists monitored the island for decades. They observed that species richness increased rapidly at first but eventually stabilised at a dynamic equilibrium.",
        text: "This foundational ecological concept was proposed by:",
        options: ["Charles Darwin", "Charles Elton", "MacArthur & Wilson", "Eugene Odum"],
        correctAnswer: 2, // C
        explanation: "Robert MacArthur and E.O. Wilson proposed the Equilibrium Theory of Island Biogeography."
    },
    {
        id: 9,
        type: "Island Biogeography",
        context: "A newly formed volcanic island, initially devoid of life, was gradually colonised by wind-blown seeds, rafting insects, and migratory birds. Ecologists monitored the island for decades. They observed that species richness increased rapidly at first but eventually stabilised at a dynamic equilibrium.",
        text: "If a geological event reduced the island's size significantly, the extinction rate would likely:",
        options: ["Decrease", "Increase", "Remain constant", "Stop completely"],
        correctAnswer: 1, // B
        explanation: "Smaller areas support smaller populations, which are more vulnerable to stochastic events, thus increasing extinction rates."
    },
    {
        id: 10,
        type: "Island Biogeography",
        context: "A newly formed volcanic island, initially devoid of life, was gradually colonised by wind-blown seeds, rafting insects, and migratory birds. Ecologists monitored the island for decades. They observed that species richness increased rapidly at first but eventually stabilised at a dynamic equilibrium.",
        text: "The initial colonisation of the bare volcanic rock is a classic example of:",
        options: ["Secondary Succession", "Primary Succession", "Tertiary Succession", "Ecological Retrogression"],
        correctAnswer: 1, // B
        explanation: "Primary succession occurs on surfaces where no soil exists, such as bare volcanic rock."
    },
    // Case Study 3: Population Growth Models
    {
        id: 11,
        type: "Growth Models",
        context: "Ecologists tracked a deer population introduced into a protected forest reserve. Initially, with abundant resources and no immediate predators, the population exploded. However, as numbers rose, food became scarce and predator encounters increased, causing the growth rate to slow and eventually plateau.",
        text: "The initial rapid growth phase of the deer population best resembles which curve?",
        options: ["Logistic", "S-shaped", "J-shaped (Exponential)", "Linear"],
        correctAnswer: 2, // C
        explanation: "With unlimited resources initially, the population exhibits exponential growth (J-shaped curve) before resistance sets in."
    },
    {
        id: 12,
        type: "Growth Models",
        context: "Ecologists tracked a deer population introduced into a protected forest reserve. Initially, with abundant resources and no immediate predators, the population exploded. However, as numbers rose, food became scarce and predator encounters increased, causing the growth rate to slow and eventually plateau.",
        text: "The plateau phase where the population stabilizes represents the:",
        options: ["Intrinsic rate of increase (r)", "Carrying Capacity (K)", "Biotic Potential", "Gross Primary Productivity"],
        correctAnswer: 1, // B
        explanation: "Carrying Capacity (K) is the maximum population size the environment can sustain indefinitely."
    },
    {
        id: 13,
        type: "Growth Models",
        context: "Ecologists tracked a deer population introduced into a protected forest reserve. Initially, with abundant resources and no immediate predators, the population exploded. However, as numbers rose, food became scarce and predator encounters increased, causing the growth rate to slow and eventually plateau.",
        text: "The equation dN/dt = rN describes growth during which phase?",
        options: ["Lag phase", "Exponential/Log phase", "Deceleration phase", "Stationary phase"],
        correctAnswer: 1, // B
        explanation: "dN/dt = rN represents exponential growth, occurring when resources are unlimited (early phase)."
    },
    {
        id: 14,
        type: "Growth Models",
        context: "Ecologists tracked a deer population introduced into a protected forest reserve. Initially, with abundant resources and no immediate predators, the population exploded. However, as numbers rose, food became scarce and predator encounters increased, causing the growth rate to slow and eventually plateau.",
        text: "In the logistic growth equation dN/dt = rN((K-N)/K), the term ((K-N)/K) represents:",
        options: ["Biotic Potential", "Environmental Resistance", "Immigration Rate", "Mutation Pressure"],
        correctAnswer: 1, // B
        explanation: "This term represents the environmental resistance that slows growth as N approaches K."
    },
    {
        id: 15,
        type: "Growth Models",
        context: "Ecologists tracked a deer population introduced into a protected forest reserve. Initially, with abundant resources and no immediate predators, the population exploded. However, as numbers rose, food became scarce and predator encounters increased, causing the growth rate to slow and eventually plateau.",
        text: "If a new predator is introduced, significantly increasing predation pressure, the Carrying Capacity (K) for deer will effectively:",
        options: ["Increase", "Decrease", "Remain exactly same", "Double"],
        correctAnswer: 1, // B
        explanation: "Increased predation acts as an environmental resistance, effectively lowering the maximum population size (K) the environment supports."
    },
    // Case Study 4: Biomagnification
    {
        id: 16,
        type: "Biomagnification",
        context: "Farmers used a persistent pesticide (DDT) to control pests in agricultural fields. Runoff carried the chemical into a nearby wetland. Tests showed the pesticide concentration was 0.003 ppb in water, but found to be 25 ppm in the tissues of fish-eating birds inhabiting the wetland.",
        text: "The phenomenon describing the increasing concentration of the toxicant at successive trophic levels is:",
        options: ["Bioaccumulation", "Biomagnification", "Eutrophication", "Ecological Succession"],
        correctAnswer: 1, // B
        explanation: "Biomagnification is the increase in concentration of a toxic substance at successively higher trophic levels."
    },
    {
        id: 17,
        type: "Biomagnification",
        context: "Farmers used a persistent pesticide (DDT) to control pests in agricultural fields. Runoff carried the chemical into a nearby wetland. Tests showed the pesticide concentration was 0.003 ppb in water, but found to be 25 ppm in the tissues of fish-eating birds inhabiting the wetland.",
        text: "Which trophic level usually accumulates the highest concentration of such toxins?",
        options: ["Primary Producers (Phytoplankton)", "Primary Consumers (Zooplankton)", "Secondary Consumers (Small Fish)", "Top Carnivores (Birds)"],
        correctAnswer: 3, // D
        explanation: "Top carnivores are at the end of the food chain and accumulate the highest accumulated dose."
    },
    {
        id: 18,
        type: "Biomagnification",
        context: "Farmers used a persistent pesticide (DDT) to control pests in agricultural fields. Runoff carried the chemical into a nearby wetland. Tests showed the pesticide concentration was 0.003 ppb in water, but found to be 25 ppm in the tissues of fish-eating birds inhabiting the wetland.",
        text: "Chemicals prone to biomagnification typically possess which property?",
        options: ["Biodegradable & unstable", "Water soluble & excreted easily", "Non-biodegradable & lipid soluble", "Volatile & gaseous"],
        correctAnswer: 2, // C
        explanation: "They must be persistent (non-biodegradable) and fat-soluble (lipophilic) so they are stored in tissues rather than excreted."
    },
    {
        id: 19,
        type: "Biomagnification",
        context: "Farmers used a persistent pesticide (DDT) to control pests in agricultural fields. Runoff carried the chemical into a nearby wetland. Tests showed the pesticide concentration was 0.003 ppb in water, but found to be 25 ppm in the tissues of fish-eating birds inhabiting the wetland.",
        text: "A classic and historically significant example of such a pesticide is:",
        options: ["Urea", "DDT (Dichloro-diphenyl-trichloroethane)", "NPK Fertilizer", "Bt Toxin"],
        correctAnswer: 1, // B
        explanation: "DDT is the textbook example of biomagnification, leading to decline in bird populations."
    },
    {
        id: 20,
        type: "Biomagnification",
        context: "Farmers used a persistent pesticide (DDT) to control pests in agricultural fields. Runoff carried the chemical into a nearby wetland. Tests showed the pesticide concentration was 0.003 ppb in water, but found to be 25 ppm in the tissues of fish-eating birds inhabiting the wetland.",
        text: "The high concentration of DDT in birds specifically caused:",
        options: ["Increased reproductive fertility", "Thickening of eggshells", "Thinning of eggshells & premature breaking", "Enhanced immune response"],
        correctAnswer: 2, // C
        explanation: "DDT interferes with calcium metabolism in birds, causing eggshell thinning and reproductive failure."
    },
    // Case Study 5: Conservation
    {
        id: 21,
        type: "Conservation",
        context: "The Western Ghats of India is a region known for its exceptional biodiversity and high degree of endemism. However, it faces severe threats from habitat loss. To protect it, it has been designated as a 'Biodiversity Hotspot', and various conservation measures have been implemented.",
        text: "Which of the following is a strict criterion for declaring a region a Biodiversity Hotspot?",
        options: ["At least 1500 endemic vascular plant species", "Presence of 500 endemic animal species", "At least 1000 mammal species", "Presence of 200 bird species"],
        correctAnswer: 0, // A
        explanation: "Norman Myers defined hotspots as having at least 1500 vascular plants as endemics (>0.5% of world's total) and >70% habitat loss."
    },
    {
        id: 22,
        type: "Conservation",
        context: "The Western Ghats of India is a region known for its exceptional biodiversity and high degree of endemism. However, it faces severe threats from habitat loss. To protect it, it has been designated as a 'Biodiversity Hotspot', and various conservation measures have been implemented.",
        text: "Establishing a National Park in the Western Ghats is an example of which conservation strategy?",
        options: ["Ex-situ conservation", "In-situ conservation", "Gene Bank preservation", "Cryopreservation"],
        correctAnswer: 1, // B
        explanation: "In-situ (on-site) conservation preserves species in their natural habitat (e.g., National Parks, Sanctuaries)."
    },
    {
        id: 23,
        type: "Conservation",
        context: "The Western Ghats of India is a region known for its exceptional biodiversity and high degree of endemism. However, it faces severe threats from habitat loss. To protect it, it has been designated as a 'Biodiversity Hotspot', and various conservation measures have been implemented.",
        text: "Sacred Groves, protected by local communities due to religious beliefs, are a form of:",
        options: ["Ex-situ conservation", "In-situ conservation", "In-vitro fertilization", "Cryopreservation"],
        correctAnswer: 1, // B
        explanation: "Sacred groves protect patches of forest in their natural state, hence are in-situ conservation."
    },
    {
        id: 24,
        type: "Conservation",
        context: "The Western Ghats of India is a region known for its exceptional biodiversity and high degree of endemism. However, it faces severe threats from habitat loss. To protect it, it has been designated as a 'Biodiversity Hotspot', and various conservation measures have been implemented.",
        text: "Globally, species diversity generally follows a latitudinal gradient, increasing as we move:",
        options: ["From Equator towards Poles", "From Poles towards Equator", "From Plains to Mountain peaks", "From Forests to Deserts"],
        correctAnswer: 1, // B
        explanation: "Biodiversity is generally highest at the Equator (tropics) and decreases towards the Poles."
    },
    {
        id: 25,
        type: "Conservation",
        context: "The Western Ghats of India is a region known for its exceptional biodiversity and high degree of endemism. However, it faces severe threats from habitat loss. To protect it, it has been designated as a 'Biodiversity Hotspot', and various conservation measures have been implemented.",
        text: "For a wide variety of taxa, the Species-Area relationship on a logarithmic scale is:",
        options: ["A Linear straight line", "A Rectangular Hyperbola", "A Sigmoid Curve", "A Bell-shaped curve"],
        correctAnswer: 0, // A
        explanation: "On a logarithmic scale (log S = log C + Z log A), the relationship is a straight line."
    }
];

export default function EcologyCaseStudyPage() {
    return (
        <TestSeriesPlayer
            title="Ecology Case Study Set"
            description="New NEET Pattern • Concept Application. Master the art of solving case studies with this targeted ecology set."
            testSeriesId="ecology-case-study-series"
            questions={QUESTIONS}
            durationMins={45}
            totalMarks={100}
            subjects={["Lake Ecosystem", "Island Biogeography", "Growth Models", "Biomagnification", "Conservation"]}
        />
    );
}
