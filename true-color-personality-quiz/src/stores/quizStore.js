import { defineStore } from "pinia";

export const useQuizStore = defineStore("color-personality-quiz", {
  state: () => ({
    colorsAnswerKey: {
      orange: ["A", "H", "K", "N", "F"],
      blue: ["C", "F", "J", "O", "G"],
      gold: ["B", "G", "I", "M", "T"],
      green: ["D", "E", "L", "P", "Q"]
    },

    quizRows: {
      row1: {
        A: ["Active", "Variety", "Sport", "Opportunities", "Spontaneous", "Flexible"],
        B: ["Organized", "Planned", "Neat", "Parental", "Traditional", "Responsible"],
        C: ["Warm", "Helpful", "Friends", "Authentic", "Harmonious", "Compassionate"],
        D: ["Learning", "Science", "Quiet", "Versatile", "Inventive", "Competent"]
      },
      row2: {
        E: ["Curious", "Ideas", "Questions", "Conceptual", "Knowledge", "Problem Solver"],
        F: ["Caring", "People Oriented", "Feelings", "Unique", "Empathetic", "Communicative"],
        G: ["Orderly", "On-time", "Honest", "Stable", "Sensible", "Dependable"],
        H: ["Action", "Challenges", "Competitive", "Impetuous", "Impactful"]
      },
      row3: {
        I: ["Helpful", "Trustworthy", "Dependable", "Loyal", "Conservative", "Organized"],
        J: ["Kind", "Understanding", "Giving", "Devoted", "Warm", "Poetic"],
        K: ["Playful", "Quick", "Adventurous", "Confrontive", "Open Minded", "Independent"],
        L: ["Independent", "Exploring", "Theoretical", "Why Question", "Ingenious"]
      },
      row4: {
        M: ["Follow", "Rules", "Useful", "Save Money", "Concerned", "Procedure", "Cooperative"],
        N: ["Active", "Free", "Winning", "Daring", "Impulsive", "Risk Taker"],
        O: ["Sharing", "Getting Along", "Feelings", "Tender", "Inspirational", "Dramatic"],
        P: ["Thinking", "Solving Problems", "Perfectionist", "Determined", "Complex", "Composed"]
      },
      row5: {
        Q: ["Puzzles", "Seeking Info", "Making Sense", "Philosophical", "Principled", "Rational"],
        R: ["Social Causes", "Easy Going", "Happy Endings", "Approachable", "Affectionate", "Sympathetic"],
        S: ["Exciting", "Lively", "Hands On", "Courageous", "Skillful", "On Stage"],
        T: ["Pride", "Tradition", "Do Things Right", "Orderly", "Conventional", "Careful"]
      }
    },

    colorMeaning: {
      blue: {
        shortDesc: "Organized & Idea Doers",
        adjectives: "warm, communicative, compassionate, idealistic, spiritual, sincere",
        characteristics: [
          "Ask Questions", "Caring", "Easy Going", "Express Harmony",
          "Has Strong Beliefs", "Knows Everyone", "Likeable",
          "Moves to Cheer on People", "Needs Appreciation", "Open"
        ],
        sentence: "I look for meaning and significance in life. I need to contribute, encourage, and care."
      },
      green: {
        shortDesc: "Controllers & Idea Generators",
        adjectives: "analytical, conceptual, attentive, logical, perfectionistic, abstract",
        characteristics: [
          "Decisive", "Demanding", "Expects Efficiency", "Expects Results",
          "Has Strong Opinions", "Likes to be in Charge", "Separate Facts from Feelings",
          "Wants Action/Change"
        ],
        sentence: "I value intelligence, insight, fairness, and justice. I need explanations and answers."
      },
      gold: {
        shortDesc: "Analyzers & Idea Perfectors",
        adjectives: "loyal, dependable, prepared, thorough, sensible, punctual, organized",
        characteristics: [
          "Asks Informative Questions", "Doesn't Like Repetition", "Doesn't Like Small Talk",
          "Fact-Oriented", "High Standards", "Keeps to Schedules",
          "Private", "Respect Rules", "Wants Advice"
        ],
        sentence: "I have a strong sense of what is right and wrong in life. I need to follow rules and respect authority."
      },
      orange: {
        shortDesc: "Persuaders & Idea Promoters",
        adjectives: "adventurous, impulsive, innovative, impactful, generous, outgoing, bold, charming",
        characteristics: [
          "Bold & Impulsive", "Expects Flexibility", "Expects New Skills",
          "Likes People", "Likes to Be in Action", "Make Quick Decisions",
          "Positive & Optimistic", "Wants to Lead"
        ],
        sentence: "I value skill, resourcefulness, and courage. I need fun, variety, stimulation, and excitement."
      }
    },

    userAnswer: {
      A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0,
      I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0,
      Q: 0, R: 0, S: 0, T: 0
    },

    userColorScore: {
      orange: 0,
      blue: 0,
      gold: 0,
      green: 0
    },

    userColorWinner: null
  }),

  getters: {
    getQuizRowById: (state) => (rowNum) => state.quizRows[`row${rowNum}`],
    getUserAnswerById: (state) => (id) => state.userAnswer[id],
    getColorMeaningByColor: (state) => (color) => state.colorMeaning[color],
    getUserColorScoreById: (state) => (colorId) => state.userColorScore[colorId], 
    getAllUserAnswer: (state) => state.userAnswer,
  },

  actions: {
    updateAnswer(id, value) {
      this.userAnswer[id] = value;
    },

    calculateColorScore() {
      Object.keys(this.colorsAnswerKey).forEach((color) => {
        let score = 0;
        this.colorsAnswerKey[color].forEach((letter) => {
          score += this.userAnswer[letter];
        });
        this.userColorScore[color] = score;
      });
    },

    determineColorResult() {
      const maxScore = Math.max(...Object.values(this.userColorScore));
      const winningColors = Object.keys(this.userColorScore).filter(
        (color) => this.userColorScore[color] === maxScore
      );
      this.userColorWinner = winningColors.length === 1 ? winningColors[0] : winningColors;
    },

    clearResults() {
      Object.keys(this.userAnswer).forEach((key) => {
        this.userAnswer[key] = 0;
      });
      Object.keys(this.userColorScore).forEach((key) => {
        this.userColorScore[key] = 0;
      });
      this.userColorWinner = null;
    }
  }
});
