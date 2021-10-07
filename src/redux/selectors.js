
export const usersSelector = (state) => state.user.users;
export const currentUserSelector = (state) => state.user.currentUser;
export const popupOpenedSelector = (state) => state.app.isPopupOpened;
export const popupMessageOpenedSelector = (state) => state.app.isInfoPopupOpened;
export const isTrackedSelector = (state) => state.user.tableFilter;