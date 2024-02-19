import { getWeek, shortISODate } from "../lib/date-wrangler";

export const weekPickerReducer = (
  state: { targetDate: Date; startDate: Date; endDate: Date },
  action: { payload: Date; type: string }
) => {
  switch (action.type) {
    case "next":
      return getWeek(state.targetDate, 7);
    case "prev":
      return getWeek(state.targetDate, -7);
    case "go":
      return getWeek(action.payload);
    case "today":
      return getWeek(new Date());
    default:
      return state;
      break;
  }
};
