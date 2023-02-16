import { configureStore} from '@reduxjs/toolkit'
import currentUserSlice from './current-user';

const store = configureStore({
    reducer: {
        currentUser: currentUserSlice.reducer
    }
})

export default store;