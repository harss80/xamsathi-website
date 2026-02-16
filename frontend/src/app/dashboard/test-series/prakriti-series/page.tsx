"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
    ArrowLeft, Clock, AlertCircle, CheckCircle2, XCircle,
    HelpCircle, ChevronRight, ChevronLeft, Flag, Award,
    BarChart2, Timer, RotateCcw, BookOpen, Brain, Zap, GraduationCap
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import TestSeriesPlayer, { Question, QuestionType } from "@/components/dashboard/TestSeriesPlayer";

// --- Prakriti Series Questions ---

// Q1-Q10 Physics
const PHYSICS_QUESTIONS: Question[] = [
    {
        id: 1,
        type: "physics",
        text: "If P = Work / Pressure. Dimensional formula of P is:",
        options: ["L³", "ML²T⁻²", "ML⁻¹T⁻²", "M⁰L²T⁰"],
        correctAnswer: 0, // A
        explanation: "Dimensions of Work = [ML²T⁻²]. Dimensions of Pressure = [ML⁻¹T⁻²]. P = Work/Pressure = [ML²T⁻²] / [ML⁻¹T⁻²] = [L³]."
    },
    {
        id: 2,
        type: "physics",
        text: "The equation v = at + bt². Dimensions of b are:",
        options: ["LT⁻²", "LT⁻³", "T⁻²", "L"],
        correctAnswer: 1, // B
        explanation: "By principle of homogeneity, dimensions of each term must be same. [v] = [bt²] => [LT⁻¹] = [b][T²] => [b] = [LT⁻³]."
    },
    {
        id: 3,
        type: "physics",
        text: "If force varies as F = kx^(3/2). Dimensions of k are:",
        options: ["ML^(1/2)T⁻²", "ML^(−1/2)T⁻²", "ML²T⁻²", "ML^(3/2)T⁻²"],
        correctAnswer: 1, // B
        explanation: "k = F / x^(3/2) = [MLT⁻²] / [L^(3/2)] = [ML^(1-1.5)T⁻²] = [ML⁻¹/²T⁻²]."
    },
    {
        id: 4,
        type: "physics",
        text: "Maximum percentage error in A²B³. If error in A = 2%, B = 1%.",
        options: ["7%", "5%", "4%", "8%"],
        correctAnswer: 0, // A
        explanation: "% Error = 2(% Error in A) + 3(% Error in B) = 2(2) + 3(1) = 4 + 3 = 7%."
    },
    {
        id: 5,
        type: "physics",
        text: "A particle starts from rest. Acceleration = 5 m/s² for 4 s. Final velocity:",
        options: ["10", "15", "20", "25"],
        correctAnswer: 2, // C
        explanation: "v = u + at = 0 + 5(4) = 20 m/s."
    },
    {
        id: 6,
        type: "physics",
        text: "Position: x = t³ − 6t² + 9t. Number of times velocity becomes zero:",
        options: ["1", "2", "3", "0"],
        correctAnswer: 1, // B
        explanation: "v = dx/dt = 3t² - 12t + 9. For v=0, 3(t²-4t+3)=0 => (t-3)(t-1)=0. Velocity becomes zero at t=1s and t=3s (twice)."
    },
    {
        id: 7,
        type: "physics",
        text: "Velocity-time graph is triangular with base 6 s and height 12 m/s. Displacement:",
        options: ["36", "24", "18", "72"],
        correctAnswer: 0, // A
        explanation: "Displacement = Area under v-t graph = 1/2 * base * height = 1/2 * 6 * 12 = 36 m."
    },
    {
        id: 8,
        type: "physics",
        text: "A body thrown upward at 30 m/s. Time to reach maximum height (g = 10):",
        options: ["2 s", "3 s", "4 s", "5 s"],
        correctAnswer: 1, // B
        explanation: "At max height v=0. v = u - gt => 0 = 30 - 10t => t = 3s."
    },
    {
        id: 10,
        type: "physics",
        text: "Area under acceleration-time graph represents:",
        options: ["Displacement", "Velocity", "Change in velocity", "Force"],
        correctAnswer: 2, // C
        explanation: "Area under a-t graph = ∫a dt = ∫(dv/dt) dt = ∫dv = Change in velocity."
    }
];

