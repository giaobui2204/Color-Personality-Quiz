import { defineStore } from `pinia`;

export const useQuizScore = defineStore("color-personality-quiz", {
    state: () => { return {
        colorsAnwerKey:{
            orange: ["A", "H", "K", "N", "F"],
            blue: ["C", "F", "J", "O", "G"],
            gold: ["B", "G", "I", "M", "T"],
            green: ["D", "E", "L", "P", "Q"]            
        },
        
        quizRow:{ 
            row1: { A: ["Active", "Variety", "Sport", "Opportunities", "Spontaneous", "Flexible"], 
            B: ["Organized", "Planned", "Neat", "Parental", "Traditional", "Responsible"],
            C: ["Warm", "Helpful", "Friends", "Authentic", "Harmonious", "Compassionate"],
            D: ["Learning", "Science", "Quite", "Versatile", "Inventive", "Competent"]},
            
            row2: { E: ["Curious", "Ideas", "Questions", "Conceptual", "Knowledge", "Problem Solver"], 
            F: ["Caring", "People Oriented", "Feelings", "Unique", "Empathetic", "Communicative"],
            G: ["Orderly", "On-time", "Honest", "Stable", "Sensible", "Dependable"],
            H: ["Action", "Challenges", "Competitive", "Impetuous", "Impactful"]},

            row3: { I: ["Helpful", "Trustworthy", "Dependable", "Loyal", "Coservative", "Organized"], 
            J: ["Kind", "Understading", "Giving", "Devoted", "Warm", "Poetic"],
            K: ["Playful", "Quick", "Adventurous", "Confrontive", "Open Minded", "Independent"],
            L: ["Independent", "Exploring", "Theoretical", "Why Question", "Ingenious"]},

            row4: { M: ["Follow", "Rules", "Usefull", "Save Money", "Concerned", "Procedure", "Cooperative"], 
            N: ["Active", "Free", "Winning", "Daring", "Impulsive", "Risk Taker"],
            O: ["Sharing", "Getting Along", "Feelings", "Tender", "Inspirational", "Dramatic"],
            P: ["Thinking", "Solving Problems", "Perfectionist", "Determined", "Complex", "Composed"]},

            row5: { Q: ["Puzzles", "Seeking Info", "Making Sense", "Philosophical", "Principled", "Rational"], 
            R: ["Social Causes", "Easy Going", "Happy Endings", "Approachable", "Affectionate", "Sympathetic"],
            S: ["Exciting", "Lively", "Hands On", "Courageous", "Skillful", "On Stage"],
            T: ["Pride", "Tradition", "Do Things Right", "Orderly", "Orderly", "Conventional", "Careful"]}
        },
        colorMeaning: {

        },
    }
});