import axios from 'axios'

export default async function fetchSocials() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
  return data.socials
}