// Q11-Q18 Chemistry
const CHEMISTRY_QUESTIONS: Question[] = [
    {
        id: 11,
        type: "chemistry",
        text: "1 mole of electrons carries charge:",
        options: ["96500 C", "1 C", "6.023×10²³ C", "10 C"],
        correctAnswer: 0, // A
        explanation: "Charge of 1 mole electrons = 1 Faraday ≈ 96500 Coulombs."
    },
    {
        id: 12,
        type: "chemistry",
        text: "Number of moles in 44 g CO₂:",
        options: ["1", "2", "0.5", "44"],
        correctAnswer: 0, // A
        explanation: "Molar mass of CO₂ = 12 + 2(16) = 44 g/mol. Moles = Given Mass / Molar Mass = 44/44 = 1."
    },
    {
        id: 13,
        type: "chemistry",
        text: "Empirical formula of compound with: C = 40%, H = 6.67%, O = 53.33%",
        options: ["CH₂O", "C₂H₄O₂", "C₆H₁₂O₆", "CHO"],
        correctAnswer: 0, // A
        explanation: "C: 40/12=3.33, H: 6.67/1=6.67, O: 53.33/16=3.33. Simple ratio 1:2:1. Formula CH₂O."
    },
    {
        id: 14,
        type: "chemistry",
        text: "Molecular mass = 180, empirical formula mass = 30. Molecular formula is:",
        options: ["3 × empirical", "6 × empirical", "2 × empirical", "4 × empirical"],
        correctAnswer: 1, // B
        explanation: "n = Molecular Mass / Empirical Mass = 180/30 = 6. Molecular Formula = 6 × Empirical Formula."
    },
    {
        id: 15,
        type: "chemistry",
        text: "Significant figures in 0.004560:",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1, // B
        explanation: "Leading zeros are not significant. Trailing zero after decimal is significant. Digits: 4, 5, 6, 0. Total 4."
    },
    {
        id: 16,
        type: "chemistry",
        text: "2A + 3B → C. If 4 moles A and 3 moles B react, limiting reagent:",
        options: ["A", "B", "Both", "None"],
        correctAnswer: 1, // B
        explanation: "Ratio required A:B = 2:3. Given A=4, B=3. For 4A we need 6B. We have only 3B. So B is limiting."
    },
    {
        id: 17,
        type: "chemistry",
        text: "Percentage composition is based on:",
        options: ["Mass ratio", "Mole ratio", "Volume ratio", "Atomic number"],
        correctAnswer: 0, // A
        explanation: "Percentage composition expresses the mass of each element as a percentage of the total mass of the compound."
    },
    {
        id: 18,
        type: "chemistry",
        text: "Avogadro number represents:",
        options: ["Mass of 1 mole", "Volume of gas", "Number of entities in 1 mole", "Charge on electron"],
        correctAnswer: 2, // C
        explanation: "Avogadro's number (6.022 × 10²³) is the number of atoms, molecules, or ions in one mole of a substance."
    }
];

