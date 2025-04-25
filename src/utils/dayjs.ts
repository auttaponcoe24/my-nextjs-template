// utils/dayjs.ts
import 'dayjs/locale/th'; // นำเข้า locale ภาษาไทย

import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra'; // ใช้ปี พ.ศ.
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(buddhistEra);
dayjs.locale('th'); // ตั้งค่าเป็นภาษาไทย

export default dayjs;
