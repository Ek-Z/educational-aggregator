export const selectCourseList = (state) => state.courseList.courseList;
export const selectCourseListLength = (state) => state.courseList.courseList.length;
export const selectSortedCourseList = (state) => state.courseList.courseList.filter((course, index) => index < 5);
export const selectFilteredList = (state) => state.courseList.filteredList;
export const selectIsFiltered = (state) => state.courseList.isFiltered;
export const selectFilters = (state) => state.courseList.filters;