// Q19-Q25 Botany
const BOTANY_QUESTIONS: Question[] = [
    {
        id: 19,
        type: "botany",
        text: "Fluid mosaic model proposed by:",
        options: ["Watson & Crick", "Singer & Nicolson", "Schleiden & Schwann", "Meselson & Stahl"],
        correctAnswer: 1, // B
        explanation: "The Fluid Mosaic Model of cell membrane structure was proposed by Singer and Nicolson in 1972."
    },
    {
        id: 20,
        type: "botany",
        text: "Cell wall of plants made of:",
        options: ["Protein", "Lipid", "Cellulose", "Glycogen"],
        correctAnswer: 2, // C
        explanation: "Plant cell walls are primarily composed of cellulose, a polysaccharide."
    },
    {
        id: 21,
        type: "botany",
        text: "Powerhouse of cell:",
        options: ["Golgi", "Lysosome", "Mitochondria", "Ribosome"],
        correctAnswer: 2, // C
        explanation: "Mitochondria are called the powerhouse of the cell because they generate most of the cell's supply of ATP."
    },
    {
        id: 22,
        type: "botany",
        text: "Rough ER differs from Smooth ER due to:",
        options: ["Size", "Ribosomes", "Shape", "Enzymes"],
        correctAnswer: 1, // B
        explanation: "Rough Endoplasmic Reticulum (RER) has ribosomes attached to its surface, giving it a 'rough' appearance."
    },
    {
        id: 23,
        type: "botany",
        text: "Osmosis is movement of:",
        options: ["Solute", "Solvernt", "Both", "Ions"],
        correctAnswer: 1, // B
        explanation: "Osmosis is the movement of solvent molecules through a semi-permeable membrane from a region of lower solute concentration to higher solute concentration."
    },
    {
        id: 24,
        type: "botany",
        text: "Plasmolysis occurs in:",
        options: ["Hypotonic solution", "Hypertonic solution", "Isotonic", "Distilled water"],
        correctAnswer: 1, // B
        explanation: "Plasmolysis (shrinkage of protoplast) occurs when a plant cell is placed in a hypertonic solution."
    },
    {
        id: 25,
        type: "botany",
        text: "Protein synthesis occurs in:",
        options: ["Nucleus", "Ribosome", "Golgi", "Lysosome"],
        correctAnswer: 1, // B
        explanation: "Ribosomes are the sites of protein synthesis (translation) in the cell."
    }
];

// Q26-Q35 Zoology
const ZOOLOGY_QUESTIONS: Question[] = [
    {
        id: 26,
        type: "zoology",
        text: "Primary structure of protein is stabilized by:",
        options: ["Hydrogen bonds", "Peptide bonds", "Disulfide bonds", "Ionic bonds"],
        correctAnswer: 1, // B
        explanation: "The primary structure consists of the linear sequence of amino acids held together by peptide bonds."
    },
    {
        id: 27,
        type: "zoology",
        text: "Secondary structure stabilized by:",
        options: ["Peptide", "Hydrogen", "Ionic", "Phosphodiester"],
        correctAnswer: 1, // B
        explanation: "Secondary structures like alpha-helices and beta-sheets are stabilized by hydrogen bonds between the backbone atoms."
    },
    {
        id: 28,
        type: "zoology",
        text: "Monomer of carbohydrate:",
        options: ["Amino acid", "Nucleotide", "Monosaccharide", "Fatty acid"],
        correctAnswer: 2, // C
        explanation: "Monosaccharides (simple sugars) are the building blocks (monomers) of carbohydrates."
    },
    {
        id: 29,
        type: "zoology",
        text: "Glycogen stored in:",
        options: ["Plant cell", "Liver", "Mitochondria", "Nucleus"],
        correctAnswer: 1, // B
        explanation: "Glycogen is the primary storage form of glucose in animals, stored mainly in the liver and skeletal muscles."
    },
    {
        id: 30,
        type: "zoology",
        text: "Intercalated discs found in:",
        options: ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Nervous tissue"],
        correctAnswer: 2, // C
        explanation: "Intercalated discs are unique structural formations found between the myocardial cells of the heart (Cardiac muscle)."
    },
    {
        id: 31,
        type: "zoology",
        text: "Unit of nervous tissue:",
        options: ["Nephron", "Neuron", "Myofibril", "Axon"],
        correctAnswer: 1, // B
        explanation: "The neuron is the fundamental structural and functional unit of the nervous system."
    },
    {
        id: 32,
        type: "zoology",
        text: "Collagen is found in:",
        options: ["Blood", "Connective tissue", "Nervous tissue", "Muscle"],
        correctAnswer: 1, // B
        explanation: "Collagen is the main structural protein in the extracellular matrix of various connective tissues in the body."
    },
    {
        id: 33,
        type: "zoology",
        text: "DNA monomer:",
        options: ["Amino acid", "Fatty acid", "Nucleotide", "Monosaccharide"],
        correctAnswer: 2, // C
        explanation: "DNA is a polymer made up of repeating units called nucleotides."
    },
    {
        id: 34,
        type: "zoology",
        text: "Enzyme specificity depends on:",
        options: ["pH", "Temperature", "Active site structure", "Substrate mass"],
        correctAnswer: 2, // C
        explanation: "The specificity of an enzyme corresponds to the unique structure of its active site, which fits only specific substrates."
    },
    {
        id: 35,
        type: "zoology",
        text: "Lipids are:",
        options: ["Hydrophilic", "Hydrophobic", "Polar", "Ionic"],
        correctAnswer: 1, // B
        explanation: "Lipids are non-polar molecules and are typically hydrophobic (water-insoluble)."
    }
];

