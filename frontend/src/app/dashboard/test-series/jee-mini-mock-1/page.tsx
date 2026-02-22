"use client";

import React from "react";
import TestSeriesPlayer, { Question } from "@/components/dashboard/TestSeriesPlayer";

const makeMcq = (id: number, type: "physics" | "chemistry" | "math"): Question => {
    const base = id * 3;
    const correct = (base % 4);
    const a = id + 2;
    const b = (id % 9) + 3;
    const sum = a + b;

    const text = type === "math"
        ? `If a = ${a} and b = ${b}, then value of a + b is:`
        : type === "physics"
            ? `A body covers distance ${a * 10} m in ${b} s with uniform speed. Speed (m/s) is:`
            : `If atomic number of an element is ${a}, number of electrons in neutral atom is:`;

    const correctValue = type === "math" ? sum
        : type === "physics" ? (a * 10) / b
            : a;

    const wrong1 = correctValue + 1;
    const wrong2 = correctValue + 2;
    const wrong3 = correctValue - 1;

    const optionsRaw = [correctValue, wrong1, wrong2, wrong3].map((v) => (Number.isInteger(v) ? String(v) : v.toFixed(2)));
    const options = [optionsRaw[0], optionsRaw[1], optionsRaw[2], optionsRaw[3]];

    const permuted = [
        options[correct],
        options[(correct + 1) % 4],
        options[(correct + 2) % 4],
        options[(correct + 3) % 4],
    ];
    const correctAnswer = 0;

    const explanation = type === "math"
        ? `a + b = ${a} + ${b} = ${sum}.`
        : type === "physics"
            ? `Speed = distance/time = ${a * 10}/${b} = ${((a * 10) / b).toFixed(2)} m/s.`
            : `In a neutral atom, electrons = atomic number = ${a}.`;

    return {
        id,
        type,
        format: "mcq",
        text,
        options: permuted,
        correctAnswer,
        explanation,
    };
};

const QUESTIONS: Question[] = [
    ...Array.from({ length: 25 }, (_, i) => makeMcq(i + 1, "physics")),
    ...Array.from({ length: 25 }, (_, i) => makeMcq(i + 26, "chemistry")),
    ...Array.from({ length: 25 }, (_, i) => makeMcq(i + 51, "math")),
];

export default function JeeMiniMock1Page() {
    return (
        <TestSeriesPlayer
            title="JEE Main Full Mock (MCQ)"
            description="JEE Main pattern mock paper (MCQ only)."
            testSeriesId="jee_main_full_mock_mcq_1"
            questions={QUESTIONS}
            durationMins={180}
            totalMarks={QUESTIONS.length * 4}
            negativeMarking={1}
            positiveMarking={4}
            subjects={["physics", "chemistry", "math"]}
        />
    );
}
