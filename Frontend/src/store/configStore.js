import { configureStore} from '@reduxjs/toolkit'
import adminSlice from './admin';
import currentUserSlice from './current-user';

const store = configureStore({
    reducer: {
        currentUser: currentUserSlice.reducer,
        admin: adminSlice.reducer
    }
})

export default store;