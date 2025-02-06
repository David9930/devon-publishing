import { emailMember } from 'wix-crm-backend';

export function sendTriggeredEmail(memberId) {
  return emailMember('NancyautoEmail', memberId);
}
