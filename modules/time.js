import { DateTime } from './luxon.js';
import { date } from './variables.js';

export default function curretDate() {
  date.innerHTML = DateTime.local().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}