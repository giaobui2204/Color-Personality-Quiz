import { defineStore } from 'pinia';

export const useQuizScore = defineStore("color-personality-quiz", {
    state: () => { return {
        colorsAnswerKey:{
            orange: ["A", "H", "K", "N", "F"],
            blue: ["C", "F", "J", "O", "G"],
            gold: ["B", "G", "I", "M", "T"],
            green: ["D", "E", "L", "P","Q"]            
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
            orange: {
                shortDesc: "Persuaders & Idea Promoters",
                adjectives: "witty, spontaneous, impulsive, impactful, generous, optimistic, bold & charming ",
                characteristics: ["Lively","Bold & Impulsive", "Expects Freedom", "Great Verbal Skills", "Likes People", "Likes to be in Action", "Makes Quick Decisions", "Positive and Optimistic", "Wants to be Liked"],
                sentence: "I value skill, resourcefulness, and courage. I need fun, variety, simulation, and excitement."
            },
            blue: {
                shortDesc: "Organized and Idea Doers",
                adjectives: "warm, communicative, compassionate, idealistic, spiritual & sincere",
                characteristics: ["Ask Questions","Caring", "Easy Going", "Expects Harmony", "Hates Conflict", "Knows Everyone", "Likeable", "Loves to Check on People", "Needs Appreciation", "Open"],
                sentence: "I look for meaninga nd significance in life. I need to contribute, encourage, and care."
            },
            green: {
                shortDesc: "Controllers & Idea Generators",
                adjectives: "analytical, conceptual, attentive, logical, perfectionistic & abstract",
                characteristics: ["Decisive","Demananding", "Expects Efficiency", "Expects Results", "Has Strong Opinions", "Likes Conflict", "Needs to be in Charge", "Separates Facts from Feelings", "Wants Action/Change"],
                sentence: "I value intelligence, insight, fairness, and justice. I need explanations and answers."
            },
            gold: {
                shortDesc: "Analyzers & Idea Perfectors",
                adjectives: "loyal, dependable, prepared, thorough, sensible, punctual & organized",
                characteristics: ["Asks Informative Questions","Doesn't Like Repetition", "Doesn't Like Small Talk", "Fact-Oriented", "High Standards", "Keeps to Schedules", "Private Person", "Structured", "Works Alone"],
                sentence: "I have a strong sense of what is right and wrong in life. I need to follow rules and respect authority."
            },
        },
        userAnswer: {
            A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0,
            K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0, R: 0, S: 0, T: 0
        },
        userColorScore: {
            orange: 0,
            blue: 0,
            green: 0,
            gold: 0,
        },
        userColorWinner: null,
    }
    }, 
    getters: {
        getColorsAnswerKey(state) {
            return state.colorsAnswerKey;
        },
        getQuizRows(state) {
            return state.quizRow;
        },
        getColorMeaning(state) {
            return state.colorMeaning;
        },
        getAllUserAnswer(state) {
            return state.userAnswer;
        },
        getUserAnswer(state) {
            return state.userAnswer;
        },
        getUserColorScore(state) {
            return state.userColorScore;
        },
        getUserColorWinner(state) {
            return state.userColorWinner;
        },
        getQuizRowById: (state) => (rowNum) => {
            return state.quizRow[rowNum];
        },
        getUserAnswerById: (state) => (id) => {
            return state.userAnswer[id];
        },
        getColorMeaningById: (state) => (color) => {
            return state.colorMeaning[color];
        },
        getUserColorScoreById:(state) => (colorId) =>{
            return state.userColorScore[colorId];
        }
    },
    actions: {
        updateAnswer(id, value) {
            this.userAnswer[id] = value;
        },
        calculateColorScore(){
            for (var color in this.colorsAnswerKey){
                for (var id of this.colorsAnswerKey[color]){
                    if (this.userAnswer[id] != 0){
                        this.userColorScore[color] += this.userAnswer[id];
                    }
                }
            }
        },
        determineColorResult(){
            let maxValue = -Infinity;
            let result = [];

            for (const key in this.userColorScore) {
                if (this.userColorScore[key] > maxValue) {
                maxValue = this.userColorScore[key];
                result = [key];
                } else if (this.userColorScore[key] === maxValue) {
                result.push(key);
                }
            }
            this.userColorWinner = result;
        },
        clearResults(){
            this.userAnswer = {
                A: 0,
                B: 0,
                C: 0,
                D: 0,
                E: 0,
                F: 0,
                G: 0,
                H: 0,
                I: 0,
                J: 0,
                K: 0,
                L: 0,
                M: 0,
                N: 0,
                O: 0,
                P: 0,
                Q: 0,
                R: 0,
                S: 0,
                T: 0
            },
            this.userColorScore = {
                orange: 0,
                blue: 0,
                green: 0,
                gold: 0,
            },
            this.userColorWinner = null
        }
    }



})