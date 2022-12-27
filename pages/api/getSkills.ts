import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Skill } from "../../types/typings";

const query = groq`
*[_type == "skill"]
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const skills: Skill[] = await sanityClient.fetch(query);
    res.status(200).json({ skills });
  } catch (error) {
    console.warn(error);
  }
}
