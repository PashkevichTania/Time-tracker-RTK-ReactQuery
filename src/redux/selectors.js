export const usersSelector = (state) => state.user.users;
export const currentUserSelector = (state) => state.user.currentUser;
export const isTrackedSelector = (state) => state.user.tableFilter;
export const popupOpenedSelector = (state) => state.popup.isPopupOpened;
export const popupMessageOpenedSelector = (state) => state.popup.isInfoPopupOpened;
