/**
 * The one place the phone number lives. Change this line and the whole site follows,
 * including schema, tel: links, form messages, and every page.
 */
// TODO: placeholder. Replace with the real tracking number before launch.
export const PHONE = '(605) 000-0000';

const digits = PHONE.replace(/\D/g, '');

export const PHONE_E164 = `+1${digits}`;
export const PHONE_HREF = `tel:${PHONE_E164}`;
export const PHONE_SMS_HREF = `sms:${PHONE_E164}`;
