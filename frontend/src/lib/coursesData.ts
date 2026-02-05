
export interface Course {
    id: string;
    title: string;
    category: "School" | "Competitive" | "Govt Exams" | "Test Series" | "Study Material";
    subCategory: string;
    price: string;
    originalPrice: string;
    rating: number;
    students: string;
    image: string; // We will use gradients or placeholders if no images
    tags: string[];
    features: string[];
}

export const coursesData: Course[] = [
    // --- School / Boards ---
    {
        id: "s1",
        title: "Class 12 Board Booster (Science)",
        category: "School",
        subCategory: "Class 12",
        price: "₹1,999",
        originalPrice: "₹4,999",
        rating: 4.8,
        students: "15k+",
        image: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
        tags: ["board", "cbse", "physics", "chemistry", "maths", "biology"],
        features: ["Live Classes", "Notes", "PYQs"]
    },
    {
        id: "s2",
        title: "Class 10 Foundation (All Subjects)",
        category: "School",
        subCategory: "Class 10",
        price: "₹2,499",
        originalPrice: "₹5,999",
        rating: 4.9,
        students: "25k+",
        image: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
        tags: ["foundation", "cbse", "maths", "science", "english", "sst"],
        features: ["Interactive Classes", "Weekly Tests", "Mentorship"]
    },
    {
        id: "s3",
        title: "Class 9 Excellence Batch",
        category: "School",
        subCategory: "Class 9",
        price: "₹1,999",
        originalPrice: "₹4,500",
        rating: 4.7,
        students: "10k+",
        image: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
        tags: ["class 9", "cbse", "school"],
        features: ["Concept Clarity", "Doubt Solving", "Notes"]
    },

    // --- Competitive (JEE/NEET) ---
    {
        id: "c1",
        title: "Arjuna JEE 2026 (Class 11)",
        category: "Competitive",
        subCategory: "JEE",
        price: "₹4,500",
        originalPrice: "₹10,000",
        rating: 4.9,
        students: "50k+",
        image: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
        tags: ["jee", "mains", "advanced", "engineering"],
        features: ["Daily Practice", "All India Test Series", "Video Solutions"]
    },
    {
        id: "c2",
        title: "Lakshya NEET 2026 (Class 12)",
        category: "Competitive",
        subCategory: "NEET",
        price: "₹4,200",
        originalPrice: "₹9,500",
        rating: 4.8,
        students: "60k+",
        image: "linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)",
        tags: ["neet", "medical", "biology", "entrance"],
        features: ["NCERT Focused", "Top Faculties", "Doubt Engine"]
    },
    {
        id: "c3",
        title: "Prayas Dropper JEE 2026",
        category: "Competitive",
        subCategory: "JEE",
        price: "₹4,100",
        originalPrice: "₹9,000",
        rating: 4.9,
        students: "30k+",
        image: "linear-gradient(to top, #5f72bd 0%, #9b23ea 100%)",
        tags: ["dropper", "jee", "engineering"],
        features: ["Intensive Revision", "Mock Tests", "Strategy Sessions"]
    },

    // --- Govt Exams ---
    {
        id: "g1",
        title: "UPSC CSE 2026 Foundation",
        category: "Govt Exams",
        subCategory: "UPSC",
        price: "₹12,999",
        originalPrice: "₹25,000",
        rating: 4.9,
        students: "5k+",
        image: "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)", // lighter
        tags: ["upsc", "ias", "ips", "civil services"],
        features: ["Prelims + Mains", "Interview Guidance", "Current Affairs"]
    },
    {
        id: "g2",
        title: "SSC CGL Targeting Batch",
        category: "Govt Exams",
        subCategory: "SSC",
        price: "₹1,499",
        originalPrice: "₹3,999",
        rating: 4.6,
        students: "20k+",
        image: "linear-gradient(to top, #feada6 0%, #f5efef 100%)",
        tags: ["ssc", "cgl", "govt job", "inspector"],
        features: ["Short Tricks", "Speed Tests", "Previous Papers"]
    },
    {
        id: "g3",
        title: "Banking IBPS PO/Clerk",
        category: "Govt Exams",
        subCategory: "Banking",
        price: "₹1,999",
        originalPrice: "₹4,000",
        rating: 4.7,
        students: "12k+",
        image: "linear-gradient(to top, #e6b980 0%, #eacda3 100%)",
        tags: ["bank", "ibps", "sbi", "po"],
        features: ["Quant & Reasoning", "Banking Awareness", "Mocks"]
    },
    {
        id: "g4",
        title: "RRB NTPC & Group D",
        category: "Govt Exams",
        subCategory: "Railways",
        price: "₹999",
        originalPrice: "₹2,500",
        rating: 4.5,
        students: "40k+",
        image: "linear-gradient(to top, #96fbc4 0%, #f9f586 100%)",
        tags: ["railway", "rrb", "ntpc", "govt"],
        features: ["Live + Recorded", "Test Series", "PDF Notes"]
    },

    // --- Test Series & Papers ---
    {
        id: "t1",
        title: "JEE Mains All India Test Series",
        category: "Test Series",
        subCategory: "JEE",
        price: "₹999",
        originalPrice: "₹2,000",
        rating: 4.8,
        students: "22k+",
        image: "radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)",
        tags: ["test series", "jee", "mock"],
        features: ["30 Full Tests", "Detailed Analysis", "Rank Predictor"]
    },
    {
        id: "t2",
        title: "NEET Rank Booster Series",
        category: "Test Series",
        subCategory: "NEET",
        price: "₹899",
        originalPrice: "₹1,800",
        rating: 4.9,
        students: "18k+",
        image: "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)",
        tags: ["neet", "test", "medical"],
        features: ["NCERT Based", "Video Solutions", "Error Analysis"]
    },
    {
        id: "p1",
        title: "10 Years Solved Papers (JEE)",
        category: "Study Material",
        subCategory: "PYQ",
        price: "₹299",
        originalPrice: "₹999",
        rating: 4.9,
        students: "100k+",
        image: "linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)",
        tags: ["pyq", "book", "pdf"],
        features: ["Detailed Solutions", "Topic-wise", "Downloadable"]
    },
    {
        id: "p2",
        title: "State PCS General Studies Notes",
        category: "Study Material",
        subCategory: "State Exams",
        price: "₹499",
        originalPrice: "₹1,200",
        rating: 4.6,
        students: "2k+",
        image: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
        tags: ["notes", "pdf", "history", "geography"],
        features: ["Handwritten", "Concise", "Updated"]
    }
];
