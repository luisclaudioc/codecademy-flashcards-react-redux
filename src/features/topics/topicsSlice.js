import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const topicId = action.payload.id;
            state.topics[topicId] = {
                ...action.payload,
                quizIds: []
            }
        },
        addQuizToTopic: (state, action) => {
            const topicId = action.payload.topicId;
            state.topics[topicId].quizIds.push(action.payload.id);
        }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions
export default topicsSlice.reducer;