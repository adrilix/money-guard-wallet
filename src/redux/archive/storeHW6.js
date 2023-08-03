// import { phonebookReducer } from "./phonebookReducer";
// import { configureStore } from "@reduxjs/toolkit";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const phonebookPersistConfig = {
//   key: 'phonebook',
//   storage,
//   whitelist: ['contacts']
// }

// export const store = configureStore({
//   reducer: {
//     phonebook: persistReducer(phonebookPersistConfig, phonebookReducer),
// },

// middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);