<template>
    <div class="quiz-box">
        <h1>{{ cellID }}</h1>
        <input 
            type="number" 
            v-model="numberInput"
            min="1"
            max="4"
        />
        <slot name="word"></slot>
    </div>
</template>

<script>
import { useQuizScore } from '@/stores/quizStore';
import { mapState, mapActions } from 'pinia';

export default{
    cellID: null,
    computed: {
        ...mapState(useQuizScore, ['getUserAnswerById']),
        numberInput: {
            get() {
                return this.getUserAnswerById(cellID);
            },
            set(newVal){
                this.updateAnswer(cellID, newVal);
            }
        }
    },
    methods: {
        ...mapActions(useQuizScore, ['updateAnswer'])
    }
}
</script>