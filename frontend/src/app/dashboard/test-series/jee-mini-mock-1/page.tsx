"use client";

import React from "react";
import TestSeriesPlayer, { Question } from "@/components/dashboard/TestSeriesPlayer";

const QUESTIONS: Question[] = [
    {
        id: 1,
        type: "math",
        format: "integer",
        text: "If x^2 - 5x + 6 = 0, then value of x1 + x2 is:",
        options: [""],
        correctAnswer: 0,
        correctInteger: 5,
        explanation: "For quadratic ax^2+bx+c=0, sum of roots = -b/a = 5.",
    },
    {
        id: 2,
        type: "physics",
        format: "integer",
        text: "A particle starts from rest and moves with constant acceleration 2 m/s^2 for 5 s. Final speed (m/s) is:",
        options: [""],
        correctAnswer: 0,
        correctInteger: 10,
        explanation: "v = u + at = 0 + 2*5 = 10 m/s.",
    },
    {
        id: 3,
        type: "chemistry",
        format: "integer",
        text: "Number of moles in 44 g of CO2 is:",
        options: [""],
        correctAnswer: 0,
        correctInteger: 1,
        explanation: "Molar mass of CO2 = 44 g/mol. 44 g corresponds to 1 mol.",
    },
    {
        id: 4,
        type: "math",
        format: "integer",
        text: "If log10(1000) = x, then x is:",
        options: [""],
        correctAnswer: 0,
        correctInteger: 3,
        explanation: "10^3 = 1000, so log10(1000)=3.",
    },
    {
        id: 5,
        type: "physics",
        format: "integer",
        text: "A body travels 20 m in 4 s with uniform speed. Speed (m/s) is:",
        options: [""],
        correctAnswer: 0,
        correctInteger: 5,
        explanation: "Speed = distance/time = 20/4 = 5 m/s.",
    },
];

export default function JeeMiniMock1Page() {
    return (
        <TestSeriesPlayer
            title="JEE Mini Mock (Integer) - Set 1"
            description="Official-style integer questions (mini set)."
            testSeriesId="jee_mini_mock_integer_set_1"
            questions={QUESTIONS}
            durationMins={10}
            totalMarks={QUESTIONS.length * 4}
            negativeMarking={1}
            positiveMarking={4}
            subjects={["physics", "chemistry", "math"]}
        />
    );
}
