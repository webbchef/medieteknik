/**
 * För Studentliv visar vi upp slumpmässiga inlägg från Studentlivkontot på Instagram.
 * För att hämta dessa inlägg använder vi en token från Instagrams API, men den går ut
 * automatiskt efter 60 dagar, om den inte refreshas. Denna fil sätter upp ett så kallat "cron job"
 * som Vercel kör automatiskt 1 gång i månaden (som angivet i vercel.json) och refreshar.
 */

import type { NextApiRequest, NextApiResponse } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN ?? "";
  await fetch(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`);
}