// Q36-Q40 Mixed Harder Questions
const MIXED_QUESTIONS: Question[] = [
    {
        id: 36,
        type: "physics",
        text: "If velocity becomes zero twice, motion is:",
        options: ["Uniform", "Projectile", "Oscillatory", "Circular"],
        correctAnswer: 2, // C
        explanation: "In oscillatory motion (like a pendulum or spring), velocity becomes zero at the two extreme positions in every cycle."
    },
    {
        id: 37,
        type: "chemistry",
        text: "If empirical formula = CH₂O, molecular mass = 180. Molecular formula:",
        options: ["C₂H₄O₂", "C₃H₆O₃", "C₆H₁₂O₆", "CH₂O"],
        correctAnswer: 2, // C
        explanation: "Empirical mass = 12+2+16 = 30. n = 180/30 = 6. Molecular formula = (CH₂O)₆ = C₆H₁₂O₆."
    },
    {
        id: 38,
        type: "physics",
        text: "Acceleration at highest point in vertical motion:",
        options: ["0", "g upward", "g downward", "Infinite"],
        correctAnswer: 2, // C
        explanation: "At the highest point, velocity is zero, but the body is still under the influence of gravity, so acceleration is g downwards."
    },
    {
        id: 39,
        type: "botany",
        text: "Fluidity of membrane due to:",
        options: ["Proteins", "Phospholipid bilayer", "Carbohydrates", "DNA"],
        correctAnswer: 1, // B
        explanation: "The fluidity of the cell membrane is primarily due to the lateral movement of lipids within the phospholipid bilayer."
    },
    {
        id: 40,
        type: "chemistry",
        text: "1 mole of any gas at STP occupies:",
        options: ["11.2 L", "22.4 L", "44.8 L", "1 L"],
        correctAnswer: 1, // B
        explanation: "At Standard Temperature and Pressure (STP), the molar volume of any ideal gas is 22.4 liters."
    }
];

// Combine all questions
const QUESTIONS: Question[] = [
    ...PHYSICS_QUESTIONS,
    ...CHEMISTRY_QUESTIONS,
    ...BOTANY_QUESTIONS,
    ...ZOOLOGY_QUESTIONS,
    ...MIXED_QUESTIONS
];

export default function PrakritiSeriesPage() {
    return (
        <TestSeriesPlayer
            title="Prakriti Series"
            description="A specialized test series designed to test your core understanding of natural sciences. Master the fundamentals with this comprehensive 40-question mock."
            testSeriesId="prakriti-series"
            questions={QUESTIONS}
            durationMins={45}
            totalMarks={160}
            subjects={["Physics", "Chemistry", "Botany", "Zoology"]}
        />
    );
}
